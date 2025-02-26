"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isExpanded, setIsExpanded] = useState(false)
  const [isChairExpanded, setIsChairExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Logo Section */}
      <div className="container mx-auto py-8 text-center">
        <Image
          src="/AISC_banner.png"
          alt="Adelaide Institute of Sciences Logo"
          width={400}
          height={200}
          className="mx-auto"
        />
        <p className="mt-4 text-xl text-[#2a9d8f]">EXPLORE IDEAS WITH LEARNING</p>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/about_banner.png"
          alt="Students at AISC"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-light md:text-7xl">
            About
            <br />
            AISC
          </h1>
          <ChevronDown className="mt-8 h-8 w-8 animate-bounce" />
        </div>
      </div>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-700 text-left">
              At Adelaide Institute of Science (AISC), we are dedicated to fostering academic excellence and
              professional growth through our specialized programs in Human Services and Business Administration.
              Located in Adelaide, Australia, AISC is a dynamic and student-focused institution that prepares both
              domestic and international students for impactful careers. Our commitment to innovation, industry
              relevance, and student success makes AISC the ideal destination for higher education.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AISC */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[600px] overflow-hidden rounded-lg">
              <Image
                src="/img_1.jpg"
                alt="Adelaide Campus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-8 left-8 text-4xl font-light text-white">Why choose AISC?</h2>
            </div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-2">
                  <h3 className="text-xl font-medium text-[#2a9d8f]">{feature.title}</h3>
                  <p className="text-gray-700 text-left">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-light">Value chain icons & Brief write-ups</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-gray-700 text-left">
              Our goal is to deliver and end to end range of educational and learning services that opens jobs and
              opportunities for our students. AISC is a pathway for students to their choice of education, learning and
              careers. At AISC we provide quality education from a new perspective.
            </p>
            <p className="text-gray-700 text-left">
              We believe in "today's students are tomorrow's future", accordingly we aim to be able to firstly educate
              our students for the choice of career, then prepare them for the challenges and obstacles that are
              involved in today's workplace and culture and furthermore we create an entrance for the particular student
              in their field of study.
            </p>
            <p className="text-gray-700 text-left">
              We look to be known as the angels of the education and learning. To find out a personal streamlined
              pathway career for you, feel free to contact us directly in the message box.
            </p>
          </div>
        </div>
      </section>

      {/* Message from Chair */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-light">Message from the Chair - AISC</h2>
            <div className="grid gap-8 md:grid-cols-[300px_1fr]">
              <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                  alt="Chair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="font-medium">Welcome from Chair</p>
                <p className="text-gray-700 text-left">
                  Welcome to AISC Australia where our focus is on delivering learning outcomes that are internationally
                  oriented, future aligned, employment directed and achievement centred. We aim to provide a learning
                  environment where you will be encouraged and supported to excel. We specialise in fields with strong
                  opportunities for graduates who, through studying with us, are especially equipped for careers and
                  work places of the future.
                </p>
                {!isChairExpanded && (
                  <div className="pt-4">
                    <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90" onClick={() => setIsChairExpanded(true)}>
                      READ MORE
                    </Button>
                  </div>
                )}
                {isChairExpanded && (
                  <div className="space-y-6 animate-in fade-in-50 duration-500">
                    <p className="text-gray-700 text-left">
                      Our Strategic Plan says that "we place students at the front and centre of everything we do" and
                      this applies not only to the support you will receive but also to the opportunities that you will
                      be offered. Our programs have strong industry input so as to create contemporary, relevant
                      programs with recognised pathways to employment.
                    </p>
                    <p className="text-gray-700 text-left">
                      I wish you every success with your studies and also say that I trust the friendships,
                      relationships and experiences you have with us will stay with you for life. On behalf of the Board
                      of Directors of AISC, I wish you a very warm welcome.
                    </p>
                    <div className="pt-4">
                      <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90" onClick={() => setIsChairExpanded(false)}>
                        READ LESS
                      </Button>
                    </div>
                  </div>
                )}
                <div>
                  <p className="font-medium">Chair</p>
                  <p className="text-gray-600">Board of Directors</p>
                  <p className="text-gray-600">AISC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-light">Message from the CEO - AISC</h2>
            <div className="grid gap-8 md:grid-cols-[1fr_300px]">
              <div className="space-y-6">
                <p className="font-medium">Dear Students,</p>
                <p className="text-gray-700 text-left">
                  It is with great pleasure that I welcome you to AISC and its Website.
                </p>
                <p className="text-gray-700 text-left">
                  Our goal is to build strong partnerships based on high quality education and learning, trust, ensuring
                  credibility, reliability & efficiency with student and clients focused mindset and finding innovative
                  ways to provide great value to fulfill your learning needs.
                </p>
                {!isExpanded && (
                  <div className="pt-4">
                    <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90" onClick={() => setIsExpanded(true)}>
                      READ MORE
                    </Button>
                  </div>
                )}
                {isExpanded && (
                  <div className="space-y-6 animate-in fade-in-50 duration-500">
                    <p className="text-gray-700 text-left">
                      Whether you are a potential student with a challenging education plan ahead; an existing student,
                      dealing with latest learning concepts; or a partner, supplier or future employee looking for new
                      opportunities, I trust you will find what you are looking for here.
                    </p>
                    <p className="text-gray-700 text-left">
                      We have a clear vision of what we want to be – to be recognised as a quality provider of
                      education, learning and training services in and from Australia. Through stringent academic
                      standards and operate under a robust corporate and academic governance framework, we proactively
                      engage in personal learning experiences that support the individual development of students and
                      challenge them to acquire the skills and knowledge to confidently shape their future.
                    </p>
                    <p className="text-gray-700 text-left">
                      Serving large number of students in the country, AISC has ambitious plan to become a key player in
                      the Community education space and intends to continue playing an important role in Australia's
                      ever-growing community and human services education industry.
                    </p>
                    <p className="text-gray-700 text-left">
                      Our progressive thinking and creative approach are what makes us stand out from the crowd. I am
                      proud of the work we do at AISC, adhering to the highest standards in conducting business, with a
                      perfect academic standards, rigorous delivery & management and constant search for improvement of
                      performance.
                    </p>
                    <p className="text-gray-700 text-left">
                      Enjoy our website and feel free to contact our office for any additional information.
                    </p>
                    <div className="pt-4">
                      <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90" onClick={() => setIsExpanded(false)}>
                        READ LESS
                      </Button>
                    </div>
                  </div>
                )}
                <div>
                  <p className="font-medium">CEO</p>
                  <p className="text-gray-600">Chief Executive Officer</p>
                  <p className="text-gray-600">AISC</p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="bg-[#2a9d8f] py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">Governance</h2>
          <div className="mx-auto max-w-4xl">
            {/* Adviser to the Board */}
            <div className="mb-16 space-y-8">
              <h3 className="text-center text-3xl font-light">Adviser to the Board</h3>
              <div className="mx-auto max-w-[180px] space-y-4">
                <div className="relative h-[240px] w-[180px] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                    alt="Adviser"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center">TBD</p>
              </div>
            </div>

            {/* Board of Directors */}
            <div className="mb-16 space-y-8">
              <h3 className="text-center text-3xl font-light">BOARD OF DIRECTORS</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="relative mx-auto h-[200px] w-[160px] overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                        alt={`Director ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center">TBD</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Board */}
            <div className="mb-16 space-y-8">
              <h3 className="text-center text-3xl font-light">Academic Board</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="relative mx-auto h-[240px] w-[180px] overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                        alt={`Academic Board Member ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center">TBD</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Development Committee */}
            <div className="mb-16 space-y-8">
              <h3 className="text-center text-3xl font-light">Course Development Committee</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="relative mx-auto h-[240px] w-[180px] overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                        alt={`Committee Member ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center">TBD</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Staff Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">CONNECT WITH OUR STAFF</h2>
        </div>
      </section>

      {/* Executive Management Team Section */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">Executive Management Team</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="relative mx-auto h-[240px] w-[180px] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                    alt={`Executive ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-light">TBD</p>
                <p className="text-gray-600">Email</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">Academics</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="relative mx-auto h-[240px] w-[180px] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                    alt={`Academic Staff ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-light">TBD</p>
                <p className="text-gray-600">Email</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Section */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">Student Support</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="relative mx-auto h-[240px] w-[180px] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-Xirw6AGOwvxfjnYqWu9ar0NVVddsz3.png"
                    alt={`Support Staff ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-light">TBD</p>
                <p className="text-gray-600">Email</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

const features = [
  {
    title: "Student-Centered Learning",
    description: "Flexible study options, including face-to-face, blended, and online learning to suit diverse needs.",
  },
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Developed in collaboration with industry experts to ensure graduates are job-ready with real-world skills.",
  },
  {
    title: "Global Recognition",
    description: "Qualifications accredited and recognized by Australian and international employers.",
  },
  {
    title: "Support for International Students",
    description: "Comprehensive support services, visa assistance, and career guidance for a smooth transition.",
  },
  {
    title: "Career Placement & Internships",
    description: "Strong industry partnerships provide internships, work placements, and networking opportunities.",
  },
  {
    title: "State-of-the-Art Campus & Facilities",
    description:
      "Cutting-edge learning environments equipped with modern technologies for an enhanced educational experience.",
  },
]

