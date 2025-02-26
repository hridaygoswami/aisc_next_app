import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="w-full px-4 py-16 bg-gradient-to-b from-white to-[#2A9D8F]">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-4xl font-light">Explore Ideas With Learning</h2>
            <Link href="/contact">
              <Button className="bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">CONNECT WITH AISC</Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_auto]">
            <div className="text-center md:text-left  ml-[22%]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Footer%20logo%20AISC-W31c4BJqnjioTLCJCJaDxezVSZofXU.png"
                alt="AISC Logo"
                width={150}
                height={150}
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="text-left mr-[280px]">
              <nav className="mb-4">
                <ul className="flex flex-col items-end gap-2">
                  {["HOME", "ABOUT", "COURSES", "ADMISSION", "POLICY", "CONTACT"].map((item) => (
                    <li key={item}>
                      <b>
                        <Link
                          href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                          className="text-sm text-gray-600 hover:text-[#2a9d8f]"
                        >
                          {item}
                        </Link>
                      </b>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex justify-end gap-4">
                <span className="text-sm text-gray-600">connect:</span>
                <Link href="#" className="text-gray-600 hover:text-[#2a9d8f]">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#2a9d8f]">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">© 2025 AISC</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-black hover:text-[#2a9d8f]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              BACK TO THE TOP
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

