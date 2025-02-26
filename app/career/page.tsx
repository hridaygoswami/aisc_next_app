"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import { ExpandableSection } from "@/components/expandable-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Define the job posting type
type JobPosting = {
  title: string
  content: React.ReactNode
}

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample job postings (you can expand this with more job listings)
  const jobPostings: JobPosting[] = [
    {
      title: "Accounts Officer",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-[#2a9d8f]">AISC ORGANISATIONAL ENVIRONMENT</h2>
          <p className="text-lg text-gray-700">
            AISC aims to become a thriving private higher education provider with capabilities to respond to the
            aspirations of a range of students, academics, employers, and other stakeholders in the region, delivering
            high quality education programs that prepare students for enhanced professional practice and leadership in
            their field while engendering lifelong learning and strong ethics.
          </p>
          <p className="text-lg text-gray-700">
            AISC is a Proposed new Higher Education Institute. AISC is dedicated to academic ideals of education,
            research and community service in the field of health. AISC&apos;s mission is to provide innovative and
            transformative cost-effective educational opportunities for individual students at undergraduate graduate
            level, including but not limited to formal award courses, professional development courses, open learning
            courses and seminars, conferences, workshops and any other course that is deemed appropriate; to accelerate
            the acquisition and beneficial application of knowledge at both individual and community levels through
            research, teaching, training and community service activities; to contribute to the world of learning and
            the extension of knowledge; and to co-operate with other Australian and overseas organisations concerned
            with similar objectives as AISC.
          </p>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">POSITION SUMMARY</h2>
          <p className="text-lg text-gray-700">
            Under the leadership of the Director of Finance, the Accounts Officer provides: delivery of financial
            transaction services that meet the day to day operational needs of AISC, ensure accurately and timely
            processing of accounts payable, invoicing, debtor and credit management and receipting, production of
            regular financial reporting and analysis covering AISC courses and services, timely and efficient payroll
            services and financial support for staff and students, ensure financial transactions comply with AISC and
            AISC policies, procedures and guidelines. Accounts Officer is also responsible for maintaining AISC
            accounts, assisting in the preparation of budgets, managing records and receipts. Being a key point of
            contact for other AISC departments on financial and accounting matters. Accounts Officer supports the
            Director of Finance and executives with student&apos;s financial matters when required.
          </p>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">REPORTING RELATIONSHIPS</h2>
          <p className="text-lg text-gray-700">Accounts Officer reports to the Director of Finance.</p>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">KEY DUTIES AND RESPONSIBILITIES</h2>
          <p className="text-lg text-gray-700">
            The new appointee is expected to contribute to the growth of AISC through their teaching, learning and
            engagement efforts as described below.
          </p>
          <p className="text-lg text-gray-700">Accounts Officer is responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Responding to all AISC student enquiries regarding student finances;</li>
            <li>Co-ordinating and undertaking all aspects of student fees;</li>
            <li>Co-ordinating debt collection activities and following through on any associated actions;</li>
            <li>
              Developing, implementing, and improving associated processes, in particular student withdrawals /deferrals
              and the impact on student financial position;
            </li>
            <li>Undertaking the reconciliation of international student deposits;</li>
            <li>
              Ensuring consistent compliance with applicable government requirements and the institution&apos;s financial
              frameworks and policies;
            </li>
            <li>Assisting in reporting, data review and administration;</li>
            <li>Assisting in invoicing and receipting processes;</li>
            <li>Maintaining AISC accounts;</li>
            <li>Assisting in the preparation of budgets, managing records and receipts</li>
          </ul>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">SELECTION CRITERIA</h2>
          <p className="text-lg text-gray-700">
            The selection criteria specific to the position are listed below. The level of appointment will be
            commensurate with qualifications, experience, and past performance of the candidate.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Bachelor&apos;s degree in accounting and 3+ years of relevant experience;</li>
            <li>Experience in student life cycle in the higher education or related sector;</li>
            <li>High-level computer skills with financial accounting systems including Excel.</li>
            <li>High-level computer skills with experience in accounting systems such as Xero;</li>
            <li>Ability to work autonomously and unsupervised and to organise and prioritise workload;</li>
            <li>
              Demonstrated financial acumen with an eye for detail and the ability to provide reliable advice to finance
              management
            </li>
            <li>The ability to function effectively in a fast-paced environment;</li>
            <li>High-level computer skills with experience in accounting systems such as Xero;</li>
            <li>
              Demonstrated commitment to cultural diversity and a working knowledge of equity and WHS principles in the
              workplace and commitment to AISC&apos;s values.
            </li>
          </ul>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">EQUAL OPPORTUNITY, DIVERSITY, AND INCLUSION</h2>
          <p className="text-lg text-gray-700">
            AISC is an equal opportunity employer and is committed to providing a workplace free from all forms of
            unlawful discrimination, bullying, harassment, bullying, vilification and victimization for all staff,
            students, and all other visitors to AISC. AISC values diversity because we recognise this as a strength in
            the learning environment that enriches our student and staff experiences when interacting with peers and
            colleagues with differences in age, race, ethnicity, culture, gender, nationality, sexual orientation,
            physical ability, and background.
          </p>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">WORKPLACE HEALTH AND SAFETY (WHS)</h2>
          <p className="text-lg text-gray-700">
            All staff are required to take reasonable care for their own health and safety and that of other personnel/
            students who may be affected by their conduct.
          </p>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">GOVERNANCE</h2>
          <p className="text-lg text-gray-700">
            The CEO is responsible to the Executive Committee and the Board of Directors of AISC for the good management
            of AISC.
          </p>

          <h2 className="text-2xl font-medium text-[#2a9d8f]">POLICIES AND PROCEDURES</h2>
          <p className="text-lg text-gray-700">
            The appointment is subject to all AISC policies as enacted from time to time by AISC governing bodies. Refer
            to the policy library on AISC intranet for the latest versions of the policies and guidelines which will
            impact this role.
          </p>
        </div>
      ),
    },
    // Add more job postings here as needed
  ]

  // Filter job postings based on search term
  const filteredJobs = jobPostings.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()))

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
      <div className="relative h-[400px] w-full">
        <Image
          src="/careers.jpg"
          alt="AISC Careers Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white md:text-7xl">Careers</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#f9f6ef] py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search for job positions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Careers Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <ExpandableSection key={index} title={job.title} bgColor="white">
                  {job.content}
                </ExpandableSection>
              ))
            ) : (
              <p className="text-center text-gray-700">No job postings found matching your search.</p>
            )}
            <div className="mt-8 text-center">
              <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90 text-white">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

