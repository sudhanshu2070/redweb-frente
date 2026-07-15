import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';
import { aboutData } from '../data/aboutData';

const About: React.FC = () => {
  const navigate = useNavigate();
  const [activeMilestone, setActiveMilestone] = useState(0);
  const serviceCardsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const cards = serviceCardsRef.current;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.12 }
    );
    cards.forEach(c => { if (c) observer.observe(c); });
    return () => cards.forEach(c => { if (c) observer.unobserve(c); });
  }, []);

  return (
    <div className="about-page">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <p className="t-overline about-hero__eyebrow">About Redweb</p>
            <h1 className="t-h1 about-hero__heading">
              Your solutioning partner<br />
              <em>for software solutions everywhere.</em>
            </h1>
          </div>
          <div className="about-hero__side">
            <p className="t-body-lg">
              Redweb is a solutioning partner that believes enterprise-grade technology
              should be accessible to every organisation — not just those with the largest budgets.
              We combine the strategic rigour of a top-tier consultancy with the engineering precision of a
              product-grade software company.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Stats Row ─────────────────────────────────────────────────── */}
      <section className="about-stats">
        <div className="container about-stats__grid">
          {aboutData.stats.map((s, i) => (
            <div key={i} className="about-stat-item">
              <span className="about-stat-item__value">{s.value}</span>
              <span className="about-stat-item__label">{s.label}</span>
            </div>
          ))}
          <div className="about-stat-item">
            <span className="about-stat-item__value">2018</span>
            <span className="about-stat-item__label">Year Founded</span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="about-mission">
        <div className="container about-mission__inner">
          <div className="about-mission__left">
            <div className="section-rule" />
            <h2 className="t-h2">Our mission</h2>
          </div>
          <div className="about-mission__right">
            <p className="t-body-lg">
              To make high-quality, precision-engineered software solutions affordable and accessible to organisations of every size —
              delivering the strategy, integration, and engineering excellence that helps businesses grow with confidence.
            </p>
            <div className="about-mission__values">
              {[
                { title: 'Precision', body: 'Every line of code, every architecture decision, every client interaction is held to the highest standard.' },
                { title: 'Transparency', body: 'Fixed-scope pricing, weekly delivery checkpoints, and complete visibility at every stage of engagement.' },
                { title: 'Partnership', body: 'We measure success by our clients\' outcomes — not by hours billed or project extensions.' }
              ].map((v, i) => (
                <div key={i} className="about-value-block">
                  <h3 className="about-value-block__title">{v.title}</h3>
                  <p className="about-value-block__body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Services ──────────────────────────────────────────────────── */}
      <section className="about-services">
        <div className="container">
          <div className="about-services__header">
            <div className="section-rule" />
            <h2 className="t-h2">What we do</h2>
            <p className="t-body-lg about-services__sub">
              Three integrated practices that span the full technology value chain.
            </p>
          </div>
          <ul className="about-services__grid">
            {aboutData.services.map((svc, i) => (
              <li
                key={svc.id}
                ref={el => { serviceCardsRef.current[i] = el; }}
                className="about-svc-card"
                style={{ '--accent': svc.color } as React.CSSProperties}
              >
                <div className="about-svc-card__icon">
                  <i className={svc.icon} style={{ color: svc.color }} />
                </div>
                <h3 className="about-svc-card__title t-h3">{svc.title}</h3>
                <p className="about-svc-card__body">{svc.description}</p>
                <ul className="about-svc-card__features">
                  {svc.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Timeline ──────────────────────────────────────────────────── */}
      <section className="about-timeline">
        <div className="container about-timeline__inner">
          <div className="about-timeline__left">
            <div className="section-rule" />
            <h2 className="t-h2">Our journey</h2>
            <div className="timeline-year-list">
              {aboutData.milestones.map((m, i) => (
                <button
                  key={i}
                  className={`timeline-year-btn ${activeMilestone === i ? 'active' : ''}`}
                  onClick={() => setActiveMilestone(i)}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </div>
          <div className="about-timeline__right">
            <span className="timeline-big-year">{aboutData.milestones[activeMilestone].year}</span>
            <h3 className="t-h3 timeline-event-title">{aboutData.milestones[activeMilestone].title}</h3>
            <p className="t-body-lg timeline-event-body">{aboutData.milestones[activeMilestone].desc}</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="about-team">
        <div className="container">
          <div className="about-team__header">
            <div className="section-rule" />
            <h2 className="t-h2">Leadership</h2>
          </div>
          <div className="about-team__grid">
            {aboutData.team.map((member, i) => (
              <div key={i} className="about-team-card">
                <div className="about-team-card__img-wrap">
                  <img src={member.image} alt={member.name} className="about-team-card__img" />
                  <div className="about-team-card__socials">
                    {member.socials.map((s, j) => (
                      <a key={j} href={s.url} target="_blank" rel="noreferrer" className="about-team-card__social">
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="about-team-card__body">
                  <h3 className="about-team-card__name">{member.name}</h3>
                  <p className="about-team-card__role">{member.position}</p>
                  <p className="about-team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <div className="section-rule section-rule--dark" />
            <h2 className="t-h2" style={{ color: '#fff' }}>
              Ready to start a conversation?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.1rem', maxWidth: 520 }}>
              Our consulting team is available for a no-obligation discovery call to understand your technology objectives.
            </p>
          </div>
          <button className="btn btn-gold" onClick={() => navigate('/contact')}>
            Contact us →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;