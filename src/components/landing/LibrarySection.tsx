import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Star, Layers, Tag, Sparkles } from 'lucide-react';

const qualityBadge = (q) => ({
  'Quality': 'bg-[#f0f2f5] text-[#666666]',
  'Premium': 'bg-[#e8eef5] text-[#3b6fa0]',
  'Luxury': 'bg-[#e0f2f1] text-[#00695c]',
  'Ultra Lux': 'bg-[#fdf6e3] text-[#b8860b]',
}[q] || 'bg-[#f0f2f5] text-[#666666]');

const tieredItems = [
  {
    name: 'Sofa 3 Seat', category: 'Furniture', icon: Layers,
    tiers: [
      { label: 'Quality', price: '$4,200' },
      { label: 'Premium', price: '$6,800' },
      { label: 'Luxury', price: '$9,960' },
      { label: 'Ultra Lux', price: '$14,500' },
    ],
  },
  {
    name: 'Accent Chair', category: 'Furniture', icon: Layers,
    tiers: [
      { label: 'Quality', price: '$1,200' },
      { label: 'Premium', price: '$2,200' },
      { label: 'Luxury', price: '$4,500' },
      { label: 'Ultra Lux', price: '$8,500' },
    ],
  },
];

const savedPiece = {
  name: 'Vellora Pendant, Unlacquered Brass', vendor: 'Maison Lumière',
  price: '$2,400',
};

const benefits = [
  { icon: Tag, title: 'Price by quality tier', text: 'Capture your typical net pricing across Quality, Premium, Luxury, and Ultra Lux so every scope starts from real numbers, not guesses.' },
  { icon: Star, title: 'Save the pieces you love', text: 'Stash specific known items, that perfect pendant, your go-to sofa, and drop them into any client space in a click.' },
  { icon: Layers, title: 'Reuse across every project', text: 'Your library travels with you. Build it once, then place items into any scope, any room, at any time.' },
  { icon: Sparkles, title: 'Faster, consistent scopes', text: 'Stop re-pricing the same items from scratch. Your standards stay consistent, and your margins stay protected.' },
];

function LibraryMockup() {
  return (
    <div className="bg-white border border-[#e0e4e8] rounded-xl p-4 shadow-lg shadow-[#00a89d]/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-body text-[10px] text-[#666666] tracking-wider uppercase">My Library</p>
          <p className="font-body text-sm font-bold text-[#1a1a1a]">Saved Items · 248</p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#20B2AA] text-white px-2.5 py-1 rounded-full">
          <Plus className="w-3 h-3" aria-hidden="true" />
          <span className="font-body text-[10px] font-semibold">New Item</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-1.5 bg-[#f7f9fc] border border-[#e0e4e8] rounded-md px-2.5 py-1.5 mb-3">
        <Search className="w-3.5 h-3.5 text-[#999999]" />
        <span className="font-body text-[11px] text-[#999999]">Search your library…</span>
      </div>

      {/* Tiered items */}
      <div className="space-y-2.5">
        {tieredItems.map(item => (
          <div key={item.name} className="border border-[#e0e4e8] rounded-lg p-2.5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-[11px] font-bold text-[#1a1a1a] flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-[#00a89d]" />
                {item.name}
              </span>
              <span className="font-body text-[9px] text-[#999999]">{item.category}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {item.tiers.map(t => (
                <span key={t.label} className={`font-body text-[9px] px-1.5 py-0.5 rounded-full font-medium ${qualityBadge(t.label)}`}>
                  {t.label} {t.price}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Saved known piece */}
        <div className="border border-[#e0e4e8] rounded-lg p-2.5 bg-[#fdf6e3]/40">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-body text-[11px] font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#b8860b] fill-[#b8860b]" />
              {savedPiece.name}
            </span>
            <span className="font-body text-[9px] px-1.5 py-0.5 rounded-full bg-[#fdf6e3] text-[#b8860b] font-medium">Saved piece</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-body text-[10px] text-[#666666]">{savedPiece.vendor}</span>
            <span className="font-body text-[11px] font-bold text-[#1a1a1a]">{savedPiece.price}</span>
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-3 pt-2.5 border-t border-[#f0f2f5] flex items-center gap-1.5">
        <Plus className="w-3 h-3 text-[#20B2AA]" />
        <span className="font-body text-[10px] font-semibold text-[#20B2AA]">Drop into any scope</span>
      </div>
    </div>
  );
}

export default function LibrarySection() {
  return (
    <section id="library" className="relative py-12 lg:py-20">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              The Library
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Your Items,{' '}
              <span className="italic font-light text-accent">Always Ready</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
              Build a personalized library of the items you use again and again. Price each one out by quality tier with your typical pricing, or save specific known pieces you love to place in client spaces, then drop them into any scope, any room, at any time.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-base font-semibold text-foreground">{b.title}</p>
                    <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed" style={{ lineHeight: '1.55' }}>
                      {b.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <LibraryMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
