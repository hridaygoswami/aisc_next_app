"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"

const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    emailConfirmed: z.string().email({ message: "Please enter a valid email address" }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  })
  .refine((data) => data.email === data.emailConfirmed, {
    message: "Emails don't match",
    path: ["emailConfirmed"],
  })

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      emailConfirmed: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
    setIsSubmitting(false)
  }

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

      {/* Enquiry Form */}
      <section className="bg-[#f9f6ef] py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-light">ENQUIRY?</h2>
            <p className="mb-8 text-gray-600">
              Fill out the form below and we can assist or you can connect with our staff members directly.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="YOUR NAME" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="PHONE NUMBER" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="EMAIL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emailConfirmed"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="EMAIL CONFIRMED" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="MESSAGE SUBJECT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="MESSAGE" className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#e9c46a] text-black hover:bg-[#e9c46a]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT FORM"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-16 text-center text-4xl font-light">GENERAL INFORMATION</h1>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xl">TEQSA PRV NO: TBA</p>
            <p className="text-xl">CRICOS NO: TBA</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Image
              src="/study_in_australia.png"
              alt="Study in Australia Logo"
              width={200}
              height={100}
              className="object-contain"
            />
            <Image
              src="/study_adelaide.png"
              alt="Study Adelaide Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Contact Information and Map */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#2A9D8F] p-8 text-white md:p-12">
          <h3 className="mb-6 text-2xl font-light">ADDRESS</h3>
          <p className="mb-8">
            Level 1, 8 Regency Road
            <br />
            Kilkenny, SA 5009, Australia
          </p>

          <h3 className="mb-6 text-2xl font-light">PHONE</h3>
          <p className="mb-8">TBD</p>

          <h3 className="mb-6 text-2xl font-light">EMAIL</h3>
          <p className="mb-8">info@aischc.com.au</p>

          <h3 className="mb-6 text-2xl font-light">HOURS OF OPERATION</h3>
          <p>
            Monday - Friday
            <br />
            08:00 - 18:00
          </p>
          <p className="mt-2">
            Saturday - Sunday
            <br />
            Closed
          </p>
        </div>
        <div className="min-h-[400px] bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.828774749!2d138.5675!3d-34.8975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c5f8b3f5f8f5%3A0x5f8b3f5f8f5f8f5!2s8%20Regency%20Rd%2C%20Kilkenny%20SA%205009!5e0!3m2!1sen!2sau!4v1645123456789!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

