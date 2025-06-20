import type { BlogPost } from "@/types/blog"

// Import only the blog posts that we know work - let's start with the core working ones
import { tipsForSmartWorkflows } from "@/data/blog/3-tips-for-smart-workflows"
import { createProLevelHubSpotLeadScoreModel } from "@/data/blog/create-pro-level-hubspot-lead-score-model"
import { customerSegmentationMistakeICP } from "@/data/blog/customer-segmentation-mistake-icp"
import { hiddenRevenueLeak } from "@/data/blog/hidden-revenue-leak"
import { marketingAttributionModelsBroken } from "@/data/blog/marketing-attribution-models-broken"
import { leadScoringPitfalls } from "@/data/blog/lead-scoring-pitfalls"
import { salesPipelineMetrics } from "@/data/blog/sales-pipeline-metrics"
import { trueCostOfBadData } from "@/data/blog/true-cost-of-bad-data"
import { marketingDashboardsFail } from "@/data/blog/marketing-dashboards-fail"
import { customerChurnBlindspot } from "@/data/blog/customer-churn-blindspot"
import { dataEnrichmentStrategy } from "@/data/blog/data-enrichment-strategy"
import { crmCleanupPlan } from "@/data/blog/crm-cleanup-plan"
import { salesFollowUpMyth } from "@/data/blog/sales-follow-up-myth"
import { marketingDataManagement } from "@/data/blog/marketing-data-management"
import { psychologyDataGovernance } from "@/data/blog/psychology-data-governance"
import { navigatingFirst90DaysRevops } from "@/data/blog/navigating-first-90-days-revops"
import { silentSalesMarketingDivide } from "@/data/blog/silent-sales-marketing-divide"
import { salesIgnoringMarketingLeads } from "@/data/blog/sales-ignoring-marketing-leads"
import { stopBuyingContactLists } from "@/data/blog/stop-buying-contact-lists"
import { customerAcquisitionCost } from "@/data/blog/customer-acquisition-cost"
import { demystifyingUtmParameters } from "@/data/blog/demystifying-utm-parameters"
import { forgottenArtCampaignDocumentation } from "@/data/blog/forgotten-art-campaign-documentation"
import { hubspotBlogBestPractices } from "@/data/blog/hubspot-blog-best-practices"
import { salesTeamStallingDeals } from "@/data/blog/sales-team-stalling-deals"
import { marketingLeadersDataQualityCrisis } from "@/data/blog/marketing-leaders-data-quality-crisis"
import { customerSegmentationMistake } from "@/data/blog/customer-segmentation-mistake"
import { dataTruthGap } from "@/data/blog/data-truth-gap"

// Case Studies
import { audioVisualEquipmentWholesaler } from "@/data/blog/audio-visual-equipment-wholesaler"
import { multiNationalSpecialtyInsurance } from "@/data/blog/multi-national-specialty-insurance"
import { saasHealthcareAchievesRemarkableInsights } from "@/data/blog/saas-healthcare-achieves-remarkable-insights"
import { upscaleHomeImprovementGoodsManufacturer } from "@/data/blog/upscale-home-improvement-goods-manufacturer"
import { leadTiersCaseStudy } from "@/data/blog/lead-tiers-case-study"

// Additional working posts
import { marketingOperationsIsntIT } from "@/data/blog/marketing-operations-isnt-it"
import { hiringAndWorkingWithAHubSpotConsultant } from "@/data/blog/hiring-and-working-with-a-hubspot-consultant"
import { howToHireAHubSpotConsultant } from "@/data/blog/how-to-hire-a-hubspot-consultant"
import { whatDoesAHubSpotConsultantCost } from "@/data/blog/what-does-a-hubspot-consultant-cost"
import { whatHubSpotDoesForMarketing } from "@/data/blog/what-hubspot-does-for-marketing"
import { whyTwoThirdsPEPortfolioCompaniesFailHubSpotImplementation } from "@/data/blog/why-64-percent-pe-portfolio-companies-fail-hubspot-implementation"

// Collect all working blog posts
const blogPosts: BlogPost[] = [
  tipsForSmartWorkflows,
  createProLevelHubSpotLeadScoreModel,
  customerSegmentationMistakeICP,
  hiddenRevenueLeak,
  marketingAttributionModelsBroken,
  leadScoringPitfalls,
  salesPipelineMetrics,
  trueCostOfBadData,
  marketingDashboardsFail,
  customerChurnBlindspot,
  dataEnrichmentStrategy,
  crmCleanupPlan,
  salesFollowUpMyth,
  marketingDataManagement,
  psychologyDataGovernance,
  navigatingFirst90DaysRevops,
  silentSalesMarketingDivide,
  salesIgnoringMarketingLeads,
  stopBuyingContactLists,
  customerAcquisitionCost,
  demystifyingUtmParameters,
  forgottenArtCampaignDocumentation,
  hubspotBlogBestPractices,
  salesTeamStallingDeals,
  marketingLeadersDataQualityCrisis,
  customerSegmentationMistake,
  dataTruthGap,
  // Case Studies
  audioVisualEquipmentWholesaler,
  multiNationalSpecialtyInsurance,
  saasHealthcareAchievesRemarkableInsights,
  upscaleHomeImprovementGoodsManufacturer,
  leadTiersCaseStudy,
  // Additional posts
  marketingOperationsIsntIT,
  hiringAndWorkingWithAHubSpotConsultant,
  howToHireAHubSpotConsultant,
  whatDoesAHubSpotConsultantCost,
  whatHubSpotDoesForMarketing,
  whyTwoThirdsPEPortfolioCompaniesFailHubSpotImplementation,
]

export function getAllPosts(): BlogPost[] {
  // Sort by date - newest first
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  const related: BlogPost[] = []
  const seenIds = new Set<string>([currentPost.id])

  // 1. Try to find posts by matching category or tags
  const categoryAndTagMatches = blogPosts.filter(
    (post) =>
      post.id !== currentPost.id &&
      (post.category === currentPost.category ||
        (post.tags && currentPost.tags && post.tags.some((tag) => currentPost.tags.includes(tag)))),
  )

  for (const post of categoryAndTagMatches) {
    if (related.length < limit && !seenIds.has(post.id)) {
      related.push(post)
      seenIds.add(post.id)
    }
  }

  // 2. If not enough, fill with the most recent posts
  if (related.length < limit) {
    const allOtherPosts = getAllPosts().filter((post) => !seenIds.has(post.id))
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
