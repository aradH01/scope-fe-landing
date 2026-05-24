import React from 'react';
import { motion } from 'framer-motion';

const INTERIOR_IMAGE = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/23dba665b_generated_image.png";

const stats = [
  { value: '2,400+', label: 'Design Studios' },
  { value: '$180M+', label: 'Budgets Managed' },
  { value: '93%', label: 'Faster Client Approvals' },
  { value: '4.9/5', label: 'Average Rating' },
];

const testimonials = [
  {
    quote: 'Scope replaced four different tools in our studio. Budget conversations with clients went from our biggest pain point to our strongest differentiator.',
    author: 'Sarah Lindström',
    role: 'Principal, Lindström Interiors',
  },
  {
    quote: "My clients now see exactly where every dollar goes. The trust it builds is immeasurable. I've had zero budget disputes since switching.",
    author: 'Marcus Chen',
    role: 'Founder, Chen Design Group',
  },
];

export default function SocialProof() {
  return (
    <section id="about" className="relative py-24 lg:py-40 bg-secondary/30">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-body text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: '-0.03em' }}>
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Full-width image */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-20"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={INTERIOR_IMAGE}
            alt="Minimalist luxury interior with sage green sofa, natural oak floors, and brass fixtures"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-8"
            >
              <blockquote className="font-body text-lg md:text-xl font-light text-foreground mb-6" style={{ lineHeight: '1.6' }}>
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t.author}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
