"use client";

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { navLinks } from "@/lib/mockData";
import Button from "@/components/ui/Button";
import { useLeadModal } from "@/components/LeadModalProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openLeadModal } = useLeadModal();

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden md:flex items-center justify-end gap-2 bg-gray-900 text-gray-300 text-xs px-4 sm:px-6 lg:px-8 py-1.5">
        <Mail size={12} />
        <span>admissions@accredian.com</span>
      </div>

      <header className="bg-white/90 backdrop-blur border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">Accredian</span>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 pb-1 border-b-2 border-transparent hover:border-blue-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button onClick={openLeadModal}>Book a Consultation</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button className="w-full" onClick={openLeadModal}>Book a Consultation</Button>
          </div>
        )}
      </header>
    </div>
  );
}