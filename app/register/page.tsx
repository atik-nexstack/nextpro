"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Redirect after success animation
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800">
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
              href="/login"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
            >
              Log in
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Animated Card */}
          <div 
            className={`
              relative overflow-hidden rounded-2xl bg-white dark:bg-black 
              shadow-2xl transition-all duration-500 ease-out
              ${isSuccess ? 'scale-105 shadow-green-200 dark:shadow-green-900' : 'shadow-gray-200 dark:shadow-zinc-800'}
            `}
          >
            {/* Success Overlay */}
            <div 
              className={`
                absolute inset-0 flex items-center justify-center bg-green-500 z-20
                transition-all duration-500 ease-out
                ${isSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
              `}
            >
              <div className="text-center text-white">
                <div className="mb-4 animate-bounce">
                  <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Welcome Aboard! 🎉</h3>
                <p>Your account has been created successfully.</p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Create Account</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Join NextPro and start your journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 
                             transition-colors group-focus-within:text-blue-600"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        ${errors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'}
                        dark:bg-zinc-900 dark:text-white
                      `}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 animate-pulse">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 
                             transition-colors group-focus-within:text-blue-600"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`
                        w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        ${errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'}
                        dark:bg-zinc-900 dark:text-white
                      `}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 animate-pulse">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="group">
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 
                             transition-colors group-focus-within:text-blue-600"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`
                        w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        ${errors.password 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'}
                        dark:bg-zinc-900 dark:text-white
                      `}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600 animate-pulse">{errors.password}</p>
                  )}
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                    <div 
                      className={`
                        h-full transition-all duration-300 ease-out
                        ${formData.password.length === 0 ? 'w-0' : 
                          formData.password.length < 8 ? 'w-1/3 bg-red-500' : 
                          formData.password.length < 12 ? 'w-2/3 bg-yellow-500' : 'w-full bg-green-500'}
                      `}
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="group">
                  <label 
                    htmlFor="confirmPassword" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 
                             transition-colors group-focus-within:text-blue-600"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`
                        w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        ${errors.confirmPassword 
                          ? 'border-red-500 focus:ring-red-500' 
                          : formData.confirmPassword && formData.confirmPassword === formData.password
                            ? 'border-green-500 focus:ring-green-500'
                            : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'}
                        dark:bg-zinc-900 dark:text-white
                      `}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600 animate-pulse">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-3 px-4 rounded-lg font-semibold text-white
                    transition-all duration-300 ease-out transform
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link 
                    href="/login" 
                    className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
