"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"

export default function BachelorOfHumanServicesPage() {
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
        <h1 className="text-4xl font-light md:text-6xl">Bachelor of Human Services</h1>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src="/course_1.jpg"
            alt="Bachelor of Human Services Student"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Course Overview */}
      <section className="bg-[#f9f6ef] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              The Bachelor of Human Services at AISC is a three-year, full-time program designed to prepare students for
              careers in the human services sector. It provides a strong foundation in social work, psychology,
              sociology, and community development, emphasizing practical skills through field placements. The course
              consists of 24 units (144 credits), progressing from foundation core units to advanced study units with a
              capstone project. Graduates are equipped to support vulnerable populations and address social challenges
              effectively.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The Bachelor of Human Services at the Adelaide Institute of Sciences (AISC) is designed to equip students
              with the knowledge, skills, and practical experience necessary to work effectively in the human services
              sector. This course provides a comprehensive understanding of the social, cultural, and economic factors
              that impact individuals and communities, and prepares students to deliver a range of services to support
              vulnerable populations
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Throughout the course, students will engage with key concepts in social work, psychology, sociology, and
              community development. The course emphasizes the development of practical skills through field placements,
              where students gain hands-on experience in real-world settings.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The Bachelor of Human Services is a three-year full-time course, consisting of 24 units worth 6 credits
              each, totalling 144 credits. The course is divided into foundation core units, intermediate studies and
              application units and advance study units with a capstone project.
            </p>
          </div>
        </div>
      </section>
      {/* Course Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-light text-[#2a9d8f]">Course Duration: Three Years</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm"></div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Course Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Total Units: 24 units</li>
                  <li>Total Credit Points: 144</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Units Structure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Year 1 - Foundation Units – Eight (8)</li>
                  <li>Year 2 - Intermediate Studies and Applications Units – Eight (8)</li>
                  <li>Year 3 - Advanced Studies and Capstone Project – Six (6) and Two (2)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Year 1 Course Structure Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-light text-[#2a9d8f]">Year 1 Units</h2>
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
                    <td className="border border-gray-200 p-3">BHSE101</td>
                    <td className="border border-gray-200 p-3">Introduction to Human Services</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE102</td>
                    <td className="border border-gray-200 p-3">Introduction to Sociology</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE103</td>
                    <td className="border border-gray-200 p-3">Human Development Across the Lifespan</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE104</td>
                    <td className="border border-gray-200 p-3">Communication Skills for Human Services</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE105</td>
                    <td className="border border-gray-200 p-3">Ethics and Professional Practice</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE106</td>
                    <td className="border border-gray-200 p-3">Introduction to Community Services</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE107</td>
                    <td className="border border-gray-200 p-3">Introduction to Psychology</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 1</td>
                    <td className="border border-gray-200 p-3">BHSE108</td>
                    <td className="border border-gray-200 p-3">Introduction to Social Policy</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Year 2 Course Structure Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-light text-[#2a9d8f]">Year 2 Units</h2>
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
                    <td className="border border-gray-200 p-3">BHSE209</td>
                    <td className="border border-gray-200 p-3">Case Management and Intervention</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE210</td>
                    <td className="border border-gray-200 p-3">Diversity and Cultural Competence</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE211</td>
                    <td className="border border-gray-200 p-3">Mental Health and Wellbeing</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE212</td>
                    <td className="border border-gray-200 p-3">Policy and Advocacy in Human Services</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">BHSE108</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE213</td>
                    <td className="border border-gray-200 p-3">Research Methods in Human Services</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE214</td>
                    <td className="border border-gray-200 p-3">Working with Vulnerable Populations</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">BHSE106</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE215</td>
                    <td className="border border-gray-200 p-3">Introduction to Disability Services</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 2</td>
                    <td className="border border-gray-200 p-3">BHSE216</td>
                    <td className="border border-gray-200 p-3">Human Rights and Social Justice</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">BHSE105</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Year 3 Course Structure Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-light text-[#2a9d8f]">Year 3 Units</h2>
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
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">BHSE317</td>
                    <td className="border border-gray-200 p-3">Leadership in Human Services</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">BHSE318</td>
                    <td className="border border-gray-200 p-3">Community Development</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">BHSE319</td>
                    <td className="border border-gray-200 p-3">Course Planning and Evaluation</td>
                    <td className="border border-gray-200 p-3 text-center">No</td>
                    <td className="border border-gray-200 p-3 text-center">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">AFP701</td>
                    <td className="border border-gray-200 p-3">Field Placement / Internship</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">All Units of year 1 and 2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">BHSE320</td>
                    <td className="border border-gray-200 p-3">Advanced Social Work Practice</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">BHSE210</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">AFP702</td>
                    <td className="border border-gray-200 p-3">Field Placement / Internship</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">All Units of year 1 and 2 and AFP701</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Year 3</td>
                    <td className="border border-gray-200 p-3">ACP701</td>
                    <td className="border border-gray-200 p-3">Capstone Project</td>
                    <td className="border border-gray-200 p-3 text-center">Yes</td>
                    <td className="border border-gray-200 p-3 text-center">All Units of year 1 and 2</td>
                  </tr>
                </tbody>
              </table>
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
                flied placement. A total of 560 hours is allocated for two different set of work placement during the
                course progression. All academic staff in the Bachelor of Human Services have relevant
                industry/professional experience and higher education teaching experience. AISC has invested
                significantly in its campus to create the highest standard of training equipment and facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

