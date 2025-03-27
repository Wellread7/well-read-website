"use client";

export default function CTA() {
  return (
    <section id="cta" className="section bg-primary">
      <div className="container">
        <div className="text-white mx-auto max-w-3xl flex flex-col items-start">
          <div className="w-16 h-1 bg-white mb-4 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">Transform Your Reading Experience Today</h2>
          <p className="text-lg mb-8 text-white/80">
            Join thousands of readers who've revolutionised how they consume text, learn information, and train their brain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white text-primary hover:bg-white/90"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3.5a1.5 1.5 0 12 3 1.5 1.5 0 01-2-3zM13 8a1 1 0 11-2 0 1 1 0 012 0zm-5.5 1.5a1.5 1.5 0 12 3 1.5 1.5 0 01-2-3zM4 12.5a1 1 0 11-2 0 1 1 0 012 0zM3.5 18a1.5 1.5 0 12 3 1.5 1.5 0 01-2-3z" />
                <path d="M8 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM7.5 17a.5.5 0 11-1 0 .5.5 0 011 0zM10 12a1 1 0 11-2 0 1 1 0 012 0zm9 2.5a1 1 0 11-2 0 1 1 0 012 0zm-2.5 3a1.5 1.5 0 12 3 1.5 1.5 0 01-2-3zM20 7.5a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              Download on App Store
            </a>
            <a 
              href="#" 
              className="btn bg-primary border border-white text-white hover:bg-primary/90"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 