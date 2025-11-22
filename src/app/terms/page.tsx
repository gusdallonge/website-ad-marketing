"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import Header from "@/components/Header"

export default function Terms() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob blob-1"
          style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
        />
        <div
          className="blob blob-2"
          style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
        />
        <div
          className="blob blob-3"
          style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
        />
      </div>

      <Header />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Title Section */}
          <div className="glass-card p-8 sm:p-10 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">AD MARKETING AGENCY LLC</h1>
            <h2 className="text-lg sm:text-xl text-white/60 mb-6">Comprehensive International Terms and Conditions of Service</h2>

            <div className="text-white/50 text-sm space-y-1">
              <p>Registered in the State of Wyoming (USA)</p>
              <p>30 N Gould St Ste R – Sheridan WY 82801 – USA</p>
              <p>legal@admarketing.cc | EIN available upon request</p>
              <p className="text-white/30 mt-2">Effective Date: March 1, 2025</p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="glass-card p-8 sm:p-10">
            <div className="prose prose-invert max-w-none">

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">PREAMBLE</h3>
                <p className="text-white/60 leading-relaxed">
                  These Terms and Conditions constitute the complete and binding agreement between AD Marketing Agency LLC (&quot;the Agency&quot;) and any client, customer, or organization (&quot;the Client&quot;) engaging the Agency for digital services, development, management, or support.
                </p>
                <p className="text-white/60 leading-relaxed mt-4">
                  By placing an order, accepting a quote, making any payment, or beginning any project, the Client automatically accepts all provisions herein without exception or reservation. No prior agreements, communications, or verbal understandings override these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">1. PURPOSE AND SCOPE</h3>
                <p className="text-white/60 leading-relaxed">
                  These Terms apply to all projects, subscriptions, digital services, website development, Google Ads management, WordPress customization, hosting, maintenance, SaaS applications, database management, email services, and any other work performed by AD Marketing Agency LLC.
                </p>
                <p className="text-white/60 leading-relaxed mt-4">
                  They supersede any prior agreement, communication, proposal, or condition. Placing an order, signing a quote, or making any payment constitutes full and irrevocable acceptance of these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">2. FORMATION OF CONTRACT</h3>
                <p className="text-white/60 leading-relaxed mb-2">The contract becomes binding when:</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>A quotation is approved by the Client</li>
                  <li>A deposit or payment is received</li>
                  <li>Services begin</li>
                  <li>The Client accesses deliverables or credentials</li>
                </ul>
                <p className="text-white/60 leading-relaxed mt-4">
                  Electronic acceptance (email confirmation, payment via Stripe or bank transfer, checkbox acceptance) has the same legal effect as a hand-written signature and is fully binding.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">3. DEPOSITS AND PAYMENT SCHEDULE</h3>
                <h4 className="text-base font-medium text-white/80 mb-2">3.1 Deposit Requirements</h4>
                <p className="text-white/60 leading-relaxed mb-4">
                  A non-refundable deposit of 30% to 50% of the total project price is required before work starts. Projects under USD 2,000 may require full payment in advance. Deposits are non-refundable once the Agency has begun work or allocated resources.
                </p>
                <h4 className="text-base font-medium text-white/80 mb-2">3.2 Payment Milestones</h4>
                <p className="text-white/60 leading-relaxed mb-2">For larger projects, the following payment schedule applies:</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1 mb-4">
                  <li>First milestone: 30-50% deposit (before work begins)</li>
                  <li>Second milestone: 25% at 50% project completion (upon approval)</li>
                  <li>Third milestone: 25% upon delivery/testing approval</li>
                  <li>Final payment: 100% due before transfer of IP, credentials, or data ownership</li>
                </ul>
                <h4 className="text-base font-medium text-white/80 mb-2">3.3 Invoice Terms</h4>
                <ul className="text-white/60 list-disc pl-6 space-y-1 mb-4">
                  <li>Invoices are due NET 14 (14 days from invoice date)</li>
                  <li>Invoices are issued in USD; Stripe may convert to Client&apos;s currency (Client bears conversion fees)</li>
                  <li>Late payment begins accruing interest immediately on day 15</li>
                </ul>
                <h4 className="text-base font-medium text-white/80 mb-2">3.4 Payment Methods</h4>
                <p className="text-white/60 leading-relaxed">
                  Accepted payment methods: Stripe, bank transfer (ACH, SEPA, international wire). Clients are responsible for any banking or intermediary fees.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">4. CURRENCIES AND BILLING</h3>
                <p className="text-white/60 leading-relaxed">
                  All quotations, invoices, and payments are issued in USD (United States Dollars). If Client pays in another currency via Stripe or payment processor, conversion rates and fees apply at the time of transaction. The USD amount remains the contractual reference value. Currency fluctuations do not alter the USD total owed.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">5. SCOPE OF WORK, REVISIONS, AND SCOPE CREEP</h3>
                <h4 className="text-base font-medium text-white/80 mb-2">5.1 Defined Scope</h4>
                <p className="text-white/60 leading-relaxed mb-4">The price quoted covers only the deliverables explicitly stated in the written quotation or project brief.</p>
                <h4 className="text-base font-medium text-white/80 mb-2">5.2 Included Revisions</h4>
                <ul className="text-white/60 list-disc pl-6 space-y-1 mb-4">
                  <li>Design/UI projects: Up to 3 revision rounds included</li>
                  <li>WordPress/Web development: Up to 5 revision rounds included</li>
                  <li>Google Ads setup: Up to 2 adjustment rounds included</li>
                  <li>Other services: As specified in the quotation</li>
                </ul>
                <h4 className="text-base font-medium text-white/80 mb-2">5.3 Additional Changes</h4>
                <p className="text-white/60 leading-relaxed mb-4">Requests beyond the included revisions incur charges of USD 100/hour (minimum USD 100 per request).</p>
                <h4 className="text-base font-medium text-white/80 mb-2">5.4 Scope Changes</h4>
                <p className="text-white/60 leading-relaxed mb-2">Any changes to the original scope must be:</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>Requested in writing (email)</li>
                  <li>Approved by the Agency</li>
                  <li>Formalized in a contract amendment</li>
                  <li>May result in price increase and timeline extension</li>
                </ul>
                <p className="text-white/60 leading-relaxed mt-4">Unauthorized scope expansion may result in project suspension until clarification is provided.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">6. TIMELINES, DELIVERY DATES, AND SERVICE LEVELS (SLA)</h3>
                <h4 className="text-base font-medium text-white/80 mb-2">6.1 Estimated Delivery Dates Are Indicative Only</h4>
                <p className="text-white/60 leading-relaxed mb-4">All estimated delivery dates, project timelines, and deadlines mentioned orally, in writing, in emails, or in quotations are INDICATIVE AND NON-BINDING ESTIMATES ONLY. The Agency does NOT guarantee that work will be completed by any stated date.</p>
                <h4 className="text-base font-medium text-white/80 mb-2">6.2 Factors Beyond Agency Control</h4>
                <p className="text-white/60 leading-relaxed mb-2">The Agency is not liable for delays caused by:</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1 mb-4">
                  <li>Client delays in providing materials, approvals, or feedback</li>
                  <li>Third-party services (Google, Stripe, Amazon AWS, Cloudflare, hosting providers)</li>
                  <li>Unclear specifications or conflicting Client requirements</li>
                  <li>Scope changes requested by the Client</li>
                  <li>External factors (cybersecurity incidents, server issues)</li>
                </ul>
                <h4 className="text-base font-medium text-white/80 mb-2">6.3 Maintenance and Support Response Times</h4>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>Critical issues (site down, security breach): Best-effort response within 24 hours</li>
                  <li>High-priority issues: Response within 48 hours</li>
                  <li>Standard requests: Response within 5 business days</li>
                </ul>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">7. INTELLECTUAL PROPERTY AND OWNERSHIP</h3>
                <h4 className="text-base font-medium text-white/80 mb-2">7.1 Agency IP Ownership (Until Full Payment)</h4>
                <p className="text-white/60 leading-relaxed mb-4">All deliverables, including code, design files, databases, configurations, templates, and software, remain the exclusive property of AD Marketing Agency LLC until full payment is received and confirmed.</p>
                <h4 className="text-base font-medium text-white/80 mb-2">7.2 Restrictions Before Payment</h4>
                <ul className="text-white/60 list-disc pl-6 space-y-1 mb-4">
                  <li>Client has limited access for testing purposes only</li>
                  <li>Client may NOT copy, modify, redistribute, or republish any deliverable</li>
                  <li>Unauthorized use violates U.S. Copyright Law and the DMCA</li>
                </ul>
                <h4 className="text-base font-medium text-white/80 mb-2">7.3 IP Transfer Upon Payment</h4>
                <p className="text-white/60 leading-relaxed">Upon receipt of full payment, the Agency will provide written confirmation of IP ownership transfer.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">8. SERVER OWNERSHIP, DATA, AND CREDENTIALS</h3>
                <h4 className="text-base font-medium text-white/80 mb-2">8.1 Server Infrastructure Ownership – CRITICAL CLAUSE</h4>
                <p className="text-white/60 leading-relaxed mb-2">ALL infrastructure hosted on Agency-managed servers belongs 100% to the Agency, including:</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1 mb-4">
                  <li>Email accounts and mailboxes</li>
                  <li>Domain name registrations and DNS records</li>
                  <li>Databases and database backups</li>
                  <li>Website files and WordPress installations</li>
                  <li>SSL certificates and security configurations</li>
                  <li>FTP/SSH credentials and administrative keys</li>
                </ul>
                <p className="text-white/60 leading-relaxed mb-4">Until full payment is received, the Client has ZERO ownership rights to any of the above.</p>
                <h4 className="text-base font-medium text-white/80 mb-2">8.3 Transition Fees</h4>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>Domain transfer: USD 200</li>
                  <li>Email accounts transfer: USD 100 per account</li>
                  <li>Database export and setup: USD 200</li>
                  <li>WordPress admin transfer: USD 200</li>
                  <li>Complete server migration: USD 500+</li>
                </ul>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">9. EMAIL, DOMAIN, AND DATABASE OWNERSHIP</h3>
                <p className="text-white/60 leading-relaxed mb-4">All email accounts, domains registered, and databases created by the Agency belong to the Agency until full payment. Upon payment, these may be transferred to the Client&apos;s preferred providers.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">10. CREDENTIALS, ACCESS, AND HANDOVER</h3>
                <p className="text-white/60 leading-relaxed mb-4">Until full payment is received, all admin credentials remain under sole Agency control. Upon full payment, the Agency provides all credentials in writing. If the Client accesses credentials without authorization, the Agency may terminate all services and pursue legal action.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">11. MAINTENANCE AND SUPPORT AGREEMENTS</h3>
                <p className="text-white/60 leading-relaxed mb-4">Any maintenance agreement constitutes a BINDING 12-MONTH COMMITMENT. At the end of month 12, the contract auto-renews unless the Client provides written non-renewal notice 60 days prior to expiration.</p>
                <h4 className="text-base font-medium text-white/80 mb-2">Included Maintenance Services</h4>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>Automatic security patches and WordPress core updates</li>
                  <li>Monthly backups and integrity checks</li>
                  <li>Basic bug fixes (up to 5 hours/month)</li>
                  <li>Performance monitoring</li>
                  <li>SSL certificate renewal</li>
                </ul>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">12. WARRANTY AND POST-DELIVERY SUPPORT</h3>
                <p className="text-white/60 leading-relaxed mb-4">The Agency warrants that deliverables will function as specified for 30 days after delivery. Critical bugs are fixed at no charge during the warranty period. Minor issues and feature requests incur support charges of USD 75/hour.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">13. SUSPENSION AND COLLECTION FOR NON-PAYMENT</h3>
                <p className="text-white/60 leading-relaxed mb-4">If a payment is more than 5 days overdue, the Agency may suspend all services immediately. Services resume only upon full payment plus a USD 200 reconnection fee.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">14. LATE PAYMENTS AND INTEREST CHARGES</h3>
                <p className="text-white/60 leading-relaxed">Overdue amounts accrue interest at 1.5% per month (18% per year). Interest begins accruing on day 15 of the invoice date.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">15. GOOGLE ADS ACCOUNT MANAGEMENT</h3>
                <p className="text-white/60 leading-relaxed mb-4">All Google Ads campaigns are created under an Agency account structure. The Client receives limited reporting access. Account transition fee: USD 250.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">16. WORDPRESS, HOSTING, AND SERVER MANAGEMENT</h3>
                <p className="text-white/60 leading-relaxed">The Agency retains administrative access and control. The Client receives WordPress admin access for content management only. Client modifications may break the website; the Agency is not responsible for unauthorized changes.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">17. CONFIDENTIALITY AND NDA</h3>
                <p className="text-white/60 leading-relaxed">All information shared between the parties is treated as strictly confidential. The Agency may display project work in its portfolio unless the Client requests confidentiality in writing.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">18. NON-CIRCUMVENTION AND NON-SOLICITATION</h3>
                <p className="text-white/60 leading-relaxed">The Client agrees NOT to contact, hire, or engage the Agency&apos;s subcontractors directly for 12 months after project completion. Violation penalty: 25-50% of contract value plus damages.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">19. BACKUPS, DATA INTEGRITY, AND DISASTER RECOVERY</h3>
                <p className="text-white/60 leading-relaxed">The Agency maintains temporary backups for 30 days after project delivery. The Client is responsible for maintaining independent backups of critical data.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">20. SECURITY AND CYBERSECURITY LIABILITY</h3>
                <p className="text-white/60 leading-relaxed">The Agency implements industry-standard security (SSL/TLS, 2FA, firewalls, malware scanning). The Agency is NOT liable for breaches resulting from weak passwords, shared credentials, or Client negligence.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">21. LIMITATION OF LIABILITY</h3>
                <p className="text-white/60 leading-relaxed">The Agency&apos;s total liability shall not exceed the total amount paid by the Client for the specific service during the 12 months preceding the claim. The Agency is NOT liable for indirect, consequential, special, or punitive damages.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">22. THIRD-PARTY SERVICES AND DEPENDENCIES</h3>
                <p className="text-white/60 leading-relaxed">The Agency is NOT responsible for service interruptions by Google, Amazon, Cloudflare, Stripe, or other third-party providers.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">23. PORTFOLIO AND COMMUNICATION RIGHTS</h3>
                <p className="text-white/60 leading-relaxed">Unless the Client requests confidentiality in writing before project start, the Agency may display project work in portfolios and marketing materials.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">24. FORCE MAJEURE</h3>
                <p className="text-white/60 leading-relaxed">Neither party is liable for delay or non-performance caused by events beyond reasonable control (war, natural disasters, pandemic, cyber-attacks, government action).</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">25. REPRESENTATIONS, WARRANTIES, AND DISCLAIMERS</h3>
                <p className="text-white/60 leading-relaxed">The Agency makes NO guarantees of results (e.g., Google Ads conversion guarantees), no merchantability warranty, no fitness for particular purpose warranty.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">26. INDEMNIFICATION</h3>
                <p className="text-white/60 leading-relaxed">The Client agrees to indemnify the Agency from claims arising from Client-provided content, misuse of deliverables, or regulatory issues caused by Client&apos;s business practices.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">27. RECORD RETENTION AND AUDIT TRAIL</h3>
                <p className="text-white/60 leading-relaxed">The Agency maintains records for minimum 3 years after project completion. These records serve as legal evidence in any dispute.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">28. PRIVACY AND DATA PROTECTION</h3>
                <p className="text-white/60 leading-relaxed">AD Marketing Agency LLC complies with U.S. privacy laws and GDPR principles when serving European clients.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">29. CCPA RIGHTS (CALIFORNIA)</h3>
                <p className="text-white/60 leading-relaxed">California residents have the right to know, delete, opt-out, and non-discrimination. Requests must be submitted to legal@admarketing.cc.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">30. LEGAL LANGUAGE</h3>
                <p className="text-white/60 leading-relaxed">These Terms are written in English and English is the only legally binding version. Translations are for information purposes only.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">31. JURISDICTION AND DISPUTE RESOLUTION</h3>
                <p className="text-white/60 leading-relaxed mb-4">All disputes shall be resolved exclusively through confidential arbitration via the American Arbitration Association (AAA). Venue: Sheridan, Wyoming, USA.</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>Single arbitrator for disputes under USD 5,000</li>
                  <li>Three arbitrators for disputes over USD 5,000</li>
                </ul>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">32. CLASS ACTION WAIVER</h3>
                <p className="text-white/60 leading-relaxed">Each party agrees to bring claims individually and waives the right to participate in any class action or collective action.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">33. TERMINATION RIGHTS</h3>
                <p className="text-white/60 leading-relaxed">The Agency may terminate immediately if Client acts illegally, is abusive, or is in material breach. Upon termination, all amounts due remain payable and work completed is non-refundable.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">34. SURVIVAL OF OBLIGATIONS</h3>
                <p className="text-white/60 leading-relaxed">Confidentiality, non-solicitation, indemnification, liability limitations, and arbitration obligations survive termination indefinitely.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">35. LEGAL COMMUNICATIONS</h3>
                <p className="text-white/60 leading-relaxed">All legal notices must be addressed to: AD Marketing Agency LLC, Legal Department, 30 N Gould St Ste R, Sheridan, Wyoming 82801, USA. Email: legal@admarketing.cc</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">36. CORPORATE RESPONSIBILITY</h3>
                <p className="text-white/60 leading-relaxed">The Client explicitly waives any right to hold personally liable Augustin Dallongeville, any employees, contractors, shareholders, or members of the LLC. All claims are against the corporate entity only.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">37. SEVERABILITY</h3>
                <p className="text-white/60 leading-relaxed">If any provision is found invalid, it is severed from the agreement. The remaining provisions remain in full force and effect.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">38. ENTIRE AGREEMENT</h3>
                <p className="text-white/60 leading-relaxed">These Terms constitute the entire agreement. All prior negotiations and communications are superseded. Current version dated March 1, 2025.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">39. GOVERNING LAW</h3>
                <p className="text-white/60 leading-relaxed">These Terms are governed exclusively by the laws of the State of Wyoming, USA.</p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">40. VALIDITY AND BINDING EFFECT</h3>
                <p className="text-white/60 leading-relaxed mb-2">These Terms become binding when:</p>
                <ul className="text-white/60 list-disc pl-6 space-y-1">
                  <li>Client signs or electronically approves the quotation</li>
                  <li>Client makes any payment via Stripe or bank transfer</li>
                  <li>Client accesses credentials or begins using services</li>
                </ul>
                <p className="text-white/60 leading-relaxed mt-4">Clients cannot later claim they &quot;did not read&quot; or &quot;did not understand&quot; the Terms.</p>
              </section>

            </div>
          </div>

          {/* Validation and Signature */}
          <div className="glass-card p-8 sm:p-10 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">VALIDATION AND SIGNATURE</h3>
            <div className="text-white/60 leading-relaxed space-y-2">
              <p><strong className="text-white/80">Issued by:</strong> AD MARKETING AGENCY LLC</p>
              <p><strong className="text-white/80">Registered in:</strong> State of Wyoming, USA</p>
              <p><strong className="text-white/80">Jurisdiction:</strong> Sheridan, Wyoming</p>
              <p className="mt-6"><strong className="text-white/80">Signed by:</strong></p>
              <p>Augustin Dallongeville</p>
              <p>Founder & President</p>
              <p>AD Marketing Agency LLC</p>
              <p>legal@admarketing.cc</p>
              <p>Sheridan, Wyoming, USA</p>
              <p className="mt-4">March 1, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
