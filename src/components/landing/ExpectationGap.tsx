import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, X, ChevronDown, MousePointer2 } from 'lucide-react';

function OldWay() {
  const rows = [
    { row: ['Item', 'Budget', 'Actual', 'Client?'], header: true },
    { row: ['Sofa (see v3)', '$8,000', '$12,400', 'Not sent (see v3)'], hard: true, over: true, stale: true },
    { row: ['Accent Chair ×2', '???', '$9,400', 'Awaiting…'], unknown: true, over: true, stale: true },
    { row: ['Area Rug (client changed)', '$3,000', '$6,200', 'Approved? she texted'], hard: true, over: true, stale: true },
    { row: ['Rug Pad', 'None', '$517', 'Cover this to close out?'], unknown: true, over: true, stale: true },
    { row: ['Paint - ask vendor', '???', '$2,100', 'Not sent. Verbal discussion only.'], unknown: true, over: true, stale: true },
    { row: ['Lighting', '$4,500', '$4,500', '-'], hard: true },
    { row: ['Art (TBD)', '???', '$3,400', 'Not sent. Verbal discussion only.'], unknown: true, over: true, stale: true },
    { row: ['Window Treatments', '$2,400', '$3,100', 'sent v9'], hard: true, over: true, stale: true },
    { row: ['Custom Drapes', '$5,400', '$7,800', 'sent v9'], hard: true, over: true, stale: true },
    { row: ['TOTAL', '$23,300 + ???', '$49,417', '-'], total: true },
  ];

  const cellClass = (j, header, unknown, hard, over, total, stale) => {
    if (header) return 'text-foreground';
    if (j === 0) return total ? 'text-foreground font-bold' : 'text-foreground';
    if (j === 1) {
      if (total) return 'text-foreground font-bold';
      if (unknown) return 'text-muted-foreground italic';
      if (hard) return 'text-[#2563eb] font-medium';
      return 'text-muted-foreground';
    }
    if (j === 2) {
      if (total) return 'text-[#b45309] font-bold';
      if (over) return 'text-[#b45309] font-medium';
      return 'text-muted-foreground';
    }
    if (j === 3) {
      if (stale) return 'text-foreground/70 italic';
      return 'text-muted-foreground italic';
    }
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-secondary/50 border border-border rounded-xl p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <div className="w-3 h-3 rounded-full bg-accent/40" />
        <span className="ml-2 font-body text-xs text-muted-foreground">budget_v14_FINAL_revised.xlsx</span>
      </div>

      <div className="space-y-1 text-xs font-body">
        {rows.map(({ row, header, unknown, hard, over, stale, total }, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 gap-1 py-1.5 px-2 rounded ${
              header ? 'bg-secondary font-semibold text-foreground' : total ? 'bg-secondary/60 border-t border-border' : ''
            }`}
          >
            <span className={`col-span-4 truncate ${cellClass(0, header, unknown, hard, over, total, stale)}`}>{row[0]}</span>
            <span className={`col-span-2 text-right truncate ${cellClass(1, header, unknown, hard, over, total, stale)}`}>{row[1]}</span>
            <span className={`col-span-2 text-right truncate ${cellClass(2, header, unknown, hard, over, total, stale)}`}>{row[2]}</span>
            <span className={`col-span-4 truncate ${cellClass(3, header, unknown, hard, over, total, stale)}`}>{row[3]}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#b45309]">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span className="font-body text-xs font-medium">+$26,117 unbudgeted/over budget · 3 items unbudgeted · Client last updated 3 weeks ago</span>
      </div>
    </div>
  );
}

function NewWay() {
  const rooms = [
    {
      name: 'Living Room', count: 12, subtotal: '$32,480', collapsed: true,
      items: [
        { num: '01', name: 'Sofa 3 Seat', category: 'furniture', quality: 'Premium', qty: '1', total: '$9,960' },
        { num: '02', name: 'Accent Chair', category: 'furniture', quality: 'Luxury', qty: '2', total: '$9,000' },
        { num: '03', name: 'Area Rug', category: 'textiles', quality: 'Luxury', qty: '1', total: '$13,520' },
      ],
    },
    {
      name: 'Dining Room', count: 11, subtotal: '$38,640', collapsed: true,
      items: [
        { num: '04', name: 'Dining Table', category: 'furniture', quality: 'Premium', qty: '1', total: '$8,640' },
        { num: '05', name: 'Side Chair', category: 'furniture', quality: 'Luxury', qty: '6', total: '$30,000' },
      ],
    },
    {
      name: 'Primary Suite', count: 8, subtotal: '$16,200', collapsed: false,
      items: [
        { num: '06', name: 'Upholstered Bed', category: 'furniture', quality: 'Premium', qty: '1', total: '$11,400' },
        { num: '07', name: 'Nightstand', category: 'furniture', quality: 'Quality', qty: '2', total: '$4,800' },
      ],
    },
  ];

  const qualityBadge = (q) => ({
    'Quality': 'bg-[#f0f2f5] text-[#666666]',
    'Premium': 'bg-[#e8eef5] text-[#3b6fa0]',
    'Luxury': 'bg-[#e0f2f1] text-[#00695c]',
    'Ultra Lux': 'bg-[#fdf6e3] text-[#b8860b]',
  }[q] || 'bg-[#f0f2f5] text-[#666666]');

  return (
    <div className="bg-white border border-[#e0e4e8] rounded-xl p-4 h-full shadow-lg shadow-[#00a89d]/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-body text-[10px] text-[#666666] tracking-wider uppercase">Crestwood House</p>
          <p className="font-body text-sm font-bold text-[#1a1a1a]">Living, Dining & Primary Suite Refresh</p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#eef6f6] text-[#00a89d] px-2.5 py-1 rounded-full">
          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
          <span className="font-body text-[10px] font-semibold">On Track</span>
        </div>
      </div>

      {/* Table */}
      <div className="relative">
        <div className="border border-[#e0e4e8] rounded-lg overflow-hidden">
        {/* Column headers */}
        <div className="grid grid-cols-12 gap-1 px-2.5 py-1.5 bg-[#f9fbfd] font-body text-[9px] font-semibold uppercase text-[#666666] tracking-wide">
          <span className="col-span-1">#</span>
          <span className="col-span-4">Item Name</span>
          <span className="col-span-2">Category</span>
          <span className="col-span-2">Quality</span>
          <span className="col-span-1 text-right">Qty</span>
          <span className="col-span-2 text-right">Total</span>
        </div>

        {rooms.map(room => (
          <div key={room.name}>
            {/* Room group header */}
            <div className="flex items-center justify-between bg-[#f5f7f9] px-2.5 py-1.5 border-t border-[#e0e4e8]">
              <span className="font-body text-[10px] font-bold text-[#333333] flex items-center gap-1">
                <ChevronDown className={`w-3 h-3 text-[#999999] transition-transform ${room.collapsed ? '-rotate-90' : ''}`} />
                {room.name} <span className="text-[#999999] font-normal">({room.count} items)</span>
              </span>
              <span className="font-body text-[10px] font-bold text-[#1a1a1a]">{room.subtotal}</span>
            </div>
            {/* Item rows */}
            {!room.collapsed && room.items.map((item, i) => (
              <div key={item.num} className={`grid grid-cols-12 gap-1 px-2.5 py-1.5 font-body text-[10px] border-t border-[#e0e4e8] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}`}>
                <span className="col-span-1 text-[#666666]">{item.num}</span>
                <span className="col-span-4 text-[#1a1a1a] font-medium truncate">{item.name}</span>
                <span className="col-span-2"><span className="inline-block bg-[#f5f7f9] text-[#666666] px-1.5 py-0.5 rounded-full text-[9px]">{item.category}</span></span>
                <span className="col-span-2"><span className={`inline-block px-1.5 py-0.5 rounded-full text-[9px] font-medium ${qualityBadge(item.quality)}`}>{item.quality}</span></span>
                <span className="col-span-1 text-right text-[#1a1a1a]">{item.qty}</span>
                <span className="col-span-2 text-right font-bold text-[#1a1a1a]">{item.total}</span>
              </div>
            ))}
          </div>
        ))}

        {/* Active add row */}
        <div className="grid grid-cols-12 gap-1 px-2.5 py-1.5 font-body text-[10px] border-t-2 border-[#20B2AA]/50 bg-[#eef6f6] items-center">
          <span className="col-span-1 text-[#20B2AA] font-bold">+</span>
          <span className="col-span-4">
            <span className="block font-body text-[9px] text-[#999999] mb-0.5">Add New Item:</span>
            <span className="inline-flex items-center justify-between bg-white border border-[#20B2AA] rounded px-1.5 py-1 text-[#1a1a1a] w-full">
              <span className="inline-flex items-center">Chair<span className="inline-block w-px h-3 bg-[#20B2AA] ml-0.5 animate-pulse" /></span>
              <X className="w-3 h-3 text-[#999999]" />
            </span>
          </span>
          <span className="col-span-2"></span>
          <span className="col-span-2"></span>
          <span className="col-span-1"></span>
          <span className="col-span-2"></span>
        </div>
        </div>

        {/* Floating library dropdown */}
        <div className="absolute left-0 right-0 top-full mt-1 z-20 bg-white rounded-lg shadow-lg shadow-black/10 border border-[#e0e4e8] p-2.5">
          {/* Accent Chair */}
          <div className="flex items-center justify-between mb-1">
            <span className="font-body text-xs font-bold text-[#333333]">Accent Chair</span>
            <span className="font-body text-[10px] text-[#999999]">Furniture</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2.5">
            {[
              { label: 'Quality', price: '$1,200' },
              { label: 'Premium', price: '$2,200' },
              { label: 'Luxury', price: '$4,500' },
              { label: 'Ultra Lux', price: '$8,500' },
            ].map(o => (
              <span key={o.label} className="font-body text-[10px] px-2 py-1 rounded border bg-[#F8F9FA] border-[#E0E0E0] text-[#333333]">{o.label} {o.price}</span>
            ))}
          </div>
          {/* Side Chair */}
          <div className="flex items-center justify-between mb-1">
            <span className="font-body text-xs font-bold text-[#333333]">Side Chair</span>
            <span className="font-body text-[10px] text-[#999999]">Furniture</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {[
              { label: 'Quality', price: '$900' },
              { label: 'Premium', price: '$1,800' },
              { label: 'Luxury', price: '$3,500', selected: true },
              { label: 'Ultra Lux', price: '$5,250' },
            ].map(o => (
              <span key={o.label} className={`relative font-body text-[10px] px-2 py-1 rounded border ${o.selected ? 'bg-[#E0F7F6] border-[#20B2AA] text-[#00695c]' : 'bg-[#F8F9FA] border-[#E0E0E0] text-[#333333]'}`}>
                {o.label} {o.price}
                {o.selected && (
                  <MousePointer2 className="absolute -bottom-2 -right-2 w-3.5 h-3.5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                )}
              </span>
            ))}
          </div>
          {/* Footer */}
          <div className="pt-2 border-t border-[#f0f2f5]">
            <span className="font-body text-xs font-semibold text-[#20B2AA]">+ Use 'Chair'</span>
          </div>
        </div>
      </div>
      <div className="h-40"></div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#f0f2f5]">
        <div className="flex items-center gap-1.5 text-[#00a89d]">
          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          <span className="font-body text-[10px] font-medium">Ready to Send for Client Approval</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-body text-[10px] text-[#666666]">Scope Total · 31 items</span>
          <span className="font-body text-sm font-bold text-[#1a1a1a]">$87,320</span>
        </div>
      </div>
    </div>
  );
}

export default function ExpectationGap() {
  return (
    <section className="relative py-12 lg:py-20 bg-secondary/30">
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
            <span className="italic font-light text-accent">Expectation Gap</span>
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
