import { Star } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Tiklog</h2>
          <p className="text-gray-600 text-lg">
            Open a full-featured account in with virtual cards in less than 5 minutes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - App Screenshot */}
          <div className="relative">
            <img
              src="/about us.png"
              alt="Tiklog App Interface"
              className="object-cover w-full max-w-[600px] mx-auto"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            {/* Main Description */}
            <div className="bg-[#F6F8FA] rounded-2xl  p-6 shadow-sm border border-gray-100">
              <p className="text-4xl font-normal track letter-spacing-[-1px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis turpis eu dui ultricies
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-[#F6F8FA] rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col items-start gap-8">
                  <div className="shrink-0">
                    <Star className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis turpis eu dui ultricies, vel interdum nunc varius. Sed ut purus et odio vehicula vestibulum sit amet quis urna.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-[#F6F8FA] rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col items-start gap-8 bg-teal">
                  <div className="shrink-0">
                    <svg 
                      className="h-6 w-6 text-blue-500" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Our company vision.</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis turpis eu dui ultricies, vel interdum nunc varius. Sed ut purus et odio vehicula vestibulum sit amet quis urna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

