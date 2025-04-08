import React, { useState } from 'react';
import './SmartContactForm.css';

interface SmartContactFormProps {
    defaultService?: string;
    onSuccess?: () => void;
  }
  
const SmartContactForm: React.FC<SmartContactFormProps> = ({ 
    defaultService = '', 
    onSuccess 
  }) => {

  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    designPreferences: '',
    timeline: ''
  });

  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [phoneSuggestions, setPhoneSuggestions] = useState<string[]>([]);

  const services = [
    'Website Design',
    'E-commerce Development',
    'SEO Optimization',
    'Mobile App Development'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Email auto-suggestions
    if (name === 'email' && value.includes('@')) {
      const domain = value.split('@')[1];
      setEmailSuggestions(
        ['gmail.com', 'yahoo.com', 'outlook.com']
          .filter(d => d.startsWith(domain))
      );
    }

    // Phone formatting
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length > 3) {
        setPhoneSuggestions([
          `+1 (${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}`,
          `+44 ${cleaned.substring(0, 4)} ${cleaned.substring(4)}`
        ]);
      }
    }
  };

  const showDesignFields = formData.service.includes('Design');
  const showDevFields = formData.service.includes('Development');

  return (
    <div className="smart-form-container">
      <h3>Get a Custom Quote</h3>
      <form>
        {/* Service Selection */}
        <div className="form-group">
          <label>Service Needed*</label>
          <select 
            name="service" 
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Dynamic Fields */}
        {showDesignFields && (
          <div className="form-group">
            <label>Design Preferences</label>
            <input
              type="text"
              name="designPreferences"
              placeholder="Minimalist, Dark Theme, etc."
              value={formData.designPreferences}
              onChange={handleChange}
            />
          </div>
        )}

        {showDevFields && (
          <div className="form-group">
            <label>Project Timeline</label>
            <select 
              name="timeline" 
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Select timeline</option>
              <option value="Urgent (2 weeks)">Urgent (2 weeks)</option>
              <option value="Standard (1-2 months)">Standard (1-2 months)</option>
            </select>
          </div>
        )}

        {/* Email with Suggestions */}
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailSuggestions.length > 0 && (
            <div className="suggestions-box">
              {emailSuggestions.map((suggestion, i) => (
                <div 
                  key={i}
                  onClick={() => {
                    const prefix = formData.email.split('@')[0];
                    setFormData({...formData, email: `${prefix}@${suggestion}`});
                    setEmailSuggestions([]);
                  }}
                >
                  {`${formData.email.split('@')[0]}@${suggestion}`}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Phone with Formatting */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
          {phoneSuggestions.length > 0 && (
            <div className="suggestions-box">
              {phoneSuggestions.map((suggestion, i) => (
                <div 
                  key={i}
                  onClick={() => {
                    setFormData({...formData, phone: suggestion});
                    setPhoneSuggestions([]);
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Get My Custom Proposal
        </button>
      </form>
    </div>
  );
};

export default SmartContactForm;