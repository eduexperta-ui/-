import React, { useState, useEffect } from 'react';
import { Icons, PERSONAL_INFO } from '../constants';

interface ContactPopupProps {
  type: 'phone' | 'email';
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ type, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const info = {
    phone: {
      title: 'Phone Number',
      value: PERSONAL_INFO.phone,
      icon: Icons.phone,
      actionText: 'Call Now',
      actionHref: `tel:${PERSONAL_INFO.phone}`
    },
    email: {
      title: 'Email Address',
      value: PERSONAL_INFO.email,
      icon: Icons.email,
      actionText: 'Send Email',
      actionHref: `mailto:${PERSONAL_INFO.email}`
    }
  }[type];

  const handleCopy = () => {
    navigator.clipboard.writeText(info.value).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
    >
      <div 
        className="relative bg-white dark:bg-neutral-900 rounded-lg shadow-xl w-full max-w-sm m-4 p-6 text-center transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center text-yellow-400">
            {React.cloneElement(info.icon, { className: 'w-10 h-10' })}
        </div>

        <h3 id="contact-popup-title" className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{info.title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-mono tracking-wider">{info.value}</p>

        <div className="flex flex-col sm:flex-row gap-3">
            <button 
                onClick={handleCopy}
                className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${isCopied ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-gray-800 dark:text-gray-200'}`}
            >
              {isCopied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  <span>Copy</span>
                </>
              )}
            </button>
            <a
                href={info.actionHref}
                className="w-full bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
                {info.actionText}
            </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;