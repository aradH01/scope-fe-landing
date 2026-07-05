import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Search, DollarSign, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMAGE = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/17de9e451_generated_image.png";

function ScopesMockup() {
  const scopes = [
    { title: 'Full Residence Furnishings', subtitle: 'Ashford Estate', badge: 'Pending Client Review', badgeClass: 'text-[#b8860b] bg-[#fdf6e3]', total: '$265,480', items: '64', updated: '12 minutes ago', clientViewed: 'Client viewed 2 hours ago' },
    { title: 'Office & Library', subtitle: 'Meridian Residence', badge: 'Client Approved', badgeClass: 'text-[#00a89d] bg-[#eef6f6]', total: '$34,870', items: '14', updated: '3 hours ago' },
    { title: 'Living, Dining & Primary Suite Refresh', subtitle: 'Crestwood House', badge: 'Draft', badgeClass: 'text-[#666666] bg-[#f5f7f9]', total: '$87,320', items: '31', updated: '1 hour ago' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative"
    >
      <div className="bg-white rounded-xl p-5 shadow-2xl shadow-foreground/10 border border-[#e0e4e8]">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-body text-xl font-bold text-[#1a1a1a]" style={{ letterSpacing: '-0.02em' }}>Scopes</h3>
          <p className="font-body text-xs text-[#666666] mt-0.5">Manage and track all project scopes</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-5 border-b border-[#e0e4e8] mb-4">
          <span className="font-body text-xs font-semibold text-[#1a1a1a] pb-2 border-b-2 border-[#00a89d] -mb-px">Active</span>
          <span className="font-body text-xs text-[#666666] pb-2">Archived</span>
        </div>

        {/* Filter bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex items-center gap-1 bg-[#f7f9fc] border border-[#e0e4e8] rounded-md px-2.5 py-1.5">
            <span className="font-body text-[10px] text-[#666666]">All Statuses</span>
            <ChevronDown className="w-3 h-3 text-[#666666]" />
          </div>
          <div className="flex items-center gap-1 bg-[#f7f9fc] border border-[#e0e4e8] rounded-md px-2.5 py-1.5">
            <span className="font-body text-[10px] text-[#666666]">All Projects</span>
            <ChevronDown className="w-3 h-3 text-[#666666]" />
          </div>
          <div className="flex items-center gap-1.5 bg-[#f7f9fc] border border-[#e0e4e8] rounded-full px-3 py-1.5 flex-1">
            <Search className="w-3 h-3 text-[#999999]" />
            <span className="font-body text-[10px] text-[#999999]">Search scopes...</span>
          </div>
        </div>

        {/* Scope cards */}
        <div className="space-y-3">
          {scopes.map(scope => (
            <div key={scope.title} className="bg-white border border-[#e0e4e8] rounded-lg p-3.5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-body text-sm font-bold text-[#1a1a1a]">{scope.title}</p>
                  <p className="font-body text-xs text-[#666666] mt-0.5">{scope.subtitle}</p>
                </div>
                <span className={`font-body text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${scope.badgeClass}`}>{scope.badge}</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#00a89d]" />
                    <span className="font-body text-xs text-[#00a89d]">Total Amount</span>
                  </div>
                  <span className="font-body text-xs font-bold text-[#1a1a1a]">{scope.total}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#00a89d]" />
                    <span className="font-body text-xs text-[#00a89d]">Items</span>
                  </div>
                  <span className="font-body text-xs font-bold text-[#1a1a1a]">{scope.items}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-[#f0f2f5]">
                <Clock className="w-3 h-3 text-[#999999]" />
                <span className="font-body text-[10px] text-[#999999]">Updated {scope.updated}</span>
                {scope.clientViewed && (
                  <span className="font-body text-[10px] text-[#999999] ml-auto">{scope.clientViewed}</span>
                )}
              </div>
            </div>
          ))}
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
          alt="Designer's desk with material swatches and fabric samples"
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left - headline area (7 columns) */}
          <div className="lg:col-span-6">
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              style={{ letterSpacing: '-0.02em' }}
            >
              Design the Scope
              <br />
              <span className="italic font-light text-accent">as Beautifully</span>
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
              and keep clients aligned at every stage. Transform your project budgeting and
              scope management from a friction point into your signature service.
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
          <div className="lg:col-span-6">
            <ScopesMockup />
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
