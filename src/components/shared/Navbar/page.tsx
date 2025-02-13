'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 transition duration-300">Riaz</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
          
          {/* Login Button */}
          <div className="hidden md:flex">
            <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Login</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-2 px-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/projects" className="block py-2 text-gray-700 hover:text-blue-600">Projects</Link>
          <Link href="/blogs" className="block py-2 text-gray-700 hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/login" className="block mt-2 py-2 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">Login</Link>
        </div>
      )}
    </nav>
  );
}
