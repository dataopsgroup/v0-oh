"use client"

/*
 * STYLING OVERRIDE NOTICE:
 * For any TSX files provided from external sites, the box/grid styling should be
 * overridden to match this site's IBM-inspired design system:
 * - Container: grid gap-px bg-gray-200
 * - Individual boxes: bg-white p-8 hover:bg-gray-50 transition-colors
 * - Consistent typography using headline/body-copy classes
 * - Icons sized at h-8 w-8 with text-blue-600 color
 */

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import GlobalCTA from "@/components/global-cta"
import {
  ArrowRight,
  Database,
  Workflow,
  Settings,
  Zap,
  Shield,
  BarChart3,
  Users,
  GitBranch,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"

export default function DataOpsImplementationPage() {
  const benefits = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "System Integration",
      description: "Seamlessly connect all your business systems for unified data flow and comprehensive visibility.",
    },
    {
      icon: <Workflow className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce manual errors.",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Custom Configuration",
      description: "Tailored system setup that aligns with your specific business processes and requirements.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Performance Optimization",
      description: "Fine-tune your data operations for maximum speed, reliability, and scalability.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Quality Assurance",
      description: "Implement robust data validation and quality control measures to ensure accuracy.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring dashboards and analytics to track system performance and health.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Team Training",
      description: "Comprehensive training programs to ensure your team can effectively manage the new systems.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Scalable Architecture",
      description: "Build systems that grow with your business and adapt to changing requirements.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Ongoing Support",
      description: "Continuous support and maintenance to ensure optimal system performance and reliability.",
    },
  ]

  const challenges = [
    {
      problem: "Fragmented Data Systems",
      solution: "We create unified data architectures that connect all your business systems seamlessly.",
    },
    {
      problem: "Manual Process Dependencies",
      solution: "Automated workflows that eliminate bottlenecks and reduce dependency on manual intervention.",
    },
    {
      problem: "Inconsistent Data Quality",
      solution: "Robust validation rules and quality control processes that ensure data accuracy and reliability.",
    },
    {
      problem: "Scalability Limitations",
      solution: "Future-proof architectures designed to scale with your business growth and evolving needs.",
    },
  ]

  const approachSteps = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description:
        "Comprehensive analysis of your current systems, processes, and data landscape to identify opportunities.",
    },
    {
      step: "2",
      title: "Architecture Design",
      description:
        "Custom system architecture design that aligns with your business objectives and technical requirements.",
    },
    {
      step: "3",
      title: "Implementation & Integration",
      description: "Systematic deployment of DataOps solutions with seamless integration across all business systems.",
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "Rigorous testing and performance optimization to ensure reliability and maximum efficiency.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Global Navigation */}
      <Navigation />

      <main>
        {/* Hero Section - DataOpsImplementationPageHeader */}
        <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                  DataOps Implementation
                </div>
                <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                  End-to-End DataOps Implementation for Portfolio Operations
                </h1>
                <p className="body-copy text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                  Streamline your data operations with comprehensive implementation services. From system integration to
                  process automation, we build scalable DataOps solutions that drive efficiency across your entire
                  portfolio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-none flex items-center justify-center">
                    <Link href="/#operations-assessment" className="flex items-center">
                      Get Your Implementation Assessment
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="body-copy border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-base flex items-center justify-center rounded-none"
                  >
                    View Implementation Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section - DataOpsImplementationOverview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="headline text-3xl text-gray-900 mb-6">
                    Why DataOps Implementation Matters for Your Portfolio
                  </h2>
                  <div className="space-y-6 body-copy text-gray-700 leading-relaxed">
                    <p>
                      Modern portfolio companies generate massive amounts of data across multiple systems, but without
                      proper DataOps implementation, this valuable information remains siloed and underutilized.
                      Effective DataOps transforms your data landscape into a strategic asset that drives
                      decision-making and operational excellence.
                    </p>
                    <p>
                      Our DataOps Implementation services provide end-to-end solutions that connect your disparate
                      systems, automate critical processes, and establish robust data pipelines. Whether you're
                      standardizing operations across portfolio companies or optimizing a single organization's data
                      flow, we create scalable solutions that grow with your business.
                    </p>
                    <p>
                      From initial system assessment to full deployment and ongoing optimization, we ensure your DataOps
                      implementation delivers measurable results and positions your organization for sustainable growth
                      and competitive advantage.
                    </p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
                  <h3 className="headline text-xl text-blue-900 mb-4">Implementation Outcomes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">
                        Unified data architecture across all business systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">
                        Automated workflows that eliminate manual bottlenecks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Real-time data quality monitoring and validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">
                        Scalable infrastructure that adapts to business growth
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">
                        Comprehensive team training and knowledge transfer
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 sticky top-8">
                  <h3 className="headline text-xl text-gray-900 mb-6">Implementation Services</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">System architecture design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Data pipeline development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Process automation setup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Quality assurance implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Monitoring and alerting systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Team training and documentation</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="headline text-xl text-gray-900 mb-4">Ready to streamline your operations?</h3>
                    <p className="body-copy text-gray-700 mb-6 leading-relaxed">
                      Contact us today to schedule a consultation and learn how our DataOps implementation can transform
                      your business operations.
                    </p>
                    <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white w-full py-2 px-4 rounded-none">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid - DataOpsImplementationDashboardGrid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                Comprehensive DataOps Implementation Solutions
              </h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From system integration to process automation, our implementation services provide the foundation for
                efficient, scalable data operations that drive business growth.
              </p>
            </div>

            {/* 9-card grid in 3 columns */}
            <div className="grid md:grid-cols-3 gap-px bg-gray-200">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">{benefit.icon}</div>
                  <h3 className="headline text-lg text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section - DataOpsImplementationApproach */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                Our DataOps Implementation Methodology
              </h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We follow a proven, systematic approach to ensure your DataOps implementation delivers maximum value and
                drives sustainable operational improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-gray-200">
              {approachSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold rounded">
                    {step.step}
                  </div>
                  <div className="space-y-4">
                    <h3 className="headline text-xl text-gray-900">{step.title}</h3>
                    <p className="body-copy text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section - DataOpsImplementationChallenges */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                Common Implementation Challenges We Solve
              </h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Every organization faces unique DataOps challenges. Here's how we transform common implementation
                obstacles into competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-gray-200">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="space-y-4">
                    <div>
                      <h3 className="headline text-lg text-red-600 mb-2">Challenge: {challenge.problem}</h3>
                      <p className="body-copy text-gray-700 leading-relaxed">
                        <span className="font-semibold text-green-600">Our Solution:</span> {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Using the new GlobalCTA component */}
        <GlobalCTA
          title="Implement DataOps That Drives Results"
          description="Stop struggling with fragmented systems and manual processes. Our DataOps implementation services provide the foundation for efficient, scalable operations that grow with your business and deliver measurable results."
          buttonText="Get Your Implementation Assessment"
          buttonLink="/#operations-assessment"
        />
      </main>

      {/* Footer */}
      <GlobalFooter />
    </div>
  )
}
