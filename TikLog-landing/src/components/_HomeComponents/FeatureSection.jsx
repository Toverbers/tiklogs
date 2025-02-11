import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CreditCard, DollarSign } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1b4b] mb-4">
            Discover the Power of Tiklog
          </h2>
          <p className="text-gray-600 text-lg">
            Open a full-featured account in with virtual cards in less than 5 minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Real-Time Tracking */}
          <Card className="border rounded-2xl overflow-hidden">
            <CardContent className="p-6 ">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-6">
                Know exactly where your delivery is, from pick-up to drop-off. With our real-time tracking, you can monitor progress and stay updated at every step.
              </p>
              <div className="rounded-xl overflow-hidden p-0 m-0 bg-[#6887c5]">
                <img
                  src="/Iphone 14 pic.png"
                  alt="Real-time tracking interface"
                  className=" w-full md:h-80  object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Fast & Reliable Deliveries */}
          <Card className="border rounded-2xl overflow-hidden bg-[#F6F7F9]">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast & Reliable Deliveries</h3>
              <p className="text-gray-600 mb-6">
                Whether you're sending a small package or bulk goods, Tiklog ensures your deliveries are handled with speed and care, reaching their destination safely every time.
              </p>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/delivery man.png"
                  alt="Delivery person with package"
                  className="w-[482px] h-auto object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Seamless Customer & Merchant Portal */}
          <Card className="border rounded-2xl overflow-hidden md:col-span-2 bg-[#F6F7F9]">
            <CardContent className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Seamless Customer & Merchant Portal</h3>
              <p className="text-gray-600 mb-6">
                Gain full control over your orders through our easy-to-use portal. Track, manage, and review your deliveries, whether you're a customer or a merchant.
              </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/screen mockup.png"
                  alt="Merchant portal interface"
                  className="w-[482px] h-auto"
                />
              </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {/* Flexible Payment Options */}
          <Card className="border rounded-2xl overflow-hidden max-w-md bg-[#F6F7F9]">
            <CardContent className="px-6 pt-6 pb-0">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Flexible Payment Options</h3>
              <p className="text-gray-600 mb-6">
                Choose from a range of payment options that suit your needs—credit cards, mobile wallets, or online transfers—all secure and fast.
              </p>
              <div className="rounded-xl -mx-6">
                <img src="/colors.png"/>
              </div>
            </CardContent>
          </Card>

          {/* Cost-Effective Delivery Solutions */}
          <Card className="border rounded-2xl overflow-hidden max-w-3xl bg-[#F6F7F9]">
            <CardContent className="p-6 flex flex-col md:flex-row gap-4">
            <div className="">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cost-Effective Delivery Solutions</h3>
              <p className="text-gray-600 mb-6">
                Get transparent and competitive pricing on all deliveries. Our flexible pricing structure helps you save money without compromising on service quality.
              </p>
            </div>
            </CardContent>
          </Card>

          {/* Download CTA */}
          <div className="border-0 rounded-2xl col-span-2 md:col-span-1 overflow-hidden bg-[#1e1b4b] text-white">
                <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        Signup or Download the app today!
                    </h3>
                    <Button variant="secondary" className="mb-6">
                        Get Started
                    </Button>
                    <div className="flex flex-wrap justify-center gap-4">
                        <img
                            src="/App store badge.png"
                            alt="Download on the App Store"
                            className="h-[40px]"
                        />
                        <img
                            src="/Google play badge.png"
                            alt="Get it on Google Play"
                            className="h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

