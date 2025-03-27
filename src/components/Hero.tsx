"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Number of slides - you can add more placeholders as needed
  const totalSlides = 5;
  
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, totalSlides]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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
            {/* Carousel container */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white max-w-xs mx-auto">
              <div className="carousel-container aspect-[9/19.5] relative overflow-hidden">
                {/* Slide 1 */}
                <div 
                  className={`carousel-slide absolute inset-0 transition-transform duration-500 ease-in-out ${
                    currentSlide === 0 ? "translate-x-0" : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4">Smart Reading Experience</h3>
                      <p className="text-gray-600">Transform how you read and learn</p>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div 
                  className={`carousel-slide absolute inset-0 transition-transform duration-500 ease-in-out ${
                    currentSlide === 1 ? "translate-x-0" : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-accent mb-4">AI-Powered Features</h3>
                      <p className="text-gray-600">Enhance your learning journey</p>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div 
                  className={`carousel-slide absolute inset-0 transition-transform duration-500 ease-in-out ${
                    currentSlide === 2 ? "translate-x-0" : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4">Track Your Progress</h3>
                      <p className="text-gray-600">Monitor your reading journey</p>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div 
                  className={`carousel-slide absolute inset-0 transition-transform duration-500 ease-in-out ${
                    currentSlide === 3 ? "translate-x-0" : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-accent mb-4">Customize Your Experience</h3>
                      <p className="text-gray-600">Make it your own</p>
                    </div>
                  </div>
                </div>

                {/* Slide 5 */}
                <div 
                  className={`carousel-slide absolute inset-0 transition-transform duration-500 ease-in-out ${
                    currentSlide === 4 ? "translate-x-0" : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4">Brain Training</h3>
                      <p className="text-gray-600">Enhance your cognitive abilities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons moved outside the carousel */}
              <div className="flex justify-between -mx-12 mt-4">
                <button 
                  className="bg-white rounded-full p-3 shadow-md focus:outline-none"
                  onClick={prevSlide}
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="bg-white rounded-full p-3 shadow-md focus:outline-none"
                  onClick={nextSlide}
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 py-3 bg-white">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colours ${
                      currentSlide === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
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