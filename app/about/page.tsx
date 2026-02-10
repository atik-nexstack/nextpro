import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-blue-600 dark:text-blue-400">NextPro</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We are a team of passionate developers, designers, and strategists dedicated to helping businesses succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At NextPro, our mission is to empower businesses with cutting-edge technology solutions that drive growth and innovation. We believe in the power of the web to connect people and create opportunities.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Since our founding in 2024, we have partnered with startups and Fortune 500 companies alike to deliver impactful digital experiences.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-200 lg:h-96">
                {/* Placeholder for an image - replace with actual image */}
                 <div className="flex h-full w-full items-center justify-center text-gray-400">
                    <svg className="h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The experts behind our success.
            </p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
             {/* Team Member 1 */}
            <li>
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                   <div className="flex h-full w-full items-center justify-center text-gray-400">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                   </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight">Alex Johnson</h3>
                  <p className="text-base leading-7 text-blue-600 dark:text-blue-400">CEO & Founder</p>
                </div>
              </div>
            </li>
            {/* Team Member 2 */}
            <li>
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                   <div className="flex h-full w-full items-center justify-center text-gray-400">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                   </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight">Sarah Lee</h3>
                  <p className="text-base leading-7 text-blue-600 dark:text-blue-400">Lead Developer</p>
                </div>
              </div>
            </li>
             {/* Team Member 3 */}
            <li>
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                   <div className="flex h-full w-full items-center justify-center text-gray-400">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                   </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight">Michael Brown</h3>
                  <p className="text-base leading-7 text-blue-600 dark:text-blue-400">Product Designer</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let's build something amazing together. Contact us today to get started.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch
              </Link>
              <Link href="/#services" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
