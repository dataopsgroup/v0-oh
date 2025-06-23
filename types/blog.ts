// In your ./data/blog/3-tips-for-smart-workflows.ts file:

export const tipsForSmartWorkflows: BlogPost = {
  id: "3-tips-for-smart-workflows",  // Add this
  date: "2024-06-22",                // Add this (use appropriate date)
  author: "Your Name",               // Add this
  category: "Business",              // Add this (or appropriate category)
  coverImage: "",                    // Add this (empty string since no image)
  ...meta,  // Your existing meta object
  content,  // Your existing content
  tags: ["marketing", "automation", "workflows", "operations", "strategy"],
  // ... any other existing properties like featured: true/false
}
