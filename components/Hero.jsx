// Nav + Hero + What-it-is

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 32);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '14px 24px',
      background: scrolled ? 'rgba(10,14,26,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'background 0.3s var(--re-ease), border-color 0.3s var(--re-ease)',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
          <img src="assets/icon.png" style={{ width: 30, height: 30, borderRadius: 7 }} alt="ResellEngine"/>
          <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>ResellEngine</span>
        </a>
        <div className="hide-mobile" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['So funktioniert\u2019s', '#how'], ['Funktionen', '#features'], ['Vergleich', '#compare'], ['FAQ', '#faq']].map(([l, h]) => (
            <a key={h} href={h} style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F5F5F7'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.62)'}>
              {l}
            </a>
          ))}
        </div>
        <a href="#waitlist" className="btn-ghost" style={{ padding: '9px 18px', fontSize: '0.9rem' }}>Auf die Waitlist</a>
      </div>
    </nav>
  );
}

function Hero() {
  const [email, setEmail] = React.useState('');
  const [joined, setJoined] = React.useState(false);
  const [priceIn, setPriceIn] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setPriceIn(true), 900);
    return () => clearTimeout(t);
  }, []);

  // Subtle parallax on phone
  const phoneRef = React.useRef(null);
  React.useEffect(() => {
    const on = () => {
      if (!phoneRef.current) return;
      const y = window.scrollY;
      phoneRef.current.style.transform = `translateY(${Math.min(y * 0.06, 40)}px)`;
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <section id="top" style={{ padding: '140px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <Halo w={1100} h={780} top="10%" blue={0.09} cyan={0.05} blur={60}/>
      {/* subtle grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.35,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse at 50% 30%, #000 0%, transparent 65%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 0%, transparent 65%)',
      }}/>

      <div className="container hero-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Reveal delay={0}>
            <span className="eyebrow"><span className="dot"/> Bald verfügbar für iOS · Beta 2026</span>
          </Reveal>
          <Reveal delay={90}>
            <h1 style={{
              fontSize: 'clamp(2.75rem, 6.4vw, 4.5rem)',
              fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.035em',
              margin: '22px 0 0',
            }}>
              Scannen.<br/>
              Bewerten.<br/>
              <GradText>Verkaufen.</GradText>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p style={{
              color: 'var(--re-fg-2)', fontSize: '1.18rem', lineHeight: 1.6,
              margin: '24px 0 32px', maxWidth: 500,
            }}>
              Fotografiere gebrauchte Produkte, erhalte Marktpreise aus echten
              Verkaufsdaten und veröffentliche dein Inserat mit einem Tap.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'grid', gap: 12 }}>
              {[
                ['Marktwert in unter 10 Sekunden', 'bolt'],
                ['Echte Transaktionsdaten — keine Schätzungen', 'shield'],
                ['Fertiges eBay-Inserat in Sekunden', 'send'],
              ].map(([label, ic]) => (
                <li key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--re-fg)' }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 999,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(111,126,255,0.12)', border: '1px solid rgba(111,126,255,0.22)',
                    color: '#AEB9FF',
                  }}><Icon name={ic} size={15} strokeWidth={2}/></span>
                  <span style={{ fontSize: '0.98rem', fontWeight: 500 }}>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={340}>
            <form id="waitlist" onSubmit={e => { e.preventDefault(); setJoined(true); }}
              style={{ display: 'flex', gap: 8, maxWidth: 460, flexWrap: 'wrap' }}>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="deine@email.com" disabled={joined}
                style={{
                  flex: '1 1 220px', padding: '14px 20px', borderRadius: 999,
                  border: '1px solid var(--re-border)', background: 'var(--re-card)',
                  color: 'var(--re-fg)', fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--re-blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(111,126,255,0.15)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--re-border)'; e.target.style.boxShadow = 'none'; }}/>
              <button type="submit" className="btn-primary">
                {joined ? 'Du bist dabei ✓' : 'Auf die Waitlist'}
              </button>
            </form>
            <p style={{ color: 'var(--re-fg-3)', fontSize: '0.85rem', marginTop: 14, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon name="lock" size={13}/> Kostenlos. Keine Kreditkarte.
              </span>
              <span style={{ width: 3, height: 3, borderRadius: 999, background: 'rgba(255,255,255,0.25)' }}/>
              <span>Über <b style={{ color: 'var(--re-fg-2)' }}>2.400</b> Verkäufer:innen auf der Waitlist</span>
            </p>
          </Reveal>
        </div>

        {/* Phone column */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', minHeight: 640 }}>
          <Halo w={480} h={480} top="50%" left="52%" blue={0.14} cyan={0.08} blur={40} breathe/>
          <div ref={phoneRef} style={{ position: 'relative', transition: 'transform 0.1s linear' }}>
            <Phone src="assets/screens/scan-result.jpeg" width={300} float/>

            {/* Hero phone stands alone — no floating overlays */}
          </div>
        </div>
      </div>

      {/* Mobile-only simplified phone */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-grid > div:nth-child(2) { min-height: 520px !important; }
        }
      `}</style>
    </section>
  );
}

// What-it-is — single calm statement
function WhatItIs() {
  return (
    <section style={{ padding: '20px 0 40px' }}>
      <div className="container">
        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.1fr auto 1.1fr auto 1.1fr',
            gap: 16, alignItems: 'center', maxWidth: 900, margin: '0 auto',
            padding: '28px 28px', borderRadius: 24,
            background: 'rgba(255,255,255,0.025)', border: '1px solid var(--re-border)',
          }} className="wii-grid">
            {[
              ['Foto', 'camera', 'Beliebiges Produkt fotografieren'],
              ['Preis', 'chart', 'Marktwert aus echten Verkäufen'],
              ['Inserat', 'send', 'Mit einem Tap veröffentlichen'],
            ].reduce((acc, step, i, arr) => {
              acc.push(
                <div key={step[0]} style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                  <span style={{
                    width: 38, height: 38, borderRadius: 12,
                    background: 'var(--re-card-strong)', border: '1px solid var(--re-border)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: '#AEB9FF', flexShrink: 0,
                  }}><Icon name={step[1]} size={18}/></span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{step[0]}</div>
                    <div style={{ color: 'var(--re-fg-2)', fontSize: '0.82rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{step[2]}</div>
                  </div>
                </div>
              );
              if (i < arr.length - 1) acc.push(
                <div key={'sep' + i} style={{ color: 'var(--re-fg-3)' }}><Icon name="arrow-right" size={18}/></div>
              );
              return acc;
            }, [])}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .wii-grid { grid-template-columns: 1fr !important; }
          .wii-grid > div:nth-child(even) { display: none; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Nav, Hero, WhatItIs });
