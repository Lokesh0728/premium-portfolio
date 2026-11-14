import React, { useEffect, useRef, useState } from 'react';

const Icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.65-4.54-3.85-4.54-1.78 0-2.57.98-3.02 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.13-.93.27-.69.89-1.4 1.94-1.4 1.37 0 1.92 1.05 1.92 2.59V20h3.38v-6.6Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
    </svg>
  ),
};

function Magnetic({ className, label, children, onClick }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.35;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => (ref.current.style.transform = '');
  return (
    <button type="button" ref={ref} className={className} aria-label={label} onMouseMove={onMove} onMouseLeave={reset} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Contact() {
  const [resume, setResume] = useState('idle');
  useEffect(() => {
    if (resume !== 'busy') return;
    const a = setTimeout(() => setResume('done'), 1300);
    const b = setTimeout(() => setResume('idle'), 3800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [resume]);

  const handleResumeClick = () => {
    if (resume === 'idle') {
      setResume('busy');
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/Lokesh_R_Resume.pdf';
        link.download = 'Lokesh_R_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 900);
    }
  };

  return (
    <div className="ct">
      <span className="mono dim">(07) Contact</span>
      <h2 className="ct-title">
        <span className="ln">
          <span>Let’s build</span>
        </span>
        <span className="ln">
          <span>
            something <em>impactful.</em>
          </span>
        </span>
      </h2>
      <div className="ct-row">
        <div className="socials">
          <Magnetic className="soc" label="GitHub" onClick={() => window.open('https://github.com/Lokesh0728', '_blank', 'noopener,noreferrer')}>
            {Icons.github}
          </Magnetic>
          <Magnetic className="soc" label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/lokesh015dev', '_blank', 'noopener,noreferrer')}>
            {Icons.linkedin}
          </Magnetic>
          <Magnetic className="soc" label="Email" onClick={() => (window.location.href = 'mailto:lokeshrajesh002@gmail.com')}>
            {Icons.mail}
          </Magnetic>
          <Magnetic className="soc" label="Phone" onClick={() => (window.location.href = 'tel:+916382843058')}>
            {Icons.phone}
          </Magnetic>
        </div>
        <Magnetic className={`resume r-${resume}`} label="Download Résumé" onClick={handleResumeClick}>
          <span className="resume-ic">{Icons.arrow}</span>
          <span className="resume-txt">{resume === 'idle' ? 'Résumé' : resume === 'busy' ? 'Downloading' : 'Downloaded'}</span>
          <span className="resume-fill" />
        </Magnetic>
      </div>
      <footer className="foot">
        <span className="mono dim">© 2026 Lokesh R</span>
        <span className="mono dim">Full Stack · MERN Developer</span>
      </footer>
    </div>
  );
}
