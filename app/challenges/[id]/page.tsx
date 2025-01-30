import { Mail, Monitor, Calendar, DollarSign, ArrowLeft } from 'lucide-react';
import ChallengeDetailsClient from './ChallengeDetailsClient';

// This function is required for static site generation
export function generateStaticParams() {
  // Generate params for challenges 1-6
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function ChallengeDetails({ params }: { params: { id: string } }) {
  return <ChallengeDetailsClient params={params} />;
}