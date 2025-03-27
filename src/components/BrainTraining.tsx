"use client";

export default function BrainTraining() {
  return (
    <section id="brain-training" className="section bg-white">
      <div className="container">
        <div className="mb-16 flex flex-col items-start">
          <div className="w-16 h-1 bg-purple-600 mb-4 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">Train Your Brain</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Enhance your cognitive abilities with our collection of scientifically-designed brain training exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 shadow-md border border-blue-200 transform transition-transform hover:-translate-y-1">
            <div className="h-48 bg-blue-600 flex items-center justify-center relative">
              <div className="grid grid-cols-5 grid-rows-5 gap-1 p-2 bg-white/90 rounded-lg shadow-inner">
                {Array(25).fill(0).map((_, i) => (
                  <div key={i} className={`w-8 h-8 flex items-center justify-center font-bold rounded-md ${i === 12 ? 'bg-primary text-white' : 'bg-white'}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-blue-700">
                FOCUS
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Schulte Table</h3>
              <p className="text-gray-600">Improve your peripheral vision and search speed by finding numbers in sequence on a grid.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 shadow-md border border-green-200 transform transition-transform hover:-translate-y-1">
            <div className="h-48 bg-green-600 flex items-center justify-center relative">
              <div className="relative w-40 h-40 bg-white/90 rounded-lg">
                <div className="absolute w-5 h-5 bg-primary rounded-full left-[30%] top-[30%]"></div>
                <div className="absolute w-5 h-5 bg-accent rounded-full right-[30%] top-[40%]"></div>
                <div className="absolute w-5 h-5 bg-yellow-500 rounded-full left-[45%] bottom-[20%]"></div>
                <div className="absolute w-5 h-5 bg-green-500 rounded-full right-[25%] bottom-[35%]"></div>
              </div>
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-green-700">
                TRACKING
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Multiple Object Tracking</h3>
              <p className="text-gray-600">Enhance your visual attention by tracking multiple moving objects simultaneously.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 shadow-md border border-purple-200 transform transition-transform hover:-translate-y-1">
            <div className="h-48 bg-purple-600 flex items-center justify-center relative">
              <div className="grid grid-cols-4 grid-rows-4 gap-1 p-2 bg-white/90 rounded-lg shadow-inner">
                {Array(16).fill(0).map((_, i) => (
                  <div key={i} className={`w-8 h-8 flex items-center justify-center rounded-md ${[3, 6, 8, 9].includes(i) ? 'bg-primary' : 'bg-white/60'}`} />
                ))}
              </div>
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-purple-700">
                MEMORY
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Memory Matrix</h3>
              <p className="text-gray-600">Test and improve your visual memory by recalling patterns of tiles in a grid.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-red-100 shadow-md border border-red-200 transform transition-transform hover:-translate-y-1">
            <div className="h-48 bg-red-600 flex items-center justify-center relative">
              <div className="w-40 h-40 bg-white/90 rounded-lg flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#4A69BD" strokeWidth="3" />
                    <path d="M20,50 L80,50" fill="none" stroke="#E55039" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-red-700">
                COORDINATION
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Dual Trace</h3>
              <p className="text-gray-600">Train your brain's hemispheric coordination by tracing different patterns with both hands simultaneously.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 shadow-md border border-amber-200 transform transition-transform hover:-translate-y-1">
            <div className="h-48 bg-amber-600 flex items-center justify-center relative">
              <div className="w-40 h-40 bg-white/90 rounded-lg p-2 flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="w-9 h-9 bg-primary rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-accent rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-primary rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-9 h-9 bg-accent rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-primary rounded-md"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-accent rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                  <div className="w-9 h-9 bg-white/60 rounded-md"></div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-amber-700">
                RECALL
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Pattern Recall</h3>
              <p className="text-gray-600">Boost your short-term memory by remembering and reproducing visual patterns.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md border border-indigo-200 transform transition-transform hover:-translate-y-1">
            <div className="h-48 bg-indigo-600 flex items-center justify-center relative">
              <div className="w-40 h-40 bg-white/90 rounded-lg flex flex-col items-center justify-center">
                <div className="relative p-4 flex flex-col items-center">
                  <div className="text-3xl font-bold text-indigo-800 mb-2">Splell</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-indigo-700">
                LANGUAGE
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Speed Spelling</h3>
              <p className="text-gray-600">Improve your spelling abilities by identifying correctly and incorrectly spelled words flashed rapidly on screen.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6">All brain training exercises track your progress over time.</p>
          <a href="#cta" className="btn-primary">Start Training Your Brain</a>
        </div>
      </div>
    </section>
  );
} 