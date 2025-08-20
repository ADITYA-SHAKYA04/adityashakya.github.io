import React, { useRef } from 'react';

export default function DarkModeToggle({ dark, setDark }) {
  const thumbRef = useRef();
  // Animate icon morph
  React.useEffect(() => {
    if (thumbRef.current) {
      thumbRef.current.classList.add('icon-morph');
      setTimeout(() => thumbRef.current.classList.remove('icon-morph'), 400);
    }
  }, [dark]);
  return (
    <button
      className={`dark-toggle modern-toggle${dark ? ' dark' : ''}`}
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      style={{ transition: 'background 0.4s, color 0.4s, box-shadow 0.4s, transform 0.4s' }}
    >
      <span className="toggle-track">
        <span className="toggle-thumb" ref={thumbRef}>
          <span className={`icon${dark ? ' moon' : ' sun'}`}>{dark ? '🌙' : '☀️'}</span>
        </span>
      </span>
    </button>
  );
}
