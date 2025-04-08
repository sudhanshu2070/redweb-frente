import React, { useState } from 'react';
import SmartContactForm from './SmartContactForm';
import './ContactModal.css';

interface ContactModalProps {
    defaultService?: string;
    onClose: () => void; 
}

const ContactModal: React.FC<ContactModalProps> = ({ defaultService = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button - Can be placed anywhere */}
      <button 
        className="quote-button" 
        onClick={() => setIsOpen(true)}
      >
        Get a Quote
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="modal-close" 
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <SmartContactForm 
              defaultService={defaultService} 
              onSuccess={() => setIsOpen(false)} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;