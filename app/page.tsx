'use client';

import { Bell, Eye } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-secondary mb-2">Welcome back Hilaire,</h1>
          <p className="text-gray-600">Build Work Experience through Skills Challenges</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2">
            <Eye className="w-5 h-5" />
            View Profile
          </button>
          <button className="p-2 rounded-lg bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Completed Challenges</h3>
            <div className="p-2 bg-blue-50 rounded">
              <Eye className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-secondary">05</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Open Challenges</h3>
            <div className="p-2 bg-blue-50 rounded">
              <Eye className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-secondary">200</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Ongoing Challenges</h3>
            <div className="p-2 bg-blue-50 rounded">
              <Eye className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-secondary">200</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-secondary">Recent Challenges</h2>
          <a href="/challenges" className="text-primary hover:underline">See all</a>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary p-6">
                <img src="https://umurava.africa/logo.png" alt="Umurava" className="h-8" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-4">Design a Dashboard for SokoFund, Fintech Product</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm">UI/UX Design</span>
                    <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm">User Research</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Seniority Level: Junior, Intermediate, Senior</p>
                  <p>Timeline: 15 Days</p>
                </div>
                <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg">
                  View Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}