"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const [nextId, setNextId] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Product = {
      id: nextId,
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      category: formData.category,
    };

    setProducts([...products, newProduct]);
    setNextId(nextId + 1);
    setFormData({ name: "", price: "", description: "", category: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="text-xl">NextPro</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-blue-600 dark:text-blue-400">
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

      <main className="flex-1 bg-gray-50 dark:bg-zinc-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Products</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage your product catalog. Add new products below.
            </p>
          </div>

          {/* Add Product Form */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-black mb-8">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-900 dark:text-white"
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Price *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-900 dark:text-white"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-900 dark:text-white"
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="food">Food & Beverages</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports & Outdoors</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-900 dark:text-white"
                  placeholder="Enter product description"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </form>
          </div>

          {/* Product List */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-black">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold">Product List</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {products.length} product{products.length !== 1 ? "s" : ""} in catalog
              </p>
            </div>
            
            {products.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <svg className="mx-auto h-12 w-12 mb-4 text-gray-300 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p>No products yet. Add your first product above!</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {products.map((product) => (
                  <div key={product.id} className="p-6 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        {product.category && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {product.category}
                          </span>
                        )}
                      </div>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        ${product.price.toFixed(2)}
                      </p>
                      {product.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                      )}
                    </div>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="rounded-md border border-red-300 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
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
