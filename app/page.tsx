'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

export default function Home() {
  const { toast } = useToast()

  const showQuote = () => {
    toast({
      title: "Quote Request Received",
      description: "Thanks! We'll get back to you within 24 hours with a free estimate.",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Construction Theme */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 z-10" />
        <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-[800px] text-white">
              <div className="inline-block bg-yellow-500 px-4 py-1 mb-6 rounded-md">
                <span className="font-bold">PROFESSIONAL & RELIABLE</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl mb-6">
                Building Your Vision, <br />Constructing Excellence
              </h1>
              <p className="text-xl max-w-[600px] mb-8 text-gray-100">
                Quality construction services with over 15 years of experience. We build it right the first time, every time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 bg-yellow-500 hover:bg-yellow-600 text-black">Get a Free Quote</Button>
                <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white/10" onClick={showQuote}>
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Construction Services</h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            From residential renovations to commercial construction, we deliver quality craftsmanship on every project.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-t-4 border-t-yellow-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential Construction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom homes, renovations, additions, and remodeling services tailored to your specific needs and budget.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-yellow-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Office buildings, retail spaces, restaurants, and industrial facilities built to the highest standards of quality.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-yellow-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Concrete work, framing, roofing, electrical, plumbing, and more - all handled by our skilled team of professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 dark:bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Our Construction Services?</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-yellow-500 p-1 rounded-full h-fit mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Licensed & Insured Professionals</h3>
                    <p className="text-muted-foreground">Our team consists of fully licensed, insured, and experienced construction professionals.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-yellow-500 p-1 rounded-full h-fit mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quality Materials</h3>
                    <p className="text-muted-foreground">We use only the highest quality materials to ensure durability and longevity of your project.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-yellow-500 p-1 rounded-full h-fit mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">On-Time Completion</h3>
                    <p className="text-muted-foreground">We understand the importance of deadlines and strive to complete every project on schedule.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-yellow-500 p-1 rounded-full h-fit mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Transparent Pricing</h3>
                    <p className="text-muted-foreground">No hidden fees or surprises. We provide detailed estimates and stick to our quotes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Construction worker" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-[900px] mx-auto bg-yellow-500 rounded-xl p-12 text-center text-black relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl mb-8 max-w-[600px] mx-auto">
              Contact us today for a free consultation and estimate. Let's build something great together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 bg-black hover:bg-gray-800 text-white">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-black text-black hover:bg-black/10" onClick={showQuote}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
