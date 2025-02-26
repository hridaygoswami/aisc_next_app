"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"

export default function CoursesPage() {
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
      <section className="bg-[#f9f6ef] py-16 text-black">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-5xl font-light md:text-7xl">COURSES</h1>
          <p className="mx-auto max-w-4xl text-center text-lg text-gray-700">
            <br />
            At AISC, we are focused as a higher education provider in the Community Services courses. Our staff is
            expert in their area of study. AISC provide full support to students for industry placement.
            <br />
            <br />
            At AISC we are committed to offer our students with quality education and training from experienced and
            professional teaching faculty. We extend our courses from Community Services Profession to Business and
            Management. Feel free to have a browse from the course list offered by AISC.
            <br />
            <br />
            Higher Education has brought significance change in the lives of countless young people nationwide by giving
            the confidence and the skills to utilize their capabilities and talents. Our youth needs to be fuelled for
            better progression in the future and only good education and training can bring the progression in them.
            Browse through the various Higher Education offered by AISC.
          </p>
        </div>
      </section>

      {/* Course Sections */}
      <section className="py-16">
        <h2 className="mb-12 text-center text-4xl font-light text-[#2a9d8f] md:text-5xl">OUR PROGRAMS</h2>

        <div className="container mx-auto px-4">
          {/* Bachelor of Human Services */}
          <div className="mb-20 grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/course_1.jpg" alt="Bachelor of Human Services" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light md:text-4xl">Bachelor of Human Services</h2>
              <p className="text-gray-700">
                The Bachelor of Human Services at AISC is a three-year, full-time program designed to prepare students
                for careers in the human services sector. It provides a strong foundation in social work, psychology,
                sociology, and community development, emphasizing practical skills through field placements.
              </p>
              <div className="pt-6">
                <Link href="/courses/bachelor-of-human-services">
                  <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">LEARN MORE</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Master of Communication Services */}
          <div className="mb-20 grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              <h2 className="text-3xl font-light md:text-4xl">Master of Communication Services</h2>
              <p className="text-gray-700">
                The Master of Community Services (MCS) program prepares students for leadership roles in the community
                services sector by combining theoretical knowledge with practical experience. It equips graduates with
                the skills to manage organizations, develop policies, and address complex community challenges.
              </p>
              <div className="pt-6">
                <Link href="/courses/master-of-communication-services">
                  <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">LEARN MORE</Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 h-[400px] overflow-hidden rounded-lg md:order-2">
              <Image src="/course_2.jpg" alt="Master of Communication Services" fill className="object-cover" />
            </div>
          </div>

          {/* Master of Business Administration */}
          <div className="mb-20 grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/course_3.jpg" alt="Master of Business Administration" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light md:text-4xl">Master of Business Administration</h2>
              <p className="text-gray-700">
                The MBA at AISC provides advanced business and leadership skills with specializations in Hospital
                Management, Project Management, and IT management, preparing students for diverse industries.
              </p>
              <div className="pt-6">
                <Link href="/courses/master-of-business-administration">
                  <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">LEARN MORE</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Graduate Diploma in Business Administration */}
          <div className="mb-20 grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              <h2 className="text-3xl font-light md:text-4xl">Graduate Diploma in Business Administration</h2>
              <p className="text-gray-700">
                The Graduate Diploma in Business Administration at AISC provides foundational business and leadership
                skills and serves as a pathway to the MBA.
              </p>
              <div className="pt-6">
                <Link href="/courses/graduate-diploma-in-business-administration">
                  <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">LEARN MORE</Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 h-[400px] overflow-hidden rounded-lg md:order-2">
              <Image
                src="/course_4.jpg"
                alt="Graduate Diploma in Business Administration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Graduate Certificate in Business Administration */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/course_5.jpg"
                alt="Graduate Certificate in Business Administration"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light md:text-4xl">Graduate Certificate in Business Administration</h2>
              <p className="text-gray-700">
                The Graduate Certificate in Business Administration at AISC provides foundational business and
                leadership skills and serves as a pathway to the MBA. This program is designed for professionals seeking
                to enhance their business acumen or those considering a career change into business management.
              </p>
              <div className="pt-6">
                <Link href="/courses/graduate-certificate-in-business-administration">
                  <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">LEARN MORE</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

