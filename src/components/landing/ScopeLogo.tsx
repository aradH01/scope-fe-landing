import React from 'react';

const MARK_PRIMARY = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/798c5800f_scope_mark_primary_two_tone.svg";
const MARK_REVERSED = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/06305bd19_scope_mark_reversed_white_on_navy.svg";

export default function ScopeLogo({ size = 40, showWordmark = true, light = false }) {
  const markUrl = light ? MARK_REVERSED : MARK_PRIMARY;
  return (
    <div className="flex items-center gap-3">
      <img
        src={markUrl}
        alt="Scope logo mark"
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <>
          <span className={`w-px ${light ? 'bg-white/30' : 'bg-primary/30'}`} style={{ height: size * 0.6 }} />
          <span
            className={`font-body font-semibold uppercase ${light ? 'text-white' : 'text-primary'}`}
            style={{ letterSpacing: '0.25em', fontSize: size * 0.45 }}
          >
            Scope
          </span>
        </>
      )}
    </div>
  );
}
