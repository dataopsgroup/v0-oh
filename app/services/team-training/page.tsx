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
import GlobalFooter from "@/components/global-footer"
import {
  ArrowRight,
  Users,
  BookOpen,
  Target,
  Award,
  Zap,
  TrendingUp,
  CheckCircle,
  Clock,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function TeamTrainingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HubSpot Team Training",
    description:
      "Maximize Your HubSpot Investment Through Expert Team Training - Accelerate platform adoption and increase user proficiency",
    provider: {
      "@type": "Organization",
      name: "DataOps Group",
    },
    serviceType: "HubSpot Training",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HubSpot Training Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New User Onboarding",
            description: "Structured HubSpot training programs for new team members",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sales Hub Mastery",
            description: "Advanced Sales Hub training for sales teams",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Hub Excellence",
            description: "Comprehensive Marketing Hub training programs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation",
            description: "Advanced automation and workflow training",
          },
        },
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType: "Business Teams Using HubSpot",
    },
  }

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Accelerated Onboarding",
      description: "Get new team members up to speed quickly with structured HubSpot training programs.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Comprehensive Curriculum",
      description: "Cover all HubSpot hubs with role-specific training tailored to your team's needs.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Goal-Oriented Learning",
      description: "Focus training on achieving specific business objectives and measurable outcomes.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Certification Support",
      description: "Help your team achieve HubSpot certifications to validate their expertise.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Hands-On Practice",
      description: "Interactive workshops and real-world scenarios to reinforce learning.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Performance Tracking",
      description: "Monitor training progress and measure improvement in platform usage.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Best Practices",
      description: "Learn industry-proven strategies and optimization techniques.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Flexible Scheduling",
      description: "Training sessions that fit your team's schedule and business needs.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Ongoing Support",
      description: "Continuous mentorship and guidance beyond initial training sessions.",
    },
  ]

  const challenges = [
    {
      problem: "Low Platform Adoption",
      solution: "Structured training programs that build confidence and competency across all team members.",
    },
    {
      problem: "Inconsistent Usage",
      solution: "Standardized processes and best practices training to ensure consistent platform utilization.",
    },
    {
      problem: "Feature Underutilization",
      solution: "Comprehensive feature training that unlocks HubSpot's full potential for your business.",
    },
    {
      problem: "Knowledge Gaps",
      solution: "Role-specific training that addresses individual team member needs and skill levels.",
    },
  ]

  const approachSteps = [
    {
      step: "1",
      title: "Skills Assessment",
      description: "Evaluate current team capabilities and identify specific training needs and knowledge gaps.",
    },
    {
      step: "2",
      title: "Custom Curriculum",
      description: "Develop tailored training programs based on roles, goals, and business objectives.",
    },
    {
      step: "3",
      title: "Interactive Training",
      description: "Deliver engaging workshops with hands-on exercises and real-world scenarios.",
    },
    {
      step: "4",
      title: "Ongoing Mentorship",
      description: "Provide continuous support and advanced training to ensure long-term success.",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Global Navigation */}
        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                    HubSpot Team Training
                  </div>
                  <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                    Maximize Your HubSpot Investment Through Expert Team Training
                  </h1>
                  <p className="body-copy text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                    Accelerate platform adoption, increase user proficiency, and drive measurable business results with
                    comprehensive HubSpot training programs tailored to your team's specific needs and goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-none flex items-center justify-center">
                      <Link href="/#operations-assessment" className="flex items-center">
                        Get Your Training Assessment
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="body-copy border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-base flex items-center justify-center rounded-none"
                    >
                      View Training Programs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="headline text-3xl text-gray-900 mb-6">Why HubSpot Team Training Matters</h2>
                    <div className="space-y-6 body-copy text-gray-700 leading-relaxed">
                      <p>
                        Your HubSpot investment is only as valuable as your team's ability to use it effectively.
                        Without proper training, even the most powerful platform features remain untapped, leading to
                        missed opportunities and suboptimal results.
                      </p>
                      <p>
                        Our comprehensive HubSpot training programs are designed to accelerate platform adoption,
                        increase user confidence, and ensure your team leverages every feature to drive business growth.
                        From basic navigation to advanced automation strategies, we provide role-specific training that
                        transforms your team into HubSpot power users.
                      </p>
                      <p>
                        Whether you are onboarding new team members, rolling out new features, or looking to optimize
                        existing processes, our expert trainers provide the knowledge and support your team needs to
                        achieve measurable success with HubSpot.
                      </p>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
                    <h3 className="headline text-xl text-blue-900 mb-4">Training Outcomes You Will Achieve</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">
                          Reduce new user ramp-up time by 60% with structured onboarding
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">
                          Increase platform adoption rates and feature utilization across teams
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">
                          Improve data quality and reporting accuracy through proper usage
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">
                          Build internal expertise to reduce dependency on external support
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">
                          Achieve HubSpot certifications to validate team competency
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div>
                  <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 sticky top-8">
                    <h3 className="headline text-xl text-gray-900 mb-6">Training Programs</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">New User Onboarding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">Sales Hub Mastery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">Marketing Hub Excellence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">Service Hub Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">Reporting & Analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="body-copy text-gray-700">Workflow Automation</span>
                      </li>
                    </ul>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <h3 className="headline text-xl text-gray-900 mb-4">Ready to empower your team?</h3>
                      <p className="body-copy text-gray-700 mb-6 leading-relaxed">
                        Contact us today to discuss your training needs and create a customized program for your team.
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

          {/* Benefits Grid */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                  Comprehensive HubSpot Training Solutions
                </h2>
                <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  From basic platform navigation to advanced automation strategies, our training programs ensure your
                  team maximizes HubSpot's potential and drives measurable business results.
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

          {/* Approach Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                  Our Training Implementation Approach
                </h2>
                <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  We follow a proven methodology to ensure your team training delivers maximum value and drives
                  sustainable platform adoption across your organization.
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

          {/* Challenges Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">
                  Common Training Challenges We Solve
                </h2>
                <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Every organization faces unique training obstacles. Here is how we transform common HubSpot adoption
                  challenges into competitive advantages through targeted training.
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

          {/* CTA Section */}
          <GlobalCTA
            title="Empower Your Team to Drive Results"
            description="Stop struggling with low platform adoption and underutilized features. Our comprehensive HubSpot training programs provide the knowledge and confidence your team needs to maximize your investment and achieve measurable business growth."
            buttonText="Get Your Training Assessment"
            buttonLink="/#operations-assessment"
          />
        </main>

        {/* Footer */}
        <GlobalFooter />
      </div>
    </>
  )
}
