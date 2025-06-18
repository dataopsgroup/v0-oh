"use client"

import { CheckCircle, Users, Target, TrendingUp, Clock, DollarSign, AlertTriangle } from "lucide-react"

export default function HubSpotExpertGuide() {
  return (
    <div className="container mx-auto py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">The Ultimate Guide to Hiring a HubSpot Expert</h1>
        <p className="text-gray-600 mb-8">
          Everything you need to know to find, evaluate, and hire the perfect HubSpot expert for your business.
        </p>
        <button
          onClick={() => {
            const link = document.createElement("a")
            link.href = "/hubspot-expert-guide.pdf"
            link.download = "Ultimate-Guide-to-Hiring-HubSpot-Expert.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          className="inline-flex items-center gap-2 bg-[#14213D] hover:bg-[#0f1a2e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Get the PDF
        </button>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-[#f8f9fa] border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="#introduction"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              1. Introduction
            </a>
            <a
              href="#understanding-hubspot"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              2. Understanding HubSpot Expertise
            </a>
            <a
              href="#independent-vs-agency"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              3. Independent Experts vs. Agencies
            </a>
            <a
              href="#types-of-expertise"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              4. Types of HubSpot Expertise
            </a>
            <a
              href="#evaluating-experts"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              5. Evaluating HubSpot Experts
            </a>
            <a
              href="#pricing-models"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              6. Pricing Models and Budgeting
            </a>
            <a
              href="#interview-questions"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              7. Essential Interview Questions
            </a>
            <a
              href="#avoiding-pitfalls"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              8. Avoiding Common Pitfalls
            </a>
            <a
              href="#success-strategies"
              className="block text-[#14213D] hover:text-[#FBB03B] hover:underline transition-colors"
            >
              9. Strategies for Success
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          HubSpot is a powerful platform, but maximizing its potential requires the right expertise. This guide provides
          a comprehensive overview of how to hire a HubSpot expert who can help you achieve your business goals.
        </p>
        <div className="bg-[#f8f9fa] border border-[#e6e6e6] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#14213D] mb-2">What You'll Learn</h3>
          <ul className="text-[#14213D] space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
              <span>How to identify the right type of HubSpot expertise for your needs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
              <span>The key differences between agencies and independent experts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
              <span>How to evaluate qualifications and experience effectively</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
              <span>Pricing models and what to expect in terms of investment</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
              <span>Essential questions to ask during the hiring process</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Understanding HubSpot Expertise */}
      <section id="understanding-hubspot" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">2. Understanding HubSpot Expertise</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Before you start your search, it's crucial to understand the different areas of HubSpot expertise. This will
          help you identify the right person or team for your specific needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              HubSpot Marketing Hub
            </h3>
            <p className="text-gray-600">
              Experts in marketing automation, email marketing, SEO, content marketing, and social media management.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              HubSpot Sales Hub
            </h3>
            <p className="text-gray-600">
              Specialists in sales automation, CRM implementation, lead management, and sales process optimization.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              HubSpot Service Hub
            </h3>
            <p className="text-gray-600">
              Professionals in customer service automation, ticketing systems, knowledge base creation, and customer
              feedback management.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              HubSpot CMS Hub
            </h3>
            <p className="text-gray-600">
              Developers and designers specializing in website development, content creation, and website optimization
              within the HubSpot CMS.
            </p>
          </div>
        </div>
      </section>

      {/* Independent Experts vs. Agencies */}
      <section id="independent-vs-agency" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">3. Independent Experts vs. Agencies</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          When hiring HubSpot expertise, you have two main options: independent experts and agencies. Each has its own
          advantages and disadvantages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#14213D] mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Independent HubSpot Experts
            </h3>
            <div className="space-y-3 text-[#14213D]">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Direct communication with the person doing the work</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Often more cost-effective for specific projects</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Specialized expertise in specific HubSpot areas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Flexible and agile approach to problem-solving</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Personal investment in your project's success</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#14213D] mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              HubSpot Partner Agencies
            </h3>
            <div className="space-y-3 text-[#14213D]">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Team of specialists with diverse skill sets</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Established processes and project management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Comprehensive service offerings</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Backup resources and continuity planning</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBB03B]" />
                <span>Formal contracts and service level agreements</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f9fa] border border-[#e6e6e6] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#14213D] mb-3">Which Should You Choose?</h3>
          <p className="text-gray-700 mb-4">
            The choice between an independent expert and an agency depends on your specific needs, budget, and project
            complexity:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong className="text-[#14213D]">Choose an Independent Expert if:</strong> You have a specific,
              well-defined project, prefer direct communication, want specialized expertise, or are working with a
              limited budget.
            </li>
            <li>
              <strong className="text-[#14213D]">Choose an Agency if:</strong> You need comprehensive services, have
              complex multi-faceted projects, require ongoing support, or prefer the security of working with an
              established organization.
            </li>
          </ul>
        </div>
      </section>

      {/* Types of HubSpot Expertise */}
      <section id="types-of-expertise" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">4. Types of HubSpot Expertise</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          HubSpot is a vast platform with many different tools and features. Here are some of the most common areas of
          expertise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[#14213D] mb-3">Marketing Automation</h3>
            <p className="text-gray-600 text-sm mb-3">
              Specialists in creating sophisticated marketing workflows, lead nurturing campaigns, and automated
              marketing processes.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Workflow creation and optimization</li>
              <li>• Lead scoring and segmentation</li>
              <li>• Email marketing campaigns</li>
              <li>• Landing page optimization</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[#14213D] mb-3">Sales Enablement</h3>
            <p className="text-gray-600 text-sm mb-3">
              Experts in equipping sales teams with the tools, content, and training they need to close more deals.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Sales process automation</li>
              <li>• CRM customization</li>
              <li>• Sales content creation</li>
              <li>• Sales training and coaching</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[#14213D] mb-3">CRM Implementation</h3>
            <p className="text-gray-600 text-sm mb-3">
              Specialists in setting up and customizing HubSpot CRM to meet the specific needs of a business.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Data migration and integration</li>
              <li>• Custom field creation</li>
              <li>• Reporting and analytics setup</li>
              <li>• User training and support</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[#14213D] mb-3">Content Marketing</h3>
            <p className="text-gray-600 text-sm mb-3">
              Experts in creating and distributing valuable, relevant, and consistent content to attract and engage a
              target audience.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Blog post writing</li>
              <li>• Ebook and whitepaper creation</li>
              <li>• Infographic design</li>
              <li>• Content promotion and distribution</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[#14213D] mb-3">SEO Optimization</h3>
            <p className="text-gray-600 text-sm mb-3">
              Specialists in improving the visibility of a website or web page in search engine results pages (SERPs).
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Keyword research</li>
              <li>• On-page optimization</li>
              <li>• Off-page optimization</li>
              <li>• Technical SEO</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[#14213D] mb-3">Web Design and Development</h3>
            <p className="text-gray-600 text-sm mb-3">
              Professionals in designing, building, and maintaining websites using the HubSpot CMS.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Website design and development</li>
              <li>• Theme customization</li>
              <li>• Module creation</li>
              <li>• Website maintenance and support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Evaluating HubSpot Experts */}
      <section id="evaluating-experts" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">5. Evaluating HubSpot Experts</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Evaluating HubSpot experts requires a thorough assessment of their skills, experience, and fit with your
          company culture.
        </p>
        <div className="bg-[#fff8f0] border-l-4 border-[#FBB03B] p-6">
          <h3 className="text-xl font-semibold text-[#14213D] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Critical Situations Requiring Immediate Expert Help
          </h3>
          <p className="text-gray-700">
            If you're facing a critical situation, such as a website outage, a data breach, or a sudden drop in leads,
            you need to find an expert who can provide immediate assistance.
          </p>
        </div>
      </section>

      {/* Pricing Models and Budgeting */}
      <section id="pricing-models" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">6. Pricing Models and Budgeting</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Understanding the different pricing models used by HubSpot experts is essential for budgeting and negotiating
          fair rates.
        </p>
        <div className="bg-[#fff8f0] border-l-4 border-[#FBB03B] p-6">
          <h3 className="text-xl font-semibold text-[#14213D] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Hidden Costs to Watch Out For
          </h3>
          <p className="text-gray-700">
            Be aware of potential hidden costs, such as travel expenses, software licenses, and training fees. Always
            ask for a detailed breakdown of all costs before signing a contract.
          </p>
        </div>
      </section>

      {/* Essential Interview Questions */}
      <section id="interview-questions" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">7. Essential Interview Questions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Asking the right questions during the interview process is crucial for assessing a candidate's skills,
          experience, and fit with your company.
        </p>
        <div className="bg-[#fff8f0] border-l-4 border-[#FBB03B] p-6">
          <h3 className="text-xl font-semibold text-[#14213D] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Red Flags to Watch Out For
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Vague answers or unwillingness to provide specific examples</li>
            <li>Lack of understanding of your business goals and challenges</li>
            <li>Unrealistic promises or guarantees</li>
            <li>Negative reviews or complaints from previous clients</li>
          </ul>
        </div>
      </section>

      {/* Avoiding Common Pitfalls */}
      <section id="avoiding-pitfalls" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">8. Avoiding Common Pitfalls</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Hiring a HubSpot expert can be a complex process, and there are several common pitfalls to avoid.
        </p>
        <div className="bg-[#fff8f0] border-l-4 border-[#FBB03B] p-6">
          <h3 className="text-xl font-semibold text-[#14213D] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Common Mistakes to Avoid
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Not defining your goals and objectives clearly</li>
            <li>Failing to check references and verify credentials</li>
            <li>Not having a clear contract or service agreement</li>
            <li>Micromanaging the expert or not giving them enough autonomy</li>
          </ul>
        </div>
      </section>

      {/* Strategies for Success */}
      <section id="success-strategies" className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">9. Strategies for Success</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          To ensure a successful partnership with your HubSpot expert, follow these strategies:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Communicate your goals and expectations clearly</li>
          <li>Provide regular feedback and updates</li>
          <li>Be open to new ideas and approaches</li>
          <li>Track your progress and measure your results</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className="bg-[#f8f9fa] border border-[#e6e6e6] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-[#14213D] mb-4">Ready to Transform Your HubSpot Experience?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            You now have all the tools and knowledge needed to find, evaluate, and hire the perfect HubSpot expert for
            your business. The right partnership can transform your marketing, sales, and customer service operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#14213D]">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FBB03B]" />
              Comprehensive evaluation framework
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FBB03B]" />
              Essential questions to ask
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FBB03B]" />
              Common pitfalls to avoid
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FBB03B]" />
              Success strategies and best practices
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
