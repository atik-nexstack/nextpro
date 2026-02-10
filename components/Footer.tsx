import Link from "next/link";

export default function Footer() {
  return (
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
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="hover:underline">Web Development</Link></li>
              <li><Link href="/#services" className="hover:underline">SEO</Link></li>
              <li><Link href="/#services" className="hover:underline">Design</Link></li>
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
  );
}
