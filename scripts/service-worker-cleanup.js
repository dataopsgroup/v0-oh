#!/usr/bin/env node

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
// Assuming this script is in project_root/scripts/service-worker-cleanup.js
// We need to go up one level to get to the project root.
const projectRoot = path.resolve(path.dirname(__filename), "..")

async function directoryExists(dirPath) {
  try {
    await fs.access(dirPath)
    return true
  } catch {
    return false
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function cleanupServiceWorker() {
  console.log("🔧 Optimizing service worker configuration...")
  console.log(`Project root determined as: ${projectRoot}`)

  // Common path for Next.js service worker files if using certain PWA strategies
  const swDir = path.join(projectRoot, ".next", "static", "sw")
  // Fallback for older or different PWA plugin structures that might place it in public
  const publicSwDir = path.join(projectRoot, "public", "sw")
  let effectiveSwDir = null

  if (await directoryExists(swDir)) {
    effectiveSwDir = swDir
    console.log(`Found service worker directory at: ${effectiveSwDir}`)
  } else if (await directoryExists(publicSwDir)) {
    effectiveSwDir = publicSwDir
    console.log(`Found service worker directory at: ${effectiveSwDir}`)
  } else {
    console.warn(
      `⚠️ Service worker directory not found at common locations ('${swDir}' or '${publicSwDir}'). This script might require a specific PWA setup. Skipping service worker cleanup.`,
    )
    console.warn("👉 Please ensure your project is built and PWA configured if you expect service worker files.")
    return
  }

  try {
    const files = await fs.readdir(effectiveSwDir)
    const duplicates = files.filter((file) => file.includes(" 2."))

    if (duplicates.length > 0) {
      for (const file of duplicates) {
        const filePath = path.join(effectiveSwDir, file)
        await fs.unlink(filePath)
        console.log(`✅ Removed duplicate SW file: ${filePath}`)
      }
    } else {
      console.log("ℹ️ No duplicate service worker files (containing ' 2.') found to remove.")
    }

    const cacheStrategiesPath = path.join(effectiveSwDir, "cache-strategies.js")
    if (await fileExists(cacheStrategiesPath)) {
      const cacheStrategies = await fs.readFile(cacheStrategiesPath, "utf8")
      const optimizedStrategies = cacheStrategies
        .replace(/\/\*[\s\S]*?\*\//g, "") // Remove block comments
        .replace(/\/\/.*/g, "") // Remove line comments
        .replace(/\n\s*\n/g, "\n") // Remove empty lines
        .trim()
      await fs.writeFile(cacheStrategiesPath, optimizedStrategies)
      console.log(`✅ Optimized ${cacheStrategiesPath}`)
    } else {
      console.warn(`ℹ️ cache-strategies.js not found at ${cacheStrategiesPath}. Skipping optimization.`)
    }

    console.log("✅ Service worker cleanup completed!")
  } catch (error) {
    console.error(
      `❌ Service worker cleanup failed internally (after finding SW directory at ${effectiveSwDir}):`,
      error,
    )
  }
}

cleanupServiceWorker()
