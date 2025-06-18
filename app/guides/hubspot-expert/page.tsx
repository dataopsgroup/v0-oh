import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"
import {
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Award,
  AlertTriangle,
  MessageSquare,
} from "lucide-react"

const HubSpotExpertGuide = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://yourdomain.com/guides/hubspot-expert#article",
                headline: "The Ultimate Guide to Hiring a HubSpot Expert",
                description:
                  "Everything you need to know to find, evaluate, and hire the perfect HubSpot expert for your business growth and success.",
                image: "https://yourdomain.com/images/hubspot-expert-guide.jpg",
                author: {
                  "@type": "Organization",
                  name: "Your Company Name",
                  url: "https://yourdomain.com",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Your Company Name",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://yourdomain.com/images/logo.png",
                  },
                },
                datePublished: "2024-01-15",
                dateModified: "2024-01-15",
                articleSection: "Business Guides",
                wordCount: 8500,
                timeRequired: "PT15M",
                audience: {
                  "@type": "Audience",
                  audienceType: "Business Leaders",
                },
                about: [
                  {
                    "@type": "Thing",
                    name: "HubSpot",
                  },
                  {
                    "@type": "Thing",
                    name: "Marketing Automation",
                  },
                  {
                    "@type": "Thing",
                    name: "CRM Implementation",
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": "https://yourdomain.com/guides/hubspot-expert#howto",
                name: "How to Hire a HubSpot Expert",
                description:
                  "A step-by-step process for finding and hiring the right HubSpot expert for your business needs.",
                image: "https://yourdomain.com/images/hiring-process.jpg",
                totalTime: "PT2W",
                estimatedCost: {
                  "@type": "MonetaryAmount",
                  currency: "USD",
                  value: "15000",
                },
                supply: [
                  {
                    "@type": "HowToSupply",
                    name: "Project Requirements Document",
                  },
                  {
                    "@type": "HowToSupply",
                    name: "Budget Range",
                  },
                  {
                    "@type": "HowToSupply",
                    name: "Timeline Expectations",
                  },
                ],
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Define Your Requirements",
                    text: "Clearly outline your HubSpot challenges, timeline, budget, and success criteria.",
                    url: "https://yourdomain.com/guides/hubspot-expert#hiring-process",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Source Candidates",
                    text: "Find potential experts through HubSpot Solutions Directory, LinkedIn, referrals, and freelance platforms.",
                    url: "https://yourdomain.com/guides/hubspot-expert#hiring-process",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Conduct Interviews",
                    text: "Assess technical skills, project approach, and cultural fit through structured interviews.",
                    url: "https://yourdomain.com/guides/hubspot-expert#hiring-process",
                  },
                  {
                    "@type": "HowToStep",
                    position: 4,
                    name: "Request Proposals",
                    text: "Get detailed proposals with scope, timeline, pricing, and success metrics.",
                    url: "https://yourdomain.com/guides/hubspot-expert#hiring-process",
                  },
                  {
                    "@type": "HowToStep",
                    position: 5,
                    name: "Make Your Decision",
                    text: "Evaluate candidates based on technical expertise, communication, track record, and value.",
                    url: "https://yourdomain.com/guides/hubspot-expert#hiring-process",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://yourdomain.com/guides/hubspot-expert#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can you walk me through your approach to my specific HubSpot challenge?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Look for structured thinking, understanding of HubSpot capabilities, consideration of your business context, and realistic timeline expectations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What's the most complex HubSpot project you've worked on?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Listen for problem-solving skills, technical depth, ability to handle complexity, and lessons learned from difficult situations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you stay current with HubSpot's updates and new features?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Look for commitment to continuous learning, awareness of recent changes, participation in HubSpot community, and proactive approach to platform evolution.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you handle scope changes during a project?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Look for flexibility, clear change management process, transparent communication about impacts, and collaborative problem-solving approach.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you measure the success of your HubSpot implementations?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Look for focus on business outcomes, understanding of key metrics, ability to tie technical work to business results, and data-driven approach.",
                    },
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://yourdomain.com/guides/hubspot-expert",
                url: "https://yourdomain.com/guides/hubspot-expert",
                name: "The Ultimate Guide to Hiring a HubSpot Expert",
                description:
                  "Everything you need to know to find, evaluate, and hire the perfect HubSpot expert for your business growth and success.",
                inLanguage: "en-US",
                isPartOf: {
                  "@type": "WebSite",
                  "@id": "https://yourdomain.com",
                  name: "Your Company Name",
                  url: "https://yourdomain.com",
                },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://yourdomain.com",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Guides",
                      item: "https://yourdomain.com/guides",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "How to Hire a HubSpot Expert",
                      item: "https://yourdomain.com/guides/hubspot-expert",
                    },
                  ],
                },
                mainEntity: {
                  "@id": "https://yourdomain.com/guides/hubspot-expert#article",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://yourdomain.com/guides/hubspot-expert#case-study-1",
                name: "SaaS Startup Success Story",
                description:
                  "B2B Software Company achieved 300% lead generation increase through HubSpot expert implementation.",
                foundingDate: "2020",
                numberOfEmployees: "50",
                industry: "Software",
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Organization",
                    name: "SaaS Startup",
                  },
                  reviewBody:
                    "HubSpot expert implementation resulted in 300% increase in qualified leads, 45% reduction in sales cycle, and $2.1M additional revenue in 12 months.",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://yourdomain.com/guides/hubspot-expert#case-study-2",
                name: "Manufacturing Company Digital Transformation",
                description:
                  "Industrial Equipment Manufacturer completed full digital transformation with HubSpot expert guidance.",
                foundingDate: "1985",
                numberOfEmployees: "200",
                industry: "Manufacturing",
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Organization",
                    name: "Manufacturing Company",
                  },
                  reviewBody:
                    "Complete digital transformation resulted in 85% increase in online leads, 60% improvement in sales efficiency, and $5.8M new revenue from digital channels.",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://yourdomain.com/guides/hubspot-expert#case-study-3",
                name: "E-commerce Brand Customer Retention",
                description:
                  "Direct-to-Consumer Brand revolutionized customer retention with HubSpot expert optimization.",
                foundingDate: "2018",
                numberOfEmployees: "75",
                industry: "E-commerce",
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Organization",
                    name: "E-commerce Brand",
                  },
                  reviewBody:
                    "Customer retention optimization resulted in 40% increase in customer LTV, 25% reduction in churn rate, and $3.2M additional retention revenue.",
                },
              },
            ],
          }),
        }}
      />
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                The Ultimate Guide to Hiring a HubSpot Expert
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Everything you need to know to find, evaluate, and hire the perfect HubSpot expert for your business
                growth and success.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  For Business Leaders
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Comprehensive Guide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="space-y-2">
                <a
                  href="#introduction"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Introduction
                </a>
                <a
                  href="#experts-vs-agencies"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Experts vs. Agencies
                </a>
                <a
                  href="#types-of-expertise"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Types of Expertise
                </a>
                <a
                  href="#beyond-agency-safety"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Beyond Agency Safety
                </a>
                <a
                  href="#when-you-need-expert"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  When You Need an Expert
                </a>
              </div>
              <div className="space-y-2">
                <a
                  href="#evaluating-qualifications"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Evaluating Qualifications
                </a>
                <a
                  href="#pricing-guide"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Pricing Guide
                </a>
                <a
                  href="#hiring-process"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Hiring Process
                </a>
                <a
                  href="#essential-questions"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Essential Questions
                </a>
                <a
                  href="#maximizing-partnership"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Maximizing Partnership
                </a>
              </div>
              <div className="space-y-2">
                <a
                  href="#success-stories"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Success Stories
                </a>
                <a
                  href="#common-pitfalls"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Common Pitfalls
                </a>
                <a
                  href="#final-decision"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Making Your Final Decision
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section id="introduction" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  In today's competitive business landscape, HubSpot has become the go-to platform for companies looking
                  to streamline their marketing, sales, and customer service operations. However, maximizing the
                  potential of this powerful platform requires expertise that goes far beyond basic setup and
                  configuration.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Whether you're implementing HubSpot for the first time, looking to optimize your existing setup, or
                  planning a complex integration project, hiring the right HubSpot expert can be the difference between
                  success and frustration. This comprehensive guide will walk you through everything you need to know to
                  make an informed decision.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What You'll Learn</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      How to identify the right type of HubSpot expertise for your needs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      The key differences between agencies and independent experts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      How to evaluate qualifications and experience effectively
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      Pricing models and what to expect in terms of investment
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      Essential questions to ask during the hiring process
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experts vs Agencies */}
            <section id="experts-vs-agencies" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                HubSpot Experts vs. Agencies: Making the Right Choice
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Independent HubSpot Experts
                  </h3>
                  <div className="space-y-3 text-green-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Direct communication with the person doing the work</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Often more cost-effective for specific projects</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Specialized expertise in specific HubSpot areas</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Flexible and agile approach to problem-solving</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Personal investment in your project's success</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    HubSpot Partner Agencies
                  </h3>
                  <div className="space-y-3 text-blue-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Team of specialists with diverse skill sets</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Established processes and project management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive service offerings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Backup resources and continuity planning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Formal contracts and service level agreements</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Which Should You Choose?</h3>
                <p className="text-gray-700 mb-4">
                  The choice between an independent expert and an agency depends on your specific needs, budget, and
                  project complexity:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Choose an Independent Expert if:</strong> You have a specific, well-defined project, prefer
                    direct communication, want specialized expertise, or are working with a limited budget.
                  </li>
                  <li>
                    <strong>Choose an Agency if:</strong> You need comprehensive services, have complex multi-faceted
                    projects, require ongoing support, or prefer the security of working with an established
                    organization.
                  </li>
                </ul>
              </div>
            </section>

            {/* Types of Expertise */}
            <section id="types-of-expertise" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of HubSpot Expertise</h2>
              <p className="text-gray-700 mb-8 text-lg">
                HubSpot expertise spans multiple disciplines. Understanding these different areas will help you identify
                the right specialist for your needs.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Automation</h3>
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
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Sales Enablement</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Experts in configuring HubSpot's CRM and sales tools to maximize sales team productivity and
                    effectiveness.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• CRM setup and customization</li>
                    <li>• Sales pipeline optimization</li>
                    <li>• Deal tracking and forecasting</li>
                    <li>• Sales automation workflows</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Service</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Specialists in implementing HubSpot's Service Hub to improve customer satisfaction and support
                    efficiency.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Ticketing system setup</li>
                    <li>• Knowledge base creation</li>
                    <li>• Customer feedback systems</li>
                    <li>• Service automation</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Integrations & APIs</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Technical experts who can connect HubSpot with other systems and create custom integrations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Third-party integrations</li>
                    <li>• Custom API development</li>
                    <li>• Data migration and syncing</li>
                    <li>• Webhook configurations</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategy & Consulting</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    High-level consultants who help develop comprehensive HubSpot strategies aligned with business
                    goals.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Platform strategy development</li>
                    <li>• Process optimization</li>
                    <li>• Team training and adoption</li>
                    <li>• Performance analysis</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Revenue Operations</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Specialists in aligning marketing, sales, and customer success operations for optimal revenue
                    growth.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Revenue attribution modeling</li>
                    <li>• Cross-team process alignment</li>
                    <li>• Performance dashboards</li>
                    <li>• Growth optimization</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Beyond Agency Safety */}
            <section id="beyond-agency-safety" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Beyond Agency Safety: The Independent Expert Advantage
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                While agencies offer perceived safety through established processes and teams, independent HubSpot
                experts often provide unique advantages that can be more valuable for your specific situation.
              </p>
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Direct Access to Expertise</h3>
                  <p className="text-blue-800 mb-4">
                    When you hire an independent expert, you're getting direct access to the person who will actually be
                    doing the work. This eliminates the communication layers often found in agencies and ensures that
                    your specific needs and concerns are heard and addressed directly.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">With Agencies:</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Account manager → Project manager → Specialist</li>
                        <li>• Multiple handoffs and potential miscommunication</li>
                        <li>• Junior staff may handle day-to-day work</li>
                        <li>• Less flexibility in approach and timeline</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">With Independent Experts:</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Direct communication with the expert</li>
                        <li>• Clear understanding of your requirements</li>
                        <li>• Senior-level expertise on every task</li>
                        <li>• Agile adaptation to changing needs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-green-900 mb-4">Specialized Deep Expertise</h3>
                  <p className="text-green-800 mb-4">
                    Independent experts often specialize in specific areas of HubSpot, developing deep expertise that
                    surpasses what generalist agency teams can offer. This specialization can be crucial for complex or
                    unique implementations.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Example Scenarios Where Specialization Matters:
                    </h4>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Complex API integrations with enterprise software</li>
                      <li>• Advanced marketing automation for B2B SaaS companies</li>
                      <li>• Custom reporting and analytics implementations</li>
                      <li>• Industry-specific compliance requirements</li>
                      <li>• Large-scale data migrations and cleanup projects</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">Cost-Effectiveness and Value</h3>
                  <p className="text-purple-800 mb-4">
                    Independent experts typically offer better value for money, especially for well-defined projects.
                    Without agency overhead, you're paying directly for expertise rather than administrative costs,
                    office space, and profit margins.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Agency Costs Include:</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Office overhead</li>
                        <li>• Administrative staff</li>
                        <li>• Sales and marketing</li>
                        <li>• Profit margins</li>
                        <li>• Account management</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Expert Costs Focus On:</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Direct expertise</li>
                        <li>• Project execution</li>
                        <li>• Results delivery</li>
                        <li>• Minimal overhead</li>
                        <li>• Efficient processes</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Typical Savings:</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• 20-40% cost reduction</li>
                        <li>• Faster project completion</li>
                        <li>• No minimum retainers</li>
                        <li>• Flexible engagement models</li>
                        <li>• Pay for results, not overhead</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* When You Need an Expert */}
            <section id="when-you-need-expert" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">When You Need a HubSpot Expert</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Recognizing the right time to bring in a HubSpot expert can save you time, money, and frustration. Here
                are the key scenarios where expert help becomes invaluable.
              </p>

              <div className="space-y-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Critical Situations Requiring Immediate Expert Help
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Data Issues:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Duplicate contacts overwhelming your database</li>
                        <li>• Data corruption from failed imports</li>
                        <li>• Integration sync errors causing data inconsistencies</li>
                        <li>• Lost or missing historical data</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">System Failures:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Workflows not triggering or functioning incorrectly</li>
                        <li>• Email deliverability problems</li>
                        <li>• Integration breakdowns affecting business operations</li>
                        <li>• Performance issues slowing down your team</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Growth-Driven Scenarios</h3>
                    <ul className="text-blue-800 space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Scaling Operations:</strong> Your team has outgrown basic HubSpot usage and needs
                          advanced automation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>New Market Entry:</strong> Expanding to new markets requiring different processes and
                          workflows
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Product Launches:</strong> Need sophisticated campaigns and tracking for new product
                          introductions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Team Expansion:</strong> Rapid hiring requires streamlined onboarding and training
                          processes
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Optimization Opportunities</h3>
                    <ul className="text-green-800 space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Low Conversion Rates:</strong> Your current setup isn't generating the leads or sales
                          you expected
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Manual Processes:</strong> Your team spends too much time on repetitive tasks that
                          could be automated
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Poor Data Quality:</strong> Inconsistent or incomplete data is hampering your
                          marketing and sales efforts
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Reporting Gaps:</strong> You lack the insights needed to make informed business
                          decisions
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">Strategic Initiatives</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Digital Transformation:</h4>
                      <p className="text-yellow-700 text-sm">
                        Moving from traditional marketing and sales methods to a fully integrated digital approach using
                        HubSpot as the central platform.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Revenue Operations:</h4>
                      <p className="text-yellow-700 text-sm">
                        Aligning marketing, sales, and customer success teams with unified processes, metrics, and
                        technology stack.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Compliance Requirements:</h4>
                      <p className="text-yellow-700 text-sm">
                        Implementing GDPR, CCPA, or industry-specific compliance measures within your HubSpot instance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Evaluating Qualifications */}
            <section id="evaluating-qualifications" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Evaluating HubSpot Expert Qualifications</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Not all HubSpot experts are created equal. Here's how to assess their qualifications and ensure you're
                hiring someone who can deliver results.
              </p>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">HubSpot Certifications and Credentials</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Essential Certifications:</h4>
                      <ul className="text-blue-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>HubSpot Marketing Software:</strong> Core marketing platform knowledge
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>HubSpot Sales Software:</strong> CRM and sales tool expertise
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>HubSpot Service Software:</strong> Customer service platform skills
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>HubSpot CMS:</strong> Website and content management
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Advanced Certifications:</h4>
                      <ul className="text-blue-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>HubSpot Architecture:</strong> Advanced technical implementation
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Revenue Operations:</strong> Cross-functional process optimization
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Solutions Partner Status:</strong> Highest level of HubSpot recognition
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Custom Integration:</strong> API and technical integration expertise
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Pro Tip:</strong> While certifications are important, they should be current (renewed
                      within the last year) and relevant to your specific needs. A specialist with deep expertise in one
                      area may be more valuable than someone with many general certifications.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-green-900 mb-6">Experience and Track Record</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Years of Experience:</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>
                          <strong>1-2 years:</strong> Basic implementations, simple workflows
                        </li>
                        <li>
                          <strong>3-5 years:</strong> Complex projects, integrations, optimization
                        </li>
                        <li>
                          <strong>5+ years:</strong> Strategic consulting, enterprise implementations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Project Complexity:</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• Multi-hub implementations</li>
                        <li>• Large-scale data migrations</li>
                        <li>• Custom API integrations</li>
                        <li>• Enterprise-level projects</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Industry Experience:</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• Your specific industry knowledge</li>
                        <li>• Regulatory compliance experience</li>
                        <li>• Similar business model expertise</li>
                        <li>• Relevant use case examples</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-6">Portfolio and Case Studies</h3>
                  <p className="text-purple-800 mb-4">
                    A strong portfolio should demonstrate not just technical skills, but business impact and
                    problem-solving ability.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">What to Look For:</h4>
                      <ul className="text-purple-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Detailed case studies with measurable results</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Before/after scenarios showing improvement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Screenshots or demos of actual work</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Client testimonials and references</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Variety of project types and industries</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">Red Flags:</h4>
                      <ul className="text-purple-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Vague descriptions without specific outcomes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>No measurable results or KPIs mentioned</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Only basic setup projects, no optimization work</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Reluctance to provide references</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Generic templates without customization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Guide */}
            <section id="pricing-guide" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">HubSpot Expert Pricing Guide</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Understanding pricing models and typical rates will help you budget appropriately and evaluate proposals
                effectively.
              </p>

              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Hourly Rates</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-blue-800">Junior (1-2 years):</p>
                        <p className="text-blue-700">$50-$75/hour</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800">Mid-level (3-5 years):</p>
                        <p className="text-blue-700">$75-$125/hour</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800">Senior (5+ years):</p>
                        <p className="text-blue-700">$125-$200/hour</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800">Specialist/Consultant:</p>
                        <p className="text-blue-700">$150-$300/hour</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Project-Based</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-green-800">Basic Setup:</p>
                        <p className="text-green-700">$2,000-$5,000</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">Marketing Automation:</p>
                        <p className="text-green-700">$5,000-$15,000</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">CRM Implementation:</p>
                        <p className="text-green-700">$8,000-$25,000</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">Full Platform Migration:</p>
                        <p className="text-green-700">$15,000-$50,000+</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Retainer/Monthly</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-purple-800">Basic Support:</p>
                        <p className="text-purple-700">$1,000-$3,000/month</p>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-800">Ongoing Optimization:</p>
                        <p className="text-purple-700">$3,000-$8,000/month</p>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-800">Strategic Consulting:</p>
                        <p className="text-purple-700">$5,000-$15,000/month</p>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-800">Full Management:</p>
                        <p className="text-purple-700">$8,000-$25,000/month</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">Factors Affecting Pricing</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-3">Project Complexity:</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Number of HubSpot hubs involved</li>
                        <li>• Custom integrations required</li>
                        <li>• Data migration complexity</li>
                        <li>• Workflow sophistication</li>
                        <li>• Reporting and analytics needs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-3">Timeline and Urgency:</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Rush projects (20-50% premium)</li>
                        <li>• Standard timeline projects</li>
                        <li>• Flexible timeline (potential discount)</li>
                        <li>• Ongoing vs. one-time projects</li>
                        <li>• Seasonal demand fluctuations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting the Best Value</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Define Scope Clearly:</h4>
                      <p className="text-gray-600 text-sm">
                        Detailed project requirements help experts provide accurate quotes and prevent scope creep.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Consider Long-term Value:</h4>
                      <p className="text-gray-600 text-sm">
                        A higher upfront investment in quality work often saves money on fixes and optimizations later.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Bundle Related Projects:</h4>
                      <p className="text-gray-600 text-sm">
                        Combining multiple projects with one expert often results in better rates and consistency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hiring Process */}
            <section id="hiring-process" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The HubSpot Expert Hiring Process</h2>
              <p className="text-gray-700 mb-8 text-lg">
                A structured hiring process helps ensure you find the right expert and set clear expectations from the
                start.
              </p>

              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                  <div className="relative flex items-start gap-6 pb-8">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Define Your Requirements</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Key Questions to Answer:</h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• What specific HubSpot challenges are you facing?</li>
                          <li>• Which HubSpot hubs do you need help with?</li>
                          <li>• What's your timeline for completion?</li>
                          <li>• What's your budget range?</li>
                          <li>• Do you need ongoing support or one-time project help?</li>
                          <li>• What does success look like for this project?</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6 pb-8">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Source Candidates</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">Best Sources:</h4>
                          <ul className="text-green-800 text-sm space-y-1">
                            <li>• HubSpot Solutions Directory</li>
                            <li>• LinkedIn and professional networks</li>
                            <li>• Industry referrals and recommendations</li>
                            <li>• HubSpot User Groups and communities</li>
                            <li>• Freelance platforms (Upwork, Toptal)</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-900 mb-2">Initial Screening:</h4>
                          <ul className="text-yellow-800 text-sm space-y-1">
                            <li>• Review portfolios and case studies</li>
                            <li>• Check HubSpot certifications</li>
                            <li>• Verify client testimonials</li>
                            <li>• Assess communication skills</li>
                            <li>• Confirm availability and timeline fit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6 pb-8">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Conduct Interviews</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-900 mb-2">Interview Structure:</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-purple-800 mb-1">Technical Assessment (30 min):</p>
                            <ul className="text-purple-700 space-y-1">
                              <li>• HubSpot knowledge quiz</li>
                              <li>• Problem-solving scenarios</li>
                              <li>• Portfolio walkthrough</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-purple-800 mb-1">Project Discussion (20 min):</p>
                            <ul className="text-purple-700 space-y-1">
                              <li>• Your specific requirements</li>
                              <li>• Proposed approach</li>
                              <li>• Timeline and deliverables</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-purple-800 mb-1">Cultural Fit (10 min):</p>
                            <ul className="text-purple-700 space-y-1">
                              <li>• Communication style</li>
                              <li>• Working preferences</li>
                              <li>• Availability and responsiveness</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6 pb-8">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Request Proposals</h3>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-900 mb-2">Proposal Should Include:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="text-orange-800 text-sm space-y-1">
                            <li>• Detailed project scope and deliverables</li>
                            <li>• Timeline with key milestones</li>
                            <li>• Pricing breakdown and payment terms</li>
                            <li>• Communication and reporting plan</li>
                          </ul>
                          <ul className="text-orange-800 text-sm space-y-1">
                            <li>• Risk assessment and mitigation strategies</li>
                            <li>• Post-project support options</li>
                            <li>• Success metrics and KPIs</li>
                            <li>• References from similar projects</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Make Your Decision</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Evaluation Criteria:</h4>
                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Technical Expertise (30%):</p>
                            <p className="text-gray-600">Relevant skills and experience</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Project Approach (25%):</p>
                            <p className="text-gray-600">Methodology and planning</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Communication (25%):</p>
                            <p className="text-gray-600">Clarity and responsiveness</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Value (20%):</p>
                            <p className="text-gray-600">Price vs. expected outcomes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Essential Questions */}
            <section id="essential-questions" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Essential Questions to Ask HubSpot Experts</h2>
              <p className="text-gray-700 mb-8 text-lg">
                These carefully crafted questions will help you assess expertise, approach, and fit for your specific
                needs.
              </p>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Technical Expertise Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-blue-200 rounded-lg p-4">
                      <p className="font-semibold text-blue-800 mb-2">
                        {'"Can you walk me through your approach to [specific challenge you\'re facing]?"'}
                      </p>
                      <p className="text-blue-700 text-sm">
                        <strong>What to listen for:</strong> Structured thinking, understanding of HubSpot capabilities,
                        consideration of your business context, and realistic timeline expectations.
                      </p>
                    </div>
                    <div className="bg-white border border-blue-200 rounded-lg p-4">
                      <p className="font-semibold text-blue-800 mb-2">
                        {"\"What's the most complex HubSpot project you've worked on, and what made it challenging?\""}
                      </p>
                      <p className="text-blue-700 text-sm">
                        <strong>What to listen for:</strong> Problem-solving skills, technical depth, ability to handle
                        complexity, and lessons learned from difficult situations.
                      </p>
                    </div>
                    <div className="bg-white border border-blue-200 rounded-lg p-4">
                      <p className="font-semibold text-blue-800 mb-2">
                        {'"How do you stay current with HubSpot\'s frequent updates and new features?"'}
                      </p>
                      <p className="text-blue-700 text-sm">
                        <strong>What to listen for:</strong> Commitment to continuous learning, awareness of recent
                        changes, participation in HubSpot community, and proactive approach to platform evolution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Project Management Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <p className="font-semibold text-green-800 mb-2">
                        {'"How do you handle scope changes or unexpected challenges during a project?"'}
                      </p>
                      <p className="text-green-700 text-sm">
                        <strong>What to listen for:</strong> Flexibility and adaptability, clear change management
                        process, transparent communication about impacts, and collaborative problem-solving approach.
                      </p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <p className="font-semibold text-green-800 mb-2">
                        {'"What\'s your typical project timeline for a project like ours?"'}
                      </p>
                      <p className="text-green-700 text-sm">
                        <strong>What to listen for:</strong> Realistic expectations, understanding of project
                        complexity, consideration of your team's availability, and buffer time for testing and
                        revisions.
                      </p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <p className="font-semibold text-green-800 mb-2">
                        {'"How do you ensure knowledge transfer so our team can maintain the work after completion?"'}
                      </p>
                      <p className="text-green-700 text-sm">
                        <strong>What to listen for:</strong> Documentation practices, training approach, ongoing support
                        options, and commitment to empowering your team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    Communication & Working Style Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">
                        {'"How do you prefer to communicate during a project, and how often?"'}
                      </p>
                      <p className="text-purple-700 text-sm">
                        <strong>What to listen for:</strong> Communication preferences that align with your team's
                        style, regular update schedule, and availability for questions or concerns.
                      </p>
                    </div>
                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">
                        {'"Can you provide references from recent clients with similar projects?"'}
                      </p>
                      <p className="text-purple-700 text-sm">
                        <strong>What to listen for:</strong> Willingness to provide references, confidence in past work
                        quality, and ability to maintain client relationships.
                      </p>
                    </div>
                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                      <p className="font-semibold text-purple-800 mb-2">
                        {'"What happens if we\'re not satisfied with the deliverables?"'}
                      </p>
                      <p className="text-purple-700 text-sm">
                        <strong>What to listen for:</strong> Quality assurance process, revision policy, commitment to
                        client satisfaction, and professional approach to conflict resolution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    Business & Results Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-orange-200 rounded-lg p-4">
                      <p className="font-semibold text-orange-800 mb-2">
                        {'"How do you measure the success of your HubSpot implementations?"'}
                      </p>
                      <p className="text-orange-700 text-sm">
                        <strong>What to listen for:</strong> Focus on business outcomes, understanding of key metrics,
                        ability to tie technical work to business results, and data-driven approach.
                      </p>
                    </div>
                    <div className="bg-white border border-orange-200 rounded-lg p-4">
                      <p className="font-semibold text-orange-800 mb-2">
                        {'"What\'s a typical ROI or improvement clients see from your work?"'}
                      </p>
                      <p className="text-orange-700 text-sm">
                        <strong>What to listen for:</strong> Specific examples with quantifiable results, understanding
                        of business impact, realistic expectations, and track record of delivering value.
                      </p>
                    </div>
                    <div className="bg-white border border-orange-200 rounded-lg p-4">
                      <p className="font-semibold text-orange-800 mb-2">
                        {'"How do you ensure the solution will scale as our business grows?"'}
                      </p>
                      <p className="text-orange-700 text-sm">
                        <strong>What to listen for:</strong> Forward-thinking approach, understanding of scalability
                        challenges, flexible architecture design, and long-term strategic thinking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Maximizing Partnership */}
            <section id="maximizing-partnership" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Maximizing Your HubSpot Expert Partnership</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Getting the most value from your HubSpot expert requires active collaboration and clear communication.
                Here's how to build a successful partnership.
              </p>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">Setting Up for Success</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Before the Project Starts:</h4>
                      <ul className="text-blue-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Provide complete access to your HubSpot account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Share relevant documentation and current processes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Identify key stakeholders and decision-makers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Establish clear communication channels and schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Define success metrics and project goals</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">During the Project:</h4>
                      <ul className="text-blue-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Respond promptly to requests for information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Participate actively in scheduled check-ins</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Test deliverables thoroughly and provide feedback</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Communicate changes or new requirements early</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Ask questions when you don't understand something</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-green-900 mb-6">
                    Common Partnership Challenges and Solutions
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-3">Challenge: Scope Creep</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Problem:</strong>
                          </p>
                          <p className="text-green-600 text-sm">
                            Additional requests beyond the original scope lead to delays and budget overruns.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Solution:</strong>
                          </p>
                          <p className="text-green-600 text-sm">
                            Establish a clear change request process with impact assessment for timeline and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-3">Challenge: Communication Gaps</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Problem:</strong>
                          </p>
                          <p className="text-green-600 text-sm">
                            Misunderstandings about requirements or progress lead to rework and frustration.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Solution:</strong>
                          </p>
                          <p className="text-green-600 text-sm">
                            Schedule regular check-ins and document all decisions and changes in writing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-3">Challenge: Unrealistic Expectations</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Problem:</strong>
                          </p>
                          <p className="text-green-600 text-sm">
                            Expecting immediate results or underestimating the complexity of implementation.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Solution:</strong>
                          </p>
                          <p className="text-green-600 text-sm">
                            Set realistic timelines with milestones and educate stakeholders about the process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-6">Building Long-term Value</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-3">Knowledge Transfer</h4>
                      <ul className="text-purple-700 text-sm space-y-2">
                        <li>• Request detailed documentation</li>
                        <li>• Schedule training sessions for your team</li>
                        <li>• Record important processes and workflows</li>
                        <li>• Create maintenance checklists</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-3">Ongoing Relationship</h4>
                      <ul className="text-purple-700 text-sm space-y-2">
                        <li>• Establish periodic review sessions</li>
                        <li>• Plan for future optimization projects</li>
                        <li>• Maintain access for urgent issues</li>
                        <li>• Stay informed about new HubSpot features</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-3">Continuous Improvement</h4>
                      <ul className="text-purple-700 text-sm space-y-2">
                        <li>• Monitor performance metrics regularly</li>
                        <li>• Identify optimization opportunities</li>
                        <li>• Plan for scalability and growth</li>
                        <li>• Stay current with best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories: HubSpot Expert Transformations</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Real examples of how businesses have leveraged HubSpot experts to achieve remarkable results.
              </p>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                        SaaS Startup: 300% Lead Generation Increase
                      </h3>
                      <p className="text-blue-700">B2B Software Company • 50 employees • Series A funding</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">The Challenge:</h4>
                      <p className="text-blue-700 mb-4">
                        A fast-growing SaaS startup was struggling with manual lead qualification and nurturing
                        processes. Their sales team was overwhelmed with unqualified leads, and marketing couldn't
                        effectively track ROI on campaigns.
                      </p>
                      <h4 className="font-semibold text-blue-800 mb-3">The Solution:</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Implemented advanced lead scoring based on behavior and demographics</li>
                        <li>• Created automated nurturing workflows for different buyer personas</li>
                        <li>• Set up comprehensive attribution reporting</li>
                        <li>• Integrated HubSpot with their product analytics platform</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">The Results:</h4>
                      <div className="bg-white border border-blue-200 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-blue-900">300%</p>
                            <p className="text-blue-700 text-sm">Increase in qualified leads</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-blue-900">45%</p>
                            <p className="text-blue-700 text-sm">Reduction in sales cycle</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-blue-900">$2.1M</p>
                            <p className="text-blue-700 text-sm">Additional revenue in 12 months</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-blue-900">8 weeks</p>
                            <p className="text-blue-700 text-sm">Implementation timeline</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-700 text-sm mt-4">
                        <strong>Expert Investment:</strong> $15,000 project cost delivered 140x ROI in the first year.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-green-900 mb-2">
                        Manufacturing Company: Complete Digital Transformation
                      </h3>
                      <p className="text-green-700">
                        Industrial Equipment Manufacturer • 200 employees • Family-owned business
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">The Challenge:</h4>
                      <p className="text-green-700 mb-4">
                        A traditional manufacturing company needed to modernize their sales and marketing processes.
                        They relied heavily on trade shows and referrals, with no digital marketing presence or CRM
                        system.
                      </p>
                      <h4 className="font-semibold text-green-800 mb-3">The Solution:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Migrated from spreadsheets to HubSpot CRM</li>
                        <li>• Built content marketing strategy with technical resources</li>
                        <li>• Implemented lead capture and nurturing for long sales cycles</li>
                        <li>• Created custom dashboards for executive reporting</li>
                        <li>• Trained entire sales and marketing teams</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">The Results:</h4>
                      <div className="bg-white border border-green-200 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-green-900">85%</p>
                            <p className="text-green-700 text-sm">Increase in online leads</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-900">60%</p>
                            <p className="text-green-700 text-sm">Improvement in sales efficiency</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-900">$5.8M</p>
                            <p className="text-green-700 text-sm">New revenue from digital channels</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-900">6 months</p>
                            <p className="text-green-700 text-sm">Full implementation timeline</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm mt-4">
                        <strong>Expert Investment:</strong> $35,000 total project cost including training and ongoing
                        support for 3 months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                        E-commerce Brand: Customer Retention Revolution
                      </h3>
                      <p className="text-purple-700">Direct-to-Consumer Brand • 75 employees • $50M annual revenue</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">The Challenge:</h4>
                      <p className="text-purple-700 mb-4">
                        A successful e-commerce brand was struggling with customer retention and lifetime value. They
                        had strong acquisition but poor post-purchase engagement and high churn rates.
                      </p>
                      <h4 className="font-semibold text-purple-800 mb-3">The Solution:</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Integrated HubSpot with Shopify and customer service platform</li>
                        <li>• Built sophisticated customer journey mapping</li>
                        <li>• Created personalized retention campaigns based on purchase behavior</li>
                        <li>• Implemented NPS tracking and feedback loops</li>
                        <li>• Developed customer health scoring system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">The Results:</h4>
                      <div className="bg-white border border-purple-200 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-purple-900">40%</p>
                            <p className="text-purple-700 text-sm">Increase in customer LTV</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-purple-900">25%</p>
                            <p className="text-purple-700 text-sm">Reduction in churn rate</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-purple-900">$3.2M</p>
                            <p className="text-purple-700 text-sm">Additional retention revenue</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-purple-900">12 weeks</p>
                            <p className="text-purple-700 text-sm">Implementation timeline</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-purple-700 text-sm mt-4">
                        <strong>Expert Investment:</strong> $22,000 project cost with ongoing optimization retainer of
                        $3,000/month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Pitfalls */}
            <section id="common-pitfalls" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Pitfalls When Hiring HubSpot Experts</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Learn from others' mistakes and avoid these common traps that can derail your HubSpot project.
              </p>

              <div className="space-y-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Critical Mistakes to Avoid
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">Choosing Based on Price Alone</h4>
                      <p className="text-red-700 text-sm mb-3">
                        The cheapest option often leads to poor quality work, missed deadlines, and costly fixes later.
                      </p>
                      <div className="bg-white border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm">
                          <strong>Better Approach:</strong> Focus on value and ROI potential rather than just upfront
                          cost.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">Skipping the Discovery Phase</h4>
                      <p className="text-red-700 text-sm mb-3">
                        Jumping straight into implementation without proper planning leads to scope creep and suboptimal
                        results.
                      </p>
                      <div className="bg-white border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm">
                          <strong>Better Approach:</strong> Invest time in thorough requirements gathering and strategic
                          planning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Unrealistic Expectations</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Expecting Instant Results</h4>
                        <p className="text-yellow-700 text-sm">
                          HubSpot implementations need time to show results. Marketing automation and lead nurturing
                          require data collection and optimization cycles.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Underestimating Complexity</h4>
                        <p className="text-yellow-700 text-sm">
                          What seems like a simple request often involves multiple interconnected systems and processes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Assuming Set-and-Forget</h4>
                        <p className="text-yellow-700 text-sm">
                          HubSpot requires ongoing optimization and maintenance to deliver optimal results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">Communication Failures</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Unclear Requirements</h4>
                        <p className="text-orange-700 text-sm">
                          Vague project descriptions lead to misaligned expectations and deliverables that don't meet
                          your needs.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Inadequate Stakeholder Involvement</h4>
                        <p className="text-orange-700 text-sm">
                          Not involving key team members in the planning process results in solutions that don't fit
                          actual workflows.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Poor Change Management</h4>
                        <p className="text-orange-700 text-sm">
                          Failing to prepare your team for new processes leads to poor adoption and resistance to
                          change.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Technical and Strategic Missteps</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Data Quality Issues</h4>
                      <ul className="text-blue-700 text-sm space-y-2">
                        <li>• Not cleaning data before migration</li>
                        <li>• Ignoring duplicate management</li>
                        <li>• Poor data governance practices</li>
                        <li>• Inconsistent data entry standards</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Integration Problems</h4>
                      <ul className="text-blue-700 text-sm space-y-2">
                        <li>• Underestimating integration complexity</li>
                        <li>• Not testing integrations thoroughly</li>
                        <li>• Ignoring data sync requirements</li>
                        <li>• Poor error handling and monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Scalability Oversights</h4>
                      <ul className="text-blue-700 text-sm space-y-2">
                        <li>• Building for current needs only</li>
                        <li>• Not considering growth scenarios</li>
                        <li>• Ignoring performance implications</li>
                        <li>• Inadequate user permission planning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Avoid These Pitfalls</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Due Diligence Checklist:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>✓ Verify certifications and experience</li>
                        <li>✓ Check references from similar projects</li>
                        <li>✓ Review detailed portfolio and case studies</li>
                        <li>✓ Assess communication skills and responsiveness</li>
                        <li>✓ Understand their project methodology</li>
                        <li>✓ Clarify support and maintenance options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Project Success Factors:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>✓ Invest in proper discovery and planning</li>
                        <li>✓ Set realistic timelines and expectations</li>
                        <li>✓ Ensure adequate stakeholder involvement</li>
                        <li>✓ Plan for training and change management</li>
                        <li>✓ Establish clear communication protocols</li>
                        <li>✓ Build in testing and optimization phases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Decision */}
            <section id="final-decision" className="mb-20 scroll-mt-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Making Your Final Decision</h2>
              <p className="text-gray-700 mb-8 text-lg">
                You've done your research, interviewed candidates, and received proposals. Now it's time to make the
                final decision that will set your HubSpot project up for success.
              </p>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">Decision Framework</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">Technical Fit</h4>
                      <p className="text-blue-700 text-sm">30% weight</p>
                      <p className="text-blue-600 text-xs mt-2">Skills match your specific requirements</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">Communication</h4>
                      <p className="text-blue-700 text-sm">25% weight</p>
                      <p className="text-blue-600 text-xs mt-2">Clear, responsive, and collaborative</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">Track Record</h4>
                      <p classNameclassName="text-blue-700 text-sm">25% weight</p>
                      <p className="text-blue-600 text-xs mt-2">Proven results in similar projects</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">Value</h4>
                      <p className="text-blue-700 text-sm">20% weight</p>
                      <p className="text-blue-600 text-xs mt-2">ROI potential vs. investment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-green-900 mb-6">Final Evaluation Questions</h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Can they deliver what you need?</h4>
                      <p className="text-green-700 text-sm">
                        Review their technical capabilities, experience with similar projects, and understanding of your
                        specific requirements.
                      </p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Do you trust them to execute?</h4>
                      <p className="text-green-700 text-sm">
                        Consider their communication style, responsiveness, professionalism, and the quality of their
                        references.
                      </p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Will they be a good partner?</h4>
                      <p className="text-green-700 text-sm">
                        Assess cultural fit, working style compatibility, and their commitment to your long-term
                        success.
                      </p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Is the investment justified?</h4>
                      <p className="text-green-700 text-sm">
                        Calculate the potential ROI based on their proposed approach and your expected business
                        outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-6">Red Flags vs. Green Flags</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Red Flags - Proceed with Caution
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-red-700 text-sm">
                          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Reluctant to provide references or portfolio details</span>
                        </li>
                        <li className="flex items-start gap-2 text-red-700 text-sm">
                          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Promises unrealistic timelines or results</span>
                        </li>
                        <li className="flex items-start gap-2 text-red-700 text-sm">
                          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Poor communication or slow response times</span>
                        </li>
                        <li className="flex items-start gap-2 text-red-700 text-sm">
                          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Vague proposals without specific deliverables</span>
                        </li>
                        <li className="flex items-start gap-2 text-red-700 text-sm">
                          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Significantly lower prices without clear explanation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Green Flags - Strong Indicators
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-green-700 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Detailed proposals with clear methodology</span>
                        </li>
                        <li className="flex items-start gap-2 text-green-700 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Proactive questions about your business and goals</span>
                        </li>
                        <li className="flex items-start gap-2 text-green-700 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Strong references with measurable results</span>
                        </li>
                        <li className="flex items-start gap-2 text-green-700 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Clear communication and professional presentation</span>
                        </li>
                        <li className="flex items-start gap-2 text-green-700 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Transparent about challenges and realistic timelines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Next Steps After Your Decision</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Contract and Onboarding</h4>
                      <ul className="text-gray-700 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Finalize contract terms and deliverables</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Set up project communication channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Provide necessary access and documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Schedule kickoff meeting with key stakeholders</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Project Launch</h4>
                      <ul className="text-gray-700 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Confirm project timeline and milestones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Establish regular check-in schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Set up project tracking and reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Begin discovery and planning phase</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Success Monitoring</h4>
                      <ul className="text-gray-700 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Track progress against defined KPIs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Maintain open communication channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Address issues promptly as they arise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>Plan for post-project optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                    Ready to Transform Your HubSpot Experience?
                  </h3>
                  <p className="text-indigo-700 mb-6 max-w-2xl mx-auto">
                    You now have all the tools and knowledge needed to find, evaluate, and hire the perfect HubSpot
                    expert for your business. The right partnership can transform your marketing, sales, and customer
                    service operations.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-indigo-600">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Comprehensive evaluation framework
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Essential questions to ask
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Common pitfalls to avoid
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Success strategies and best practices
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}

export default HubSpotExpertGuide
