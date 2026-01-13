"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/skill", label: "Skills" },
  { href: "/project", label: "Projects" },
  { href: "/Contact", label: "Help" },
];

export default function Footer() {
  return (
    <footer className="bg-transparent w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-1 md:gap-12 items-start text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-base lg:text-lg hover:text-[#4DD0E1] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-white shrink-0" />
                <p className="text-gray-300 text-base lg:text-lg">
                  +62 881-0261-60932
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-white shrink-0" />
                <p className="text-gray-300 text-base lg:text-lg">
                  akirahartono2@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-10 lg:mt-12 pt-6 lg:pt-8">
          <p className="text-center text-gray-400 text-sm md:text-base">
            © 2025 Akira Saskara Hartono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
