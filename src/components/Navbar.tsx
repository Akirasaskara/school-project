'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/garapan' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="fixed top-0 left-0 w-full font-sans px-6 py-4 z-50 bg-black/20 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-3xl font-medium text-white cursor-pointer hover:text-gray-300 transition-colors">
              Akira
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="text-base font-normal text-white hover:text-orange-400 transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-orange-400 transition-colors text-lg"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}