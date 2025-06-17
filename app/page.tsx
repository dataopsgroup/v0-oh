"use client"

import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ArrowRight,
  Database,
  TrendingUp,
  LineChart,
  BookOpen,
  Megaphone,
  Settings,
  BarChart3,
  Users,
  Cog,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function DataOpsHomepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                {/* Bulletproof text-based logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 headline">DataOps Group</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                  Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  Approach
                </Link>
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                  Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="body-copy text-blue-600 border-blue-600 hover:bg-blue-50 rounded-none"
              >
                Schedule a Demo
              </Button>
              <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white rounded-none">Contact</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-gray-50 relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-wireframe-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay to control opacity */}
        <div className="absolute inset-0 bg-gray-50 opacity-75"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="subheadline text-sm text-gray-600">PE Portfolio Transformation</p>
                <h1 className="headline text-5xl lg:text-6xl text-gray-900 leading-tight">
                  Turn PE Portfolio
                  <br />
                  Operations Into
                  <br />
                  Profit Drivers
                  <span className="block text-yellow-500 mt-2">in 100 Days</span>
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base rounded-none">
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="body-copy border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-base flex items-center rounded-none"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="subheadline text-sm text-gray-600 mb-4">Our Expertise</p>
              <p className="body-copy text-lg text-gray-700 leading-relaxed">
                We are PE-specialized{" "}
                <Link href="/about" className="text-blue-600 hover:underline">
                  HubSpot experts
                </Link>{" "}
                who transform fragmented systems into unified platforms that drive visibility, streamline reporting,
                improve efficiency, and create the data infrastructure your investors expect.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center body-copy text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  <span>Trusted by 50+ companies</span>
                </li>
                <li className="flex items-center body-copy text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  <span>77% faster EBITDA growth</span>
                </li>
                <li className="flex items-center body-copy text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  <span>3:1 to 5:1 ROI on investment</span>
                </li>
              </ul>
              <div className="space-y-3 mt-6">
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center">
                  Learn more about our proven methodology
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center">
                  and explore our client success stories
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 bg-green-50 p-8 space-y-8">
              <div>
                <p className="subheadline text-sm text-gray-600 mb-4">Proven Results</p>
                <h3 className="headline text-xl text-gray-900">
                  Trusted by 50+ Companies to Rescue Their HubSpot Investments
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-px bg-gray-200">
                <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                  <div className="headline text-3xl text-blue-600">47%</div>
                  <div className="body-copy text-sm text-gray-600">Increased qualified leads</div>
                  <div className="body-copy text-xs text-gray-400">Portfolio company average</div>
                </div>
                <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                  <div className="headline text-3xl text-blue-600">28%</div>
                  <div className="body-copy text-sm text-gray-600">Reduced sales cycle</div>
                  <div className="body-copy text-xs text-gray-400">Portfolio company average</div>
                </div>
                <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                  <div className="headline text-3xl text-blue-600">35%</div>
                  <div className="body-copy text-sm text-gray-600">Improvement in close rates</div>
                  <div className="body-copy text-xs text-gray-400">Portfolio company average</div>
                </div>
              </div>
              <div className="body-copy text-sm text-gray-600">
                Ready to transform your operations? Explore our comprehensive{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  service offerings
                </Link>{" "}
                or learn more about{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  our team
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended for you - IBM Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="subheadline text-sm text-gray-600 mb-4">Recommended for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-gray-200">
            <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 mb-4 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-3">Analytics Assessment</h3>
              <p className="body-copy text-sm text-gray-600 leading-relaxed mb-4">
                5-minute assessment to identify operational gaps and prioritize improvements for maximum impact.
              </p>
              <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-3">Supporting business processes in HR</h3>
              <p className="body-copy text-sm text-gray-600 leading-relaxed mb-4">
                Streamline HR operations with data-driven insights and automated workflows.
              </p>
              <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-purple-100 mb-4 flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-3">Smart Data And Solutions reduces errors by 65%</h3>
              <p className="body-copy text-sm text-gray-600 leading-relaxed mb-4">
                Proven methodology that delivers measurable results for PE portfolio companies.
              </p>
              <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-teal-100 mb-4 flex items-center justify-center">
                <Cog className="h-6 w-6 text-teal-600" strokeWidth={1.5} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-3">
                Explore the capabilities of our product-fit agents at the edge
              </h3>
              <p className="body-copy text-sm text-gray-600 leading-relaxed mb-4">
                Advanced analytics and automation capabilities for modern data operations.
              </p>
              <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <p className="subheadline text-sm text-gray-600">Assessment Tools</p>
            <h2 className="headline text-3xl text-gray-900 max-w-3xl mx-auto">
              Wondering if Your Operations Are PE-Ready?
            </h2>
            <p className="body-copy text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Most portfolio companies discover critical operational gaps only after investor reviews. Our assessment
              tools identify these blind spots and visualize your improvement potential before they impact your
              valuation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <h3 className="headline text-xl text-gray-900 mb-4">Operations Assessment</h3>
              <p className="body-copy text-gray-700 leading-relaxed mb-6">
                5-minute assessment to identify operational gaps and prioritize improvements for maximum impact.
              </p>
              <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-none">
                Access PE Readiness
              </Button>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <h3 className="headline text-xl text-gray-900 mb-4">ROI Calculator</h3>
              <p className="body-copy text-gray-700 leading-relaxed mb-6">
                Calculate potential revenue gains and operational savings from optimizing your tech stack.
              </p>
              <Button className="body-copy bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-none">
                Calculate ROI
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="body-copy text-gray-700">
              Join 50+ portfolio companies that have already strengthened their operational foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Technology and consulting - IBM Style Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="headline text-3xl text-gray-900 mb-4">Technology and consulting</h2>
            <p className="body-copy text-gray-700 max-w-3xl leading-relaxed">
              From{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                next-generation AI
              </Link>{" "}
              to cutting edge{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                hybrid cloud solutions
              </Link>{" "}
              to the deep expertise of{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                DataOps Consulting
              </Link>
              , DataOps has what it takes to help you reinvent how your business works in the age of AI.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-px bg-gray-200">
            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <Database className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">AI solutions</h3>
              <p className="body-copy text-sm text-gray-600">IT automation</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <LineChart className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">AI models</h3>
              <p className="body-copy text-sm text-gray-600">Compute and servers</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <Settings className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">Consulting</h3>
              <p className="body-copy text-sm text-gray-600">Databases</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">Analytics</h3>
              <p className="body-copy text-sm text-gray-600">Security and Identity</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">Training</h3>
              <p className="body-copy text-sm text-gray-600">HubSpot Implementation</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <Megaphone className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">Marketing Operations</h3>
              <p className="body-copy text-sm text-gray-600">RevOps Solutions</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">PE Value Creation</h3>
              <p className="body-copy text-sm text-gray-600">Portfolio Optimization</p>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />
              </div>
              <h3 className="headline text-lg text-gray-900 mb-2">Custom Solutions</h3>
              <p className="body-copy text-sm text-gray-600">Tailored Implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <p className="subheadline text-sm text-gray-600">How We Work</p>
            <h2 className="headline text-3xl text-gray-900">Our Process</h2>
            <p className="body-copy text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A systematic process that delivers results quickly. Learn about our comprehensive{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                methodology
              </Link>{" "}
              and how we approach{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                complex business problems
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="space-y-4">
                <h3 className="headline text-xl text-gray-900">Step 1: PE-Standard Assessment</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  We analyze your current operations, identify inefficiencies, and close gaps to achieve the level of
                  visibility investors demand.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="space-y-4">
                <h3 className="headline text-xl text-gray-900">Step 2: Rapid Implementation</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  We deploy proven playbooks and custom solutions for PE portfolio analytics and investor reporting.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="space-y-4">
                <h3 className="headline text-xl text-gray-900">Step 3: Portfolio Optimization</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  We ensure long-term success with ongoing support and strategic guidance to drive portfolio value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="subheadline text-sm text-blue-100">Ready to Get Started?</p>
              <h2 className="headline text-3xl text-white">Ready to Transform Your Operations?</h2>
            </div>
            <p className="body-copy text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join 50+ companies that have already transformed their business operations with DataOps Group. Our proven
              methodology helps PE portfolio companies increase valuation and drive growth through data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
              <Button className="body-copy bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base rounded-none w-full sm:w-auto">
                Get Your Free Assessment
              </Button>
              <Button
                variant="outline"
                className="body-copy border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base rounded-none w-full sm:w-auto transition-colors duration-200"
              >
                Explore our services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="mb-6">
                {/* Bulletproof text-based logo for footer */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">D</span>
                  </div>
                  <span className="text-xl font-bold text-white headline">DataOps Group</span>
                </div>
              </div>
              <p className="body-copy text-sm text-gray-400 leading-relaxed">
                We help PE-backed companies transform their operations and accelerate growth through data.
              </p>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Analytics & BI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    DataOps Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    HubSpot Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
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
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    HubSpot Guides
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
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
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
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="body-copy text-sm text-gray-400">
                <p>© 2023 DataOps Group. All rights reserved.</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
                <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
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
