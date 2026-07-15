import React, { useEffect, useState } from 'react';
import './SmartContactForm.css';

interface SmartContactFormProps {
  defaultService?: string;
  onSuccess?: () => void;
}

interface FormData {
  service: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  designPreferences: string;
  timeline: string;
}

interface FormErrors {
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  designPreferences?: string;
  timeline?: string;
}

const initialFormData: FormData = {
  service: '',
  name: '',
  email: '',
  phone: '',
  budget: '',
  designPreferences: '',
  timeline: ''
};

const formatPhoneValue = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (!digits) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

const SmartContactForm: React.FC<SmartContactFormProps> = ({ defaultService = '', onSuccess }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const services = [
    'Website Design',
    'E-commerce Development',
    'SEO Optimization',
    'Mobile App Development'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhoneValue(value) }));
      if (errors.phone) {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'email' && value.includes('@')) {
      const domain = value.split('@')[1] || '';
      setEmailSuggestions(
        ['gmail.com', 'yahoo.com', 'outlook.com'].filter(d => d.startsWith(domain))
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: FormErrors = {};

    if (!formData.service) nextErrors.service = 'Please select a service.';
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.';
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    else if (formData.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Please enter a valid 10-digit number.';
    if (!formData.budget) nextErrors.budget = 'Please select a budget range.';
    if (showDesignFields && !formData.designPreferences.trim()) nextErrors.designPreferences = 'Please share your design preferences.';
    if (showDevFields && !formData.timeline) nextErrors.timeline = 'Please select a timeline.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmissionState('loading');

    window.setTimeout(() => {
      setSubmissionState('success');
      if (onSuccess) onSuccess();
    }, 1800);
  };

  const showDesignFields = formData.service.includes('Design');
  const showDevFields = formData.service.includes('Development');

  return (
    <div className="smart-form-container">
      <div className="smart-form-card">
        <div className="smart-form__header">
          <p className="smart-form__eyebrow">Tailored solutions</p>
          <h3>Get your custom proposal</h3>
          <p>Tell us about your idea and we will get back with a thoughtful plan.</p>
        </div>

        <form className="smart-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Service Needed*</label>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <span className="field-error">{errors.service}</span>}
            </div>

            <div className="form-group">
              <label>Your Name*</label>
              <input type="text" name="name" placeholder="Alex Morgan" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="field-error">{errors.email}</span>}
              {emailSuggestions.length > 0 && (
                <div className="suggestions-box">
                  {emailSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        const prefix = formData.email.split('@')[0] || 'user';
                        setFormData(prev => ({ ...prev, email: `${prefix}@${suggestion}` }));
                        setEmailSuggestions([]);
                      }}
                    >
                      {`${formData.email.split('@')[0] || 'user'}@${suggestion}`}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Phone*</label>
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label>Budget Range*</label>
              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Select budget</option>
                <option value="$5k-$15k">$5k - $15k</option>
                <option value="$15k-$50k">$15k - $50k</option>
                <option value="$50k+">$50k+</option>
              </select>
              {errors.budget && <span className="field-error">{errors.budget}</span>}
            </div>

            {showDesignFields && (
              <div className="form-group full-width">
                <label>Design Preferences*</label>
                <input
                  type="text"
                  name="designPreferences"
                  placeholder="Minimal, dark theme, premium feel"
                  value={formData.designPreferences}
                  onChange={handleChange}
                />
                {errors.designPreferences && <span className="field-error">{errors.designPreferences}</span>}
              </div>
            )}

            {showDevFields && (
              <div className="form-group full-width">
                <label>Project Timeline*</label>
                <select name="timeline" value={formData.timeline} onChange={handleChange}>
                  <option value="">Select timeline</option>
                  <option value="Urgent (2 weeks)">Urgent (2 weeks)</option>
                  <option value="Standard (1-2 months)">Standard (1-2 months)</option>
                </select>
                {errors.timeline && <span className="field-error">{errors.timeline}</span>}
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Get My Custom Proposal
          </button>
        </form>
      </div>

      {submissionState !== 'idle' && (
        <div className="submission-modal" role="dialog" aria-modal="true">
          <div className="submission-modal__card">
            {submissionState === 'loading' ? (
              <>
                <div className="spinner" />
                <h4>Preparing your proposal</h4>
                <p>Please wait while we review your details.</p>
              </>
            ) : (
              <>
                <div className="success-badge">✓</div>
                <h4>Email sent successfully</h4>
                <p>We will update you soon with the next steps for your project.</p>
                <button type="button" className="submission-close" onClick={() => setSubmissionState('idle')}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartContactForm;