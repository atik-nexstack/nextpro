import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-xl">NextPro</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
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
  );
}
