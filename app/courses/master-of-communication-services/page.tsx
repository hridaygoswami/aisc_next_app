"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"

export default function MasterOfCommunicationServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Logo Section */}
      <div className="container mx-auto py-8 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AISC-Q4qIzWQq51JkjsDYrq9zfDQG5aIEbY.png"
          alt="Adelaide Institute of Sciences Logo"
          width={400}
          height={200}
          className="mx-auto"
        />
        <p className="mt-4 text-xl text-[#2a9d8f]">EXPLORE IDEAS WITH LEARNING</p>
      </div>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/courses" className="inline-flex items-center text-[#2a9d8f] hover:text-[#2a9d8f]/80">
          <ArrowLeft className="mr-2 h-4 w-4" />
          BACK TO COURSES
        </Link>
      </div>

      {/* Course Title */}
      <div id="course-title" className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-light md:text-6xl">Master of Communication Services</h1>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image src="/course_2.jpg" alt="Master of Communication Services" fill className="object-cover" />
        </div>
      </div>

      {/* Course Overview */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              The Master of Community Services (MCS) program prepares students for leadership roles in the community
              services sector by combining theoretical knowledge with practical experience. It equips graduates with the
              skills to manage organizations, develop policies, and address complex community challenges. Through
              academic coursework, hands-on training, and research, students gain the expertise to make a meaningful
              impact in diverse communities.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The Master of Community Services (MCS) program is designed to prepare students for advanced roles in the
              community services sector. This program combines theoretical knowledge with practical experience to equip
              graduates with the skills needed to effectively manage and lead community service organizations, develop
              and implement policies, and provide high-quality services to diverse communities.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The Master of Community Services course aims to produce graduates who are well-equipped to address the
              complex challenges faced by communities today. Through a combination of rigorous academic coursework,
              practical experience, and research opportunities, students will be prepared to make a meaningful impact in
              the field of community services.
            </p>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-light text-[#2a9d8f]">Course Duration: Two Years</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm"></div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Course Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Total Units: 16 units</li>
                  <li>Total Credit Points: 96</li>
                  <ul className="ml-6 space-y-2 list-disc text-gray-700">
                    <li>Graduate Certificate in Community Services (4 Units from Foundation and core) – 24</li>
                    <li>Graduate Diploma of Community Services (8 Units – Foundation and Core combined) – 48</li>
                    <li>
                      Master of Community Services – Cognate Entry (12 Units – Four credit unit of Foundation Core, Core
                      and Advance and Project) – 96
                    </li>
                    <li>
                      Master of Community Services - Non-Cognate Entry (16 Units – Foundation, Core and Advance and
                      Project) – 96
                    </li>
                  </ul>
                </ul>

                <p>
                  Graduates will be prepared for a variety of roles within social services, community organizations,
                  non-profits, and government agencies, working directly with individuals, families, and communities to
                  improve their well-being and advocate for social change
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Units Structure</h3>
                <ul className="space-y-2 list-disc text-gray-700">
                  <li>Foundation Units – Four (4)</li>
                  <li>Core Units – Four (4)</li>
                  <li>Advance Units –Six (6)</li>
                  <li>Capstone Project Units – Two (2)</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">Foundation Units</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-[#e8f5f3]">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left">Year / Trimester 1/2/3</th>
                        <th className="border border-gray-200 p-3 text-left">Unit Code</th>
                        <th className="border border-gray-200 p-3 text-left">Unit Title</th>
                        <th className="border border-gray-200 p-3 text-center">Prerequisite Yes/No</th>
                        <th className="border border-gray-200 p-3 text-center">
                          Prerequisite Unit/s OR Corequisite Unit/s
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS101</td>
                        <td className="border border-gray-200 p-3">Foundations of Community Services</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS102</td>
                        <td className="border border-gray-200 p-3">Human Behavior and Social Environment</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS103</td>
                        <td className="border border-gray-200 p-3">Leadership in Community Services</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS104</td>
                        <td className="border border-gray-200 p-3">Community Development Theory and Practice</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">Core Units</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-[#e8f5f3]">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left">Year / Trimester 1/2/3</th>
                        <th className="border border-gray-200 p-3 text-left">Unit Code</th>
                        <th className="border border-gray-200 p-3 text-left">Unit Title</th>
                        <th className="border border-gray-200 p-3 text-center">Prerequisite Yes/No</th>
                        <th className="border border-gray-200 p-3 text-center">
                          Prerequisite Unit/s OR Corequisite Unit/s
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS105</td>
                        <td className="border border-gray-200 p-3">Mental Health and Community Services</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS106</td>
                        <td className="border border-gray-200 p-3">Policy Analysis and Development</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS107</td>
                        <td className="border border-gray-200 p-3">Advanced Social Work Practice</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 1</td>
                        <td className="border border-gray-200 p-3">ACS108</td>
                        <td className="border border-gray-200 p-3">Research Methods in Community Services</td>
                        <td className="border border-gray-200 p-3 text-center">No</td>
                        <td className="border border-gray-200 p-3 text-center">NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">Advance Units</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-[#e8f5f3]">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left">Year / Trimester 1/2/3</th>
                        <th className="border border-gray-200 p-3 text-left">Unit Code</th>
                        <th className="border border-gray-200 p-3 text-left">Unit Title</th>
                        <th className="border border-gray-200 p-3 text-center">Prerequisite Yes/No</th>
                        <th className="border border-gray-200 p-3 text-center">
                          Prerequisite Unit/s OR Corequisite Unit/s
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 2</td>
                        <td className="border border-gray-200 p-3">ACS201</td>
                        <td className="border border-gray-200 p-3">Ethics and Professional Practice</td>
                        <td className="border border-gray-200 p-3 text-center">Yes</td>
                        <td className="border border-gray-200 p-3 text-center">All Core Units</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 2</td>
                        <td className="border border-gray-200 p-3">ACS202</td>
                        <td className="border border-gray-200 p-3">Evaluation and Quality Improvement</td>
                        <td className="border border-gray-200 p-3 text-center">Yes</td>
                        <td className="border border-gray-200 p-3 text-center">All Core Units</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 2</td>
                        <td className="border border-gray-200 p-3">ACS203</td>
                        <td className="border border-gray-200 p-3">Disability Services</td>
                        <td className="border border-gray-200 p-3 text-center">Yes</td>
                        <td className="border border-gray-200 p-3 text-center">All Core Units</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 2</td>
                        <td className="border border-gray-200 p-3">ACS204</td>
                        <td className="border border-gray-200 p-3">Aged Care Services</td>
                        <td className="border border-gray-200 p-3 text-center">Yes</td>
                        <td className="border border-gray-200 p-3 text-center">All Core Units</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 2</td>
                        <td className="border border-gray-200 p-3">ACP401</td>
                        <td className="border border-gray-200 p-3">Capstone Project/Thesis</td>
                        <td className="border border-gray-200 p-3 text-center">Yes</td>
                        <td className="border border-gray-200 p-3 text-center">
                          Prerequisite - All Core Units
                          <br />
                          Corequisite – Year two Units
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Year 2</td>
                        <td className="border border-gray-200 p-3">AFP601</td>
                        <td className="border border-gray-200 p-3">Final Placement / Internship</td>
                        <td className="border border-gray-200 p-3 text-center">Yes</td>
                        <td className="border border-gray-200 p-3 text-center">
                          Prerequisite - All Core Units
                          <br />
                          Corequisite – Year two Units
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Training */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-light text-[#2a9d8f]">Practical Training with Community Setup</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Students are prepared for practice through a combination of on-campus theory and the latest simulation
                activities that are delivered in AISC’s state-of-the-art simulation lab. With a focus on
                inter-professional learning, students will develop valuable skills to operate as part of a community
                services team.
              </p>
              <p>
                Student supported work in a variety of community settings throughout South Australia. Students will be
                exposed to work practice early in the course, with the range of possible placements including community
                flied placement.
              </p>
              <p>
                All academic staff in the Master of Community Services have relevant industry/professional experience
                and higher education teaching experience. AISC has invested significantly in its campus to create the
                highest standard of training equipment and facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

