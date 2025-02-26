"use client"

import * as React from "react"
import { Plus } from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
  bgColor?: "white" | "beige" | "#f9f6ef"
}

export function ExpandableSection({ title, children, bgColor = "beige" }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const bgColorClass = bgColor === "white" ? "bg-white" : "bg-[#f9f6ef]"
  const textColorClass = "text-[#2a9d8f]"

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`w-full overflow-hidden rounded-lg transition-all duration-300 ease-in-out ${bgColorClass}`}
    >
      <CollapsibleTrigger className={`flex w-full items-center justify-between p-4 ${bgColorClass}`}>
        <h2 className={`text-3xl font-light ${textColorClass} md:text-4xl`}>{title}</h2>
        <Plus
          className={`h-8 w-8 ${textColorClass} transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
        <div className={`prose max-w-none p-4 text-gray-700 ${bgColorClass}`}>{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

