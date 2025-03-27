"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-light to-white">
      <div className="container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark">
              Read Smarter, <span className="text-primary">Learn Faster</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Well Read transforms how you consume written content with intelligent reading modes, 
              powerful AI features, and brain training exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Download on App Store
              </a>
              <a 
                href="#features" 
                className="btn border-primary text-primary hover:bg-primary/10"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative animate-slide-up animate-delay-200">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white max-w-xs mx-auto">
              <div className="aspect-[9/19.5] relative overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-full w-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Smart Reading Experience</h3>
                    <p className="text-gray-600">Transform how you read and learn</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/10 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 