'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Award, Users } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: Award, label: 'Challenges & Hackathons', href: '/challenges' },
    { icon: Users, label: 'Community', href: '/community' },
  ];

  return (
    <aside className="sidebar w-64 min-h-screen p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Umurava</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                isActive ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;