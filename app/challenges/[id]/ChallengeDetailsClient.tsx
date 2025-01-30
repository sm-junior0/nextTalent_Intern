'use client';

import Link from 'next/link';
import { Mail, Monitor, Calendar, DollarSign, ArrowLeft } from 'lucide-react';

export default function ChallengeDetailsClient({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/challenges" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-2 text-gray-600">
          <span>Challenges & Hackathons</span>
          <span>/</span>
          <span className="text-primary">Design a Dashboard for Sokofund</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <div className="bg-primary h-48 rounded-lg mb-6"></div>
            <h1 className="text-2xl font-bold text-secondary mb-6">
              Project Brief: Payroll and HR Management System
            </h1>
            <p className="text-gray-600 mb-8">
              A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold text-secondary mb-4">Tasks:</h2>
                <h3 className="font-semibold mb-2">Product Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>UX research to understand Project Requirements</li>
                  <li>Understanding User Needs</li>
                  <li>Understanding Business Goals</li>
                  <li>Determine interaction between users</li>
                  <li>Requirements Catalog</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Product Design:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>User Interface Design for each step</li>
                  <li>Creating wireframes to outline the basic structure and layout of the web and mobile app.</li>
                  <li>Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.</li>
                  <li>Ensuring the web application works seamlessly across web, mobile, and tablet devices.</li>
                  <li>Provide a feedback session for in-development guidance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-secondary mb-4">Deliverables:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Requirements Catalog and User Interaction Diagram</li>
                  <li>User Interface Mockups</li>
                  <li>Payroll and HR System Design Completed</li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-secondary mb-6">Key Instructions:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">talent@umurava.africa</p>
                  <p className="text-sm text-gray-600">Contact Email</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Web design</p>
                  <p className="text-sm text-gray-600">Challenge Category</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">7 Days</p>
                  <p className="text-sm text-gray-600">Duration</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">$150 - $400</p>
                  <p className="text-sm text-gray-600">Money Prize</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Submit your work
          </button>
        </div>
      </div>
    </div>
  );
}