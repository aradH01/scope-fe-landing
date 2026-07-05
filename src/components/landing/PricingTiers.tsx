import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    tagline: 'Get to know the power of scope clarity',
    priorTier: null,
    comingSoon: false,
    features: [
      '1 active project',
      '3 scopes per project',
      '1 user seat',
      'Scope & budget builder w/ tiered library',
      'Personalized item library for use across projects',
      'PDF exports (watermarked)',
      'Client portal sign-off (initial only)',
    ],
    addOns: 'Extra projects: $9/mo · Extra user seats: $9/mo',
    cta: 'Get Started Free',
    highlighted: false,
    isFree: true,
  },
  {
    name: 'Foundation',
    price: '$19',
    period: '/mo',
    tagline: 'Build scopes and align with clients',
    priorTier: 'Starter',
    comingSoon: false,
    features: [
      '4 active projects',
      '5 scopes per project',
      '3 user seats',
      'Unlimited archived projects',
      'Watermark-free PDF exports',
      'Unlimited client portal sign-off',
      'Reuse rooms & items from past projects',
      'Your logo & colors on the client portal',
    ],
    addOns: 'Extra projects: $9/mo · Extra user seats: $9/mo',
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Plus',
    price: '$49',
    period: '/mo',
    tagline: 'Track and deliver with full client collaboration',
    priorTier: 'Foundation',
    comingSoon: true,
    features: [
      '10 active projects',
      'Unlimited scopes per project',
      '10 user seats',
      'Actual item cost inputs and tracking',
      'Live actuals vs. budget variance',
      'Progress scopes for ongoing client awareness & approval',
      'Approved version history & restore',
      'Stay organized with 10-stage item status tracking',
    ],
    addOns: 'Extra projects: $9/mo · Extra user seats: $9/mo',
    cta: 'Start Building with Foundation',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/mo',
    tagline: 'Studio-scale operations for leading design firms',
    priorTier: 'Plus',
    comingSoon: true,
    features: [
      '25 active projects',
      'Unlimited user seats',
      'White-label portal',
      'Portfolio view & project merge',
    ],
    addOns: 'Extra projects: $9/mo · Extra user seats: $9/mo',
    cta: 'Start Building with Foundation',
    highlighted: false,
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
      } ${tier.comingSoon ? 'opacity-95' : ''}`}
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
              {tier.comingSoon && (
                <span className="font-body text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  Coming Soon
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
            <div className="px-6 lg:px-8 pb-8 border-t border-border/40 pt-5">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4">
                {tier.priorTier ? `Everything in ${tier.priorTier}, plus:` : "What's included:"}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {tier.features.map(feat => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
              {tier.addOns && (
                <p className="font-body text-xs text-muted-foreground mt-5 italic">{tier.addOns}</p>
              )}
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
    <section id="pricing" className="relative py-12 lg:py-20">
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
            <span className="italic font-light text-accent">No Surprises</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
            Start free and scale as your firm grows. Each tier builds on the last. Paid plans include a 14-day free trial with full access, no credit card required.
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
