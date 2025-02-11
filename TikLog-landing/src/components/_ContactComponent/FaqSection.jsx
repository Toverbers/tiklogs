import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FaqSection() {
    const faqs = [
      {
        question: "Do I have to pay for each agent account?",
        answer: "Yes, we charge a fee for every agent account created, regardless of whether the agent is logged in or not. It is a long established fact that a reader a distracted by the readable content page when looking"
      },
      {
        question: "How many agents can I add to my account?",
        answer: "You can invite up to 400 agents in the Starter, Team, and Business plans. We can set a custom number of agents if you subscribe to the Enterprise plan. It is a long established fact that is distracted."
      },
      {
        question: "Do you provide customer service agents?",
        answer: "It is a long established fact that a reader a distracted by the readable content page when looking at its layout. The point of using Lorem Ipsum. No, we provide the tools for your agents."
      },
      {
        question: "Will I get money back if I am not satisfied?",
        answer: "We accept all major credit cards. The subscriptions are renewed by automatically at the end of each billing cycle. It is a long established fact that a reader a distracted by the readable content page."
      },
      {
        question: "Do you offer an annual payment option?",
        answer: "Please reach out to us and we will be happy to provide an annual invoice with additional payment options. It is a long established fact that a reader a distracted by the readable content page."
      },
      {
        question: "Does this theme supports plugins?",
        answer: "Every new response after your limit will be safely stored, but we will become accessible when you upgrade, or when your next billing for the period begins here."
      }
    ]
  
    return (
      <section className="pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
  
            {/* Mobile Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-[#F6F8FA]">
                    <AccordionTrigger className="text-left text-lg font-semibold py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
  
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-x-16 gap-y-12">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  