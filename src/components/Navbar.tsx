import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ['About', 'Skills', 'Project', 'Contact'];

  return (
    <div className="absolute top-0 left-0 w-full font-sans px-6 py-4">
      <nav className="flex items-center justify-between">
        
        <div>
          <h1 className="text-2xl font-medium text-white">Akira</h1>
        </div>

        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-normal text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

 
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-base font-normal text-white hover:text-gray-300 transition-colors cursor-pointer py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}