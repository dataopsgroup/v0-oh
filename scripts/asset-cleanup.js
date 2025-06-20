#!/usr/bin/env node

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

// Determine project root relative to the script file
// __filename will be /path/to/your/project/scripts/asset-cleanup.js
// path.dirname(__filename) will be /path/to/your/project/scripts
// path.join(path.dirname(__filename), "..") will be /path/to/your/project
const __filename = fileURLToPath(import.meta.url)
const projectRoot = path.join(path.dirname(__filename), "..") // Go up one level from 'scripts'

async function directoryExists(dirPath) {
  try {
    await fs.access(dirPath)
    return true
  } catch {
    return false
  }
}

async function cleanupAssets() {
  console.log("🧹 Starting asset cleanup...")
  console.log(`Project root determined as: ${projectRoot}`)

  const buildDir = path.join(projectRoot, ".next")
  // Assuming lovable-uploads are source assets in the public directory
  const uploadsDir = path.join(projectRoot, "public", "lovable-uploads")
  const reportsDir = path.join(projectRoot, "reports")

  if (!(await directoryExists(buildDir))) {
    console.warn(
      `⚠️ '.next' directory not found at ${buildDir}. This script requires a built project. Skipping asset cleanup.`,
    )
    console.warn("👉 Please ensure your project is built (e.g., 'next build') before running this script.")
    return
  }

  try {
    // Note: fs.readdir with { recursive: true } might not be universally supported
    // or might behave differently. For Next.js, build artifacts are nested.
    // A more robust approach might involve walking the directory.
    // For simplicity, we'll keep it, but be aware if it misses nested duplicates.
    let buildFiles = []
    try {
      buildFiles = await fs.readdir(buildDir, { recursive: true })
    } catch (readDirError) {
      console.warn(
        `Could not recursively read ${buildDir}. This might affect duplicate detection. Error: ${readDirError.message}`,
      )
      // Fallback or specific handling for Next.js structure if needed
    }

    const duplicateBuildFiles = buildFiles.filter((file) => file.includes(" 2."))
    console.log(
      `Found ${duplicateBuildFiles.length} potential duplicate files in '${buildDir}' to remove (files containing " 2.")`,
    )

    for (const file of duplicateBuildFiles) {
      const filePath = path.join(buildDir, file)
      try {
        // Check if it's actually a file before unlinking
        const stat = await fs.stat(filePath)
        if (stat.isFile()) {
          await fs.unlink(filePath)
          console.log(`✅ Removed: ${filePath}`)
        }
      } catch (error) {
        console.log(`❌ Failed to process/remove: ${filePath} - ${error.message}`)
      }
    }

    let numDuplicateUploadsRemoved = 0
    if (await directoryExists(uploadsDir)) {
      const uploadFiles = await fs.readdir(uploadsDir)
      const duplicateUploadsInDir = uploadFiles.filter((file) => file.includes(" 2."))
      console.log(`Found ${duplicateUploadsInDir.length} duplicate upload files in ${uploadsDir}`)

      for (const file of duplicateUploadsInDir) {
        const filePath = path.join(uploadsDir, file)
        try {
          const stat = await fs.stat(filePath)
          if (stat.isFile()) {
            await fs.unlink(filePath)
            console.log(`✅ Removed duplicate upload: ${filePath}`)
            numDuplicateUploadsRemoved++
          }
        } catch (error) {
          console.log(`❌ Failed to remove upload: ${filePath} - ${error.message}`)
        }
      }
    } else {
      console.warn(
        `⚠️ 'public/lovable-uploads' directory not found at ${uploadsDir}. Skipping cleanup for this subdirectory.`,
      )
    }

    console.log("📊 Generating asset usage report...")
    const assetReport = {
      totalFilesCheckedInBuildDir: buildFiles.length,
      duplicatesRemovedFromBuildDir: duplicateBuildFiles.length, // This is count of *potential* duplicates found, actual removal depends on success
      duplicatesRemovedFromUploads: numDuplicateUploadsRemoved,
      timestamp: new Date().toISOString(),
    }

    await fs.mkdir(reportsDir, { recursive: true })
    const reportFilePath = path.join(reportsDir, "asset-cleanup-report.json")
    await fs.writeFile(reportFilePath, JSON.stringify(assetReport, null, 2))

    console.log("✅ Asset cleanup completed!")
    console.log(`📊 Report saved to ${reportFilePath}`)
  } catch (error) {
    console.error("❌ Asset cleanup failed internally (after '.next' check):", error)
  }
}

cleanupAssets()

