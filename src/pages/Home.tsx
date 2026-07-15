import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import QandA from '../components/QnA/QandA';
import ContactModal from '../components/SmartContactForm/ContactModal';
import Testimonial from '../components/Testimonial/Testimonial';
import './Home.css';

const practices = [
  {
    tag: 'Consulting',
    title: 'Strategy & Management Consulting',
    body: 'We partner with leadership teams to architect digital transformation roadmaps, rationalise technology investments, and unlock measurable business outcomes — delivered with the rigour of a top-tier advisory firm.',
    link: '/products-services'
  },
  {
    tag: 'Engineering',
    title: 'Platform Integration & Implementation',
    body: 'From ERP and CRM integrations to API gateway design and microservices orchestration, our engineers handle the full lifecycle of connecting disparate enterprise platforms into one cohesive, high-performance ecosystem.',
    link: '/products-services'
  },
  {
    tag: 'Products',
    title: 'Custom In-House Applications',
    body: 'We design and build bespoke web and mobile applications — dashboards, portals, workflow tools — tailored precisely to your operational requirements, at a price point that makes quality software accessible to every organisation.',
    link: '/products-services'
  },
  {
    tag: 'Industry',
    title: 'Tower & Telecom Industry Software',
    body: 'Purpose-built software for telecommunications tower operators: asset management, site monitoring, SLA tracking, and field-force automation — all delivered in a single unified platform.',
    link: '/products-services'
  }
];

const metrics = [
  { value: '30+', label: 'Projects Delivered' },
  { value: '98%', label: 'On-Time Delivery Rate' },
  { value: '20+', label: 'Enterprise Clients' },
  { value: '12', label: 'Industry Verticals Served' }
];

const capabilities = [
  {
    id: 'strategy',
    label: 'Strategy & Architecture',
    heading: 'Enterprise Architecture & Digital Strategy',
    body: 'Our consulting arm assesses your technology landscape, identifies inefficiencies, and produces a structured transformation blueprint. We use proven frameworks—TOGAF, Zachman, and custom digital maturity models—to deliver strategies that board rooms act on.',
    points: [
      'Technology landscape assessments & gap analysis',
      'Digital maturity modelling and KPI alignment',
      'Cloud adoption and migration roadmapping',
      'Vendor selection and TCO analysis'
    ]
  },
  {
    id: 'integration',
    label: 'Platform Integration',
    heading: 'Seamless Enterprise Platform Integration',
    body: 'We implement, configure, and deeply integrate leading enterprise platforms — Salesforce, SAP, ServiceNow, Microsoft 365, and bespoke systems — ensuring your teams have a single source of truth and eliminating costly data silos.',
    points: [
      'RESTful & GraphQL API design and governance',
      'ETL pipelines and real-time event streaming',
      'Legacy modernisation with strangler-fig patterns',
      'Middleware and ESB orchestration layers'
    ]
  },
  {
    id: 'engineering',
    label: 'Custom Engineering',
    heading: 'Precision-Engineered Custom Applications',
    body: 'From concept to deployment, our full-stack engineering teams build performant, scalable web and mobile applications using modern technology stacks — React, Next.js, Node.js, and cloud-native infrastructure — with a product-quality finish.',
    points: [
      'Full-stack web application development (React / Next.js)',
      'Mobile applications (React Native / Flutter)',
      'Role-based admin panels and reporting dashboards',
      'Automated CI/CD, observability, and SRE practices'
    ]
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCap, setActiveCap] = useState('strategy');
  const current = capabilities.find(c => c.id === activeCap)!;

  return (
    <div className="home">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__inner container">
          <div className="home-hero__text fade-up">
            <p className="t-overline home-hero__eyebrow">We are your solutioning partner</p>
            <h1 className="home-hero__heading t-display">
              We provide software<br />
              <em>solutions everywhere.</em>
            </h1>
            <p className="home-hero__sub t-body-lg">
              We make high-quality, platform-grade software affordable and accessible —
              from consulting and platform integration to in-house custom applications and
              telecommunications infrastructure systems.
            </p>
            <div className="home-hero__actions">
              <button className="btn btn-gold" onClick={() => setIsModalOpen(true)}>
                Get a free consultation
              </button>
              <a href="/products-services" className="btn btn-outline">
                Explore services
              </a>
            </div>
          </div>

          <div className="home-hero__marquee fade-up fade-up-d2" aria-hidden>
            <AnimatedText
              text="Consulting · Integration · Custom Applications · Tower Industry Software"
              textStyle="gradient"
              cursorStyle="line"
              size="xl"
              typingSpeed={60}
            />
          </div>
        </div>

        <div className="home-hero__rule-bar">
          {metrics.map((m, i) => (
            <div key={i} className="metric-item">
              <span className="metric-item__value">{m.value}</span>
              <span className="metric-item__label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice Areas ────────────────────────────────────────────── */}
      <section className="home-practices">
        <div className="container">
          <div className="home-practices__header">
            <div className="section-rule" />
            <h2 className="t-h2">Our practice areas</h2>
            <p className="t-body-lg home-practices__sub">
              Four integrated disciplines. One end-to-end delivery capability.
            </p>
          </div>

          <div className="home-practices__grid">
            {practices.map((p, i) => (
              <a href={p.link} key={i} className="practice-card">
                <span className="tag">{p.tag}</span>
                <h3 className="practice-card__title t-h3">{p.title}</h3>
                <p className="practice-card__body t-body">{p.body}</p>
                <span className="practice-card__arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities Deep-Dive ────────────────────────────────────── */}
      <section className="home-capabilities">
        <div className="container">
          <div className="home-capabilities__header">
            <div className="section-rule section-rule--dark" />
            <h2 className="t-h2" style={{ color: '#fff' }}>Depth of capability</h2>
          </div>

          <div className="home-capabilities__tabs">
            {capabilities.map(c => (
              <button
                key={c.id}
                className={`cap-tab ${activeCap === c.id ? 'active' : ''}`}
                onClick={() => setActiveCap(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="home-capabilities__pane">
            <div className="cap-pane__text">
              <h3 className="t-h3" style={{ color: '#fff', marginBottom: '1.25rem' }}>
                {current.heading}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1.05rem' }}>
                {current.body}
              </p>
              <ul className="cap-pane__list">
                {current.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <a href="/products-services" className="btn btn-gold" style={{ marginTop: '2.5rem' }}>
                See full capabilities →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Redweb strip ──────────────────────────────────────────── */}
      <section className="home-why">
        <div className="container home-why__inner">
          <div className="home-why__left">
            <div className="section-rule" />
            <h2 className="t-h2">Quality software.<br />Accessible pricing.</h2>
          </div>
          <div className="home-why__right">
            <p className="t-body-lg">
              We believe enterprise-grade software should not be a privilege reserved for Fortune 500 companies.
              Redweb removes the cost barrier by delivering in-house, purpose-built applications with the same
              rigour, architecture, and finish you would expect from a top-tier technology consultancy — at a price
              that works for scale-ups, mid-markets, and large enterprises alike.
            </p>
            <div className="home-why__pillars">
              {['Fixed-scope pricing transparency', 'Dedicated in-house engineering pods', 'Post-delivery SLA and support', 'Agile delivery with weekly checkpoints'].map((p, i) => (
                <div key={i} className="pillar-item">
                  <span className="pillar-item__check">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="home-testimonials">
        <div className="container">
          <div className="section-rule" />
          <h2 className="t-h2 home-testimonials__heading">Client perspectives</h2>
        </div>
        <Testimonial />
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="home-faq">
        <div className="container">
          <div className="section-rule" />
          <h2 className="t-h2 home-faq__heading">Frequently asked questions</h2>
          <QandA />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <h2 className="t-h2" style={{ color: '#fff' }}>Start your project with us.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: '1.1rem' }}>
              Schedule a free 30-minute discovery call with our consulting team.
            </p>
          </div>
          <button className="btn btn-gold" onClick={() => setIsModalOpen(true)}>
            Book a consultation
          </button>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        defaultService="IT Consulting"
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Home;