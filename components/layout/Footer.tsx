"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DO</span>
              </div>
              <span className="font-bold text-lg">DataOps Group</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through strategic data operations, marketing automation, and revenue optimization.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com/company/dataops-group" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com/dataopsgroup" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/dataops-implementation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  DataOps Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing-operations-revops"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Marketing Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics-bi"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Analytics & BI
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pe-value-creation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  PE Value Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/team-training"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/data-operations-assessment"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Free Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/hubspot-expert"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  HubSpot Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@dataopsgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Remote-First Team</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Newsletter</h4>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="text-sm" />
                <Button size="sm">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© {currentYear} DataOps Group. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
