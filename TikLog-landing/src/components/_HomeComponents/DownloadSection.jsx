import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function DownloadSection() {
  // const [activeTab, setActiveTab] = useState("customer")

  return (
    <section className="py-24 bg-[#F6F8FA]">
      <div className="px-4 mx-auto">
        <Tabs defaultValue="customer" className="w-full">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-white p-1 text-muted-foreground border">
              <TabsTrigger
                value="customer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-8 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1e1b4b] data-[state=active]:text-white bg-white text-black hover:bg-gray-100"
              >
                Customer
              </TabsTrigger>
              <TabsTrigger
                value="vendor"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-8 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1e1b4b] data-[state=active]:text-white bg-white text-black hover:bg-gray-100"
              >
                Vendor
              </TabsTrigger>
              <TabsTrigger
                value="riders"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-8 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1e1b4b] data-[state=active]:text-white bg-white text-black hover:bg-gray-100"
              >
                Riders
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content Section */}
          <div className="text-center mb-16">
            <p className="text-gray-600 text-lg mb-4">Experience seamless deliveries</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Download Tiklog Today.</h2>
            
            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-[1px] w-16 bg-gray-300"></div>
              <span className="text-gray-500">OR</span>
              <div className="h-[1px] w-16 bg-gray-300"></div>
            </div>

            <Button className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90">
              Get Started
            </Button>
          </div>

          {/* Tab Content */}
          <TabsContent value="customer" className="">
            <div className="relative mx-auto max-w-[1200px]">
              <img
                src="/customer.png"
                alt="Customer Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </TabsContent>

          <TabsContent value="vendor" className="mt-8">
            <div className="relative mx-auto max-w-[1200px]">
              <img
                src="/vendor.png"
                alt="Vendor Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </TabsContent>

          <TabsContent value="riders" className="mt-8">
            <div className="relative mx-auto max-w-[1200px]">
              <img
                src="/rider.png"
                alt="Riders Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

