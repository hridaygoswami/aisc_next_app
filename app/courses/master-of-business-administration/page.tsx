"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"

export default function MasterOfBusinessAdministrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/courses" className="inline-flex items-center text-[#2a9d8f] hover:text-[#2a9d8f]/80">
          <ArrowLeft className="mr-2 h-4 w-4" />
          BACK TO COURSES
        </Link>
      </div>

      {/* Course Title */}
      <div id="course-title" className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-light md:text-6xl">Master of Business Administration</h1>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image src="/course_3.jpg" alt="Master of Business Administration" fill className="object-cover" />
        </div>
      </div>

      {/* Course Overview */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              The MBA at AISC provides advanced business and leadership skills with specializations in Hospital
              Management, Project Management, and IT Management, preparing students for diverse industries.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The Master of Business Administration (MBA) course at the Adelaide Institute of Sciences (AISC) is
              designed to equip students with advanced business knowledge and leadership skills necessary for success in
              diverse organizational settings. The course offers specializations in Hospital Management, Project
              Management, and IT Management, catering to the specific needs of these industries.
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
                    <li>Graduate Certificate in Business Administration (4 Units from Foundation and core) – 24</li>
                    <li>Graduate Diploma of Business Administration (8 Units – Foundation and Core combined) – 48</li>
                    <li>
                      Master of Business Administration – Cognate Entry (12 Units – Four credit unit of Foundation Core,
                      Core and specialisation) – 96
                    </li>
                    <li>
                      Master of Business Administration - Non-Cognate Entry (16 Units – Foundation, Core and
                      specialisation) – 96
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Units Structure</h3>
                <ul className="space-y-2 list-disc text-gray-700">
                  <li>Foundation Units – Four (4)</li>
                  <li>Core Units – Four (4)</li>
                  <li>Specialisation 1 Units – Hospital Management Stream (HM) – Six (6)</li>
                  <li>Specialisation 2 Units – Project Management Stream (PM) – Six (6)</li>
                  <li>Specialisation 3 Units – Information Technology Management – Six (6)</li>
                  <li>Capstone Project Units – Two (2) – Common for all three specialisation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">Foundation Core Units</h3>
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
                      <td className="border border-gray-200 p-3">AMB101</td>
                      <td className="border border-gray-200 p-3">Foundations of Business Management</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Year 1</td>
                      <td className="border border-gray-200 p-3">AMB102</td>
                      <td className="border border-gray-200 p-3">Managerial Economics</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Year 1</td>
                      <td className="border border-gray-200 p-3">AMB103</td>
                      <td className="border border-gray-200 p-3">Financial and Managerial Accounting</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Year 1</td>
                      <td className="border border-gray-200 p-3">AMB104</td>
                      <td className="border border-gray-200 p-3">Marketing Management</td>
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
                      <td className="border border-gray-200 p-3">AMB105</td>
                      <td className="border border-gray-200 p-3">Financial Management</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Year 1</td>
                      <td className="border border-gray-200 p-3">AMB106</td>
                      <td className="border border-gray-200 p-3">Human Resource Management</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Year 1</td>
                      <td className="border border-gray-200 p-3">AMB107</td>
                      <td className="border border-gray-200 p-3">Strategic Management</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Year 1</td>
                      <td className="border border-gray-200 p-3">AMB108</td>
                      <td className="border border-gray-200 p-3">Leadership and Change Management</td>
                      <td className="border border-gray-200 p-3 text-center">No</td>
                      <td className="border border-gray-200 p-3 text-center">NA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">
          Specialisation Units - Hospital Management Stream (HM)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#e8f5f3]">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Year / Trimester 1/2/3</th>
                <th className="border border-gray-200 p-3 text-left">Unit Code</th>
                <th className="border border-gray-200 p-3 text-left">Unit Title</th>
                <th className="border border-gray-200 p-3 text-center">Prerequisite Yes/No</th>
                <th className="border border-gray-200 p-3 text-center">Prerequisite Unit/s OR Corequisite Unit/s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB201</td>
                <td className="border border-gray-200 p-3">Healthcare Systems Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB202</td>
                <td className="border border-gray-200 p-3">Hospital Operations Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB203</td>
                <td className="border border-gray-200 p-3">Healthcare Quality and Patient Safety</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB204</td>
                <td className="border border-gray-200 p-3">Healthcare Financial Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB205</td>
                <td className="border border-gray-200 p-3">Healthcare Information Systems</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB206</td>
                <td className="border border-gray-200 p-3">Healthcare Marketing and Communication</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">ACP501</td>
                <td className="border border-gray-200 p-3">Capstone Project in Hospital Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">
          Specialisation Units - Project Management Stream (PM)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#e8f5f3]">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Year / Trimester 1/2/3</th>
                <th className="border border-gray-200 p-3 text-left">Unit Code</th>
                <th className="border border-gray-200 p-3 text-left">Unit Title</th>
                <th className="border border-gray-200 p-3 text-center">Prerequisite Yes/No</th>
                <th className="border border-gray-200 p-3 text-center">Prerequisite Unit/s OR Corequisite Unit/s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB301</td>
                <td className="border border-gray-200 p-3">Project Management Fundamentals</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB302</td>
                <td className="border border-gray-200 p-3">Advanced Project Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB303</td>
                <td className="border border-gray-200 p-3">Leadership in Project Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB304</td>
                <td className="border border-gray-200 p-3">Agile Project Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB305</td>
                <td className="border border-gray-200 p-3">Project Management Tools and Techniques</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB306</td>
                <td className="border border-gray-200 p-3">Project Portfolio Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">ACP501</td>
                <td className="border border-gray-200 p-3">Capstone Project in Project Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="mb-4 text-xl font-medium text-[#2a9d8f]">
          Specialisation Units - Information Technology Management Stream (IT)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#e8f5f3]">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Year / Trimester 1/2/3</th>
                <th className="border border-gray-200 p-3 text-left">Unit Code</th>
                <th className="border border-gray-200 p-3 text-left">Unit Title</th>
                <th className="border border-gray-200 p-3 text-center">Prerequisite Yes/No</th>
                <th className="border border-gray-200 p-3 text-center">Prerequisite Unit/s OR Corequisite Unit/s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB401</td>
                <td className="border border-gray-200 p-3">IT Strategy and Governance</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB402</td>
                <td className="border border-gray-200 p-3">Enterprise Systems and Architecture</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB403</td>
                <td className="border border-gray-200 p-3">IT Project Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB404</td>
                <td className="border border-gray-200 p-3">Cybersecurity Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB405</td>
                <td className="border border-gray-200 p-3">Data Management and Analytics</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">AMB406</td>
                <td className="border border-gray-200 p-3">Emerging Technologies and Innovation</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Year 2</td>
                <td className="border border-gray-200 p-3">ACP501</td>
                <td className="border border-gray-200 p-3">Capstone Project in IT Management</td>
                <td className="border border-gray-200 p-3 text-center">Yes</td>
                <td className="border border-gray-200 p-3 text-center">All Core Units</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

