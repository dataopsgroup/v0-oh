#!/usr/bin/env node

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

// Helper to get project root by going up one level from the /scripts directory
const __filename = fileURLToPath(import.meta.url)
const projectRoot = path.resolve(path.dirname(__filename), "..")

// Helper to check if a directory exists
async function directoryExists(dirPath) {
  try {
    await fs.access(dirPath)
    return true
  } catch {
    return false
  }
}

async function analyzeBundles() {
  console.log("📊 Analyzing bundle sizes...")
  console.log(`Project root determined as: ${projectRoot}`)

  // Define paths for Next.js build output
  const chunksDir = path.join(projectRoot, ".next", "static", "chunks")
  const cssDir = path.join(projectRoot, ".next", "static", "css")
  const reportsDir = path.join(projectRoot, "reports")

  const bundleAnalysis = {
    javascript: [],
    css: [],
    totalJsSizeKB: 0,
    totalCssSizeKB: 0,
    totalSizeKB: 0,
    recommendations: [],
  }

  // Analyze JavaScript chunks
  if (await directoryExists(chunksDir)) {
    try {
      const files = await fs.readdir(chunksDir)
      const jsFiles = files.filter((file) => file.endsWith(".js"))

      for (const file of jsFiles) {
        const filePath = path.join(chunksDir, file)
        const stats = await fs.stat(filePath)
        const sizeKB = Math.round(stats.size / 1024)
        bundleAnalysis.javascript.push({ name: file, sizeKB })
        bundleAnalysis.totalJsSizeKB += sizeKB
        if (sizeKB > 150) {
          // Threshold for large JS files
          bundleAnalysis.recommendations.push(
            `Consider optimizing or code-splitting for JS bundle: ${file} (${sizeKB}KB)`,
          )
        }
      }
    } catch (error) {
      console.error(`❌ Error reading JS chunks directory at ${chunksDir}:`, error)
    }
  } else {
    console.warn(`⚠️ JS chunks directory not found at ${chunksDir}. Skipping JS analysis.`)
  }

  // Analyze CSS files
  if (await directoryExists(cssDir)) {
    try {
      const files = await fs.readdir(cssDir)
      const cssFiles = files.filter((file) => file.endsWith(".css"))

      for (const file of cssFiles) {
        const filePath = path.join(cssDir, file)
        const stats = await fs.stat(filePath)
        const sizeKB = Math.round(stats.size / 1024)
        bundleAnalysis.css.push({ name: file, sizeKB })
        bundleAnalysis.totalCssSizeKB += sizeKB
        if (sizeKB > 50) {
          // Threshold for large CSS files
          bundleAnalysis.recommendations.push(`Consider optimizing CSS file: ${file} (${sizeKB}KB)`)
        }
      }
    } catch (error) {
      console.error(`❌ Error reading CSS directory at ${cssDir}:`, error)
    }
  } else {
    console.warn(`⚠️ CSS directory not found at ${cssDir}. Skipping CSS analysis.`)
  }

  // Final calculations and report generation
  if (bundleAnalysis.javascript.length === 0 && bundleAnalysis.css.length === 0) {
    console.warn(
      "👉 No build artifacts found to analyze. Please ensure your project is built (e.g., 'npm run build') before running this script.",
    )
    return
  }

  bundleAnalysis.totalSizeKB = bundleAnalysis.totalJsSizeKB + bundleAnalysis.totalCssSizeKB
  bundleAnalysis.javascript.sort((a, b) => b.sizeKB - a.sizeKB)
  bundleAnalysis.css.sort((a, b) => b.sizeKB - a.sizeKB)

  try {
    await fs.mkdir(reportsDir, { recursive: true })
    const reportFilePath = path.join(reportsDir, "bundle-analysis.json")
    await fs.writeFile(reportFilePath, JSON.stringify(bundleAnalysis, null, 2))

    console.log("\n📊 Bundle Analysis Complete:")
    console.log(`   Total JS Size: ${bundleAnalysis.totalJsSizeKB} KB`)
    console.log(`   Total CSS Size: ${bundleAnalysis.totalCssSizeKB} KB`)
    console.log(`   --------------------`)
    console.log(`   Total Bundle Size: ${bundleAnalysis.totalSizeKB} KB`)
    console.log(`\n✅ Report saved to ${reportFilePath}`)
    if (bundleAnalysis.recommendations.length > 0) {
      console.log("\n💡 Recommendations:")
      bundleAnalysis.recommendations.forEach((rec) => console.log(`   - ${rec}`))
    }
  } catch (error) {
    console.error("❌ Failed to write bundle analysis report:", error)
  }
}

analyzeBundles()
