import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductsServices.css';

const services = [
  {
    category: 'Consulting',
    title: 'Digital Strategy & IT Consulting',
    description: 'We work with leadership teams to define technology strategies, assess digital readiness, and build multi-year transformation roadmaps aligned to business outcomes.',
    points: [
      'Digital maturity assessments and gap analysis',
      'Technology landscape rationalisation',
      'Build vs. buy vs. partner decision frameworks',
      'Business case development and ROI modelling',
      'Agile operating model and organisational design'
    ],
    deliverable: 'Strategy Roadmap Document'
  },
  {
    category: 'Consulting',
    title: 'Technology Architecture Review',
    description: 'Independent architecture assessments that identify risk, performance bottlenecks, scalability constraints, and cost inefficiencies across your technology stack.',
    points: [
      'Cloud architecture review (AWS / Azure / GCP)',
      'Application performance and resilience audit',
      'Security posture and compliance assessment',
      'Data architecture and governance review',
      'Vendor contract and cost optimisation'
    ],
    deliverable: 'Architecture Assessment Report'
  },
  {
    category: 'Integration',
    title: 'Enterprise Platform Integration',
    description: 'We design, implement, and govern seamless integrations between your core platforms — ERP, CRM, HRMS, billing, and custom systems — through API-first architectures.',
    points: [
      'Salesforce CRM implementation and customisation',
      'SAP S/4HANA integration and data migration',
      'ServiceNow ITSM and workflow configuration',
      'Microsoft 365 / Power Platform extensions',
      'Custom middleware and ESB layer design'
    ],
    deliverable: 'Integrated Platform Architecture'
  },
  {
    category: 'Integration',
    title: 'API Design & Data Engineering',
    description: 'We build robust API ecosystems and data pipelines that enable real-time data flow, business intelligence, and machine learning workloads at scale.',
    points: [
      'RESTful and GraphQL API design and governance',
      'Event-driven architecture with Kafka / RabbitMQ',
      'ETL/ELT pipeline development and orchestration',
      'Data lakehouse and warehouse design',
      'Business intelligence and reporting layers'
    ],
    deliverable: 'API Gateway & Data Pipeline'
  },
  {
    category: 'Applications',
    title: 'Custom Web Applications',
    description: 'Precision-engineered web applications built with modern technology stacks — from internal operational tools to customer-facing SaaS platforms — delivered with a product-quality finish.',
    points: [
      'React / Next.js frontend with TypeScript',
      'Node.js / Python / Go backend services',
      'Role-based access control and multi-tenancy',
      'Responsive, accessible UI/UX design',
      'End-to-end testing, CI/CD and observability'
    ],
    deliverable: 'Production Web Application'
  },
  {
    category: 'Applications',
    title: 'Mobile Application Development',
    description: 'Cross-platform iOS and Android applications developed with React Native and Flutter, delivering native-quality experiences with a single codebase.',
    points: [
      'React Native and Flutter development',
      'Offline-first architecture and local storage',
      'Push notifications and real-time sync',
      'App Store and Play Store submission',
      'Analytics integration and crash reporting'
    ],
    deliverable: 'Published Mobile Application'
  },
  {
    category: 'Applications',
    title: 'Enterprise Dashboards & Analytics Portals',
    description: 'Bespoke business intelligence and operations dashboards that surface real-time metrics, KPIs, and operational data in intuitive, role-specific interfaces.',
    points: [
      'Executive KPI dashboards and scorecards',
      'Operations monitoring and alerting portals',
      'Custom data visualisations and charting',
      'Self-service reporting and export tools',
      'Embedded BI integration (Power BI / Looker)'
    ],
    deliverable: 'Analytics Dashboard Platform'
  },
  {
    category: 'Tower',
    title: 'Tower Asset & Site Management Software',
    description: 'Purpose-built platform for telecommunications tower operators to manage the full lifecycle of tower assets, site visits, tenancy, and compliance in a single system.',
    points: [
      'Multi-tenant tower asset registry and GIS mapping',
      'Preventive and corrective maintenance scheduling',
      'Field engineer mobile app with offline capability',
      'Tenancy and lease management module',
      'Regulatory and compliance documentation tracking'
    ],
    deliverable: 'Tower Management Platform'
  },
  {
    category: 'Tower',
    title: 'Network SLA Monitoring & Operations Centre',
    description: 'Real-time monitoring and alerting platform for network infrastructure operators — providing full visibility into uptime, SLA adherence, and incident resolution timelines.',
    points: [
      'Real-time network health monitoring and alerting',
      'SLA tracking, breach prediction, and reporting',
      'Automated incident creation and routing',
      'Integration with NOC and ITSM tools',
      'Custom executive SLA dashboards'
    ],
    deliverable: 'Network Operations Centre Platform'
  }
];

const categories = ['All', 'Consulting', 'Integration', 'Applications', 'Tower'];

const ProductsServices: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? services : services.filter(s => s.category === active);

  return (
    <div className="ps-page">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="ps-hero">
        <div className="container ps-hero__inner">
          <div>
            <p className="t-overline ps-hero__eyebrow">Our Services</p>
            <h1 className="t-h1 ps-hero__heading">
              The full spectrum of<br />
              <em>software solutions everywhere.</em>
            </h1>
          </div>
          <div className="ps-hero__side">
            <p className="t-body-lg">
              From initial strategy through to implementation and post-delivery support,
              Redweb covers every phase of the software delivery lifecycle across consulting,
              integration, custom applications, and tower industry systems.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Filter tabs ───────────────────────────────────────────────── */}
      <div className="ps-filter">
        <div className="container ps-filter__inner">
          {categories.map(c => (
            <button
              key={c}
              className={`ps-filter__btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c === 'All' ? 'All services' :
               c === 'Tower' ? 'Tower Industry' : c}
            </button>
          ))}
        </div>
      </div>

      {/* ── Services List ─────────────────────────────────────────────── */}
      <section className="ps-list">
        <div className="container">
          {filtered.map((svc, i) => (
            <article key={i} className="ps-card">
              <div className="ps-card__meta">
                <span className="tag">{svc.category === 'Tower' ? 'Tower Industry' : svc.category}</span>
              </div>
              <div className="ps-card__body">
                <h2 className="ps-card__title t-h3">{svc.title}</h2>
                <p className="ps-card__desc">{svc.description}</p>
                <ul className="ps-card__points">
                  {svc.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
              <div className="ps-card__right">
                <div className="ps-card__deliverable">
                  <span className="ps-card__deliverable-label">Key deliverable</span>
                  <span className="ps-card__deliverable-value">{svc.deliverable}</span>
                </div>
                <button
                  className="btn btn-primary ps-card__cta"
                  onClick={() => navigate('/contact', { state: { department: svc.category === 'Consulting' ? 'IT Consulting' : svc.category === 'Integration' ? 'Platform Integration' : svc.category === 'Tower' ? 'Tower & Telecom' : 'Custom Applications' } })}
                >
                  Enquire about this service
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────────────────── */}
      <section className="ps-cta">
        <div className="container ps-cta__inner">
          <div>
            <div className="section-rule section-rule--dark" />
            <h2 className="t-h2" style={{ color: '#fff' }}>Not sure where to start?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem' }}>
              Schedule a free 30-minute call with our consulting team. No slides, no sales pitch — just a conversation.
            </p>
          </div>
          <button className="btn btn-gold" onClick={() => navigate('/contact')}>
            Book a discovery call →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsServices;