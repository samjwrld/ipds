import React from 'react';
import { Shield, Brain, Target, Lock, TrendingUp, Zap, Layers, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

export const CONTENT = {
  hero: {
    headline: "Turn Innovation Into Unfair Advantage.",
    subheadline: "We don't just file papers. We build defensible moats for engineering founders and deep-tech builders.",
    supporting: "Architects of Intellectual Monopoly.",
    cta: "Build Your Defence"
  },
  problem: {
    title: "The Paperwork Trap",
    description: "Most patents sit on shelves gathering dust. They are legal certificates, not business weapons. Filing is not protection. Approval is not defence.",
    points: [
      "Process-obsessed, not strategy-led.",
      "Reactive filing instead of proactive fencing.",
      "Zero alignment with market valuation."
    ]
  },
  differentiation: {
    title: "Strategic Partners, Not Filing Agents",
    description: "We think like investors and engineers. We design protection that scales with your valuation.",
    cards: [
      {
        title: "Strategy First",
        desc: "We map the landscape before we draft a single word.",
        icon: <Brain className="w-6 h-6 text-brand-red" />
      },
      {
        title: "Ownership & Control",
        desc: "Secure total freedom to operate while blocking competitors.",
        icon: <Lock className="w-6 h-6 text-brand-red" />
      },
      {
        title: "Future-Ready",
        desc: "Protection designed for where your technology is going, not just where it is.",
        icon: <TrendingUp className="w-6 h-6 text-brand-red" />
      }
    ]
  },
  journey: {
    title: "The Architecture of Protection",
    steps: [
      { number: "01", title: "Idea Extraction", description: "We distill the core technical novelty that drives value." },
      { number: "02", title: "Defensibility Audit", description: "Testing the strength of your concept against the market." },
      { number: "03", title: "Strategic Fencing", description: "Building a wall around your core innovation." },
      { number: "04", title: "Market Monopoly", description: "Leveraging protection for valuation and licensing." }
    ]
  },
  businessValue: {
    title: "Why Defence Matters",
    points: [
      { title: "Block Competition", desc: "Legally prevent copycats from entering your market space." },
      { title: "Increase Valuation", desc: "Investors fund assets, not just ideas. Owned IP is an asset." },
      { title: "Investor Confidence", desc: "Deep-tech demands deep moats. Prove you own your tech." },
      { title: "Licensing Revenue", desc: "Turn your R&D into a revenue stream without manufacturing." }
    ]
  },
  risk: {
    title: "The Cost of Exposure",
    description: "Innovation without defence is charity. You are doing the R&D, but your competitors will take the profit. Once your product hits the market, it is public domain unless you build a fence. Don't let your hard work become their product launch."
  },
  audience: [
    { label: "Startups", description: "Valuation protection before Series A. Secure the IP asset class." },
    { label: "Deep-Tech", description: "Hard science requires 20-year monopolies. We build fences around core R&D." },
    { label: "Manufacturers", description: "Protect your unique processes. Stop reverse-engineering in its tracks." },
    { label: "Product Innovators", description: "Own the features that drive sales. Turn functionality into legal property." }
  ],
  education: {
    title: "A Business Tool, Not Legal Paperwork",
    description: "Think of a patent as a property deed in the digital economy. It gives you the right to evict trespassers and charge rent. It is a commercial instrument, not a compliance requirement.",
    items: [
      { label: "Asset, Not Paper", text: "Treat IP as a balance sheet asset that increases company valuation." },
      { label: "Rent, Not Tax", text: "Use protection to charge rent (licensing) or evict trespassers." },
      { label: "Global, Not Local", text: "Innovation has no borders. Your protection strategy shouldn't either." }
    ]
  },
  trust: {
    title: "The Architects of Invisible Assets",
    description: "We work with builders who understand that the most valuable part of their company isn't the building—it's the blueprint."
  },
  cta: {
    main: "Ready to Lock Down Your Market?",
    button: "Start Your Defence Strategy"
  }
};