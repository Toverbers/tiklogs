import { Mail, FileText } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Link } from 'react-router-dom'

export function ActionCards() {
  return (
    <section className="pb-24">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          <Card className="border rounded-xl p-6">
            <CardContent className="p-0 space-y-4">
              <Mail className="h-8 w-8 text-[#4154BE]" />
              <h3 className="text-xl font-semibold">Need help about product?</h3>
              <p className="text-gray-600">
                We are the fastest and easiest way to launch an attractive and feature-complete SaaS.
              </p>
              <Link to={'#'} className="text-[#4154BE] inline-block p-3 rounded-md hover:bg-slate-50 border font-medium">
                Create Support Ticket
              </Link>
            </CardContent>
          </Card>

          <Card className="border rounded-xl p-6">
            <CardContent className="p-0 space-y-4">
              <FileText className="h-8 w-8 text-[#4154BE]" />
              <h3 className="text-xl font-semibold">Don't want to wait?</h3>
              <p className="text-gray-600">
                We are the fastest and easiest way to launch an attractive and feature-complete SaaS.
              </p>
              <Link to={'#'} className="text-[#4154BE] inline-block p-3 rounded-md hover:bg-slate-50 border font-medium">
                Read Our FAQ's
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

