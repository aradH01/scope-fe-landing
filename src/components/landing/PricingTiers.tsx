import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    tagline: 'Get to know the power of budget clarity',
    features: [
      { text: '1 user seat', included: true },
      { text: '1 client project', included: true },
      { text: 'Budget creation & line items', included: true },
      { text: 'PDF budget exports', included: true },
      { text: 'Client budget portal (view-only)', included: true },
      { text: 'Budget templates library', included: false },
      { text: 'Expense tracking & categorization', included: false },
      { text: 'Live budget tracking & cost variance', included: false },
      { text: 'Branded portal with approvals', included: false },
    ],
    cta: 'Get Started Free',
    highlighted: false,
    isFree: true,
  },
  {
    name: 'Essential',
    price: '$19',
    period: '/month',
    tagline: 'Individual access for seamless budget creation and management',
    features: [
      { text: '1 user seat', included: true },
      { text: 'Up to 2 client projects', included: true },
      { text: 'Budget creation & line items', included: true },
      { text: 'PDF budget exports', included: true },
      { text: 'Budget templates library', included: true },
      { text: 'Expense tracking & categorization', included: true },
      { text: 'Live budget tracking & cost variance', included: true },
      { text: 'Client budget portal (view-only)', included: true },
      { text: 'Branded client portal with approvals', included: false },
      { text: 'Margin & profitability analytics', included: false },
      { text: '$9/user/mo for additional projects or users', included: true },
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$39',
    period: '/month',
    tagline: 'For designers running multiple projects and team-driven budget management',
    features: [
      { text: '3 user seats', included: true },
      { text: 'Up to 3 client projects', included: true },
      { text: 'Budget creation & line items', included: true },
      { text: 'PDF budget exports', included: true },
      { text: 'Budget templates library', included: true },
      { text: 'Expense tracking & categorization', included: true },
      { text: 'Live budget tracking & cost variance', included: true },
      { text: 'Branded client portal with approvals', included: true },
      { text: 'Margin & profitability analytics', included: false },
      { text: 'Version history & change tracking', included: false },
      { text: '$9/user/mo for additional projects or users', included: true },
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Studio',
    price: '$79',
    period: '/month',
    tagline: 'Full-capability operations for leading design firms',
    features: [
      { text: 'Unlimited user seats', included: true },
      { text: 'Up to 5 client projects', included: true },
      { text: 'Branded client portal with approvals', included: true },
      { text: 'Real-time budget tracking dashboard', included: true },
      { text: 'Margin & profitability analytics', included: true },
      { text: 'Version history & change tracking', included: true },
      { text: '$9/mo per additional client project', included: true },
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
];

function TierCard({ tier, index }) {
  const [expanded, setExpanded] = useState(tier.highlighted);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative border rounded-2xl transition-all duration-300 overflow-hidden ${
        tier.highlighted
          ? 'border-primary/30 bg-background shadow-xl shadow-primary/5'
          : 'border-border/50 bg-background/60 backdrop-blur-xl'
      }`}
      style={tier.highlighted ? {
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238C7E6A' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      } : {}}
    >
      {tier.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-2xl"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-body text-2xl font-bold text-foreground">{tier.name}</h3>
              {tier.highlighted && (
                <span className="font-body text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Recommended
                </span>
              )}
            </div>
            <p className="font-body text-sm text-muted-foreground mt-1">{tier.tagline}</p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right">
              <div>
                <span className={`font-body text-3xl font-bold ${tier.isFree ? 'text-accent' : 'text-foreground'}`}>{tier.price}</span>
                {tier.period && <span className="font-body text-sm text-muted-foreground ml-0.5">{tier.period}</span>}
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-8 border-t border-border/40 pt-4">
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                {tier.features.map(feat => (
                  <div key={feat.text} className="flex items-start gap-2.5">
                    {feat.included
                      ? <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      : <X className="w-4 h-4 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                    }
                    <span className={`font-body text-sm ${feat.included ? 'text-foreground' : 'text-muted-foreground/60'}`}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  className={`font-body text-sm font-medium rounded-full px-8 h-12 ${
                    tier.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingTiers() {
  return (
    <section id="pricing" className="relative py-24 lg:py-40">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Transparent Tiers,{' '}
            <span className="italic font-light text-primary">No Surprises</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
            Start free and scale as your firm grows. Paid tiers include a 14-day
            free trial with full access—no credit card required.
          </p>
        </motion.div>

        <div className="space-y-4">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
