import React from 'react';
import ScopeLogo from '@/components/landing/ScopeLogo';

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand column */}
          <div className="max-w-sm">
            <ScopeLogo size={40} />
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed" style={{ lineHeight: '1.6' }}>
              The scope management platform purpose built for design professionals, by members of the trade.
            </p>
          </div>

          {/* Legal links */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              {legalLinks.map(link => (
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
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
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
