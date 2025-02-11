import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { FaBomb } from 'react-icons/fa'

export function HeroSection() {
  return (
    <section className="min-h-screen">
      <div className="px-4 mx-auto bg-[#F6F8FA]">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
          {/* Left Column */}
          <div className="space-y-8">
            {/* New Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5">
              <Badge variant="secondary" className="bg-white text-black text-xs font-medium">
                New
              </Badge>
              <span className=" text-sm">Download the new app</span>
              <ArrowRight className="w-4 h-4 " />
            </div>

            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold  leading-tight">
                Fast, Safe, and Reliable Deliveries{' '}
                <span className="text-[#4154BE]">Anytime, Anywhere.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl">
                Say goodbye to delays, missing packages, and uncertainty. With Tiklog Services, experience seamless delivery for packages of any size whenever and wherever you need it.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <img 
                  src="/App store badge.png"
                  alt="Download on the App Store" 
                  className="h-[40px]"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="/Google play badge.png"
                  alt="Get it on Google Play" 
                  className="h-[40px]"
                />
              </a>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="relative bg-white p-4">
            <div className="relative w-full max-w-[400px] mx-auto">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />
              
              {/* Phone Mockup */}
              <div className="relative">
                <img
                  src={`/Iphone frame.png`}
                  alt="Tiklog App Interface"
                  className="w-full h-auto relative z-10"
                />
                
                {/* App Details */}
                <div className="absolute bottom-4 md:-left-16 rounded-xl p-4 z-20">
                  <div className="space-y-2">
                    <div className="flex items-center gap- bg-white/80 backdrop-blur-sm shadow-md rounded-full p-1">
                      <img src="/explosion.png" alt="explosion" className="w-4 h-4" />
                      <span className="text-sm">
                        Real-Time Tracking, Zero Delays.
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-md rounded-full p-1">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                      </div>
                      <span className="text-sm">1000+ happy users.</span>
                    </div>          
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

