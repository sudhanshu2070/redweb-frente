import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  role: string;
  department: string;
  message: string;
  consent: boolean;
}

const defaultForm: ContactForm = {
  name: '', email: '', company: '', role: '',
  department: 'IT Consulting', message: '', consent: false
};

const offices = [
  {
    city: 'Gurugram (Delhi-NCR)',
    role: 'Headquarters',
    address: 'Redweb Technologies, Cyber City, Phase III, Gurugram, Haryana — 122002',
    phone: '+91 (124) 498-2000',
    email: 'contact@redwebtech.com',
    time: '09:00 – 18:00 IST, Mon – Fri'
  },
  {
    city: 'Bengaluru',
    role: 'Engineering & Delivery Centre',
    address: 'Indiranagar Tech Park, Block B, Bengaluru, Karnataka — 560038',
    phone: '+91 (80) 6788-3300',
    email: 'delivery@redwebtech.com',
    time: '09:00 – 18:00 IST, Mon – Fri'
  },
  {
    city: 'Hyderabad',
    role: 'Platform Integration Centre',
    address: 'HITEC City, Madhapur, Hyderabad, Telangana — 500081',
    phone: '+91 (40) 4455-2200',
    email: 'integration@redwebtech.com',
    time: '09:00 – 18:00 IST, Mon – Fri'
  }
];

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState<ContactForm>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  useEffect(() => {
    const state = location.state as { department?: string } | null;
    if (state?.department) {
      setFormData(prev => ({ ...prev, department: state.department! }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData(defaultForm);
      }, 6000);
    }
  };

  const change = (field: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData(prev => ({ ...prev, [field]: e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value
      }));

  return (
    <div className="contact-page">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <div>
            <p className="t-overline contact-hero__eyebrow">Get In Touch</p>
            <h1 className="t-h1 contact-hero__heading">
              Let's talk about<br />
              <em>your next project.</em>
            </h1>
          </div>
          <div>
            <p className="t-body-lg contact-hero__desc">
              Whether you are exploring a specific service, need a technology audit, or want to understand how Redweb
              can help — our consulting team is available for a no-obligation conversation.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Main Layout ───────────────────────────────────────────────── */}
      <section className="contact-body">
        <div className="container contact-body__grid">

          {/* Form */}
          <div className="contact-form-panel">
            <h2 className="contact-form-panel__heading">Send us a message</h2>
            <p className="contact-form-panel__sub">We respond to all enquiries within one business day.</p>

            {submitted ? (
              <div className="contact-success">
                <FaCheckCircle className="contact-success__icon" />
                <h3>Message received.</h3>
                <p>
                  A member of our consulting team will reach out to you at <strong>{formData.email}</strong> within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Full name *</label>
                    <input id="cf-name" type="text" value={formData.name} onChange={change('name')} placeholder="John Smith" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-email">Work email *</label>
                    <input id="cf-email" type="email" value={formData.email} onChange={change('email')} placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-company">Company / Organisation *</label>
                    <input id="cf-company" type="text" value={formData.company} onChange={change('company')} placeholder="Acme Corp" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-role">Your role</label>
                    <input id="cf-role" type="text" value={formData.role} onChange={change('role')} placeholder="e.g. CTO, VP Engineering" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-dept">Area of interest *</label>
                  <select id="cf-dept" value={formData.department} onChange={change('department')}>
                    <option value="IT Consulting">IT & Management Consulting</option>
                    <option value="Platform Integration">Platform Integration & Implementation</option>
                    <option value="Custom Applications">Custom Application Development</option>
                    <option value="Tower & Telecom">Tower & Telecommunications Software</option>
                    <option value="Data & Analytics">Data Engineering & Analytics</option>
                    <option value="General">General Enquiry</option>
                    <option value="Careers">Careers</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-msg">Brief description *</label>
                  <textarea
                    id="cf-msg"
                    rows={6}
                    value={formData.message}
                    onChange={change('message')}
                    placeholder="Tell us about your project, challenges, or objectives..."
                    required
                  />
                </div>

                <div className="form-consent">
                  <label className="form-consent__label">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={change('consent')}
                      required
                    />
                    <span>I agree to Redweb processing my data in accordance with the Privacy Policy.</span>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Submit enquiry →
                </button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="contact-info-panel">
            <h2 className="contact-info-panel__heading">Our offices</h2>

            <div className="office-tabs">
              {offices.map((o, i) => (
                <button
                  key={i}
                  className={`office-tab ${activeOffice === i ? 'active' : ''}`}
                  onClick={() => setActiveOffice(i)}
                >
                  {o.city}
                </button>
              ))}
            </div>

            <div className="office-detail">
              <span className="tag">{offices[activeOffice].role}</span>
              <h3 className="office-detail__city">{offices[activeOffice].city}</h3>

              <div className="office-detail__info">
                <div className="office-detail__row">
                  <FaMapMarkerAlt />
                  <span>{offices[activeOffice].address}</span>
                </div>
                <div className="office-detail__row">
                  <FaPhoneAlt />
                  <a href={`tel:${offices[activeOffice].phone}`}>{offices[activeOffice].phone}</a>
                </div>
                <div className="office-detail__row">
                  <FaEnvelope />
                  <a href={`mailto:${offices[activeOffice].email}`}>{offices[activeOffice].email}</a>
                </div>
                <div className="office-detail__row">
                  <FaClock />
                  <span>{offices[activeOffice].time}</span>
                </div>
              </div>
            </div>

            <div className="contact-info-panel__general">
              <h3>General enquiries</h3>
              <div className="office-detail__row">
                <FaEnvelope />
                <a href="mailto:hello@redwebtech.com">hello@redwebtech.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
