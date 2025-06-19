import type { BlogPost } from "@/types/blog"

// Import all blog posts with correct export names
import { tipsForSmartWorkflows } from "@/data/blog/3-tips-for-smart-workflows"
import { audioVisualEquipmentWholesaler } from "@/data/blog/audio-visual-equipment-wholesaler"
import { createProLevelHubSpotLeadScoreModel } from "@/data/blog/create-pro-level-hubspot-lead-score-model"
import { crmCleanupPlan } from "@/data/blog/crm-cleanup-plan"
import { customerAcquisitionCost } from "@/data/blog/customer-acquisition-cost"
import { customerChurnBlindspot } from "@/data/blog/customer-churn-blindspot"
import { customerSegmentationMistakeICP } from "@/data/blog/customer-segmentation-mistake-icp"
import { customerSegmentationMistake } from "@/data/blog/customer-segmentation-mistake"
import { dataEnrichmentStrategy } from "@/data/blog/data-enrichment-strategy"
import { dataTruthGap } from "@/data/blog/data-truth-gap"
import { demystifyingUtmParameters } from "@/data/blog/demystifying-utm-parameters"
import { forgottenArtCampaignDocumentation } from "@/data/blog/forgotten-art-campaign-documentation"
import { hiddenRevenueLeak } from "@/data/blog/hidden-revenue-leak"
import { hiringAndWorkingWithAHubspotConsultant } from "@/data/blog/hiring-and-working-with-a-hubspot-consultant"
import { howToHireAHubspotConsultant } from "@/data/blog/how-to-hire-a-hubspot-consultant"
import { hubspotBlogBestPractices } from "@/data/blog/hubspot-blog-best-practices"
import { leadScoringPitfalls } from "@/data/blog/lead-scoring-pitfalls"
import { leadTiersCaseStudy } from "@/data/blog/lead-tiers-case-study"
import { marketingAttributionModelsBroken } from "@/data/blog/marketing-attribution-models-broken"
import { marketingDashboardsFail } from "@/data/blog/marketing-dashboards-fail"
import { marketingDataManagement } from "@/data/blog/marketing-data-management"
import { marketingLeadersDataQualityCrisis } from "@/data/blog/marketing-leaders-data-quality-crisis"
import { marketingOperationsIsntIt } from "@/data/blog/marketing-operations-isnt-it"
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
import { whatDoesAHubspotConsultantCost } from "@/data/blog/what-does-a-hubspot-consultant-cost"
import { whatHubspotDoesForMarketing } from "@/data/blog/what-hubspot-does-for-marketing"
import { why64PercentPePortfolioCompaniesFailHubspotImplementation } from "@/data/blog/why-64-percent-pe-portfolio-companies-fail-hubspot-implementation"

// Collect all blog posts
const blogPosts: BlogPost[] = [
  tipsForSmartWorkflows,
  audioVisualEquipmentWholesaler,
  createProLevelHubSpotLeadScoreModel,
  crmCleanupPlan,
  customerAcquisitionCost,
  customerChurnBlindspot,
  customerSegmentationMistakeICP,
  customerSegmentationMistake,
  dataEnrichmentStrategy,
  dataTruthGap,
  demystifyingUtmParameters,
  forgottenArtCampaignDocumentation,
  hiddenRevenueLeak,
  hiringAndWorkingWithAHubspotConsultant,
  howToHireAHubspotConsultant,
  hubspotBlogBestPractices,
  leadScoringPitfalls,
  leadTiersCaseStudy,
  marketingAttributionModelsBroken,
  marketingDashboardsFail,
  marketingDataManagement,
  marketingLeadersDataQualityCrisis,
  marketingOperationsIsntIt,
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
  whatDoesAHubspotConsultantCost,
  whatHubspotDoesForMarketing,
  why64PercentPePortfolioCompaniesFailHubspotImplementation,
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, limit)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
