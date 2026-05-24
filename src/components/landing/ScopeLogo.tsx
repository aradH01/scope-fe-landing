import React from 'react';

const LOGO_URL = "https://media.base44.com/images/public/69fcac91e267d5a14c43536c/e11f9ea4a_ScopeLogo-54608AHex.png";

export default function ScopeLogo({ size = 40, showWordmark = true }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={LOGO_URL}
        alt="Scope logo mark"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'cover', borderRadius: '20%' }}
      />
      {showWordmark && (
        <span
          className="font-body text-xl font-semibold tracking-tight text-foreground"
          style={{ letterSpacing: '-0.03em' }}
        >
          Scope<span style={{ color: '#54608A' }}>.</span>
        </span>
      )}
    </div>
  );
}
