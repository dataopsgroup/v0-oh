import type { BlogPost } from "@/types/blog"

// Import all blog posts from the data directory
import { tipsForSmartWorkflows } from "@/data/blog/3-tips-for-smart-workflows"
import { audioVisualEquipmentWholesaler } from "@/data/blog/audio-visual-equipment-wholesaler"
import { createProLevelHubSpotLeadScoreModel } from "@/data/blog/create-pro-level-hubspot-lead-score-model"
import { crmCleanupPlan } from "@/data/blog/crm-cleanup-plan"
import { customerAcquisitionCost } from "@/data/blog/customer-acquisition-cost"
import { customerChurnBlindspot } from "@/data/blog/customer-churn-blindspot"
import { customerSegmentationMistake } from "@/data/blog/customer-segmentation-mistake"
import { customerSegmentationMistakeICP } from "@/data/blog/customer-segmentation-mistake-icp"
import { dataEnrichmentStrategy } from "@/data/blog/data-enrichment-strategy"
import { dataTruthGap } from "@/data/blog/data-truth-gap"
import { demystifyingUtmParameters } from "@/data/blog/demystifying-utm-parameters"
import { forgottenArtCampaignDocumentation } from "@/data/blog/forgotten-art-campaign-documentation"
import { hiddenRevenueLeak } from "@/data/blog/hidden-revenue-leak"
import { hiringAndWorkingWithAHubSpotConsultant } from "@/data/blog/hiring-and-working-with-a-hubspot-consultant"
import { howToHireAHubSpotConsultant } from "@/data/blog/how-to-hire-a-hubspot-consultant"
import { hubspotBlogBestPractices } from "@/data/blog/hubspot-blog-best-practices"
import { leadScoringPitfalls } from "@/data/blog/lead-scoring-pitfalls"
import { leadTiersCaseStudy } from "@/data/blog/lead-tiers-case-study"
import { marketingAttributionModelsBroken } from "@/data/blog/marketing-attribution-models-broken"
import { marketingDashboardsFail } from "@/data/blog/marketing-dashboards-fail"
import { marketingDataManagement } from "@/data/blog/marketing-data-management"
import { marketingLeadersDataQualityCrisis } from "@/data/blog/marketing-leaders-data-quality-crisis"
import { marketingOperationsIsntIT } from "@/data/blog/marketing-operations-isnt-it"
import { multiNationalSpecialtyInsurance } from "@/data/blog/multi-national-specialty-insurance"
import { navigatingFirst90DaysRevops } from "@/data/blog/navigating-first-90-days-revops"
import { psychologyDataGovernance } from "@/data/blog/psychology-data-governance"
import { saasHealthcareAchievesRemarkableInsights } from "@/data/blog/saas-healthcare-achieves-remarkable-insights"
import { salesFollowUpMyth } from "@/data/blog/sales-follow-up-myth"
import { salesIgnoringMarketingLeads } from "@/data/blog/sales-ignoring-marketing-leads"
import { salesPipelineMetrics } from "@/data/blog/sales-pipeline-metrics"
import { salesTeamStallingDeals } from "@/data/blog/sales-team-stalling-deals"
import { silentSalesMarketingDivide } from "@/data/blog/silent-sales-marketing-divide"
import { stopBuyingContactLists } from "@/data/blog/stop-buying-contact-lists"
import { trueCostOfBadData } from "@/data/blog/true-cost-of-bad-data"
import { upscaleHomeImprovementGoodsManufacturer } from "@/data/blog/upscale-home-improvement-goods-manufacturer"
import { whatDoesAHubSpotConsultantCost } from "@/data/blog/what-does-a-hubspot-consultant-cost"
import { whatHubSpotDoesForMarketing } from "@/data/blog/what-hubspot-does-for-marketing"
import { whyTwoThirdsPEPortfolioCompaniesFailHubSpotImplementation } from "@/data/blog/why-64-percent-pe-portfolio-companies-fail-hubspot-implementation"

// Collect all blog posts with their complete content
const blogPosts: BlogPost[] = [
  tipsForSmartWorkflows,
  audioVisualEquipmentWholesaler,
  createProLevelHubSpotLeadScoreModel,
  crmCleanupPlan,
  customerAcquisitionCost,
  customerChurnBlindspot,
  customerSegmentationMistake,
  customerSegmentationMistakeICP,
  dataEnrichmentStrategy,
  dataTruthGap,
  demystifyingUtmParameters,
  forgottenArtCampaignDocumentation,
  hiddenRevenueLeak,
  hiringAndWorkingWithAHubSpotConsultant,
  howToHireAHubSpotConsultant,
  hubspotBlogBestPractices,
  leadScoringPitfalls,
  leadTiersCaseStudy,
  marketingAttributionModelsBroken,
  marketingDashboardsFail,
  marketingDataManagement,
  marketingLeadersDataQualityCrisis,
  marketingOperationsIsntIT,
  multiNationalSpecialtyInsurance,
  navigatingFirst90DaysRevops,
  psychologyDataGovernance,
  saasHealthcareAchievesRemarkableInsights,
  salesFollowUpMyth,
  salesIgnoringMarketingLeads,
  salesPipelineMetrics,
  salesTeamStallingDeals,
  silentSalesMarketingDivide,
  stopBuyingContactLists,
  trueCostOfBadData,
  upscaleHomeImprovementGoodsManufacturer,
  whatDoesAHubSpotConsultantCost,
  whatHubSpotDoesForMarketing,
  whyTwoThirdsPEPortfolioCompaniesFailHubSpotImplementation,
]

// Add validation for blog post data
export function validateBlogPost(post: BlogPost): boolean {
  const requiredFields = ["id", "title", "excerpt", "content", "date", "author", "category"]

  for (const field of requiredFields) {
    if (!post[field as keyof BlogPost]) {
      console.error(`Blog post missing required field: ${field}`, post)
      return false
    }
  }

  return true
}

// Filter out invalid blog posts
const validBlogPosts = blogPosts.filter(validateBlogPost)

// Sort posts by date (newest first)
// blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

// Export functions
export function getAllPosts(): BlogPost[] {
  return validBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = blogPosts.find((post) => post.id === slug || post.slug === slug)

  if (!post) {
    console.warn(`Blog post not found for slug: ${slug}`)
    return undefined
  }

  return post
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  const related: BlogPost[] = []
  const seenIds = new Set<string>([currentPost.id])

  // Find posts by matching category or tags
  const categoryAndTagMatches = blogPosts.filter(
    (post) =>
      post.id !== currentPost.id &&
      (post.category === currentPost.category ||
        (post.tags && currentPost.tags && post.tags.some((tag) => currentPost.tags!.includes(tag)))),
  )

  for (const post of categoryAndTagMatches) {
    if (related.length < limit && !seenIds.has(post.id)) {
      related.push(post)
      seenIds.add(post.id)
    }
  }

  // Fill remaining slots with recent posts
  if (related.length < limit) {
    const allOtherPosts = blogPosts.filter((post) => !seenIds.has(post.id))
    for (const post of allOtherPosts) {
      if (related.length < limit) {
        related.push(post)
        seenIds.add(post.id)
      } else {
        break
      }
    }
  }

  return related.slice(0, limit)
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return dateString
  }
}

export function calculateReadTime(content: string): number {
  if (!content) return 1

  const wordsPerMinute = 200
  const wordCount = content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

// Export the blogPosts array for direct access
export { blogPosts }
