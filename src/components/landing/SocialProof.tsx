import React from 'react';
import { motion } from 'framer-motion';

const INTERIOR_IMAGE = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/23dba665b_generated_image.png";

export default function SocialProof() {
  return (
    <section id="about" className="relative py-24 lg:py-40 bg-secondary/30">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Full-width image */}
        <motion.div
          className="rounded-3xl overflow-hidden"
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
      </div>
    </section>
  );
}
