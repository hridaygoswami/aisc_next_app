"use client"

import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import { ExpandableSection } from "@/components/expandable-section"

export default function PoliciesPage() {
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
          src="/policy.jpg"
          alt="AISC Policy Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white md:text-7xl">Policy</h1>
        </div>
      </div>

      {/* Policy Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <ExpandableSection title="Australian Privacy Act 1988" bgColor="white">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  AISC is subject to the{" "}
                  <a
                    href="https://www.legislation.gov.au/Details/C2014C00076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2a9d8f] underline hover:text-[#2a9d8f]/80"
                  >
                    Australian Privacy Act 1988
                  </a>
                  .
                </p>

                <p className="text-lg text-gray-700">
                  This Act gives people some control over the personal information they provide to a company and the
                  right to know how it will be used.
                </p>

                <p className="text-lg text-gray-700">
                  This Web Privacy Statement outlines how AISC deals with personal information related to our website.
                  Users of our website are entitled to expect that any information collected will be treated within the
                  terms of the Australian privacy responsibilities and obligations.
                </p>

                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">What is personal information?</h2>
                  <p className="text-lg text-gray-700">
                    Personal information includes any information or opinion about an individual whose identity is
                    apparent or can be readily identified from the information or opinion. For further information visit
                    the Office of the Privacy Commissioner website.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    What information do we collect automatically?
                  </h2>
                  <p className="text-lg text-gray-700">
                    When you look at AISC’s website, our computers record your visit and log the following information
                    for statistical purposes: the Internet Protocol address from which we receive the request the date
                    and time our server received the request the pages, documents and files you requested the address of
                    the resource which provided the link followed, if any, to AISC’ s website the type of browser and,
                    in some cases, the operating system used in some cases, data you send to our website from web forms
                    (e.g., search terms). Some sections of AISC’s website use standard industry technologies, for
                    example ‘cookies’, to do this.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    What do we do with the information collected automatically?
                  </h2>
                  <p className="text-lg text-gray-700">
                    The anonymous information collected during each visit is collated for analysis. It is then evaluated
                    and published in reports that show AISC’s usage patterns and identify popular areas of the website.
                    This helps us to improve and develop the website and its services. For security reasons, AISC uses
                    software programs to monitor network traffic and identify unauthorised attempts to upload or change
                    information, or otherwise cause damage.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    What won’t we do with the information collected automatically?
                  </h2>
                  <p className="text-lg text-gray-700">
                    No attempt will be made to identify individual users or their browsing activities except for when,
                    in the unlikely event of an investigation, a law enforcement agency may exercise a warrant to
                    inspect AISC logs. Apart from an occasion when it may be required to do so by law, AISC will not
                    disclose your personal information to a third party, other than a contractor responsible for
                    statistical analysis or web development, and then for those purposes only, unless you have
                    authorised it to do so.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">What exceptions are there to this rule?</h2>
                  <p className="text-lg text-gray-700">
                    AISC will gather more extensive information than stated above in the following circumstances:
                  </p>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-gray-700">
                    <li>Unauthorised attempts to access files other than those published on AISC's website</li>
                    <li>Unauthorised tampering or interference with files published on AISC's website</li>
                    <li>Unauthorised attempts by other websites to index the contents of AISC's website</li>
                    <li>Attempts to intercept messages of other AISC's website users</li>
                    <li>
                      Communications which are defamatory, abusive, vilify individuals or groups or give rise to a
                      suspicion that an offence is being committed
                    </li>
                    <li>
                      Attempts to otherwise compromise the security of the AISC web server, breach Australian laws, or
                      interfere with the use of the AISC website by other users
                    </li>
                  </ul>
                  <p className="mt-4 text-lg text-gray-700">
                    AISC reserves the right to make disclosures to relevant authorities where the use of our website
                    raises concern that an offence is being, or has been, committed. In the unlikely event of an
                    investigation, AISC will provide data access to any law enforcement agency that may exercise a
                    warrant to inspect AISC logs.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    Who has access to raw data automatically captured by our website?
                  </h2>
                  <p className="text-lg text-gray-700">
                    AISC captures web access information on its own computers. Access to the raw data on the web server
                    is restricted to a limited number of staff and contractors who analyse and report on the success of
                    the website in order to meet AISC communication and access objectives.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Is data stored in a secure way?</h2>
                  <p className="text-lg text-gray-700">
                    AISC’s website has security measures in place to protect against loss, misuse and alteration of
                    information under our control. However, no system is 100% secure. We meet legislative requirements
                    and follow industry best practice to ensure the security of the website. AISC only uses contractors
                    for the purposes of electronic storage if those contractors have agreed to comply with AISC’s
                    privacy requirements. If you do not wish to use the Internet, you can contact AISC by telephone, fax
                    or mail.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Do we record email addresses?</h2>
                  <p className="text-lg text-gray-700">
                    AISC will only record your email address if you enter it into a web form or send us a message. This
                    information may be used and disclosed to contractors responsible for the delivery of an AISC service
                    or activity. It will only be used for a purpose for which it has been provided or otherwise with
                    your consent.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    How do we deal with personal information requested from you?
                  </h2>
                  <p className="text-lg text-gray-700">
                    To make use of certain features of this website, visitors may need to register or to provide
                    detailed personal information for another purpose. We collect and retain this information for the
                    purpose for which it has been provided.
                  </p>
                  <p className="text-lg text-gray-700">
                    This information may be used by AISC and disclosed to contractors responsible for the delivery of an
                    AISC service or activity. It will only be used for a purpose for which it has been provided or
                    otherwise with your consent. A record of your inquiry will also be collected for statistical
                    purposes, to determine usage of our services and provide information for future improvements.
                  </p>
                  <p className="text-lg text-gray-700">
                    From time-to-time AISC may request personal information via surveys. Participation in these surveys
                    is completely voluntary. Information that you provide will be de-identified and aggregated to allow
                    us to monitor and improve the use and satisfaction of the AISC site. The aggregated information will
                    only be shared with third parties in its de-identified form.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    Do we publish personal information on this website?
                  </h2>
                  <p className="text-lg text-gray-700">
                    AISC will only publish personal information on this website if it has been collected for this
                    purpose with your knowledge and consent.
                  </p>
                  <p className="text-lg text-gray-700">
                    When giving such consent you should be aware that information published on this website is
                    accessible to millions of users from all over the world, that it will be indexed by search engines
                    and that it may be copied and used by any web user. This means that once the information is
                    published on this website, AISC will have no control over its subsequent use and disclosure.
                  </p>
                  <p className="text-lg text-gray-700">
                    Names and email addresses of AISC staff appearing on this website are provided with their knowledge
                    and consent. Under no circumstances will AISC sell or receive payment for licensing or disclosing
                    your personal information.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">What about external links?</h2>
                  <p className="text-lg text-gray-700">
                    This site may contain links to other sites, including to access products and services offered by
                    third parties. AISC is not responsible for the privacy practices or the content of such websites and
                    use of any information you provide is governed by any privacy policy of the operator of the site you
                    visit.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">
                    Can I access and correct my personal information?
                  </h2>
                  <p className="text-lg text-gray-700">You have the right to access your personal information.</p>
                  <p className="text-lg text-gray-700">
                    AISC will take reasonable steps to ensure your personal information is accurate, complete and up to
                    date. Should you wish to access or amend this information, please contact AISC’s Compliance
                    official.
                  </p>
                  <p className="text-lg text-gray-700">
                    If you no longer wish to receive any communications, or want to be removed from any AISC database,
                    please contact the service identified on the relevant feature page, or AISC’s Compliance official.
                  </p>
                  <p className="text-lg text-gray-700">
                    Disclaimer Notice While the AISC wish to provide accurate material on its web site, it gives no
                    warranty concerning the accuracy of the information and material provided by this service. Users of
                    our website should refer to the originating body sourcing the documents for confirmation of the
                    accuracy of the information and the material.
                  </p>
                  <p className="text-lg text-gray-700">
                    AISC also provides hypertext links to a number of external websites but does not take any
                    responsibility for information and material on these external sites. The user of the link is
                    responsible for the downloading of any linked information and material and/or any fees or charges
                    incurred by the downloading of this material. Downloading of images and/or text without the
                    permission of the copyright owner may breach Australian and domestics copyright laws.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Terms and Conditions</h2>
                  <p className="text-lg text-gray-700">
                    These terms of use apply to all access to and use of this site.
                  </p>
                  <p className="text-lg text-gray-700">
                    This website (“site”) is owned by AISC on behalf of its members. Your use of this site is governed
                    by these terms of use. By accessing and browsing this site you agree to be bound by these terms of
                    use.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">All liability excluded</h2>
                  <p className="text-lg text-gray-700">To the extent permitted by law:</p>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-gray-700">
                    <li>
                      All warranties, representations and guarantees (whether express, implied or statutory) are
                      excluded, including without limit, suitability, fitness for purpose, accuracy or completeness of
                      this site or the content on or accessed through it; and
                    </li>
                    <li>
                      We will not be liable for any damage, loss or expenses, or indirect losses or consequential
                      damages of any kind, suffered or incurred by you in connection with your access to or use of this
                      site or the content on or accessed through it.
                    </li>
                  </ul>
                  <p className="mt-4 text-lg text-gray-700">
                    AISC will take action to correct any error or inaccuracy which is brought to its attention, within a
                    reasonable timeframe. All errors and inaccurate Information should be emailed to info@AISCHE.com.au
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Amendments</h2>
                  <p className="text-lg text-gray-700">
                    AISC may amend these terms of use from time to time so you should check and read these terms of use
                    regularly. By continuing to use this site after any such amendment, you are deemed to have agreed to
                    the amended terms of use.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Content on or accessed through site</h2>
                  <p className="text-lg text-gray-700">
                    While AISC has tried to ensure the content on this site is current, accurate and complete, it does
                    not guarantee such content will be current, accurate or complete when you access it.
                  </p>
                  <p className="text-lg text-gray-700">
                    AISC only provides the content on, or accessed through this site, on an “as is” basis.
                  </p>
                  <p className="text-lg text-gray-700">
                    You must make your own assessment of the suitability of the content for your own purposes. You are
                    solely responsible for the actions you take in reliance on the content on, or accessed through, this
                    site. The content does not constitute any advice and should not be relied on as such. AISC may
                    change the content on the site at any time without prior notice.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Applicable Law</h2>
                  <p className="text-lg text-gray-700">
                    These Terms of Use, and your use of our website, are governed by the laws of South Australia,
                    Australia.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Right to use site and content</h2>
                  <p className="text-lg text-gray-700">
                    All intellectual property on this site is owned by the authors of the documents. AISC is posting
                    these materials for your convenience solely with the intent to bring them to the attention of its
                    members. These materials and their eventual Intellectual Property are not owned by AISC and are
                    subject to the authors specified right of use policy.
                  </p>
                  <p className="text-lg text-gray-700">
                    You may access and view the content on this site provided you only use that content for personal
                    informational, non-commercial purposes and any mention of these documents should include a prominent
                    acknowledgment of the author’s name and of its rights in the relevant content. You may not use this
                    site or the content on it, for any other purpose or in any other way.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Third party materials</h2>
                  <p className="text-lg text-gray-700">
                    This site contains documents from and links to third parties. They are provided for your convenience
                    only, and do not imply that AISC checks, endorses, approves or agrees with the third-party documents
                    content or the websites it links to.
                  </p>

                  <p className="text-lg text-gray-700">
                    Third party websites will likely have their own restrictions on how you may use the content on those
                    websites and what AISC Website Terms of use responsibility the website provider will accept in
                    relation to the content. You should ensure you read and comply with these. AISC will not be
                    responsible for errors or mistakes contained in material sourced from Public Domain.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Copyright</h2>
                  <p className="text-lg text-gray-700">
                    The content of the AISC website is protected under domestics copyright conventions.
                  </p>
                  <p className="text-lg text-gray-700">AISC owns the copyright of this site and its content.</p>
                  <p className="text-lg text-gray-700">
                    You are permitted to use the site for personal purposes only. No reproduction of content is
                    permitted without the express written consent of AISC or the authors of third-party materials
                    published or linked on the AISC web site.
                  </p>
                </section>
                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Privacy</h2>
                  <p className="text-lg text-gray-700">
                    Any personal information on our members or on the users of this Website are for AISC use only and
                    will never be communicated to anyone without the prior authorisation of the person. Please refer to
                    Privacy policy for more Information regarding AISC Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-light text-[#2a9d8f]">Posting comments</h2>
                  <p className="text-lg text-gray-700">
                    Our website may enable you to post comments (for example, on blogs, forums or other public areas).
                    You are responsible for all comments that you post (or that are posted using your username and
                    password).
                  </p>
                  <p className="mt-4 text-lg text-gray-700">You must not post any comment that:</p>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-gray-700">
                    <li>Is inflammatory (commonly referred to as 'trolling')</li>
                    <li>Is xenophobic, racist, abusive, harassing or hateful</li>
                    <li>
                      Is false, defamatory, inaccurate, threatening, invasive of a person's privacy, or constitutes
                      personal abuse directed at other users
                    </li>
                    <li>
                      Is obscene, sexually explicit or pornographic, or contains links to other sites that contain or
                      promote obscene, sexually explicit or pornographic material
                    </li>
                    <li>
                      Constitutes commercial advertising, the promotion of gambling or the promotion of your own site
                      (commonly referred to as 'spamming')
                    </li>
                    <li>Infringes someone else's copyright, or</li>
                    <li>Violates any Australian law</li>
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

