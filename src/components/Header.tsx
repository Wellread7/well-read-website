"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary font-heading">Well Read</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          type="button" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-dark hover:text-primary">Features</Link>
          <Link href="#ai-features" className="text-dark hover:text-primary">AI Features</Link>
          <Link href="#brain-training" className="text-dark hover:text-primary">Brain Training</Link>
          <Link href="#stats" className="text-dark hover:text-primary">Stats</Link>
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Download
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="#features" 
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#ai-features" 
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Features
              </Link>
              <Link 
                href="#brain-training" 
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Brain Training
              </Link>
              <Link 
                href="#stats" 
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Stats
              </Link>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 