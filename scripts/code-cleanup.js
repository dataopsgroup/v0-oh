#!/usr/bin/env node

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
// Assuming the scripts directory is directly under the project root
const projectRoot = path.resolve(path.dirname(__filename), "..")

async function directoryExists(dirPath) {
  try {
    await fs.access(dirPath)
    return true
  } catch {
    return false
  }
}

async function getTypeScriptFiles(dir) {
  const files = []
  async function traverse(currentDir) {
    try {
      const entries = await fs.readdir(currentDir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name)
        if (entry.isDirectory()) {
          // Avoid node_modules, .next, .git, etc.
          if (entry.name === "node_modules" || entry.name.startsWith(".")) {
            continue
          }
          await traverse(fullPath)
        } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
          files.push(fullPath)
        }
      }
    } catch (error) {
      console.warn(`⚠️ Could not read directory ${currentDir}: ${error.message}. Skipping.`)
    }
  }
  await traverse(dir)
  return files
}

async function removeUnusedImports(directoriesToScan) {
  let filesProcessed = 0
  const issuesFixed = 0 // Placeholder for actual fixes

  for (const dir of directoriesToScan) {
    const absoluteDir = path.join(projectRoot, dir)
    if (!(await directoryExists(absoluteDir))) {
      console.warn(`⚠️ Directory ${absoluteDir} for 'Remove unused imports' not found. Skipping.`)
      continue
    }
    console.log(`Scanning ${absoluteDir} for unused imports (simulated)...`)
    const files = await getTypeScriptFiles(absoluteDir)
    for (const file of files) {
      // Placeholder: Actual unused import removal is complex and requires AST parsing.
      // This script currently only simulates processing.
      // A real implementation would use ESLint or a similar tool.
      // console.log(`Simulating unused import check for: ${file}`);
      filesProcessed++
    }
  }
  console.log(`Remove unused imports (simulated): Processed ${filesProcessed} files from existing directories.`)
  return { filesProcessed, issuesFixed }
}

async function cleanupCode() {
  console.log("🧹 Starting code cleanup...")
  console.log(`Project root determined as: ${projectRoot}`)

  // Define source directories relative to projectRoot
  const directoriesToScan = ["app", "components", "lib", "hooks", "data", "utils", "types"]
  const reportsDir = path.join(projectRoot, "reports")

  const tasks = [
    {
      name: "Remove unused imports (Simulated)",
      fn: removeUnusedImports,
      dirs: directoriesToScan, // Pass relative paths
    },
  ]

  const results = { filesProcessed: 0, issuesFixed: 0, errors: [] }

  for (const task of tasks) {
    try {
      console.log(`🔧 Running task: ${task.name}...`)
      const taskResult = await task.fn(task.dirs)
      results.filesProcessed += taskResult.filesProcessed || 0
      results.issuesFixed += taskResult.issuesFixed || 0
    } catch (error) {
      console.error(`❌ Task '${task.name}' failed:`, error.message)
      results.errors.push({ task: task.name, error: error.message })
    }
  }

  try {
    await fs.mkdir(reportsDir, { recursive: true })
    const reportFilePath = path.join(reportsDir, "code-cleanup-report.json")
    const report = {
      ...results,
      timestamp: new Date().toISOString(),
      summary: `Processed ${results.filesProcessed} files, simulated fixing ${results.issuesFixed} issues.`,
    }
    await fs.writeFile(reportFilePath, JSON.stringify(report, null, 2))
    console.log(`📊 Report saved to ${reportFilePath}`)
  } catch (error) {
    console.error(`❌ Failed to create or write report: ${error.message}`)
  }

  console.log("✅ Code cleanup completed!")
  if (results.errors.length > 0) {
    console.log(`⚠️  ${results.errors.length} errors occurred during tasks - check logs.`)
  }
}

cleanupCode()
