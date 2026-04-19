// Benefits, Product walkthrough, Comparison, Trust, FAQ, Final CTA, Footer

function SectionHead({ eyebrow, title, sub, align = 'center' }) {
  return (
    <div style={{ textAlign: align, maxWidth: 720, margin: align === 'center' ? '0 auto 56px' : '0 0 48px' }}>
      {eyebrow && (
        <Reveal>
          <div style={{ color: '#AEB9FF', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 style={{
          fontSize: 'clamp(1.9rem, 4vw, 3rem)',
          fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.12,
          margin: '0 0 16px',
        }}>{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p style={{ color: 'var(--re-fg-2)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

function Benefits() {
  const items = [
    { ic: 'bolt',     title: 'Sofortiger Marktwert', body: 'In unter 10 Sekunden. Kein Tippen, kein Suchen — einfach fotografieren.' },
    { ic: 'shield',   title: 'Echte Verkaufsdaten',  body: 'Preise aus tatsächlichen eBay-Transaktionen der letzten 90 Tage. Keine Wunschpreise.' },
    { ic: 'sparkles', title: 'KI erkennt alles',     body: 'Marke, Modell und Zustand werden automatisch identifiziert. Korrigieren in einem Tap.' },
    { ic: 'tag',      title: 'Preisstrategien',      body: 'Schnell verkaufen, balanciert oder maximaler Gewinn — du wählst die Richtung.' },
    { ic: 'send',     title: 'Schnell veröffentlicht', body: 'Titel, Beschreibung und Fotos fertig generiert. Du prüfst kurz — dann geht dein Inserat live.' },
    { ic: 'clock',    title: 'Entwürfe speichern',   body: 'Später weitermachen. Deine Listings warten, bis du bereit bist.' },
  ];
  return (
    <section id="features" style={{ padding: '100px 0 80px' }}>
      <div className="container">
        <SectionHead
          eyebrow="Warum ResellEngine"
          title={<>Weniger Recherche.<br/>Mehr Verkäufe.</>}
          sub="Alles, was beim Verkaufen Zeit kostet — automatisiert. Du behältst die Kontrolle, die App erledigt die Arbeit."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="card card-hover" style={{ padding: '28px 26px 30px', height: '100%' }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: 'rgba(111,126,255,0.10)', border: '1px solid rgba(111,126,255,0.20)',
                  color: '#AEB9FF',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}><Icon name={it.ic} size={19}/></span>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 600, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{it.title}</h3>
                <p style={{ color: 'var(--re-fg-2)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Walkthrough() {
  const steps = [
    {
      n: '01', title: 'Scannen',
      body: 'Fotografiere dein Produkt aus mehreren Winkeln. Die KI erkennt Marke, Modell und Zustand automatisch — oder du korrigierst sie in einem Tap.',
      img: 'assets/screens/scan-controller.jpeg',
      chip: { label: 'Erkennung', value: 'Xbox Wireless Controller', sub: 'Robot White · Grade B' },
    },
    {
      n: '02', title: 'Bewerten',
      body: 'Sieh dir Median, Spannweite und verkaufte Stückzahl an — alles aus echten eBay-Transaktionen. Keine Schätzungen, kein Bauchgefühl.',
      img: 'assets/screens/scan-result.jpeg',
      chip: { label: 'Median', value: '36 €', sub: 'basierend auf 8 Verkäufen' },
    },
    {
      n: '03', title: 'Verkaufen',
      body: 'Wähle deine Preisstrategie — Schnell, Balanciert oder Maximum. Inserat prüfen, Pflichtfelder bestätigen, veröffentlichen.',
      img: 'assets/screens/listing-price.jpeg',
      chip: { label: 'Veröffentlicht', value: 'Live auf eBay', sub: 'in unter 30 Sekunden' },
    },
  ];
  return (
    <section id="how" style={{ padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <Halo w={900} h={600} top="30%" blue={0.05} cyan={0.03}/>
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead
          eyebrow="So funktioniert's"
          title={<>Vom Foto zum Inserat.<br/><GradText>In drei Schritten.</GradText></>}
          sub="Jeder Schritt dauert Sekunden. Die App arbeitet, du entscheidest."/>

        <div style={{ display: 'grid', gap: 32 }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="walk-row" style={{
                display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: 64, alignItems: 'center',
                padding: '40px 48px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid var(--re-border)',
                borderRadius: 32,
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}>
                <div style={{ direction: 'ltr' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
                    color: '#AEB9FF', textTransform: 'uppercase', marginBottom: 18,
                  }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: 999,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--accent-grad, var(--re-gradient))', color: '#0A0E1A',
                      fontSize: '0.72rem', fontWeight: 800,
                    }}>{s.n}</span>
                    Schritt {s.n}
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--re-fg-2)', fontSize: '1.05rem', lineHeight: 1.65, margin: '0 0 24px', maxWidth: 440 }}>{s.body}</p>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px', borderRadius: 16,
                    background: 'var(--re-card-strong)', border: '1px solid var(--re-border)',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--re-fg-3)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.chip.label}</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: 2 }}>
                        {s.n === '02' ? <GradText>{s.chip.value}</GradText> : s.chip.value}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--re-fg-2)', marginTop: 2 }}>{s.chip.sub}</div>
                    </div>
                  </div>
                </div>
                <div style={{ direction: 'ltr', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <Halo w={380} h={380} top="50%" left="50%" blue={0.10} cyan={0.05} blur={30} breathe/>
                  <div style={{ position: 'relative' }}>
                    <Phone src={s.img} width={240}/>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .walk-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px !important; padding: 32px 24px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ['Produkt identifizieren',       'Recherchieren, vergleichen, Modellnummern suchen', 'Automatisch per Foto'],
    ['Marktpreis recherchieren',     '10–30 Min. Abgeschlossene Angebote durchklicken',  '< 10 Sekunden aus echten Daten'],
    ['Titel & Beschreibung',         'Selbst formulieren, Keywords raten',               'Fertig generiert, editierbar'],
    ['Kategorie & Attribute',        'Durch Dropdowns hangeln',                          'Vorschläge — du bestätigst'],
    ['Auf eBay veröffentlichen',     '10+ Schritte durch das Formular',                  'Kurz prüfen, veröffentlichen'],
    ['Preisstrategie',               'Bauchgefühl',                                      'Schnell, Balanciert, Maximum'],
  ];
  return (
    <section id="compare" style={{ padding: '100px 0 80px' }}>
      <div className="container">
        <SectionHead
          eyebrow="Vergleich"
          title={<>Manuell verkaufen vs.<br/><GradText>mit ResellEngine</GradText></>}
          sub="Dieselbe Aufgabe. 30 Minuten weniger pro Artikel."/>

        <Reveal>
          <div style={{
            borderRadius: 24, border: '1px solid var(--re-border)',
            background: 'rgba(255,255,255,0.02)', overflow: 'hidden',
          }}>
            {/* Header */}
            <div className="cmp-row cmp-head" style={{
              display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr',
              padding: '20px 28px', borderBottom: '1px solid var(--re-border)',
              fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
              color: 'var(--re-fg-3)', alignItems: 'center',
            }}>
              <div>Schritt</div>
              <div>Manuell</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#AEB9FF' }}>
                <img src="assets/icon.png" style={{ width: 18, height: 18, borderRadius: 4 }}/> ResellEngine
              </div>
            </div>
            {rows.map((r, i) => (
              <div key={i} className="cmp-row" style={{
                display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr',
                padding: '20px 28px',
                borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                alignItems: 'center',
              }}>
                <div style={{ fontWeight: 600, fontSize: '0.98rem' }}>{r[0]}</div>
                <div style={{ color: 'var(--re-fg-2)', fontSize: '0.93rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}><Icon name="x" size={15}/></span>
                  {r[1]}
                </div>
                <div style={{ color: 'var(--re-fg)', fontSize: '0.93rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: '#4ADE80', flexShrink: 0 }}><Icon name="check" size={15} strokeWidth={2.2}/></span>
                  {r[2]}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .cmp-head { display: none !important; }
          .cmp-row { grid-template-columns: 1fr !important; gap: 6px; padding: 18px 20px !important; }
          .cmp-row > div:nth-child(1) { color: #AEB9FF; font-size: 0.78rem !important; text-transform: uppercase; letter-spacing: 0.06em; }
        }
      `}</style>
    </section>
  );
}

function Trust() {
  // Count-up animation
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const io = new IntersectionObserver(e => { if (e[0].isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const CountUp = ({ to, duration = 1400, suffix = '', format = n => n }) => {
    const [v, setV] = React.useState(0);
    React.useEffect(() => {
      if (!inView) return;
      const t0 = performance.now();
      let raf;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(to * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [inView, to]);
    return <span className="tabnum">{format(Math.round(v))}{suffix}</span>;
  };
  const stats = [
    { v: 2400, suf: '+', lbl: 'Verkäufer:innen auf der Waitlist', fmt: n => n.toLocaleString('de-DE') },
    { v: 90,   suf: ' Tage', lbl: 'historische eBay-Verkaufsdaten' },
    { v: 10,   suf: 's', lbl: 'vom Foto zum Marktpreis', prefix: '<' },
    { v: 30,   suf: 's', lbl: 'vom Scan bis zum Inserat', prefix: '~' },
  ];
  return (
    <section ref={ref} style={{ padding: '80px 0 80px', position: 'relative' }}>
      <div className="container">
        <SectionHead
          eyebrow="Vertrauen durch Daten"
          title="Keine Schätzungen. Echte Transaktionen."
          sub="Preise und Trends kommen aus öffentlichen eBay-Verkaufsdaten — nicht aus gelisteten Wunschpreisen."/>

        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1,
            borderRadius: 24, overflow: 'hidden',
            background: 'var(--re-border)',
            border: '1px solid var(--re-border)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '40px 28px', background: 'var(--re-bg)', textAlign: 'left' }}>
                <div style={{ fontSize: 'clamp(2.2rem, 3.4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  <GradText>
                    {s.prefix || ''}<CountUp to={s.v} suffix={s.suf} format={s.fmt || (n => n)}/>
                  </GradText>
                </div>
                <div style={{ color: 'var(--re-fg-2)', fontSize: '0.92rem', marginTop: 12, lineHeight: 1.5 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Honest proof strip — how our prices are built */}
        <Reveal delay={120}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 24 }}>
            {[
              { ic: 'chart', h: 'Öffentliche eBay-Daten', b: 'Wir lesen tatsächlich verkaufte Artikel der letzten 90 Tage aus — nicht gelistete Wunschpreise.' },
              { ic: 'sparkles', h: 'Zustand fließt ein', b: 'Preise werden anhand des erkannten Zustands (neu / gut / akzeptabel) gewichtet — nicht pauschal gemittelt.' },
              { ic: 'lock', h: 'Transparente Schätzwerte', b: 'Jeder Preis zeigt Median, Spannweite und Anzahl der Verkäufe, auf denen er basiert.' },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: '24px 24px' }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(111,126,255,0.10)', border: '1px solid rgba(111,126,255,0.20)',
                  color: '#AEB9FF',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                }}><Icon name={t.ic} size={17}/></span>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 8px' }}>{t.h}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, margin: 0, color: 'var(--re-fg-2)' }}>{t.b}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ['Welche Produkte kann ich scannen?', 'Grundsätzlich jedes gebrauchte Produkt — Smartphones, Konsolen, Kopfhörer, Kameras, Taschen, Bücher und vieles mehr. Die KI wird laufend erweitert.'],
    ['Woher kommen die Preisdaten?', 'Die Preise basieren auf historischen Verkaufspreisen aus öffentlichen eBay-Daten der letzten 90 Tage. Keine Schätzungen, keine Wunschpreise — nur tatsächliche Transaktionen.'],
    ['Wie genau ist die KI-Erkennung?', 'Für gängige Produkte (Elektronik, Markenartikel, Kameras) sehr hoch. Wenn die Erkennung nicht stimmt, korrigierst du Marke oder Modell in einem Tap.'],
    ['Ist die App kostenlos?', 'Ja — es gibt einen kostenlosen Plan mit einer begrenzten Anzahl Scans pro Monat. Für Power-User gibt es Pro- und Power-Pläne mit unbegrenzten Scans.'],
    ['Auf welchen Plattformen kann ich verkaufen?', 'Zum Launch: eBay. Weitere Plattformen folgen eventuell später — abhängig davon, welche APIs sich sinnvoll anbinden lassen.'],
    ['Was passiert mit meinen Daten?', 'Deine Fotos werden nur zur Produkterkennung verwendet und nicht weitergegeben. Listings gehören dir.'],
    ['Wann ist der Launch?', 'Wir arbeiten am finalen Release für iOS. Trag dich auf die Waitlist ein — du bist dann unter den Ersten beim Start.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ padding: '80px 0 80px' }}>
      <div className="container">
        <SectionHead
          eyebrow="FAQ"
          title="Häufige Fragen"
          sub="Noch etwas unklar? Schreib uns — wir antworten meist innerhalb eines Werktags."/>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div style={{
                  background: isOpen ? 'var(--re-card-hover)' : 'var(--re-card)',
                  border: '1px solid ' + (isOpen ? 'var(--re-border-hover)' : 'var(--re-border)'),
                  borderRadius: 18,
                  transition: 'background 0.25s var(--re-ease), border-color 0.25s var(--re-ease)',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: '100%', padding: '20px 24px', textAlign: 'left',
                      background: 'transparent', border: 0, color: 'var(--re-fg)',
                      fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    }}>
                    <span>{q}</span>
                    <span style={{
                      width: 28, height: 28, borderRadius: 999,
                      background: isOpen ? 'var(--accent-grad, var(--re-gradient))' : 'var(--re-card-strong)',
                      color: isOpen ? '#0A0E1A' : 'var(--re-fg-2)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s var(--re-ease), background 0.25s var(--re-ease)',
                      flexShrink: 0,
                    }}><Icon name="plus" size={14} strokeWidth={2.2} stroke={isOpen ? '#0A0E1A' : 'currentColor'}/></span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 240 : 0, overflow: 'hidden',
                    transition: 'max-height 0.4s var(--re-ease)',
                  }}>
                    <p style={{
                      padding: '0 24px 22px', margin: 0,
                      color: 'var(--re-fg-2)', fontSize: '0.96rem', lineHeight: 1.65,
                    }}>{a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return (
    <section style={{ padding: '60px 0 100px' }}>
      <div className="container">
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 32,
          background: 'linear-gradient(160deg, rgba(111,126,255,0.08), rgba(127,215,255,0.04) 50%, rgba(255,255,255,0.02))',
          border: '1px solid rgba(111,126,255,0.20)',
          padding: '72px 48px',
          textAlign: 'center',
        }}>
          <Halo w={800} h={500} top="30%" blue={0.16} cyan={0.09} blur={50}/>
          <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, margin: '0 0 16px' }}>
                Sei dabei, wenn<br/><GradText>wir starten.</GradText>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ color: 'var(--re-fg-2)', fontSize: '1.1rem', margin: '0 0 32px' }}>
                Trag dich jetzt ein — du bist unter den Ersten, wenn ResellEngine AI im App Store ist.
              </p>
            </Reveal>
            <Reveal delay={160}>
              {!done ? (
                <form onSubmit={e => { e.preventDefault(); setDone(true); }}
                  style={{ display: 'flex', gap: 8, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="deine@email.com"
                    style={{
                      flex: '1 1 200px', padding: '16px 22px', borderRadius: 999,
                      border: '1px solid var(--re-border)', background: 'rgba(10,14,26,0.5)',
                      color: 'var(--re-fg)', fontSize: '1rem', fontFamily: 'inherit', outline: 'none',
                    }}/>
                  <button type="submit" className="btn-primary" style={{ padding: '16px 30px', fontSize: '1rem' }}>Notify me</button>
                </form>
              ) : (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  padding: '14px 22px', borderRadius: 999,
                  background: 'rgba(74,222,128,0.10)', border: '1px solid rgba(74,222,128,0.3)',
                  color: '#4ADE80', fontWeight: 600,
                }}>
                  <Icon name="check" size={18} strokeWidth={2.2}/> Du bist dabei. Wir melden uns zum Launch.
                </div>
              )}
              <p style={{ color: 'var(--re-fg-3)', fontSize: '0.85rem', marginTop: 18 }}>
                Kostenlos. Keine Kreditkarte. Jederzeit abmeldbar.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '48px 0 40px', borderTop: '1px solid var(--re-border)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr repeat(3, 1fr)', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <img src="assets/icon.png" style={{ width: 26, height: 26, borderRadius: 6 }}/>
            <span style={{ fontWeight: 700 }}>ResellEngine</span>
          </div>
          <p style={{ color: 'var(--re-fg-3)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, maxWidth: 300 }}>
            Die KI-gestützte Reseller-App für iOS. Made in Germany.
          </p>
        </div>
        {[
          { h: 'Produkt', l: [['Funktionen', '#features'], ['So funktioniert\u2019s', '#how'], ['Vergleich', '#compare'], ['FAQ', '#faq']] },
          { h: 'Unternehmen', l: [['Über uns', '#'], ['Blog', '#'], ['Kontakt', 'mailto:support@resellengine.app']] },
          { h: 'Rechtliches', l: [['Datenschutz', '#'], ['Impressum', '#'], ['AGB', '#']] },
        ].map(col => (
          <div key={col.h}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--re-fg-3)', marginBottom: 14 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {col.l.map(([t, h]) => (
                <li key={t}><a href={h} style={{ color: 'var(--re-fg-2)', textDecoration: 'none', fontSize: '0.9rem' }}>{t}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container" style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--re-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <p style={{ color: 'var(--re-fg-3)', fontSize: '0.82rem', margin: 0 }}>© 2026 ResellEngine. Alle Rechte vorbehalten.</p>
        <p style={{ color: 'var(--re-fg-3)', fontSize: '0.78rem', margin: 0, maxWidth: 420, textAlign: 'right' }}>
          Alle genannten Marken, Produktnamen und Plattformen sind Eigentum ihrer jeweiligen Inhaber.
        </p>
      </div>
      <style>{`
        @media (max-width: 760px) {
          footer .container { grid-template-columns: 1fr 1fr !important; }
          footer .container:last-child { flex-direction: column; align-items: flex-start !important; }
          footer .container:last-child p:last-child { text-align: left !important; }
        }
        @media (max-width: 480px) {
          footer .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Benefits, Walkthrough, Compare, Trust, FAQ, FinalCTA, Footer, SectionHead });
