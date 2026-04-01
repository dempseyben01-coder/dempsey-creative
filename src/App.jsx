import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Globe, MessageSquare, Star, Menu, X } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function InView({ children, delay = 0 }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "Fast, conversion-focused websites built specifically for home service businesses. Every page designed to turn visitors into booked calls.",
  },
  {
    icon: MessageSquare,
    title: "Lead Automation",
    desc: "Missed call text-back, AI chat, and instant booking flows — so you never lose a lead to a competitor who picked up first.",
  },
  {
    icon: Star,
    title: "Reputation Growth",
    desc: "Automated review collection that builds your Google presence and makes you the obvious choice in your market.",
  },
];

const TRADES = ["HVAC", "Plumbing", "Electrical", "Roofing", "Landscaping"];

export default function DempseyCreative() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f9f8f5; color: #1a1a18; font-family: 'DM Sans', sans-serif; font-weight: 400; -webkit-font-smoothing: antialiased; }
        .page { max-width: 680px; margin: 0 auto; padding: 0 24px; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(249,248,245,0.88); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(26,26,24,0.08); }
        .nav-inner { max-width: 680px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .logo { font-family: 'DM Serif Display', serif; font-size: 17px; color: #1a1a18; text-decoration: none; letter-spacing: -0.01em; }
        .logo span { color: #2b5ce6; }
        .nav-links { display: flex; gap: 28px; list-style: none; }
        .nav-links a { font-size: 13px; color: #777; text-decoration: none; letter-spacing: 0.01em; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1a18; }
        .menu-btn { display: none; background: none; border: none; cursor: pointer; color: #1a1a18; padding: 4px; line-height: 0; }

        .mobile-menu { position: fixed; inset: 0; z-index: 99; background: #f9f8f5; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px; }
        .mobile-menu a { font-family: 'DM Serif Display', serif; font-size: 36px; color: #1a1a18; text-decoration: none; }
        .mobile-close { position: absolute; top: 20px; right: 24px; background: none; border: none; cursor: pointer; color: #1a1a18; line-height: 0; }

        .hero { padding: 140px 0 80px; }
        .eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #2b5ce6; margin-bottom: 22px; display: flex; align-items: center; gap: 10px; }
        .eyebrow::before { content: ''; display: block; width: 24px; height: 1px; background: #2b5ce6; }
        h1.headline { font-family: 'DM Serif Display', serif; font-size: clamp(36px, 7vw, 52px); line-height: 1.1; letter-spacing: -0.02em; color: #1a1a18; margin-bottom: 24px; }
        h1.headline em { font-style: italic; color: #2b5ce6; }
        .subline { font-size: 16px; line-height: 1.75; color: #666; max-width: 480px; margin-bottom: 36px; }
        .cta-link { display: inline-flex; align-items: center; gap: 5px; font-size: 14px; font-weight: 500; color: #1a1a18; text-decoration: none; border-bottom: 1.5px solid #1a1a18; padding-bottom: 2px; transition: color 0.2s, border-color 0.2s; }
        .cta-link:hover { color: #2b5ce6; border-color: #2b5ce6; }
        .cta-link:hover svg { transform: translate(2px, -2px); }
        .cta-link svg { transition: transform 0.2s; }

        .divider { height: 1px; background: rgba(26,26,24,0.08); margin: 64px 0; }
        .section-label { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #aaa; margin-bottom: 36px; }

        .service-item { display: flex; align-items: flex-start; gap: 20px; padding: 28px 0; border-bottom: 1px solid rgba(26,26,24,0.08); }
        .service-item:first-child { border-top: 1px solid rgba(26,26,24,0.08); }
        .service-icon { width: 34px; height: 34px; background: #eef1ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .service-title { font-size: 15px; font-weight: 500; color: #1a1a18; margin-bottom: 5px; }
        .service-desc { font-size: 14px; line-height: 1.7; color: #888; }

        .about-name { font-family: 'DM Serif Display', serif; font-size: 30px; letter-spacing: -0.01em; color: #1a1a18; margin-bottom: 5px; }
        .about-role { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #2b5ce6; margin-bottom: 22px; }
        .about-body { font-size: 15px; line-height: 1.8; color: #666; }
        .about-body p + p { margin-top: 16px; }
        .trades { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .trade-pill { font-size: 12px; font-weight: 500; padding: 5px 14px; border: 1px solid rgba(26,26,24,0.12); border-radius: 100px; color: #888; }

        .contact-block { background: #1a1a18; border-radius: 16px; padding: 52px 40px; text-align: center; }
        .contact-hed { font-family: 'DM Serif Display', serif; font-size: clamp(26px, 5vw, 38px); color: #f9f8f5; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 12px; }
        .contact-hed em { color: #7fa7ff; font-style: italic; }
        .contact-sub { font-size: 14px; color: rgba(249,248,245,0.45); margin-bottom: 32px; }
        .email-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; color: #1a1a18; background: #f9f8f5; text-decoration: none; padding: 13px 28px; border-radius: 100px; transition: background 0.2s, transform 0.15s; }
        .email-btn:hover { background: #fff; transform: translateY(-1px); }

        footer { padding: 36px 0 56px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
        footer p { font-size: 12px; color: #bbb; }
        .footer-logo { font-family: 'DM Serif Display', serif; font-size: 14px; color: #1a1a18; text-decoration: none; }
        .footer-logo span { color: #2b5ce6; }

        @media (max-width: 600px) {
          .nav-links { display: none; }
          .menu-btn { display: block; }
          .contact-block { padding: 36px 22px; }
        }
        @media (min-width: 601px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">Dempsey<span>Creative</span></a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
          {["Services", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
        </motion.div>
      )}

      <main>
        {/* Hero */}
        <section className="hero page">
          <motion.p className="eyebrow" {...fadeUp(0)}>Home Service Digital Agency</motion.p>
          <motion.h1 className="headline" {...fadeUp(0.08)}>
            Websites that make<br />
            contractors the <em>first call</em><br />
            in their city.
          </motion.h1>
          <motion.p className="subline" {...fadeUp(0.16)}>
            Dempsey Creative builds fast, lead-focused websites and automation systems for HVAC, plumbing, roofing, and electrical companies across the US.
          </motion.p>
          <motion.div {...fadeUp(0.22)}>
            <a href="#contact" className="cta-link">
              Let's talk <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="page" style={{ paddingBottom: "64px" }}>
          <div className="divider" style={{ margin: "0 0 64px" }} />
          <InView><p className="section-label">What I do</p></InView>
          <div>
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <InView key={title} delay={i * 0.1}>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon size={15} color="#2b5ce6" />
                  </div>
                  <div>
                    <p className="service-title">{title}</p>
                    <p className="service-desc">{desc}</p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="page" style={{ paddingBottom: "64px" }}>
          <div className="divider" style={{ margin: "0 0 64px" }} />
          <InView><p className="section-label">About</p></InView>
          <InView delay={0.06}>
            <p className="about-name">Ben Dempsey</p>
            <p className="about-role">Founder, Dempsey Creative</p>
          </InView>
          <InView delay={0.12}>
            <div className="about-body">
              <p>
                I'm a web designer and digital strategist focused entirely on one market: home service businesses. HVAC, plumbing, electrical, roofing, landscaping — the trades that keep things running.
              </p>
              <p>
                Dempsey Creative is a focused, no-fluff agency with one mission: build serious digital infrastructure for contractors who are serious about growth. Clean work, honest pricing, real results.
              </p>
            </div>
            <div className="trades">
              {TRADES.map((t) => <span key={t} className="trade-pill">{t}</span>)}
            </div>
          </InView>
        </section>

        {/* Contact */}
        <section id="contact" className="page" style={{ paddingBottom: "80px" }}>
          <div className="divider" style={{ margin: "0 0 64px" }} />
          <InView>
            <div className="contact-block">
              <p className="contact-hed">Ready to talk?</p>
              <p className="contact-sub">Drop an email and I'll get back to you within 24 hours.</p>
              <a href="mailto:ben@dempseycreative.co" className="email-btn">
                <Mail size={14} />
                ben@dempseycreative.co
              </a>
            </div>
          </InView>
        </section>
      </main>

      <div className="page">
        <footer>
          <a href="#" className="footer-logo">Dempsey<span>Creative</span></a>
          <p>© 2026 Dempsey Creative. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
