"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { ExpandableSection } from "@/components/expandable-section"
import { MainNav } from "@/components/main-nav"

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      {/* Navigation */}
      {/*
      <nav className="sticky top-0 z-50 w-full bg-[#e9c46a]">
        <div className="container mx-auto flex h-16 items-center justify-center gap-8">
          <Link href="/" className="text-sm font-medium text-black/80 transition-colors hover:text-black">
            HOME
          </Link>
          <Link href="/about" className="text-sm font-medium text-black/80 transition-colors hover:text-black">
            ABOUT
          </Link>
          <Link href="/courses" className="text-sm font-medium text-black/80 transition-colors hover:text-black">
            COURSES
          </Link>
          <Link href="/admission" className="text-sm font-medium text-black/80 transition-colors hover:text-black">
            ADMISSION
          </Link>
          <Link href="/policies" className="text-sm font-medium text-black/80 transition-colors hover:text-black">
            POLICIES
          </Link>
          <Link href="/contact" className="text-sm font-medium text-black/80 transition-colors hover:text-black">
            CONTACT
          </Link>
        </div>
      </nav>
      */}

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

      {/* Admission & Application */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-5xl font-light md:text-7xl">ADMISSION & APPLICATION</h1>
          <p className="mx-auto max-w-4xl text-center text-lg text-gray-700">
            AISC welcomes applications from both domestic and international students. Our admission process is designed
            to be simple and student-friendly, with multiple intakes throughout the year. Our dedicated admissions team
            is available to assist with course selection, application submission, and visa processes.
          </p>
        </div>
      </section>

      {/* Join AISC Today */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-[#2a9d8f] text-center">Join AISC Today</h2>
              <p className="text-gray-700 text-left">
                At AISC, we are more than just an educational institution - we are a community that nurtures talent,
                fosters innovation, and prepares students for real-world success. Whether you are looking to start a
                career in human services or business administration, AISC is the perfect place to achieve your academic
                and professional aspirations.
              </p>
              <p className="font-medium text-center">Explore. Learn. Succeed.</p>
              <div className="text-center">
                <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">APPLY NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">How to Apply?</h2>
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-8 text-3xl font-light">Entry Requirements</h3>

            {/* Domestic Students */}
            <div className="mb-12 rounded-lg bg-[#f9f6ef] p-8">
              <ExpandableSection title="DOMESTIC STUDENTS" bgColor="#f9f6ef">
                {/* <div className="mb-6 flex items-center gap-4">
                <h4 className="text-2xl font-light">DOMESTIC STUDENT</h4>
                <Plus className="h-6 w-6 text-[#2a9d8f]" />
              </div> */}
                <ul className="space-y-4 text-gray-700">
                  <li>Entry requirements are in the process of being determined</li>
                </ul>
              </ExpandableSection>
            </div>

            {/* International Students */}
            <div className="rounded-lg bg-[#f9f6ef] p-8">
              <ExpandableSection title="INTERNATIONAL STUDENT" bgColor="#f9f6ef">
                {/* <div className="mb-6 flex items-center gap-4">
                <h4 className="text-2xl font-light">INTERNATIONAL STUDENT</h4>
                <Plus className="h-6 w-6 text-[#2a9d8f]" />
              </div> */}
                <ul className="space-y-4 text-gray-700">
                  <li>Entry requirements are in the process of being determined</li>
                </ul>
              </ExpandableSection>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages AISC */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">ADVANTAGES AISC</h2>
          <div className="mx-auto max-w-6xl space-y-12">
            {/* Pathway to Higher Studies */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="PATHWAY TO HIGHER STUDIES" bgColor="white">
                <p className="text-gray-700">
                  At AISC we offer our students with an opportunity to prepare them for their future career profession.
                  Students will receive our guidance and assistance in the journey to pursue their career dreams.
                </p>
              </ExpandableSection>
            </div>

            {/* Campus Life */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="CAMPUS LIFE" bgColor="white">
                <p className="text-gray-700">
                  AISC is centrally located, in the heart of Arndale Shopping Centre. The ideal location makes an ease
                  of access to cafe, restaurants, stationary stores and public transport stations. Student can expect to
                  engage with various students from different cultural backgrounds and grounds of study.
                </p>
              </ExpandableSection>
            </div>

            {/* Other Essential Support */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="Other Essential Support" bgColor="white">
                <p className="mb-4 text-gray-700">
                  At AISC we offer our students with an opportunity to prepare them for their future career profession.
                  Students will receive our guidance and assistance in the journey to pursue their career dreams.
                </p>
                <p className="mb-2 text-gray-700">AISC can provide you support for;</p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>English Language Coaching</li>
                  <li>Student Consultation and Counselling</li>
                  <li>Student Residence Support</li>
                </ul>
              </ExpandableSection>
            </div>

            {/* Placement Support */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="Placement Support" bgColor="white">
                <p className="text-gray-700">
                  Stressed that you are not able to secure a position in your professional field? With AISC you have to
                  worry no more. With AISC placement support you will gain first hand experience of working in Community
                  Profession sector. Our industry experts work on a regular basis to understand the market position of
                  industry. We also assist our students to secure placement in various different companies that we work
                  closely with.
                </p>
              </ExpandableSection>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-light">
            CHECK YOUR ELIGIBILITY FOR COURSES AND ITS ENTRY REQUIREMENTS
          </h2>
          <div className="mx-auto max-w-6xl space-y-12">
            {/* Delivery Method */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="Delivery Method" bgColor="white">
                {/* <div className="mb-6 flex items-center gap-4">
                <h3 className="text-2xl font-light">Delivery Method</h3>
                <Plus className="h-6 w-6 text-[#2a9d8f]" />
              </div> */}
                <div className="space-y-4 text-gray-700">
                  <p>
                    This course is delivered through classroom base face to face including simulated individual or group
                    exercises in the theory classes and also Online. Practical sessions are delivered in the facilities
                    and work placement within industry as applicable.
                  </p>
                  <p>
                    The lecturer will provide any additional learning material where gaps are identified in either the
                    participant's underpinning knowledge or the learning resources.
                  </p>
                </div>
              </ExpandableSection>
            </div>

            {/* Assessment Methods */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="Assessment Methods" bgColor="white">
                {/* <div className="mb-6 flex items-center gap-4">
                <h3 className="text-2xl font-light">Assessment Methods</h3>
                <Plus className="h-6 w-6 text-[#2a9d8f]" />
              </div> */}
                <div className="space-y-4 text-gray-700">
                  <p>
                    Assessment will be a learning and assessment pathway. Participants will be advised of the assessment
                    requirements at the beginning of each unit and described within unit outlines.
                  </p>
                  <p>
                    Assessment will usually commence in the session following delivery as advised by the lecturers. The
                    assessment continues throughout the unit.
                  </p>
                  <p>
                    The assessment process may include written assessment, practical tasks, observation of performance,
                    project, assignment, work placement / third part report and other forms of assessments.
                  </p>
                </div>
              </ExpandableSection>
            </div>

            {/* Pathways */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="Pathways" bgColor="white">
                {/* <div className="mb-6 flex items-center gap-4">
                <h3 className="text-2xl font-light">Pathways</h3>
                <Plus className="h-6 w-6 text-[#2a9d8f]" />
              </div> */}
                <div className="space-y-4 text-gray-700">
                  <p>
                    Employment pathway: Participants are provided with an advice on employment and training options
                    throughout the delivery of the course. Job roles and titles vary across different industry sectors.
                  </p>
                  <p>
                    Pathways to further studies: After achieving the bachelor and/or master qualifications, candidates
                    may choose to undertake higher courses with other relevant qualifications.
                  </p>
                  <p>
                    Note: AISC does not guarantee an employment outcome, licence, or accreditation at the completion of
                    this qualification.
                  </p>
                </div>
              </ExpandableSection>
            </div>

            {/* Cost */}
            <div className="rounded-lg bg-white p-8">
              <ExpandableSection title="Cost" bgColor="white">
                <div className="space-y-4 text-gray-700">
                  <p>Tuition Fee $00000</p>
                  <p>Application fees - $000 (Non-refundable)</p>
                  <p>Text-book and Material fees - $000</p>
                </div>
              </ExpandableSection>
            </div>
          </div>
        </div>
      </section>

      {/* Graduate with Pride */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-light text-[#2a9d8f]">GRADUATE WITH PRIDE</h2>
          <p className="mx-auto max-w-4xl text-center text-gray-700">
            Finally, celebrate your hard work and success with your classmates in the AISC Alumni community when you
            graduate. All AISC graduates will receive an invitation to a convocation ceremony held once in a year in
            Adelaide, Australia. Participate in your graduation with pride and take the next step towards your future.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

