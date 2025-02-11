import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export function QuickAnswersSection() {
  return (
    <section className="mb-6">
      <div className="mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="rounded-2xl md:w-[550px] md:h-[480px] overflow-hidden mx-auto">
            <img
              src={'sales-solutions.png'}
              alt="Vendor preparing products"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-[#F7F6F9] p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="max-w-xl">
              <span className="text-sm font-medium mb-4 block">Vendors</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Quick Answers Instantly
              </h2>
              
              <p className="text-gray-600 mb-8 text-wrap">
                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6CD3FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#1F1F76]" />
                  </div>
                  <p className="text-gray-600 text-wrap">
                    Benefit 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis turpis e
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6CD3FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#1F1F76]" />
                  </div>
                  <p className="text-gray-600 text-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6CD3FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#1F1F76]" />
                  </div>
                  <p className="text-gray-600 text-wrap">
                    consectetur dui ultricies, and can be this long if needed.
                  </p>
                </div>
              </div>

              <Button className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

