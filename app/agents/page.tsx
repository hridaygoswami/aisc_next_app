"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
  bgColor?: string
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children, bgColor = "white" }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={`bg-${bgColor} text-lg font-semibold text-gray-900`}>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function AgentsPage() {

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
          src="/agents.jpg"
          alt="AISC Agents Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white md:text-7xl">Agents</h1>
        </div>
      </div>

      {/* Agents Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center text-[#2a9d8f] mb-8">Agents</h2>
          <div className="mx-auto max-w-4xl">
            <ExpandableSection title="About Our Agents" bgColor="white">
              <div className="space-y-8">
                <p className="text-lg text-gray-700">
                  AISC works with a network of authorized education agents around the world. These agents are trained to
                  provide accurate information about our programs, admission requirements, and application procedures.
                </p>

                <p className="text-lg text-gray-700">
                  Our agents play a crucial role in helping international students navigate the application process and
                  prepare for their studies at AISC.
                </p>

                <section>
                  <h3 className="mb-4 text-2xl font-light text-[#2a9d8f]">Becoming an AISC Agent</h3>
                  <p className="text-lg text-gray-700">
                    If you&apos;re interested in becoming an authorized agent for AISC, please contact our International
                    Office for more information on our agent application process.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 text-2xl font-light text-[#2a9d8f]">Agent Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>Provide accurate and up-to-date information about AISC programs and services</li>
                    <li>Assist students with the application and visa process</li>
                    <li>Maintain ethical standards in recruitment practices</li>
                    <li>Attend regular training sessions to stay informed about AISC policies and procedures</li>
                  </ul>
                </section>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

