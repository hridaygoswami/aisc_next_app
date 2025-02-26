"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

const navItems = ["HOME", "ABOUT", "COURSES", "ADMISSION", "POLICIES", "CONTACT"]

const courseItems = [
  "Bachelor of Human Services",
  "Master of Communication Services",
  "Master of Business Administration",
  "Graduate Diploma in Business Administration",
  "Graduate Certificate in Business Administration",
]

const sidebarItems = [
  "Career",
  "Agents",
  "Alumni",
  "Views & Events",
  "Chat Support",
  "Student support",
  "My AISC Login",
  "AISC Online Login",
]

export function MainNav() {
  const [open, setOpen] = React.useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#e9c46a]">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-4">
          {navItems.map((item) => {
            const href = item === "HOME" ? "/" : `/${item.toLowerCase()}`
            const isActive = pathname === href || (item !== "HOME" && pathname.startsWith(href))

            if (item === "COURSES") {
              return (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors hover:bg-[#f4d58d] hover:text-black px-3 py-2 rounded-md flex items-center ${
                      isActive ? "text-[#2A9D8F] border-b-2 border-[#2A9D8F]" : "text-black/80"
                    }`}
                  >
                    {item}
                    {isCoursesOpen ? (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-[#e9c46a] rounded-md shadow-lg py-1">
                      {courseItems.map((course, index) => (
                        <Link
                          key={index}
                          href={`/courses/${course.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 text-sm text-black/80 hover:bg-[#f4d58d] hover:text-black"
                        >
                          {course}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item}
                href={href}
                className={`text-sm font-medium transition-colors hover:bg-[#f4d58d] hover:text-black px-3 py-2 rounded-md ${
                  isActive ? "text-[#2A9D8F] border-b-2 border-[#2A9D8F]" : "text-black/80"
                }`}
              >
                {item}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-10 w-10" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#E9C46A] w-[300px] sm:w-[400px]">
              <ScrollArea className="h-full py-8">
                <div className="flex flex-col items-center justify-center min-h-full space-y-6">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item}
                      href={item === "Career" ? "/career" : item === "Agents" ? "/agents" : "#"}
                      className="text-lg font-medium text-black/80 transition-colors hover:bg-[#f4d58d] hover:text-black px-3 py-2 rounded-md w-full text-center"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

