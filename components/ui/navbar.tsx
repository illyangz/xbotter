"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            <Link className="font-bold text-xl" href={"/"}>
              XBotter
            </Link>
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
  );
}
