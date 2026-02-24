import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="text-xl">NextPro</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Products
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
             <Link
              href="#"
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Banner / Hero Section */}
        <section className="relative flex min-h-[600px] items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4 py-20 text-center">
          <div className="container mx-auto space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Elevate Your <span className="text-blue-600 dark:text-blue-400">Digital Presence</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              We build modern, scalable, and high-performance web applications tailored to your business needs.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#services"
                className="rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Our Services
              </Link>
              <Link
                href="#contact"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Comprehensive solutions to help your business grow.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-zinc-900">
                <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Custom websites and web applications built with the latest technologies like Next.js and React.
                </p>
              </div>
              {/* Service 2 */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-zinc-900">
                <div className="mb-4 inline-block rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">SEO Optimization</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Improve your search engine rankings and drive organic traffic to your business.
                </p>
              </div>
              {/* Service 3 */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-zinc-900">
                 <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Mobile Apps</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Cross-platform mobile applications that provide a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">NextPro</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Building the future of the web, one pixel at a time.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
               <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">Web Development</Link></li>
                <li><Link href="#" className="hover:underline">SEO</Link></li>
                <li><Link href="#" className="hover:underline">Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Connect</h3>
               <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">Twitter</Link></li>
                <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
                <li><Link href="#" className="hover:underline">GitHub</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
            © {new Date().getFullYear()} NextPro Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
