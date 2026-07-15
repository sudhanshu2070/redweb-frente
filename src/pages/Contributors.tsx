import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contributors.css';
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble, FaMedium, FaBehance } from 'react-icons/fa';

const contributors = [
  {
    name: 'Vemy Salvatore',
    role: 'Founder & Managing Partner',
    dept: 'Leadership',
    avatar: 'https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a877371bbe27fa0b695_peep-76.png',
    bio: 'Technology entrepreneur with expertise in enterprise digital transformation and platform architecture.',
    social: [
      { icon: <FaLinkedinIn />, url: '#', name: 'linkedin' },
      { icon: <FaTwitter />, url: '#', name: 'twitter' },
      { icon: <FaGithub />, url: '#', name: 'github' }
    ]
  },
  {
    name: 'Alica Keys',
    role: 'Partner, Engineering',
    dept: 'Engineering',
    avatar: 'https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e53517fc6b2492d63287d6d_peep-11.png',
    bio: 'Full-stack engineering lead specialising in cloud-native platform architecture and API ecosystems.',
    social: [
      { icon: <FaGithub />, url: '#', name: 'github' },
      { icon: <FaLinkedinIn />, url: '#', name: 'linkedin' },
      { icon: <FaMedium />, url: '#', name: 'medium' }
    ]
  },
  {
    name: 'Lucifer Morningstar',
    role: 'Director, Client Services',
    dept: 'Consulting',
    avatar: 'https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a30d871312cf4100aed_peep-73.png',
    bio: 'Consulting leader with a track record of successfully managing complex digital transformation programmes across 8 industry verticals.',
    social: [
      { icon: <FaLinkedinIn />, url: '#', name: 'linkedin' },
      { icon: <FaTwitter />, url: '#', name: 'twitter' }
    ]
  },
  {
    name: 'Amy Adams',
    role: 'Head of Product Design',
    dept: 'Design',
    avatar: 'https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e53536a9588e087617bd93c_peep-23.png',
    bio: 'UX strategist and design systems architect who has shipped platforms for over 2 million end users.',
    social: [
      { icon: <FaDribbble />, url: '#', name: 'dribbble' },
      { icon: <FaBehance />, url: '#', name: 'behance' },
      { icon: <FaLinkedinIn />, url: '#', name: 'linkedin' }
    ]
  }
];

const Contributors: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="contributors-page">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="contrib-hero">
        <div className="container contrib-hero__inner">
          <div>
            <p className="t-overline contrib-hero__eyebrow">Our People</p>
            <h1 className="t-h1 contrib-hero__heading">
              The team behind<br />
              <em>every delivery.</em>
            </h1>
          </div>
          <div>
            <p className="t-body-lg contrib-hero__desc">
              Redweb is driven by a team of consultants, engineers, designers, and client success managers who
              are deeply committed to precision, partnership, and delivering lasting value for every client.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Contributors Grid ─────────────────────────────────────────── */}
      <section className="contrib-section">
        <div className="container">
          <div className="contrib-section__header">
            <div className="section-rule" />
            <h2 className="t-h2">Leadership & core team</h2>
          </div>

          <div className="contrib-grid">
            {contributors.map((person, i) => (
              <div key={i} className="contrib-card">
                <div className="contrib-card__img-wrap">
                  <img src={person.avatar} alt={person.name} className="contrib-card__img" />
                  <div className="contrib-card__socials">
                    {person.social.map((s, j) => (
                      <a key={j} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="contrib-card__social">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="contrib-card__body">
                  <div className="contrib-card__dept">
                    <span className="tag">{person.dept}</span>
                  </div>
                  <h3 className="contrib-card__name">{person.name}</h3>
                  <p className="contrib-card__role">{person.role}</p>
                  <p className="contrib-card__bio">{person.bio}</p>
                  <button
                    className="btn btn-outline contrib-card__btn"
                    onClick={() => navigate('/aboutDev', { state: { namefromParam: person.name } })}
                  >
                    View profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join Us CTA ───────────────────────────────────────────────── */}
      <section className="contrib-join">
        <div className="container contrib-join__inner">
          <div className="contrib-join__text">
            <div className="section-rule section-rule--dark" />
            <h2 className="t-h2" style={{ color: '#fff' }}>Join the team.</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem', maxWidth: 520 }}>
              We are always looking for exceptional engineers, consultants, and designers who take quality personally.
              Explore our open roles or send a speculative application.
            </p>
          </div>
          <button className="btn btn-gold" onClick={() => navigate('/contact', { state: { department: 'Careers' } })}>
            Explore careers →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contributors;