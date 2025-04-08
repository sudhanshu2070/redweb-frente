import React from 'react';
import SmartContactForm from './SmartContactForm';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultService = '' 
}) => {
    // Close the modal when the user clicks outside of it
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <SmartContactForm 
          defaultService={defaultService} 
          onSuccess={onClose} 
        />
      </div>
    </div>
  );
};

export default ContactModal;