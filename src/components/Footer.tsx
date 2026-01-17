"use client";

import Link from "next/link";
import React from "react";
import { Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "/garapan", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-sm w-full mt-auto border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-lg hover:text-orange-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-orange-400 shrink-0" />
                <a 
                  href="tel:+6288102616093" 
                  className="text-gray-300 text-lg hover:text-orange-400 transition-colors"
                >
                  +62 881-0261-60932
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="h-5 w-5 text-orange-400 shrink-0" />
                <a 
                  href="mailto:akirahartono2@gmail.com" 
                  className="text-gray-300 text-lg hover:text-orange-400 transition-colors"
                >
                  akirahartono2@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Akira Saskara Hartono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}