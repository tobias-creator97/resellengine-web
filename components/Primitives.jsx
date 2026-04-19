// ResellEngine landing refresh — shared primitives

// Phone bezel — wraps a screen image in an iPhone-style frame
function Phone({ src, width = 280, float = false, style = {} }) {
  const radius = Math.max(30, Math.round(width * 0.15));
  const notchW = Math.max(60, Math.round(width * 0.29));
  const notchH = Math.max(16, Math.round(width * 0.072));
  return (
    <div style={{
      width, background: '#111', borderRadius: radius + 2, padding: 3, position: 'relative',
      boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)',
      animation: float ? 'floaty 7s ease-in-out infinite' : undefined,
      ...style,
    }}>
      <div style={{
        position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
        width: notchW, height: notchH, background: '#000', borderRadius: 12, zIndex: 2,
      }}/>
      <img src={src} alt="" style={{
        width: '100%', borderRadius: radius, display: 'block',
        aspectRatio: '9/19.5', objectFit: 'cover',
      }}/>
    </div>
  );
}

// Glow halo
function Halo({ w = 640, h = 520, top = '50%', left = '50%', blur = 50, opacity = 1, blue = 0.08, cyan = 0.04, breathe = false }) {
  return (
    <div style={{
      position: 'absolute', top, left, transform: 'translate(-50%,-50%)',
      width: w, height: h,
      background: `radial-gradient(ellipse, rgba(111,126,255,${blue}), rgba(127,215,255,${cyan}) 40%, transparent 70%)`,
      filter: `blur(${blur}px)`, opacity,
      pointerEvents: 'none', zIndex: 0,
      animation: breathe ? 'breathe 6s ease-in-out infinite' : undefined,
    }}/>
  );
}

// Reveal wrapper — uses IntersectionObserver
function Reveal({ delay = 0, children, as: As = 'div', style = {}, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref} className={'reveal ' + (rest.className || '')}
      style={{ ['--rd']: delay + 'ms', ...style }}
      {...(({className, ...r}) => r)(rest)}>
      {children}
    </As>
  );
}

// Icons — thin SF-Symbols-ish. 1.5-2px strokes, round caps.
const Icon = ({ name, size = 20, stroke = 'currentColor', strokeWidth = 1.75 }) => {
  const P = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'camera': return (<svg {...P}><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H7l1.5-2h7L17 6h1.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Z"/><circle cx="12" cy="12.5" r="3.5"/></svg>);
    case 'chart': return (<svg {...P}><path d="M4 20V8"/><path d="M10 20v-7"/><path d="M16 20V4"/><path d="M22 20H2"/></svg>);
    case 'bolt': return (<svg {...P}><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z"/></svg>);
    case 'shield': return (<svg {...P}><path d="M12 3 4 6v6c0 4.5 3.4 8.5 8 9 4.6-.5 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>);
    case 'sparkles': return (<svg {...P}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>);
    case 'tag': return (<svg {...P}><path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z"/><circle cx="8" cy="8" r="1.3" fill={stroke}/></svg>);
    case 'clock': return (<svg {...P}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
    case 'check': return (<svg {...P}><path d="m5 12 5 5L20 7"/></svg>);
    case 'x': return (<svg {...P}><path d="M6 6 18 18M18 6 6 18"/></svg>);
    case 'arrow-right': return (<svg {...P}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case 'arrow-up-right': return (<svg {...P}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case 'plus': return (<svg {...P}><path d="M12 5v14M5 12h14"/></svg>);
    case 'scan': return (<svg {...P}><path d="M4 8V6a2 2 0 0 1 2-2h2"/><path d="M20 8V6a2 2 0 0 0-2-2h-2"/><path d="M4 16v2a2 2 0 0 0 2 2h2"/><path d="M20 16v2a2 2 0 0 1-2 2h-2"/><path d="M4 12h16"/></svg>);
    case 'send': return (<svg {...P}><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/></svg>);
    case 'globe': return (<svg {...P}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);
    case 'lock': return (<svg {...P}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>);
    case 'star': return (<svg {...P}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.1l-5.5 2.9 1-6.1L3.1 9.5l6.1-.9L12 3Z"/></svg>);
    default: return null;
  }
};

// Gradient text helper
function GradText({ children, style = {} }) {
  return (
    <span style={{
      background: 'var(--accent-grad, var(--re-gradient))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      ...style,
    }}>{children}</span>
  );
}

Object.assign(window, { Phone, Halo, Reveal, Icon, GradText });
