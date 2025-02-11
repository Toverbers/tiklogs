export function HowItWorksSection() {
    return (
      <section className="py-24">
        <div className="px-4 mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1b4b] mb-4">
              How Tiklog works?
            </h2>
            <p className="text-gray-400 text-lg">
              Open a full-featured account in with virtual cards in less than 5 minutes.
            </p>
          </div>
  
          {/* Steps */}
          <div className="relative">
            {/* Connecting Lines (SVG) */}
            <div className="absolute top-[40px] left-0 w-full hidden md:block">
              <svg className="w-full" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arrow Marker Definition */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#4154BE"
                      opacity="0.5"
                    />
                  </marker>
                </defs>
                
                {/* First curved line with arrow */}
                <path
                d="M 300,40 C 400,40 500,80 600,40"
                stroke="#4154BE"
                strokeDasharray="5,5"
                strokeWidth="2"
                opacity="0.5"
                markerEnd="url(#arrowhead)"
                />
                
                {/* Second curved line with arrow */}
                <path
                  d="M 800,40 C 900,40 1000,80 1100,40"
                  stroke="#4154BE"
                  strokeDasharray="5,5"
                  strokeWidth="2"
                  opacity="0.5"
                  markerEnd="url(#arrowhead)"
                  className=""
                />
              </svg>
            </div>
  
            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1e1b4b]">01</span>
                </div>
                <h3 className="text-xl font-semibold text-[#4154BE] mb-4">
                  Create An Account
                </h3>
                <p className="text-gray-400">
                  Creating account to our website and use it for your required time. We always ready to give you support all the time.
                </p>
              </div>
  
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1e1b4b]">02</span>
                </div>
                <h3 className="text-xl font-semibold text-[#4154BE] mb-4">
                  Verify Your Account
                </h3>
                <p className="text-gray-400">
                  Creating account to our website and use it for your required time. We always ready to give you support all the time.
                </p>
              </div>
  
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1e1b4b]">03</span>
                </div>
                <h3 className="text-xl font-semibold text-[#4154BE] mb-4">
                  Start Using Tiklog
                </h3>
                <p className="text-gray-400">
                  Creating account to our website and use it for your required time. We always ready to give you support all the time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  