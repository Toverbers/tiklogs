import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section className="pb-24">
      <div className="px-4 mx-auto">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name*" 
                className="w-full p-3 rounded-lg"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Email*" 
                className="w-full p-3 rounded-lg"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Type your message*" 
                className="w-full p-3 rounded-lg min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white py-6">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

