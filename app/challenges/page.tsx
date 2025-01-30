'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';

export default function Challenges() {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = [
    { id: 'all', label: 'All Challenge', count: 0 },
    { id: 'completed', label: 'Completed Challenge', count: 0 },
    { id: 'open', label: 'Open Challenge', count: 0 },
    { id: 'ongoing', label: 'Ongoing Challenge', count: 0 },
  ];

  const challenges = [
    {
      id: 1,
      title: 'Design a Dashboard for SokoFund, Fintech Product',
      skills: ['UI/UX Design', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
    },
    {
      id: 2,
      title: 'Design a Dashboard for SokoFund, Fintech Product',
      skills: ['UI/UX Design', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
    },
    {
      id: 3,
      title: 'Design a Dashboard for SokoFund, Fintech Product',
      skills: ['UI/UX Design', 'User Research'],
      seniority: 'Junior, Intermediate, Senior',
      timeline: '15 Days',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-secondary mb-2">Challenges</h1>
      <p className="text-gray-600 mb-8">Join a challenge or a hackathon to gain valuable work experience</p>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-blue-50 text-primary'
            }`}
          >
            {tab.label}
            <span className={`px-2 rounded-full ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-white'
            }`}>{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Link href={`/challenges/${challenge.id}`} key={challenge.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary p-6 relative">
              <img src="https://umurava.africa/logo.png" alt="Umurava" className="h-8" />
              <span className="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                Open
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-secondary mb-4">{challenge.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Seniority Level: {challenge.seniority}</p>
                <p>Timeline: {challenge.timeline}</p>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
                View Challenge
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}