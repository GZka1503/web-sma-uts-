"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shadow">
              <img 
                src="/images/logosman18.png" 
                alt="Logo SMAN 18 Bekasi" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wide block group-hover:text-yellow-400 transition">
                SMAN 18 KOTA BEKASI
              </span>
              <span className="text-xs text-blue-200">Unggul, Berkarakter & Berprestasi</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-yellow-400 transition py-2 border-b-2 border-transparent hover:border-yellow-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition py-2 border-b-2 border-transparent hover:border-yellow-400">
              About
            </Link>
            <Link href="/berita" className="hover:text-yellow-400 transition py-2 border-b-2 border-transparent hover:border-yellow-400">
              Berita
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-950 px-4 pt-2 pb-4 space-y-2 border-t border-blue-800">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link 
            href="/berita" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-yellow-400 transition"
          >
            Berita
          </Link>
        </div>
      )}
    </nav>
  );
}