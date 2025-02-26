"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExpandableSection } from "@/components/expandable-section"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import Link from "next/link"

export default function Home() {
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

      {/* Image Gallery */}
      <div className="container mx-auto grid gap-4 px-4 py-8 md:grid-cols-4">
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image src="/img_1.jpg" alt="Adelaide Riverside" fill className="object-cover" />
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image src="/img_2.jpg" alt="Adelaide Aerial View" fill className="object-cover" />
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image src="/img_3.jpeg" alt="Adelaide Night View" fill className="object-cover" />
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image src="/img_4.jpg" alt="Adelaide Coast" fill className="object-cover" />
        </div>
      </div>

      {/* Welcome Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-4xl font-light text-[#2a9d8f] md:text-6xl">
            Welcome to
            <br />
            Adelaide Institute of Science
          </h1>
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <p className="text-gray-700 text-left">
              The Adelaide Institute of Sciences (AISC) is an established education and learning institute. AISC aims on
              delivering quality assured education to cater domestic and international students. Through our unique
              teaching and learning experience our students can expect to have a focused, creative and connected
              environment.
            </p>
            <p className="text-gray-700 text-left">
              AISC is established for the specific purposes of delivery of the Institute's Bachelor and Master
              qualifications as Institute of Higher Education in the field of community services, management and
              business. Our vision is to make our students feel part of our friendly, relaxed and supportive community.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-[#f5f5f5] py-16">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#2a9d8f]" />
        <div className="absolute left-2 top-0 h-full w-2 bg-[#e9c46a]" />
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="mb-6 text-4xl font-light text-[#2a9d8f] text-center">
              About
              <br />
              AISC
            </h2>
            <p className="mb-8 text-gray-700 text-left">
              Adelaide Institute of Science (AISC) is a student-focused institution in Adelaide, Australia, dedicated to
              academic excellence and professional growth. Specializing in Human Services and Business Administration,
              AISC equips both domestic and international students with industry-relevant skills for impactful careers.
            </p>
            <div className="pt-4">
              <Link href="/about">
                <Button className="bg-[#2A9D8F] text-white hover:bg-[#2A9D8F]/90">LEARN MORE</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-44 md:h-56">
            <Image
              src="/Footer_logo_AISC.png"
              alt="AISC Logo Large"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-light text-[#2a9d8f] md:text-5xl">OUR PROGRAMS</h2>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {programs.slice(0, 3).map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {programs.slice(3, 5).map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values and Motto Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <ExpandableSection title="OUR VISION">
              <p className="text-left">
                Industry Connected course: Develop and deliver undergraduate and postgraduate programs that are
                rigorous, innovative, and aligned with industry needs.
              </p>
              <p className="text-left">
                Supportive and Inclusive: Create a supportive and inclusive environment that promotes student
                engagement, retention, and success. Build strong partnerships with industry and community organizations
                to enhance learning opportunities.
              </p>
            </ExpandableSection>

            <ExpandableSection title="OUR MISSION">
              <p className="text-left">
                To provide high-quality education, and create a collaborative learning environment that prepares
                students for successful careers in health and science.
              </p>
            </ExpandableSection>

            <ExpandableSection title="OUR VALUES">
              <p className="text-left">
                Industry Connected course: Develop and deliver undergraduate and postgraduate programs that are
                rigorous, innovative, and aligned with industry needs.
              </p>
              <p className="text-left">
                Supportive and Inclusive: Create a supportive and inclusive environment that promotes student
                engagement, retention, and success. Build strong partnerships with industry and community organizations
                to enhance learning opportunities.
              </p>
            </ExpandableSection>

            <ExpandableSection title="OUR MOTTO & TAGLINE">
              <p className="font-medium text-left">{"Explore ideas with learning."}</p>
              <p className="mt-4 text-left">
                AISC believes that the phrase "Explore ideas with learning" emphasizes the dynamic relationship between
                acquiring knowledge and developing new concepts or perspectives. It suggests an active process where
                learning is not just about absorbing information but also about, Curiosity and Inquiry, Application of
                Knowledge, Continuous Growth and Collaboration. In essence, it highlights how learning fuels creativity
                and helps in exploring and shaping innovative ideas.
              </p>
            </ExpandableSection>
          </div>
        </div>
      </section>

      {/* Acknowledgement of Country Section */}
      <section className="bg-[#E9C46A] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-3xl font-light text-black text-center">Acknowledgement of Country</h2>
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-black text-center">
              Global Higher Education Australia acknowledges the Traditional Custodians of the lands and waters where
              our campuses are located and we pay our respects to Elders past and present, and extend our respect to all
              Aboriginal and Torres Strait Islander and First Nations Peoples.
            </p>
            <div className="flex justify-center">
              <div className="relative h-40 w-full max-w-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aboriginal-torres-strait-BNPYXdJchMd2CRQkGRl1gYomlgjHq9.jpeg"
                  alt="Aboriginal and Torres Strait Islander flags"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-light text-[#2a9d8f] text-center">Contact Information</h2>
          <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-4">
            <div className="flex-1 text-center">
              <h3 className="text-xl font-medium mb-2">Address</h3>
              <p>
                Level 1, 8 Regency Road
                <br />
                Kilkenny, SA 5009, Australia
              </p>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-xl font-medium mb-2">Phone</h3>
              <p>TBD</p>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p>info@aisc.edu.au</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-lg bg-black/20">
      <Image
        src={program.image || "/placeholder.svg"}
        alt={program.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-start justify-between p-6">
        <span className="text-sm font-medium text-white/80">.0{program.id}</span>
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-white">{program.title}</h3>
          <Link href={program.link}>
            <Button size="sm" className="bg-[#2A9D8F] text-white hover:bg-[#2A9D8F]/90">
              EXPLORE NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const programs = [
  {
    id: 1,
    title: "BACHELOR OF HUMAN SERVICES",
    image: "/course_1.jpg",
    link: "/courses/bachelor-of-human-services",
  },
  {
    id: 2,
    title: "GRADUATE DIPLOMA IN BUSINESS ADMINISTRATION",
    image: "/course_2.jpg",
    link: "/courses/graduate-diploma-in-business-administration",
  },
  {
    id: 3,
    title: "GRADUATE CERTIFICATE IN BUSINESS ADMINISTRATION",
    image: "/course_3.jpg",
    link: "/courses/graduate-certificate-in-business-administration",
  },
  {
    id: 4,
    title: "MASTER OF COMMUNICATION SERVICES",
    image: "/course_4.jpg",
    link: "/courses/master-of-communication-services",
  },
  {
    id: 5,
    title: "MASTER OF BUSINESS ADMINISTRATION",
    image: "/course_5.jpg",
    link: "/courses/master-of-business-administration",
  },
]

