import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

function OldWay() {
  return (
    <div className="bg-secondary/50 border border-border rounded-xl p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <div className="w-3 h-3 rounded-full bg-accent/40" />
        <span className="ml-2 font-body text-xs text-muted-foreground">budget_v14_FINAL_revised.xlsx</span>
      </div>

      <div className="space-y-1 text-xs font-body">
        {[
          { row: ['Item', 'Budget', 'Actual', 'Client?'], header: true },
          { row: ['Sofa (see v3)', '$8,0??', '$12,400', 'Not sent'], stale: true },
          { row: ['Lighting', '$4,500', '$4,500', '—'] },
          { row: ['Paint - ask vendor', '???', '', 'Not sent'], stale: true },
          { row: ['Rug (client changed)', '$3,000', '$6,200', 'Awaiting…'], stale: true },
          { row: ['TOTAL', '???', '???', 'No'], stale: true },
        ].map(({ row, header, stale }, i) => (
          <div
            key={i}
            className={`grid grid-cols-4 gap-1 py-1.5 px-2 rounded ${
              header ? 'bg-secondary font-semibold text-foreground' : ''
            }`}
          >
            {row.map((cell, j) => (
              <span
                key={j}
                className={`truncate ${
                  header ? 'text-foreground' :
                  j === 3 && stale ? 'text-destructive/70 italic' :
                  j > 0 ? 'text-muted-foreground' : 'text-foreground'
                }`}
              >
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-destructive">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span className="font-body text-xs font-medium">Client last updated 3 weeks ago · Version conflict detected</span>
      </div>
    </div>
  );
}

function NewWay() {
  const lineItems = [
    { name: 'Custom Sofa', budget: '$8,000', actual: '$8,000', variance: 0, note: 'Approved' },
    { name: 'Lighting', budget: '$4,500', actual: '$4,200', variance: -300, note: 'Under — saved on install' },
    { name: 'Paint & Finish', budget: '$1,200', actual: '$1,100', variance: -100, note: 'Approved' },
    { name: 'Area Rug', budget: '$2,000', actual: '$5,000', variance: 3000, note: 'Client approved upgrade' },
  ];

  return (
    <div className="bg-background/80 backdrop-blur-xl border border-primary/20 rounded-xl p-5 h-full shadow-lg shadow-primary/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Riverside Villa</p>
          <p className="font-body text-base font-semibold text-foreground">Living Room Budget</p>
        </div>
        <div className="flex items-center gap-1.5 bg-accent/10 text-accent px-2.5 py-1 rounded-full">
          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
          <span className="font-body text-xs font-semibold">On Track</span>
        </div>
      </div>

      {/* Summary bar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14 flex-shrink-0">
          <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
            <circle cx="40" cy="40" r="34" fill="none" stroke="hsl(30, 10%, 90%)" strokeWidth="7" />
            <circle
              cx="40" cy="40" r="34" fill="none"
              stroke="hsl(155, 13%, 33%)" strokeWidth="7"
              strokeDasharray={`${0.68 * 2 * Math.PI * 34} ${2 * Math.PI * 34}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-body text-xs font-semibold text-foreground">68%</span>
          </div>
        </div>
        <div className="flex gap-4 flex-1">
          <div>
            <p className="font-body text-xs text-muted-foreground">Released</p>
            <p className="font-body text-sm font-semibold text-foreground">$16,300</p>
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground">Available Budget</p>
            <p className="font-body text-sm font-semibold text-accent">$7,700</p>
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground">Total</p>
            <p className="font-body text-sm font-semibold text-foreground">$24,000</p>
          </div>
        </div>
      </div>

      {/* Line items */}
      <div className="border border-border/50 rounded-lg overflow-hidden mb-3">
        <div className="grid grid-cols-4 gap-1 px-3 py-1.5 bg-secondary/60 font-body text-xs font-semibold text-muted-foreground">
          <span>Item</span>
          <span>Budget</span>
          <span>Actual</span>
          <span>Note</span>
        </div>
        {lineItems.map((item, i) => (
          <div key={i} className={`grid grid-cols-4 gap-1 px-3 py-1.5 font-body text-xs border-t border-border/30 ${i % 2 === 0 ? '' : 'bg-secondary/20'}`}>
            <span className="text-foreground font-medium truncate">{item.name}</span>
            <span className="text-muted-foreground">{item.budget}</span>
            <span className={item.variance < 0 ? 'text-accent font-medium' : 'text-muted-foreground'}>{item.actual}</span>
            <span className="text-muted-foreground truncate italic">{item.note}</span>
          </div>
        ))}
      </div>

      {/* Client status */}
      <div className="flex items-center gap-2 text-accent">
        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
        <span className="font-body text-xs font-medium">Client viewed 2 hrs ago · All items approved</span>
      </div>
    </div>
  );
}

export default function ExpectationGap() {
  return (
    <section className="relative py-24 lg:py-40 bg-secondary/30">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            The Transformation
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Close the{' '}
            <span className="italic font-light text-primary">Expectation Gap</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
            The difference between a frustrated client and a satisfied one is simply being kept in the loop. Scope wraps around your existing ordering and accounting workflow, adding project-level transparency and communication so nothing gets lost between you and your client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" aria-hidden="true" />
              The Old Way
            </p>
            <OldWay />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
              The Scope Way
            </p>
            <NewWay />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
