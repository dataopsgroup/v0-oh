"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Users, Target, TrendingUp, Clock, User, Building, AlertTriangle, Menu, X } from "lucide-react"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"
import GlobalCTA from "@/components/global-cta"

export default function HubSpotExpertGuide() {
  const [activeSection, setActiveSection] = useState("")
  const [tocOpen, setTocOpen] = useState(false)

  const sections = [
    { id: "introduction", title: "Introduction: The HubSpot Expert Decision" },
    { id: "experts-vs-agencies", title: "Understanding HubSpot Experts vs. Agencies" },
    { id: "types-of-expertise", title: "Types of HubSpot Expertise You Need" },
    { id: "beyond-agency-safety", title: "Beyond the Agency Safety Net" },
    { id: "when-you-need-expert", title: "When Your Business Needs a HubSpot Expert" },
    { id: "evaluating-qualifications", title: "Evaluating HubSpot Expert Qualifications" },
    { id: "pricing-guide", title: "Complete Pricing Guide" },
    { id: "hiring-process", title: "Step-by-Step Hiring Process" },
    { id: "essential-questions", title: "Essential Questions for Evaluation" },
    { id: "maximizing-partnership", title: "Maximizing Your Partnership" },
    { id: "success-stories", title: "Real-World Success Stories" },
    { id: "common-pitfalls", title: "Common Pitfalls to Avoid" },
    { id: "final-decision", title: "Making Your Final Decision" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setTocOpen(false)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.dataopsgroup.com/guides/hubspot-expert",
            },
            headline: "How to Hire a HubSpot Expert: Complete Guide for 2025",
            description:
              "The definitive guide to finding, evaluating, and hiring HubSpot experts that deliver measurable ROI for your business. Learn from 12+ years of implementation experience.",
            author: {
              "@type": "Organization",
              name: "DataOps Group",
            },
            datePublished: "2025-01-01T00:00:00+00:00",
            dateModified: "2025-01-01T00:00:00+00:00",
          }),
        }}
      />
      <Navigation />

      <div className="min-h-screen bg-white relative">
        {/* Table of Contents - Desktop Sidebar */}
        <div className="hidden xl:block fixed left-8 top-1/2 transform -translate-y-1/2 z-20 w-64">
          <div className="bg-white border-2 rounded-lg p-4 shadow-lg" style={{ borderColor: "#14213D" }}>
            <h3 className="headline text-base font-semibold mb-4" style={{ color: "#14213D" }}>
              Table of Contents
            </h3>
            <p className="body-copy text-sm text-gray-600 mb-4">Click to jump sections</p>
            <nav className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left text-base body-copy hover:underline transition-colors ${
                    activeSection === section.id ? "font-semibold" : ""
                  }`}
                  style={{
                    color: activeSection === section.id ? "#14213D" : "#6B7280",
                  }}
                >
                  {index + 1}. {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile TOC Toggle */}
        <div className="xl:hidden fixed top-24 right-4 z-30">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="bg-white border-2 rounded-lg p-3 shadow-lg"
            style={{ borderColor: "#14213D" }}
          >
            {tocOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile TOC Overlay */}
        {tocOpen && (
          <div className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setTocOpen(false)}>
            <div
              className="absolute top-24 right-4 bg-white border-2 rounded-lg p-4 shadow-lg max-w-xs w-full"
              style={{ borderColor: "#14213D" }}
            >
              <h3 className="headline text-base font-semibold mb-4" style={{ color: "#14213D" }}>
                Table of Contents
              </h3>
              <p className="body-copy text-sm text-gray-600 mb-4">Click to jump sections</p>
              <nav className="space-y-2 max-h-96 overflow-y-auto">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left text-base body-copy hover:underline"
                    style={{ color: "#6B7280" }}
                  >
                    {index + 1}. {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="subheadline text-base" style={{ color: "#8CC7E3" }}>
                EXPERT GUIDE
              </span>
            </div>
            <h1 className="headline text-4xl md:text-5xl font-bold mb-6" style={{ color: "#14213D" }}>
              How to Hire a HubSpot Expert: Complete Guide for 2025
            </h1>
            <p className="body-copy text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The definitive guide to finding, evaluating, and hiring HubSpot experts that deliver measurable ROI for
              your business. Learn from 12+ years of implementation experience.
            </p>
            <div className="flex items-center justify-center gap-6 text-base text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="body-copy">15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="body-copy">Written by HubSpot Expert Since 2012</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span className="body-copy">Updated January 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 pb-12 xl:ml-80">
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Introduction: The HubSpot Expert Decision That Will Make or Break Your Growth
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-6 leading-relaxed">
              Your HubSpot subscription costs thousands annually, but that's just the beginning. The real investment—and
              the real risk—lies in who you choose to implement and optimize your system.
            </p>
            <p className="body-copy text-lg text-gray-700 mb-8 leading-relaxed">
              After helping over 30 companies transform their HubSpot implementations since 2012, I've seen the stark
              difference between businesses that thrive with HubSpot and those that struggle. The differentiator isn't
              the platform—it's the expertise behind the strategy.
            </p>

            <div className="bg-white border-2 rounded-lg p-8 mb-8" style={{ borderColor: "#14213D" }}>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 flex-shrink-0" style={{ color: "#FBB03B" }} />
                <div>
                  <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                    The Hidden Cost of Wrong Decisions
                  </h3>
                  <p className="body-copy text-gray-700">
                    A poorly chosen HubSpot expert can cost your business 6-12 months of lost momentum, $50,000+ in
                    implementation costs, and immeasurable opportunity cost from delayed growth initiatives. The right
                    expert pays for themselves within 90 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  What Makes This Guide Different
                </h3>
                <p className="body-copy text-gray-700 mb-4">
                  Unlike generic hiring advice, this guide is written from the perspective of someone who has:
                </p>
                <ul className="body-copy text-gray-700 space-y-2 pl-4">
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Implemented HubSpot for 30+ companies across industries from startups to Fortune 500
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Rescued dozens of failed implementations from other agencies and consultants
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Trained dozens of internal teams on HubSpot best practices
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Maintained HubSpot certifications since 2012 across all hubs and specializations
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  The Stakes: Why This Decision Matters
                </h3>
                <p className="body-copy text-gray-700 mb-4">
                  HubSpot implementations touch every aspect of your customer acquisition and retention process. When
                  done right, companies typically see:
                </p>
                <ul className="body-copy text-gray-700 space-y-2 pl-4">
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Up to 300% increase in lead conversion rates
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    8-14% reduction in sales cycle length
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    14.5% improvement in sales productivity
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    86% improvement in customer acquisition rates
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Understanding HubSpot Experts vs. Agencies */}
          <section id="experts-vs-agencies" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Understanding HubSpot Experts vs. Agencies: What You Really Need
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              The HubSpot partner directory lists thousands of agencies, but most businesses need expertise, not
              overhead. Understanding the difference could save you 50% on implementation costs while delivering better
              results.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-8 w-8" style={{ color: "#14213D" }} />
                  <h3 className="headline text-xl font-semibold">Large Agency</h3>
                </div>
                <div className="flex-grow">
                  <div>
                    <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                      Choose when:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4 mb-6">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Enterprise-level complexity
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Need ongoing managed services
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Require 24/7 support coverage
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Prefer established agency relationships
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="bg-white border-2 rounded-lg p-4" style={{ borderColor: "#FBB03B" }}>
                    <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                      Investment:
                    </h4>
                    <p className="body-copy text-base font-semibold" style={{ color: "#FBB03B" }}>
                      $15,000-$50,000+
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-8 w-8" style={{ color: "#14213D" }} />
                  <h3 className="headline text-xl font-semibold">Independent Expert</h3>
                </div>
                <div className="flex-grow">
                  <div>
                    <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                      Choose when:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4 mb-6">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Clear, defined project scope
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Budget constraints are important
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Need specialized expertise
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Prefer direct relationships
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="bg-white border-2 rounded-lg p-4" style={{ borderColor: "#FBB03B" }}>
                    <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                      Investment:
                    </h4>
                    <p className="body-copy text-base font-semibold" style={{ color: "#FBB03B" }}>
                      $5,000-$20,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8" style={{ color: "#14213D" }} />
                  <h3 className="headline text-xl font-semibold">Boutique Team</h3>
                </div>
                <div className="flex-grow">
                  <div>
                    <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                      Choose when:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4 mb-6">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Complex multi-hub implementations
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Need ongoing strategic support
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Want expert-level work with backup
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Value long-term partnerships
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="bg-white border-2 rounded-lg p-4" style={{ borderColor: "#FBB03B" }}>
                    <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                      Investment:
                    </h4>
                    <p className="body-copy text-base font-semibold" style={{ color: "#FBB03B" }}>
                      $8,000-$30,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Types of HubSpot Expertise */}
          <section id="types-of-expertise" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Types of HubSpot Expertise You Need
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              HubSpot's ecosystem spans six major hubs and countless integrations. Understanding which type of expertise
              aligns with your business objectives prevents costly mismatches and ensures faster implementation success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8" style={{ color: "#14213D" }} />
                  <h3 className="headline text-lg font-semibold">Marketing Hub Specialists</h3>
                </div>
                <p className="body-copy text-gray-600 text-base mb-4 flex-grow">
                  Demand generation masters who excel at lead generation, conversion optimization, email marketing
                  campaigns, and marketing automation workflows.
                </p>
                <div className="p-4 rounded mt-auto" style={{ backgroundColor: "#8CC7E3" }}>
                  <h4 className="headline font-semibold text-base mb-2" style={{ color: "#14213D" }}>
                    ROI Indicators:
                  </h4>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Lead scoring models improving qualified lead rates by 40%+, email campaigns achieving 25%+ open
                    rates, clear attribution tracking.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8" style={{ color: "#14213D" }} />
                  <h3 className="headline text-lg font-semibold">
                    Sales Hub <br />
                    Experts
                  </h3>
                </div>
                <p className="body-copy text-gray-600 text-base mb-4 flex-grow">
                  Revenue acceleration specialists who focus on sales pipeline configuration, deal management, and sales
                  automation to improve closure rates.
                </p>
                <div className="p-4 rounded mt-auto" style={{ backgroundColor: "#8CC7E3" }}>
                  <h4 className="headline font-semibold text-base mb-2" style={{ color: "#14213D" }}>
                    Expert Tip:
                  </h4>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    The best Sales Hub experts have actually carried a quota themselves and understand the daily reality
                    of sales reps.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8" style={{ color: "#14213D" }} />
                  <h3 className="headline text-lg font-semibold">Service Hub Architects</h3>
                </div>
                <p className="body-copy text-gray-600 text-base mb-4 flex-grow">
                  Customer success optimization specialists who design ticket management workflows, knowledge bases, and
                  feedback systems for retention.
                </p>
                <div className="p-4 rounded mt-auto" style={{ backgroundColor: "#8CC7E3" }}>
                  <h4 className="headline font-semibold text-base mb-2" style={{ color: "#14213D" }}>
                    Value Creation:
                  </h4>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Typically reduce support costs by 30-40% while improving satisfaction scores. ROI payback in 6-9
                    months.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Agency Safety */}
          <section id="beyond-agency-safety" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Beyond the Agency Safety Net
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              While agencies offer perceived safety through established processes and teams, independent HubSpot experts
              often provide unique advantages that can be more valuable for your specific situation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  With Agencies:
                </h3>
                <ul className="body-copy text-gray-700 space-y-2 pl-4">
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Account manager → Project manager → Specialist
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Multiple handoffs and potential miscommunication
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Junior staff may handle day-to-day work
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Less flexibility in approach and timeline
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  With Independent Experts:
                </h3>
                <ul className="body-copy text-gray-700 space-y-2 pl-4">
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Direct communication with the expert
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Clear understanding of your requirements
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Senior-level expertise on every task
                  </li>
                  <li className="relative">
                    <span className="absolute -left-4">•</span>
                    Agile adaptation to changing needs
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-8" style={{ borderColor: "#14213D" }}>
              <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                Cost-Effectiveness and Value
              </h3>
              <p className="body-copy text-gray-700">
                Independent experts often provide better value for money due to lower overhead costs, direct billing,
                and focused expertise. You're paying for results, not corporate infrastructure.
              </p>
            </div>
          </section>

          {/* When You Need an Expert */}
          <section id="when-you-need-expert" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              When Your Business Needs a HubSpot Expert
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              Understanding when to invest in expert help versus handling implementation internally can save significant
              time and money while ensuring better outcomes.
            </p>

            <div className="bg-white border-2 rounded-lg p-8 mb-8" style={{ borderColor: "#14213D" }}>
              <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                The Opportunity Cost of DIY
              </h3>
              <p className="body-copy text-gray-700 mb-4">
                Even if you have the technical skills to implement HubSpot yourself, consider the opportunity cost of
                spending your time on implementation rather than core business activities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    Consider:
                  </h4>
                  <ul className="body-copy text-gray-700 space-y-1 pl-4">
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      What's your hourly rate and implementation time?
                    </li>
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      What revenue activities will you postpone?
                    </li>
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      What's the impact of delayed implementation?
                    </li>
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      What's the risk of mistakes requiring rework?
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    Expert Value:
                  </h4>
                  <ul className="body-copy text-gray-700 space-y-1 pl-4">
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      Faster implementation and ROI
                    </li>
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      Improved data quality from start
                    </li>
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      Better alignment with business objectives
                    </li>
                    <li className="relative">
                      <span className="absolute -left-4">•</span>
                      Reduced risk of costly mistakes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Guide */}
          <section id="pricing-guide" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Complete Pricing Guide for HubSpot Experts and Implementation
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              Understanding the full cost structure helps you budget appropriately and compare options effectively.
              HubSpot expert pricing varies significantly based on experience level, project complexity, and the
              specific services you need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Hourly Rate Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="body-copy text-gray-700">Entry-Level Specialists:</span>
                    <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                      $75-125/hour
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-copy text-gray-700">Mid-Level Experts:</span>
                    <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                      $125-200/hour
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-copy text-gray-700">Senior Specialists:</span>
                    <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                      $200-300/hour
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-copy text-gray-700">Enterprise Experts:</span>
                    <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                      $300-400/hour
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Implementation Pricing Tiers
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="body-copy text-gray-700">Basic Setup:</span>
                      <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                        $3,500-12,000
                      </span>
                    </div>
                    <p className="body-copy text-sm text-gray-500">(30-60 days)</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="body-copy text-gray-700">Comprehensive Multi-Hub:</span>
                      <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                        $12,000-35,000
                      </span>
                    </div>
                    <p className="body-copy text-sm text-gray-500">(60-120 days)</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="body-copy text-gray-700">Enterprise Integration:</span>
                      <span className="body-copy font-semibold" style={{ color: "#FBB03B" }}>
                        $25,000-75,000+
                      </span>
                    </div>
                    <p className="body-copy text-sm text-gray-500">(120-180 days)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-8" style={{ borderColor: "#14213D" }}>
              <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                Integration-Specific Pricing
              </h3>
              <p className="body-copy text-gray-700 mb-4">
                Integration work often represents the most complex and valuable part of a HubSpot implementation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    Zapier Workflows:
                  </h4>
                  <p className="body-copy text-base text-gray-700">$500-2,500 per workflow</p>
                </div>
                <div>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    API Integration:
                  </h4>
                  <p className="body-copy text-base text-gray-700">$2,500-15,000+ per integration</p>
                </div>
                <div>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    Data Sync:
                  </h4>
                  <p className="body-copy text-base text-gray-700">$2,500-10,000 depending on complexity</p>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Questions */}
          <section id="essential-questions" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Essential Questions for Evaluation
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              These questions help you understand their depth of experience, thought process, and approach to solving
              business problems with HubSpot technology.
            </p>

            <div className="grid grid-cols-1 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Business Strategy Questions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      How do you align HubSpot implementation with broader business objectives?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      What questions do you ask to understand a client's business before recommending technical
                      approaches?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      How do you measure the success of your implementations?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">What results have your clients typically seen?</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Process Management Questions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      What's your typical implementation process from start to finish?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      How do you handle scope changes and unexpected challenges?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      What's your approach to knowledge transfer and training?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      How do you ensure our team can maintain the system after implementation?
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Team Structure Questions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      Who specifically will be doing the hands-on integration work?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      Will any work be performed offshore or by third parties?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      Can I meet all team members involved in our project?
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#14213D" }} />
                    <span className="body-copy text-gray-700">
                      What's the experience level of each person who will touch our project?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section id="success-stories" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Real-World Success Stories: Integration-Focused Implementations
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              Understanding how other businesses have successfully worked with HubSpot experts can help you set
              realistic expectations and identify opportunities for your own implementation.
            </p>

            <div className="grid grid-cols-1 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingUp className="h-8 w-8 flex-shrink-0" style={{ color: "#14213D" }} />
                  <div>
                    <h3 className="headline text-xl font-semibold mb-2" style={{ color: "#14213D" }}>
                      SaaS Company Integration Transformation
                    </h3>
                    <p className="body-copy text-gray-600">
                      B2B SaaS platform with 50 employees struggling with disconnected systems
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="headline font-semibold mb-3" style={{ color: "#14213D" }}>
                      The Challenge:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Manual data entry between systems
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        No unified view of customer journey
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Impossible marketing attribution tracking
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        15+ hours weekly on manual data management
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="headline font-semibold mb-3" style={{ color: "#14213D" }}>
                      The Results:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        85% reduction in manual data entry time
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        40% improvement in lead-to-customer conversion
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        60% faster customer support resolution
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Complete marketing attribution tracking
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded" style={{ backgroundColor: "#8CC7E3" }}>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    ROI Analysis:
                  </h4>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Total investment of $28,000 for implementation plus $2,500 monthly for ongoing optimization
                    delivered a 650% ROI in the first year.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Building className="h-8 w-8 flex-shrink-0" style={{ color: "#14213D" }} />
                  <div>
                    <h3 className="headline text-xl font-semibold mb-2" style={{ color: "#14213D" }}>
                      Manufacturing Company Digital Transformation
                    </h3>
                    <p className="body-copy text-gray-600">
                      Industrial equipment manufacturer limited by paper-based processes
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="headline font-semibold mb-3" style={{ color: "#14213D" }}>
                      Before:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Quote-to-cash process took 3-4 weeks
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        No visibility into sales pipeline
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Manual quote generation and approval
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Disconnected systems preventing growth
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="headline font-semibold mb-3" style={{ color: "#14213D" }}>
                      After:
                    </h4>
                    <ul className="body-copy text-gray-700 space-y-1 pl-4">
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Quote-to-cash reduced to 5-7 days
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        45% increase in quote-to-sale conversion
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        Sales forecasting accuracy: 60% to 85%
                      </li>
                      <li className="relative">
                        <span className="absolute -left-4">•</span>
                        30% reduction in service calls
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded" style={{ backgroundColor: "#8CC7E3" }}>
                  <h4 className="headline font-semibold mb-2" style={{ color: "#14213D" }}>
                    Investment Return:
                  </h4>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Investment of $45,000 for implementation plus $4,000 monthly for ongoing management delivered a 420%
                    ROI over 18 months.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Pitfalls */}
          <section id="common-pitfalls" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Common Pitfalls When Hiring HubSpot Experts
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              Learning from common mistakes can save you significant time, money, and frustration. These pitfalls
              represent the most frequent issues businesses encounter when selecting and working with HubSpot experts.
            </p>

            <div className="grid grid-cols-1 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 flex-shrink-0" style={{ color: "#FBB03B" }} />
                  <div>
                    <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                      The Safety Illusion
                    </h3>
                    <p className="body-copy text-gray-700 mb-4">
                      One of the most costly mistakes businesses make is defaulting to choosing large agencies based on
                      perceived safety rather than demonstrated expertise.
                    </p>
                    <div className="p-4 rounded" style={{ backgroundColor: "#E6E6E6" }}>
                      <p className="body-copy text-base" style={{ color: "#14213D" }}>
                        <strong>Reality Check:</strong> Ask specifically whether the people you're meeting with during
                        the sales process will be directly involved in your implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 flex-shrink-0" style={{ color: "#FBB03B" }} />
                  <div>
                    <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                      Hidden Delivery Models
                    </h3>
                    <p className="body-copy text-gray-700 mb-4">
                      Some agencies present themselves as having comprehensive in-house expertise while actually
                      outsourcing HubSpot work to subcontractors or offshore teams.
                    </p>
                    <div className="p-4 rounded" style={{ backgroundColor: "#E6E6E6" }}>
                      <p className="body-copy text-base" style={{ color: "#14213D" }}>
                        <strong>Due Diligence:</strong> Ask whether all work will be performed by direct employees and
                        request to meet all team members involved in your implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 flex-shrink-0" style={{ color: "#FBB03B" }} />
                  <div>
                    <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                      Choosing Based on Price Alone
                    </h3>
                    <p className="body-copy text-gray-700 mb-4">
                      The lowest-cost option often becomes the most expensive when you factor in rework, extended
                      timelines, and missed opportunities.
                    </p>
                    <div className="p-4 rounded" style={{ backgroundColor: "#E6E6E6" }}>
                      <p className="body-copy text-base" style={{ color: "#14213D" }}>
                        <strong>Remember:</strong> The true cost includes not just immediate financial impact, but also
                        opportunity cost of delayed results and potential damage to team morale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Decision */}
          <section id="final-decision" className="mb-16">
            <h2 className="headline text-3xl font-bold mb-6" style={{ color: "#14213D" }}>
              Making Your Final Decision
            </h2>
            <p className="body-copy text-lg text-gray-700 mb-8">
              Hiring the right HubSpot expert is one of the most important technology decisions you'll make for your
              business. The difference between a mediocre implementation and an exceptional one often comes down to the
              expertise, business acumen, and commitment of the person or team you choose to work with.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Focus on the Actual Implementers
                </h3>
                <p className="body-copy text-gray-700 mb-4">
                  Focus on the actual implementers rather than being swayed by impressive sales presentations or company
                  size. The person who will configure your workflows, build your integrations, and solve your technical
                  challenges is the one who determines your success.
                </p>
                <div className="p-4 rounded" style={{ backgroundColor: "#8CC7E3" }}>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Make sure you're evaluating the right people and that they'll be directly involved throughout your
                    project.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Value Hands-On Expertise
                </h3>
                <p className="body-copy text-gray-700 mb-4">
                  Value hands-on expertise over organizational credentials. In the HubSpot ecosystem, deep platform
                  experience and integration knowledge often matter more than company size or marketing polish.
                </p>
                <div className="p-4 rounded" style={{ backgroundColor: "#8CC7E3" }}>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Look for experts who have consistently worked with HubSpot and can demonstrate genuine expertise
                    through specific examples.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Consider Business Acumen
                </h3>
                <p className="body-copy text-gray-700 mb-4">
                  The best HubSpot experts understand that technology serves business objectives, not the other way
                  around. They should ask probing questions about your business model, processes, and goals.
                </p>
                <div className="p-4 rounded" style={{ backgroundColor: "#8CC7E3" }}>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Technical competence without business understanding often leads to elegant solutions that don't
                    solve real problems.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                  Trust Your Evaluation Process
                </h3>
                <p className="body-copy text-gray-700 mb-4">
                  Trust your evaluation process rather than rushing to a decision based on pressure or convenience. The
                  systematic approach outlined in this guide might seem thorough, but the time invested pays dividends.
                </p>
                <div className="p-4 rounded" style={{ backgroundColor: "#8CC7E3" }}>
                  <p className="body-copy text-base" style={{ color: "#14213D" }}>
                    Your goal isn't just implementing HubSpot—it's transforming your business processes to drive growth
                    and improve efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-8" style={{ borderColor: "#14213D" }}>
              <h3 className="headline text-xl font-semibold mb-4" style={{ color: "#14213D" }}>
                Final Thought
              </h3>
              <p className="body-copy text-gray-700">
                With the right expert partnership, you'll not only get a well-configured system but also gain valuable
                insights into how to leverage technology more effectively across your entire business. The systematic
                approach in this guide will help you make an informed decision that serves your business for years to
                come. Take the time to do it right, and your HubSpot implementation will become a competitive advantage
                rather than just another software system.
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobalCTA
        subtitle="Ready to Find Your HubSpot Expert?"
        title="Don't Let a Failed Implementation Cost Your Business"
        description="Get expert guidance from certified HubSpot specialists who understand integrations, data quality, and marketing operations. Transform your HubSpot investment into a competitive advantage."
        buttonText="Book a Strategy Call"
        buttonLink="/contact"
      />

      <GlobalFooter />
    </>
  )
}
