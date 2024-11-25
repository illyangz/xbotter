"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/vercel.svg"
                alt="Logo"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span className="font-bold text-xl">XBotter</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                href="https://developer.x.com/en/docs/x-api/early-access"
                target="_blank"
              >
                Learn
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Examples
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Discover More</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="https://www.ryancarmody.dev/blog/generate-twitter-api-keys-and-tokens">
                      API Setup Guide
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="https://www.youtube.com/watch?v=V7LEihbOv3Y">
                      Video Tutorial
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="https://www.reddit.com/r/Automate/comments/1e1ytsu/i_made_an_automation_to_organically_grow_on/">
                      Community Discussion
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                href="https://x.com/illyangz"
                target="_blank"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col gap-4">
                <Link
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1"
                  href="https://developer.x.com/en/docs/x-api/early-access"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learn
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">
                    Examples
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="https://www.ryancarmody.dev/blog/generate-twitter-api-keys-and-tokens">
                        API Setup Guide
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="https://www.youtube.com/watch?v=V7LEihbOv3Y">
                        Video Tutorial
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="https://www.reddit.com/r/Automate/comments/1e1ytsu/i_made_an_automation_to_organically_grow_on/">
                        Community Discussion
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1"
                  href="https://x.com/illyangz"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Rest of the content remains the same */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl tracking-tighter font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight py-2">
            Supercharge Your X Growth with AI
          </h1>
          <p className="text-md -tracking-wide text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Harness the power of AI to build and engage your Twitter community.
            Compatible with any AI model - just swap the API keys!
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl mb-16 bg-white dark:bg-gray-800">
          <video
            className="w-full"
            autoPlay
            loop
            muted
            playsInline
            src="/example.mov"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
            <Link
              href="https://github.com/illyangz/xbotter"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
            >
              <Image
                src="/vercel.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="mr-2 invert"
              />
              Fork on GitHub
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto"
            >
              View Documentation
            </Link>
          </div>
          <Link
            href="https://discord.gg/AA5HypzP"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Join our Discord Community →
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Set up in minutes and start growing your audience automatically.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Fully Customizable</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use any AI model and customize the behavior to match your style.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Active Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join our Discord for support, tips, and collaboration.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
