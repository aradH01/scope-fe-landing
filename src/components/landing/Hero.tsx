import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMAGE = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/81e09c98c_generated_97f44f7f.png";

function BudgetMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative"
    >
      {/* Glass card mockup */}
      <div className="bg-background/60 backdrop-blur-2xl border border-border/60 rounded-2xl p-6 shadow-2xl shadow-foreground/5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="font-body text-xs font-medium text-muted-foreground tracking-widest uppercase">Project Budget</p>
            <p className="font-body text-xl font-semibold text-foreground mt-1">Riverside Villa</p>
          </div>
          <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full">
            <Check className="w-3.5 h-3.5" />
            <span className="font-body text-xs font-semibold">Client Approved</span>
          </div>
        </div>

        {/* Budget bars */}
        <div className="space-y-4">
          {[
            { label: 'Furniture', pct: 72, amount: '$43,200', color: 'bg-primary' },
            { label: 'Lighting', pct: 45, amount: '$18,500', color: 'bg-accent' },
            { label: 'Labor', pct: 88, amount: '$22,100', color: 'bg-primary/70' },
          ].map((item, i) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-body text-sm text-foreground font-medium">{item.label}</span>
                <span className="font-body text-sm text-muted-foreground">{item.amount}</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${item.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
          <div>
            <p className="font-body text-xs text-muted-foreground">Total Budget</p>
            <p className="font-body text-xl font-semibold text-foreground">$83,800</p>
          </div>
          <div className="text-right">
            <p className="font-body text-xs text-muted-foreground">Remaining</p>
            <p className="font-body text-xl font-semibold text-accent">$24,300</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Designer's desk with material swatches and budget interface on tablet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Alignment Rule - vertical line motif */}
      <motion.div
        className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left - headline area (7 columns) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: 'hsl(308 37% 28% / 0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                  Interior Design Budget Platform
                </p>
              </div>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              style={{ letterSpacing: '-0.02em' }}
            >
              Design the Budget
              <br />
              <span className="italic font-light text-primary">as Beautifully</span>
              <br />
              as the Space
            </motion.h1>

            <motion.p
              className="font-body text-lg text-muted-foreground leading-relaxed mt-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              style={{ lineHeight: '1.6' }}
            >
              Create polished client budgets in minutes, track every dollar with precision,
              and keep clients aligned at every stage. Scope transforms project budgeting from
              a friction point into your signature service.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                className="font-body text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 min-w-[44px] shadow-lg shadow-primary/20"
              >
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <span className="font-body text-sm text-muted-foreground">
                No credit card required · 14-day free trial
              </span>
            </motion.div>
          </div>

          {/* Right - floating interface (5 columns) */}
          <div className="lg:col-span-5">
            <BudgetMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </div>
      </motion.div>
    </section>
  );
}
