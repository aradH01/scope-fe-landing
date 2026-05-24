import React from 'react';
import ScopeLogo from '@/components/landing/ScopeLogo';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Resources: ['Help Center', 'Templates', 'Webinars', 'API Docs'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <ScopeLogo size={32} showWordmark={true} />
            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
              The budget platform built for interior designers.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Scope. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">Twitter</a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
