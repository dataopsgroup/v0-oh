"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronRight,
  Check,
  X,
  AlertTriangle,
  Calculator,
  TrendingUp,
  DollarSign,
  Plus,
  Minus,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HubSpotForPrivateEquityPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})
  const [inputs, setInputs] = useState({
    portfolioSize: 5,
    avgRevenue: 50,
    currentEfficiency: 60,
    implementationCost: 180,
  })

  const features = [
    {
      title: "Unified Data Foundation",
      description:
        "Consolidate fragmented portfolio data into a single source of truth. Eliminate Excel chaos and manual reporting across all portfolio companies.",
      benefit: "✓ 73% faster EBITDA reporting",
    },
    {
      title: "PE-Grade Analytics",
      description:
        "Built-in dashboards that automatically track KPIs investors care about. Real-time visibility into revenue, pipeline, and operational metrics.",
      benefit: "✓ Native investor reporting",
    },
    {
      title: "Rapid Standardization",
      description:
        "Deploy identical processes across all portfolio companies in weeks, not months. Template-driven approach ensures consistency.",
      benefit: "✓ 100-day implementation",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade security with SOC 2 compliance. Role-based access controls protect sensitive portfolio data across teams.",
      benefit: "✓ Investment-grade security",
    },
    {
      title: "Scalable Operations",
      description:
        "Platform grows with portfolio expansion. Add new companies without rebuilding systems or retraining teams.",
      benefit: "✓ Unlimited scalability",
    },
    {
      title: "Predictable ROI",
      description:
        "Transparent pricing model with measurable returns. Typical clients see $18-22 return for every dollar invested in the first year.",
      benefit: "✓ $18-22 ROI guarantee",
    },
  ]

  const comparisonData = [
    {
      category: "Implementation Timeline",
      chaotic: "6-18 months per company",
      standardized: "100 days across entire portfolio",
      impact: "73% faster deployment",
    },
    {
      category: "Reporting Consistency",
      chaotic: "Different metrics, formats, frequencies",
      standardized: "Unified KPIs across all companies",
      impact: "Real-time portfolio visibility",
    },
    {
      category: "Training Requirements",
      chaotic: "Custom training for each team",
      standardized: "One training program, all companies",
      impact: "85% reduction in training costs",
    },
    {
      category: "Integration Complexity",
      chaotic: "Unique integrations per company",
      standardized: "Template-based connectors",
      impact: "90% fewer integration issues",
    },
    {
      category: "Data Quality Control",
      chaotic: "Manual audits and corrections",
      standardized: "Automated validation rules",
      impact: "95% cleaner data quality",
    },
    {
      category: "Exit Preparation",
      chaotic: "6+ months of data cleanup",
      standardized: "Exit-ready from day one",
      impact: "19% higher valuations",
    },
  ]

  const checklistSections = [
    {
      id: "scalability",
      title: "Portfolio Scalability Requirements",
      items: [
        { id: "multi-entity", text: "Supports multiple business entities under one license", critical: true },
        { id: "user-scaling", text: "Can add unlimited users across portfolio companies", critical: true },
        { id: "data-isolation", text: "Maintains data separation between portfolio companies", critical: true },
        { id: "template-deployment", text: "Enables template-based deployment to new acquisitions", critical: false },
      ],
    },
    {
      id: "reporting",
      title: "Investor-Grade Reporting",
      items: [
        { id: "consolidated-reporting", text: "Generates consolidated portfolio reports", critical: true },
        { id: "real-time-dashboards", text: "Provides real-time KPI dashboards", critical: true },
        { id: "custom-metrics", text: "Supports custom PE metrics and calculations", critical: false },
        { id: "automated-reporting", text: "Automates monthly/quarterly investor reports", critical: false },
      ],
    },
    {
      id: "integration",
      title: "Systems Integration Capabilities",
      items: [
        {
          id: "accounting-integration",
          text: "Integrates with QuickBooks, NetSuite, and other accounting systems",
          critical: true,
        },
        { id: "api-access", text: "Provides robust API for custom integrations", critical: false },
        { id: "data-warehousing", text: "Connects to business intelligence platforms", critical: false },
        { id: "marketing-automation", text: "Includes marketing automation capabilities", critical: false },
      ],
    },
    {
      id: "security",
      title: "Enterprise Security & Compliance",
      items: [
        { id: "soc2-compliance", text: "SOC 2 Type II certified", critical: true },
        { id: "role-based-access", text: "Granular role-based access controls", critical: true },
        { id: "audit-trail", text: "Complete audit trail for all data changes", critical: true },
        { id: "data-encryption", text: "End-to-end data encryption", critical: true },
      ],
    },
    {
      id: "support",
      title: "Implementation & Support",
      items: [
        { id: "pe-experience", text: "Vendor has proven PE implementation experience", critical: true },
        { id: "dedicated-support", text: "Dedicated customer success manager", critical: false },
        { id: "training-programs", text: "Comprehensive training programs available", critical: false },
        { id: "implementation-timeline", text: "Can complete implementation within 100 days", critical: true },
      ],
    },
  ]

  const platforms = [
    {
      name: "HubSpot",
      pricing: "$45-180/user/month",
      peScore: 95,
      color: "dataops",
    },
    {
      name: "Salesforce",
      pricing: "$150-300/user/month",
      peScore: 75,
      color: "blue",
    },
    {
      name: "MSDynamics",
      pricing: "$95-210/user/month",
      peScore: 65,
      color: "purple",
    },
    {
      name: "Pipedrive",
      pricing: "$15-99/user/month",
      peScore: 45,
      color: "green",
    },
  ]

  const criteria = [
    {
      category: "Multi-Entity Support",
      hubspot: "native",
      salesforce: "partial",
      dynamics: "partial",
      pipedrive: "none",
      weight: "Critical",
    },
    {
      category: "PE Reporting Templates",
      hubspot: "native",
      salesforce: "custom",
      dynamics: "custom",
      pipedrive: "none",
      weight: "Critical",
    },
    {
      category: "Implementation Speed",
      hubspot: "100 days",
      salesforce: "6-12 months",
      dynamics: "9-18 months",
      pipedrive: "30-60 days",
      weight: "High",
    },
    {
      category: "User Adoption Rate",
      hubspot: "85%+",
      salesforce: "60-70%",
      dynamics: "55-65%",
      pipedrive: "75-80%",
      weight: "High",
    },
    {
      category: "Integration Ecosystem",
      hubspot: "1000+ native",
      salesforce: "5000+ apps",
      dynamics: "800+ apps",
      pipedrive: "300+ apps",
      weight: "Medium",
    },
    {
      category: "Total Cost of Ownership",
      hubspot: "$180K/year",
      salesforce: "$450K/year",
      dynamics: "$380K/year",
      pipedrive: "$120K/year",
      weight: "High",
    },
  ]

  const faqs = [
    {
      question: "How long does a HubSpot implementation take for a PE portfolio?",
      answer:
        "Our proven methodology delivers full portfolio standardization within 100 days. This includes initial setup, data migration, team training, and go-live across all portfolio companies. Traditional enterprise CRMs typically take 6-18 months per company.",
    },
    {
      question: "Can HubSpot handle multiple portfolio companies under one license?",
      answer:
        "Yes, HubSpot's architecture natively supports multi-entity management. You can maintain separate data for each portfolio company while having consolidated reporting and standardized processes. This eliminates the need for separate licenses and complex data consolidation.",
    },
    {
      question: "What's the typical ROI timeline for PE HubSpot implementations?",
      answer:
        "Most clients see positive ROI within 4-6 months, with full investment recovery by month 8-10. The combination of operational efficiency gains, improved reporting accuracy, and faster deal velocity typically delivers 18-22x return in year one.",
    },
    {
      question: "How does HubSpot compare to Salesforce for PE operations?",
      answer:
        "While Salesforce is powerful, it requires extensive customization and longer implementation times (6-12 months vs. 100 days). HubSpot provides 95% of required PE functionality out-of-the-box, with native multi-entity support and investor-grade reporting templates.",
    },
    {
      question: "What happens to existing CRM data during the transition?",
      answer:
        "We provide complete data migration services with zero data loss guarantee. Our process includes data cleansing, deduplication, and validation to ensure your historical data is preserved and enhanced in the new system.",
    },
    {
      question: "Do you provide training for portfolio company teams?",
      answer:
        "Yes, we include comprehensive training as part of our implementation. This covers executives, operations teams, and end users across all portfolio companies. We also provide ongoing support and additional training as your portfolio grows.",
    },
    {
      question: "How do you ensure consistent reporting across portfolio companies?",
      answer:
        "We deploy standardized templates, KPI definitions, and reporting across all of your portfolio companies. These are then customized according to your needs and complemented by specific reports you require. This ensures investors receive consistent, comparable data regardless of which portfolio company generates the report.",
    },
    {
      question: "What if we acquire new companies after implementation?",
      answer:
        "Our template-based approach allows rapid onboarding of new acquisitions. New companies can be fully integrated into your standardized HubSpot environment within 45-60 days, depending on complexity, maintaining consistency across your growing portfolio.",
    },
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const toggleItem = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  const getTotalItems = () => {
    return checklistSections.reduce((total, section) => total + section.items.length, 0)
  }

  const getCheckedItems = () => {
    return Object.values(checkedItems).filter(Boolean).length
  }

  const getCriticalItemsChecked = () => {
    let total = 0
    let checked = 0
    checklistSections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.critical) {
          total++
          if (checkedItems[item.id]) checked++
        }
      })
    })
    return { checked, total }
  }

  const progress = (getCheckedItems() / getTotalItems()) * 100
  const criticalProgress = getCriticalItemsChecked()

  const getStatusIcon = (value: string, category: string) => {
    if (category === "Multi-Entity Support" || category === "PE Reporting Templates") {
      if (value === "native") return <Check className="h-5 w-5 text-green-600" />
      if (value === "partial" || value === "custom") return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      if (value === "none") return <X className="h-5 w-5 text-red-600" />
    }
    return null
  }

  const calculateROI = () => {
    const baseRevenue = inputs.portfolioSize * inputs.avgRevenue * 1000000
    const efficiencyGain = (85 - inputs.currentEfficiency) / 100
    const additionalRevenue = baseRevenue * efficiencyGain * 0.15 // 15% revenue impact from efficiency
    const implementationCost = inputs.implementationCost * 1000 * inputs.portfolioSize
    const yearOneROI = (additionalRevenue - implementationCost) / implementationCost

    return {
      additionalRevenue,
      implementationCost,
      yearOneROI,
      monthlyGain: additionalRevenue / 12,
      breakEvenMonths: Math.ceil(implementationCost / (additionalRevenue / 12)),
    }
  }

  const results = calculateROI()

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    return `$${Math.round(amount).toLocaleString()}`
  }

  const formatPercent = (decimal: number) => {
    return `${Math.round(decimal * 100)}%`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center py-2">
                <img
                  src="/images/dataops-logo-horizontal.jpg"
                  alt="DataOps Group - Home"
                  className="w-[200px] h-[68px] object-contain"
                />
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/services"
                  className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center"
                >
                  Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                </Link>
                <Link href="/about" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/approach" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  Approach
                </Link>
                <div className="relative group">
                  <button className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                    Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/insights/hubspot-for-private-equity"
                        className="block px-4 py-2 text-sm body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        HubSpot for Private Equity
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                className="body-copy text-white hover:bg-blue-400 rounded-none"
                style={{ backgroundColor: "#8CC7E3" }}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                className="body-copy text-gray-900 hover:bg-yellow-500 rounded-none"
                style={{ backgroundColor: "#FBB03B" }}
              >
                <Link href="/book">📖 Copy Our Playbook</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                  Private Equity Guide
                </div>
                <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                  HubSpot for Private Equity: Beyond Spreadsheets to Strategic Advantage
                </h1>
                <p className="body-copy text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                  Transform portfolio operations into competitive advantages with standardized HubSpot implementations.
                  Get the complete guide to CRM selection, implementation, and ROI optimization for private equity
                  firms.
                </p>

                {/* Key Benefits - Updated to match home page style */}
                <div className="grid md:grid-cols-3 gap-px bg-gray-200 my-8">
                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
                    <h3 className="headline text-lg text-gray-900 font-semibold mb-2">19% Higher Valuations</h3>
                    <p className="body-copy text-sm text-gray-600">Data-driven operations</p>
                  </div>

                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
                    <h3 className="headline text-lg text-gray-900 font-semibold mb-2">100-Day Implementation</h3>
                    <p className="body-copy text-sm text-gray-600">Proven methodology</p>
                  </div>

                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center">
                    <h3 className="headline text-lg text-gray-900 font-semibold mb-2">$18-22 ROI</h3>
                    <p className="body-copy text-sm text-gray-600">Per dollar invested</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-none flex items-center justify-center">
                    <Link href="/#operations-assessment" className="flex items-center">
                      Assess Your PE Readiness
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="body-copy border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-base flex items-center justify-center rounded-none"
                  >
                    Calculate ROI Impact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why HubSpot Features - Updated to match home page style */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                Why Private Equity Firms Choose HubSpot
              </h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Unlike generic CRMs built for single companies, HubSpot's architecture naturally supports the
                multi-entity, standardized approach that private equity operations demand.
              </p>
            </div>

            {/* Updated to match home page grid style */}
            <div className="grid md:grid-cols-3 gap-px bg-gray-200 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors flex flex-col h-full">
                  <h3 className="headline text-lg text-gray-900 mb-3">{feature.title}</h3>
                  <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium self-start">
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="headline text-xl text-blue-900 mb-4">Ready to See HubSpot's PE Advantages in Action?</h3>
                <p className="body-copy text-gray-700 mb-6 leading-relaxed">
                  Take our 5-minute assessment to identify which HubSpot features will deliver the highest impact for
                  your portfolio operations.
                </p>
                <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-none">
                  <Link href="/#operations-assessment">Start PE Operations Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Standardization Comparison */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                The Cost of <span className="text-red-600">Chaotic</span> vs.{" "}
                <span className="text-green-600">Standardized</span> Operations
              </h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Most PE firms lose millions in value creation potential by allowing each portfolio company to choose
                their own CRM. Here's what standardization actually delivers:
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-4 gap-0">
                {/* Header */}
                <div className="bg-gray-900 text-white p-4 font-semibold">Operations Area</div>
                <div className="bg-red-600 text-white p-4 font-semibold flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  Chaotic Approach
                </div>
                <div className="bg-green-600 text-white p-4 font-semibold flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Standardized HubSpot
                </div>
                <div className="bg-yellow-500 text-white p-4 font-semibold flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Value Impact
                </div>

                {/* Data Rows */}
                {comparisonData.map((row, index) => (
                  <React.Fragment key={index}>
                    <div className={`p-4 font-medium ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      {row.category}
                    </div>
                    <div className={`p-4 text-red-700 ${index % 2 === 0 ? "bg-red-50" : "bg-white"}`}>
                      {row.chaotic}
                    </div>
                    <div className={`p-4 text-green-700 ${index % 2 === 0 ? "bg-green-50" : "bg-white"}`}>
                      {row.standardized}
                    </div>
                    <div
                      className={`p-4 text-yellow-700 font-semibold ${index % 2 === 0 ? "bg-yellow-50" : "bg-white"}`}
                    >
                      {row.impact}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <div className="headline text-3xl text-red-600 mb-2">$2.4M</div>
                <div className="body-copy text-gray-700">
                  Average annual cost of operational chaos per portfolio company
                </div>
              </div>

              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <div className="headline text-3xl text-green-600 mb-2">$180K</div>
                <div className="body-copy text-gray-700">
                  Annual cost of standardized HubSpot operations per company
                </div>
              </div>

              <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <div className="headline text-3xl text-yellow-500 mb-2">13.3x</div>
                <div className="body-copy text-gray-700">ROI from choosing standardization over chaos</div>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Selection Checklist */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">PE CRM Selection Checklist</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Use this comprehensive checklist to evaluate CRM platforms for your portfolio. Critical items are marked
                with red indicators - these are non-negotiable for PE operations.
              </p>

              {/* Progress Indicators */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="headline text-2xl text-blue-600">
                    {getCheckedItems()}/{getTotalItems()}
                  </div>
                  <div className="body-copy text-sm text-gray-600">Total Items Completed</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <div className="headline text-2xl text-red-600">
                    {criticalProgress.checked}/{criticalProgress.total}
                  </div>
                  <div className="body-copy text-sm text-gray-600">Critical Requirements Met</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(criticalProgress.checked / criticalProgress.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {checklistSections.map((section) => (
                <div key={section.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                  >
                    <h3 className="headline text-lg text-gray-900">{section.title}</h3>
                    {expandedSections[section.id] ? (
                      <ChevronDown className="h-5 w-5 text-gray-500 rotate-180" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {expandedSections[section.id] && (
                    <div className="p-6">
                      <div className="space-y-3">
                        {section.items.map((item) => (
                          <label key={item.id} className="flex items-start space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checkedItems[item.id] || false}
                              onChange={() => toggleItem(item.id)}
                              className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <div className="flex-1">
                              <span className="body-copy text-gray-900">{item.text}</span>
                              {item.critical && (
                                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Critical
                                </span>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* HubSpot CTA */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
              <h3 className="headline text-xl text-blue-900 mb-4">How Does HubSpot Score?</h3>
              <p className="body-copy text-gray-700 mb-6 leading-relaxed">
                HubSpot meets 100% of critical requirements and 95% of all checklist items. See our detailed platform
                comparison to understand why PE firms choose HubSpot.
              </p>
              <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-none">
                View Platform Comparison
              </Button>
            </div>
          </div>
        </section>

        {/* Platform Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Platform Comparison: PE Requirements</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We evaluated the top CRM platforms against private equity operational requirements. Here's how they
                stack up for multi-company portfolio management.
              </p>
            </div>

            {/* PE Scores Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="headline text-lg text-gray-900 mb-2">{platform.name}</h3>
                  <div className="body-copy text-sm text-gray-600 mb-3">{platform.pricing}</div>
                  <div className="mb-3">
                    <div
                      className={`headline text-2xl ${platform.name === "HubSpot" ? "text-blue-600" : "text-gray-600"}`}
                    >
                      {platform.peScore}/100
                    </div>
                    <div className="body-copy text-xs text-gray-500">PE Readiness Score</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${platform.name === "HubSpot" ? "bg-blue-600" : "bg-gray-400"}`}
                      style={{ width: `${platform.peScore}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 font-semibold">Requirement</th>
                      <th className="text-left p-4 font-semibold">Weight</th>
                      <th className="text-left p-4 font-semibold">HubSpot</th>
                      <th className="text-left p-4 font-semibold">Salesforce</th>
                      <th className="text-left p-4 font-semibold">Dynamics</th>
                      <th className="text-left p-4 font-semibold">Pipedrive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteria.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-4 font-medium text-gray-900">{row.category}</td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              row.weight === "Critical"
                                ? "bg-red-100 text-red-800"
                                : row.weight === "High"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {row.weight}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(row.hubspot, row.category)}
                            <span className="font-medium text-blue-700">{row.hubspot}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(row.salesforce, row.category)}
                            <span>{row.salesforce}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(row.dynamics, row.category)}
                            <span>{row.dynamics}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(row.pipedrive, row.category)}
                            <span>{row.pipedrive}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Winner Callout */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
              <h3 className="headline text-2xl text-blue-900 mb-4">Why HubSpot Leads for PE Operations</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="headline text-lg text-blue-800 mb-2">Native Multi-Entity</h4>
                  <p className="body-copy text-sm text-gray-700 leading-relaxed">
                    Built-in support for managing multiple companies under one platform without complex workarounds.
                  </p>
                </div>
                <div>
                  <h4 className="headline text-lg text-blue-800 mb-2">Fastest ROI</h4>
                  <p className="body-copy text-sm text-gray-700 leading-relaxed">
                    100-day implementation with immediate value delivery, not the 6-18 month nightmares of enterprise
                    CRMs.
                  </p>
                </div>
                <div>
                  <h4 className="headline text-lg text-blue-800 mb-2">PE-Optimized</h4>
                  <p className="body-copy text-sm text-gray-700 leading-relaxed">
                    Purpose-built reporting and analytics designed for the metrics that matter to investors and
                    operators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Widget */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">HubSpot PE ROI Calculator</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Calculate the potential return on investment from standardizing your portfolio operations on HubSpot.
                Adjust the inputs below to match your portfolio characteristics.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="headline text-xl text-gray-900">Portfolio Parameters</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block body-copy text-sm font-medium text-gray-700 mb-2">
                      Number of Portfolio Companies
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      value={inputs.portfolioSize}
                      onChange={(e) => setInputs({ ...inputs, portfolioSize: Number.parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between body-copy text-sm text-gray-500 mt-1">
                      <span>2</span>
                      <span className="font-medium text-blue-600">{inputs.portfolioSize} companies</span>
                      <span>20</span>
                    </div>
                  </div>

                  <div>
                    <label className="block body-copy text-sm font-medium text-gray-700 mb-2">
                      Average Annual Revenue per Company (Millions)
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={inputs.avgRevenue}
                      onChange={(e) => setInputs({ ...inputs, avgRevenue: Number.parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between body-copy text-sm text-gray-500 mt-1">
                      <span>$10M</span>
                      <span className="font-medium text-blue-600">${inputs.avgRevenue}M</span>
                      <span>$500M</span>
                    </div>
                  </div>

                  <div>
                    <label className="block body-copy text-sm font-medium text-gray-700 mb-2">
                      Current Operational Efficiency
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="80"
                      value={inputs.currentEfficiency}
                      onChange={(e) => setInputs({ ...inputs, currentEfficiency: Number.parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between body-copy text-sm text-gray-500 mt-1">
                      <span>30%</span>
                      <span className="font-medium text-blue-600">{inputs.currentEfficiency}%</span>
                      <span>80%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block body-copy text-sm font-medium text-gray-700 mb-2">
                      Implementation Cost per Company ($K)
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="300"
                      step="10"
                      value={inputs.implementationCost}
                      onChange={(e) => setInputs({ ...inputs, implementationCost: Number.parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between body-copy text-sm text-gray-500 mt-1">
                      <span>$100K</span>
                      <span className="font-medium text-blue-600">${inputs.implementationCost}K</span>
                      <span>$300K</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="headline text-xl text-gray-900">ROI Projection</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-copy text-sm text-gray-600">Total Implementation Investment</span>
                      <DollarSign className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="headline text-2xl text-gray-900">{formatCurrency(results.implementationCost)}</div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-copy text-sm text-gray-600">Additional Revenue (Year 1)</span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="headline text-2xl text-green-600">{formatCurrency(results.additionalRevenue)}</div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-yellow-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-copy text-sm text-gray-600">Year 1 ROI</span>
                      <span className="body-copy text-sm text-yellow-600 font-medium">Return Multiple</span>
                    </div>
                    <div className="headline text-2xl text-yellow-600">{formatPercent(results.yearOneROI)}</div>
                    <div className="body-copy text-sm text-gray-500 mt-1">
                      {(results.yearOneROI + 1).toFixed(1)}x return on investment
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="body-copy text-sm text-gray-600 mb-1">Monthly Gain</div>
                      <div className="headline text-lg text-blue-600">{formatCurrency(results.monthlyGain)}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="body-copy text-sm text-gray-600 mb-1">Break Even</div>
                      <div className="headline text-lg text-blue-600">{results.breakEvenMonths} months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
                <h3 className="headline text-2xl mb-4">Ready to Realize These Returns?</h3>
                <p className="body-copy text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
                  These projections are based on actual client results. Take our assessment to get a personalized
                  implementation roadmap for your portfolio.
                </p>
                <div className="flex justify-center">
                  <Button className="body-copy bg-white text-blue-600 px-8 py-3 rounded-none hover:bg-gray-100">
                    <Link href="/#operations-assessment">Get Your PE Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about implementing HubSpot for private equity portfolio
                operations.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="headline text-lg text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="body-copy text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="mt-12 text-center">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
                <h3 className="headline text-xl text-blue-900 mb-4">Still Have Questions?</h3>
                <p className="body-copy text-gray-700 mb-6 leading-relaxed">
                  Schedule a consultation with us to discuss your specific requirements and get personalized answers
                  about your HubSpot implementation.
                </p>
                <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-none">
                  <Link href="/contact">Schedule PE Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl mb-6">
                Transform Your Portfolio
                <br />
                Operations in 100 Days
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Benefits */}
              <div className="space-y-8">
                <h3 className="headline text-2xl mb-6">What You Get:</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="headline text-lg font-semibold mb-1">Complete Portfolio Standardization</h4>
                      <p className="body-copy text-gray-300 leading-relaxed">
                        Unified processes, reporting, and data management across all companies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="headline text-lg font-semibold mb-1">100-Day Implementation Guarantee</h4>
                      <p className="body-copy text-gray-300 leading-relaxed">
                        Full deployment with team training and support included
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <TrendingUp className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="headline text-lg font-semibold mb-1">Measurable ROI Within 6 Months</h4>
                      <p className="body-copy text-gray-300 leading-relaxed">
                        Track operational improvements and value creation metrics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="headline text-lg font-semibold mb-1">Ongoing Portfolio Support</h4>
                      <p className="body-copy text-gray-300 leading-relaxed">
                        Continued optimization and new company onboarding
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA Form */}
              <div className="bg-white text-gray-900 rounded-lg p-8">
                <h3 className="headline text-2xl mb-6 text-center">Start Your PE Operations Assessment</h3>
                <p className="body-copy text-gray-700 mb-6 text-center leading-relaxed">
                  Get a personalized analysis of your current operations and a roadmap for HubSpot implementation across
                  your portfolio.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="body-copy text-sm">Hands-on assessment</span>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="body-copy text-sm">Personalized recommendations</span>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <span className="body-copy text-sm">ROI projections for your portfolio</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-center">
                    <Button
                      className="body-copy px-8 py-3 rounded-none hover:bg-yellow-500"
                      style={{ backgroundColor: "#FBB03B", color: "#000" }}
                    >
                      <Link href="/#operations-assessment">Get Your PE Assessment</Link>
                    </Button>
                  </div>
                </div>

                <p className="body-copy text-xs text-gray-500 text-center mt-4">
                  No sales pressure. Just actionable insights for your portfolio operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <div className="mb-6">
                <img
                  src="/images/dataops-logo-white-footer.png"
                  alt="DataOps Group - Expert HubSpot Implementation and Data Operations Consulting"
                  className="w-[160px] h-[54px] object-contain"
                  loading="lazy"
                />
              </div>
              <p className="body-copy text-sm text-gray-400 leading-relaxed">
                Transforming portfolio operations into profit drivers through expert HubSpot implementation and data
                operations consulting.
              </p>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/analytics-bi" className="body-copy text-sm text-gray-400 hover:text-white">
                    Analytics & BI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/dataops-implementation"
                    className="body-copy text-sm text-gray-400 hover:text-white"
                  >
                    DataOps Implementation
                  </Link>
                </li>
                <li>
                  <Link href="/services/team-training" className="body-copy text-sm text-gray-400 hover:text-white">
                    HubSpot Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/marketing-operations-revops"
                    className="body-copy text-sm text-gray-400 hover:text-white"
                  >
                    Marketing Operations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    PE Value Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    PE Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/hubspot-for-private-equity"
                    className="body-copy text-sm text-gray-400 hover:text-white"
                  >
                    HubSpot for Private Equity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Client Support Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Schedule a Call
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">FAQs</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="body-copy text-sm text-gray-400">
                <p>© 2025 DataOps Group. All rights reserved.</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="body-copy text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="body-copy text-sm text-gray-400 hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
