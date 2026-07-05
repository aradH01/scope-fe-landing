import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="relative rounded-3xl overflow-hidden px-8 py-8 md:px-16 md:py-12 text-center"
          style={{ backgroundColor: 'hsl(216, 52%, 24%)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(220, 38%, 95%) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight" style={{ letterSpacing: '-0.02em', color: 'hsl(220, 38%, 98%)' }}>
              Start Designing
              <br />
              <span className="italic font-light" style={{ color: 'hsl(175, 65%, 60%)' }}>Scopes That Impress</span>
            </h2>
            <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ lineHeight: '1.6', color: 'hsl(220, 25%, 80%)' }}>
              Join leading interior designers who turned scope management
              from a chore into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button className="font-body text-sm font-medium rounded-full px-8 h-12 min-w-[44px] shadow-lg" style={{ backgroundColor: 'hsl(175, 70%, 41%)', color: 'hsl(220, 38%, 98%)' }}>
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <span className="font-body text-sm" style={{ color: 'hsl(220, 20%, 72%)' }}>
                14 days free · No credit card
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
