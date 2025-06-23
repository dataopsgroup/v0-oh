/**
 * Code Organization Utilities
 * Helps maintain consistent code structure
 */

// File naming conventions
export const NAMING_CONVENTIONS = {
  components: "PascalCase",
  pages: "kebab-case",
  utilities: "camelCase",
  constants: "UPPER_SNAKE_CASE",
  types: "PascalCase",
} as const

// Import organization rules
export const IMPORT_ORDER = [
  "react",
  "next",
  "third-party",
  "internal-components",
  "internal-utils",
  "types",
  "styles",
] as const

// Component structure template
export const COMPONENT_TEMPLATE = `
import type { ComponentProps } from 'react'

interface Props extends ComponentProps<'div'> {
  // Component-specific props
}

export default function ComponentName({ ...props }: Props) {
  return (
    <div {...props}>
      {/* Component content */}
    </div>
  )
}
`

// Utility for checking unused imports
export function findUnusedImports(fileContent: string): string[] {
  const importRegex = /import\s+(?:{[^}]+}|\w+)\s+from\s+['"][^'"]+['"]/g
  const imports = fileContent.match(importRegex) || []

  const unusedImports: string[] = []

  imports.forEach((importStatement) => {
    const importedItems = extractImportedItems(importStatement)
    importedItems.forEach((item) => {
      if (!isUsedInFile(item, fileContent)) {
        unusedImports.push(item)
      }
    })
  })

  return unusedImports
}

function extractImportedItems(importStatement: string): string[] {
  // Extract imported items from import statement
  const match = importStatement.match(/import\s+(?:{([^}]+)}|(\w+))/)
  if (!match) return []

  if (match[1]) {
    // Named imports
    return match[1].split(",").map((item) => item.trim())
  } else if (match[2]) {
    // Default import
    return [match[2]]
  }

  return []
}

function isUsedInFile(item: string, content: string): boolean {
  // Simple check - could be more sophisticated
  const regex = new RegExp(`\\b${item}\\b`, "g")
  const matches = content.match(regex) || []
  return matches.length > 1 // More than just the import
}
