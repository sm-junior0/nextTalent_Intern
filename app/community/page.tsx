'use client';

import { useState } from 'react';
import WhatsAppModal from '@/components/WhatsAppModal';

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}