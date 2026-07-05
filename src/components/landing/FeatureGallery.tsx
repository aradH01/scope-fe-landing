import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Users, Shield, MessageCircle, Bell, Eye } from 'lucide-react';

const MATERIALS_IMAGE = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/92abcc52d_generated_d058ba2b.png";

const features = [
  {
    icon: FileText,
    title: 'Beautiful Scopes, Instantly',
    description: 'Create polished, professional budgets your clients will actually want to read. Organize by room, category, or phase without needing spreadsheet skills. Demystify your client\'s financial expectations.',
    stats: 'Faster and more reliable than spreadsheets',
  },
  {
    icon: Users,
    title: 'A Shared View, Always',
    description: 'Your client gets a personalized view showing exactly where their investment stands, keeping everyone up to date as your projects move forward. No more "can you resend that spreadsheet?"',
    stats: 'Everyone on the same page',
  },
  {
    icon: MessageCircle,
    title: 'Changes Become Conversations',
    description: 'When something shifts (a product is discontinued, a client upgrades a finish), Scope makes it easy to document it, communicate it, and get sign-off. Protect your margins by avoiding awkward surprises at the end.',
    stats: 'Fewer end-of-project disputes',
  },
  {
    icon: Eye,
    title: 'See the Whole Picture',
    description: 'It\'s easy to get lost in the activity of individual items. Take control and maintain visibility into your actual spend versus budget, and make smarter decisions that fit within budget expectations.',
    stats: 'Stay in complete control',
  },
  {
    icon: Bell,
    title: 'Approvals Without the Chase',
    description: 'Send budget updates or change requests directly through Scope. Clients review, comment, and approve all in one place with a clear record of what was agreed. Budget clarity streamlines your downstream proposal and procurement workflows as selections are finalized.',
    stats: 'Clear approval trails',
  },
  {
    icon: Shield,
    title: 'Built Around Your Workflow',
    description: 'Scope doesn\'t replace how you order or manage accounts. It wraps around it. Use your existing purchasing and bookkeeping tools; Scope adds the project-level clarity your clients experience, and keeps you firmly in control.',
    stats: 'Workflow enhancement, not disruption',
  },
];

export default function FeatureGallery() {
  return (
    <section id="features" className="relative py-12 lg:py-20">
      <div className="absolute left-[8%] lg:left-[12%] top-0 bottom-0 w-px bg-border/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            The Platform
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight" style={{ letterSpacing: '-0.02em' }}>
            The Budget Clarity Tool{' '}
            <span className="italic font-light text-primary">Your Studio Needs</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
            From the first client meeting to the final closeout, Scope gives you precision control and visibility into your project budgets.
          </p>
        </motion.div>

        {/* Feature cards — 2×3 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-body text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6" style={{ lineHeight: '1.6' }}>
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-body text-sm font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {feature.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual break with image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={MATERIALS_IMAGE}
            alt="Luxury interior design material swatches including marble, velvet, and brass"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-body text-2xl md:text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Where material precision meets <span className="font-light text-primary">financial clarity</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
