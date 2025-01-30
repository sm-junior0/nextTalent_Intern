'use client';

import { Send, X } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-secondary">Join our WhatsApp community</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center mb-8">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-10 h-10 text-primary" />
          </div>
          <p className="text-gray-600 mb-6">
            Get notified on the latest projects and hackathons
          </p>
          <a 
            href="https://chat.whatsapp.com/your-group-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Join
          </a>
        </div>
      </div>
    </div>
  );
}