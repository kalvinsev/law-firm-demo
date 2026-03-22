import React, { useState, useEffect } from 'react';
import { Calendar, Zap, FileText, TrendingUp, ArrowRight, Check, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "24/7 Intake Agent",
      description: "AI-powered lead qualification and response in under 60 seconds. Never miss a Sunday night inquiry again.",
      metrics: "45-second average response time",
      industries: ["Law Firms", "Med Spas", "Real Estate"]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Operations Automation",
      description: "Deadline monitoring, appointment scheduling, and proactive client communication that runs while you sleep.",
      metrics: "Reduce admin overhead by 60%",
      industries: ["Legal", "Healthcare", "Professional Services"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Intelligence",
      description: "Automatic summarization, risk flagging, and classification of intake documents and case files.",
      metrics: "30-second document review",
      industries: ["Law Firms", "Accounting", "Consulting"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Weekly automated reports pulling from your CRM, POS, and analytics. One-click insights, zero manual work.",
      metrics: "Custom reporting on autopilot",
      industries: ["All Verticals"]
    }
  ];

  const industries = [
    {
      name: "Law Firms",
      pain: "After-hours inquiries go unanswered, statute deadlines are manually tracked, intake is bottlenecked",
      win: "Instant qualification, 24/7 response, automated deadline monitoring, 2-3 additional cases captured monthly"
    },
    {
      name: "Med Spas & Aesthetics",
      pain: "No-shows cost $200-800 per slot, manual rebooking, review generation is inconsistent",
      win: "Automated appointment reminders, lapsed client reactivation, post-visit review campaigns at 5-15x volume"
    },
    {
      name: "Real Estate",
      pain: "Lead response time averages 4+ hours, property alerts are manual, showing coordination takes multiple calls",
      win: "Sub-60-second lead responses, automated showing coordination, market alert systems that run 24/7"
    },
    {
      name: "Dental Practices",
      pain: "Recall appointments require staff follow-up, insurance verification is manual, patients ghost before scheduling",
      win: "Automated recall campaigns, insurance pre-verification, appointment fill rates increase 40-60%"
    }
  ];

  const pricing = [
    {
      tier: "Pilot",
      price: "$500",
      duration: "one-time",
      description: "Prove the concept with zero long-term commitment",
      features: [
        "One core automation deployed",
        "30-day pilot period",
        "Performance metrics report",
        "Your decision at day 30",
        "No contract required"
      ],
      cta: "Start Pilot",
      highlight: false
    },
    {
      tier: "Operations Agent",
      price: "$2,500",
      duration: "per month",
      description: "Full intake and operations automation suite",
      features: [
        "24/7 intake qualification & response",
        "Deadline and calendar monitoring",
        "Document summarization",
        "Weekly intelligence reports",
        "Slack/WhatsApp delivery",
        "Unlimited skill customization"
      ],
      cta: "Book Demo",
      highlight: true
    },
    {
      tier: "AI Operations Partner",
      price: "$6,500+",
      duration: "per month",
      description: "Fractional CAO — your entire AI strategy and infrastructure",
      features: [
        "Everything in Operations Agent",
        "Multi-agent team deployment",
        "Custom integration development",
        "Monthly strategy sessions",
        "Dedicated Slack support",
        "SLA on uptime & response"
      ],
      cta: "Let's Talk",
      highlight: false
    }
  ];

  const process = [
    { step: "01", title: "60-Second Demo", description: "Text a number, watch your Slack light up. No slides, no theory — live system in action." },
    { step: "02", title: "30-Day Pilot", description: "$500 to deploy your first automation and prove ROI. Your decision at day 30, zero pressure." },
    { step: "03", title: "Scale & Compound", description: "Every new automation builds on the last. Month 3 looks nothing like Month 1. Your agency grows while you sleep." }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans antialiased">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay z-50"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")` }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-light tracking-tight">Axon<span className="font-medium">AI</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-sm text-white/60 hover:text-white transition-colors">Solutions</a>
              <a href="#industries" className="text-sm text-white/60 hover:text-white transition-colors">Industries</a>
              <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium transition-all backdrop-blur-sm">
                Book Demo
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-white/5">
            <div className="px-6 py-6 space-y-4">
              <a href="#solutions" className="block text-white/60 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
              <a href="#industries" className="block text-white/60 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Industries</a>
              <a href="#pricing" className="block text-white/60 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="block px-5 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
                Book Demo
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        {/* Gradient orb background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-white/5 via-white/0 to-white/0 blur-3xl rounded-full opacity-40" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            {/* Badge */}
            

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-[1.05] animate-[fadeIn_1s_ease-out_0.2s_both]">
              Your business,
              <br />
              <span className="italic font-serif">running while</span>
              <br />
              you sleep.
            </h1>

            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl animate-[fadeIn_1s_ease-out_0.4s_both]">
              AI automation infrastructure for law firms, med spas, and professional services in LA. 
              We build agents that handle intake, operations, and intelligence — 24/7, zero human intervention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_1s_ease-out_0.6s_both]">
              <a href="#contact" className="group px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#pricing" className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center backdrop-blur-sm">
                $500 Pilot — No Contract
              </a>
            </div>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 animate-[fadeIn_1s_ease-out_0.8s_both]">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-light mb-2">45<span className="text-white/40">s</span></div>
              <div className="text-sm text-white/60">Average intake response time</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-light mb-2">24<span className="text-white/40">/7</span></div>
              <div className="text-sm text-white/60">Operations — nights, weekends, holidays</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-light mb-2">60<span className="text-white/40">%</span></div>
              <div className="text-sm text-white/60">Reduction in admin overhead</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              The Full Stack
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Four core systems. Deployed independently or as an integrated suite. Every automation compounds on the last.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="group p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-2xl transition-all cursor-pointer backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-all">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-2">{solution.title}</h3>
                    <div className="text-sm font-mono text-white/40 mb-4">{solution.metrics}</div>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((industry, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Built for LA
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              We know these verticals. We know their pain points. We know what actually closes deals in Century City, Beverly Hills, and the Westside.
            </p>
          </div>

          <div className="space-y-4">
            {industries.map((industry, idx) => (
              <div key={idx} className="group p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-2xl transition-all backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-light mb-2">{industry.name}</h3>
                    <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent mt-4" />
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">Pain</div>
                    <p className="text-white/60 leading-relaxed">{industry.pain}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">Win</div>
                    <p className="text-white/80 leading-relaxed">{industry.win}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              The Path
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              From first contact to running infrastructure in three steps. No long sales cycles, no multi-month implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-light text-white/10 mb-6">{item.step}</div>
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent translate-x-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Start with a $500 pilot. Scale to full operations. No surprises, no long-term lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`relative p-8 rounded-2xl transition-all ${
                plan.highlight 
                  ? 'bg-white/[0.06] border-2 border-white/30 shadow-2xl shadow-white/5' 
                  : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-black text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="text-sm font-mono text-white/40 mb-2 uppercase tracking-wider">{plan.tier}</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-light">{plan.price}</span>
                    <span className="text-white/40 text-sm">/ {plan.duration}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`block w-full px-6 py-3 rounded-lg font-medium text-center transition-all ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-white/10 border border-white/20 hover:bg-white/15'
                }`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 bg-gradient-to-br from-white/10 via-white/5 to-white/0 border border-white/10 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Ready to see it live?
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Text a number, watch your Slack light up in 45 seconds. 
              No slides. No sales deck. Just a working system you can see with your own eyes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@axonai.co" className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all">
                hello@axonai.co
              </a>
              <a href="https://calendly.com/yourusername" className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg font-medium hover:bg-white/15 transition-all backdrop-blur-sm">
                Book 20 Minutes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-light">Axon<span className="font-medium">AI</span></span>
            </div>
            <div className="text-sm text-white/40 font-mono">
              © 2026 AxonAI. Built in Los Angeles.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
