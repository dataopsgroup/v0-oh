import type { BlogPost } from "@/types/blog"

// Import all blog post data
import { blogPost as hubspotBlogBestPractices } from "@/data/blog/hubspot-blog-best-practices"
import { blogPost as leadScoringPitfalls } from "@/data/blog/lead-scoring-pitfalls"
import { blogPost as marketingAttributionModels } from "@/data/blog/marketing-attribution-models-broken"
import { blogPost as dataQualityCrisis } from "@/data/blog/marketing-leaders-data-quality-crisis"
import { blogPost as customerChurnBlindspot } from "@/data/blog/customer-churn-blindspot"
import { blogPost as salesPipelineMetrics } from "@/data/blog/sales-pipeline-metrics"
import { blogPost as trueCostBadData } from "@/data/blog/true-cost-of-bad-data"
import { blogPost as marketingDashboardsFail } from "@/data/blog/marketing-dashboards-fail"
import { blogPost as dataEnrichmentStrategy } from "@/data/blog/data-enrichment-strategy"
import { blogPost as customerSegmentationMistake } from "@/data/blog/customer-segmentation-mistake"
import { blogPost as hiddenRevenueLeak } from "@/data/blog/hidden-revenue-leak"
import { blogPost as salesFollowUpMyth } from "@/data/blog/sales-follow-up-myth"
import { blogPost as marketingOperationsIsntIt } from "@/data/blog/marketing-operations-isnt-it"
import { blogPost as psychologyDataGovernance } from "@/data/blog/psychology-data-governance"
import { blogPost as silentSalesMarketingDivide } from "@/data/blog/silent-sales-marketing-divide"
import { blogPost as salesIgnoringMarketingLeads } from "@/data/blog/sales-ignoring-marketing-leads"
import { blogPost as salesTeamStallingDeals } from "@/data/blog/sales-team-stalling-deals"
import { blogPost as customerAcquisitionCost } from "@/data/blog/customer-acquisition-cost"
import { blogPost as crmCleanupPlan } from "@/data/blog/crm-cleanup-plan"
import { blogPost as demystifyingUtmParameters } from "@/data/blog/demystifying-utm-parameters"
import { blogPost as forgottenArtCampaignDocumentation } from "@/data/blog/forgotten-art-campaign-documentation"
import { blogPost as marketingDataManagement } from "@/data/blog/marketing-data-management"
import { blogPost as navigatingFirst90DaysRevops } from "@/data/blog/navigating-first-90-days-revops"
import { blogPost as stopBuyingContactLists } from "@/data/blog/stop-buying-contact-lists"
import { blogPost as threeTipsSmartWorkflows } from "@/data/blog/3-tips-for-smart-workflows"
import { blogPost as dataTruthGap } from "@/data/blog/data-truth-gap"
import { blogPost as customerSegmentationMistakeIcp } from "@/data/blog/customer-segmentation-mistake-icp"
import { blogPost as createProLevelHubspotLeadScore } from "@/data/blog/create-pro-level-hubspot-lead-score-model"
import { blogPost as leadTiersCaseStudy } from "@/data/blog/lead-tiers-case-study"
import { blogPost as hiringWorkingHubspotConsultant } from "@/data/blog/hiring-and-working-with-a-hubspot-consultant"
import { blogPost as howToHireHubspotConsultant } from "@/data/blog/how-to-hire-a-hubspot-consultant"
import { blogPost as whatDoesHubspotConsultantCost } from "@/data/blog/what-does-a-hubspot-consultant-cost"
import { blogPost as whatHubspotDoesForMarketing } from "@/data/blog/what-hubspot-does-for-marketing"
import { blogPost as why64PercentPePortfolioCompanies } from "@/data/blog/why-64-percent-pe-portfolio-companies-fail-hubspot-implementation"
import { blogPost as audioVisualEquipmentWholesaler } from "@/data/blog/audio-visual-equipment-wholesaler"
import { blogPost as multiNationalSpecialtyInsurance } from "@/data/blog/multi-national-specialty-insurance"
import { blogPost as saasHealthcareAchievesRemarkableInsights } from "@/data/blog/saas-healthcare-achieves-remarkable-insights"
import { blogPost as upscaleHomeImprovementGoodsManufacturer } from "@/data/blog/upscale-home-improvement-goods-manufacturer"

export const blogPosts: BlogPost[] = [
  hubspotBlogBestPractices,
  leadScoringPitfalls,
  marketingAttributionModels,
  dataQualityCrisis,
  customerChurnBlindspot,
  salesPipelineMetrics,
  trueCostBadData,
  marketingDashboardsFail,
  dataEnrichmentStrategy,
  customerSegmentationMistake,
  hiddenRevenueLeak,
  salesFollowUpMyth,
  marketingOperationsIsntIt,
  psychologyDataGovernance,
  silentSalesMarketingDivide,
  salesIgnoringMarketingLeads,
  salesTeamStallingDeals,
  customerAcquisitionCost,
  crmCleanupPlan,
  demystifyingUtmParameters,
  forgottenArtCampaignDocumentation,
  marketingDataManagement,
  navigatingFirst90DaysRevops,
  stopBuyingContactLists,
  threeTipsSmartWorkflows,
  dataTruthGap,
  customerSegmentationMistakeIcp,
  createProLevelHubspotLeadScore,
  leadTiersCaseStudy,
  hiringWorkingHubspotConsultant,
  howToHireHubspotConsultant,
  whatDoesHubspotConsultantCost,
  whatHubspotDoesForMarketing,
  why64PercentPePortfolioCompanies,
  audioVisualEquipmentWholesaler,
  multiNationalSpecialtyInsurance,
  saasHealthcareAchievesRemarkableInsights,
  upscaleHomeImprovementGoodsManufacturer,
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return blogPosts.slice(0, limit)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}
