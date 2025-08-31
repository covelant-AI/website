import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-b from-gray-400/60 via-white to-white min-h-[400px]">
      {/* soft top edge shadow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: WhatsApp CTA */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-500">
              Join our Whatsapp Community!
            </p>

            <Link
              href="https://chat.whatsapp.com/BbLNETgnyOj4vmYpxEB5Gk" // ← your group invite
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm text-gray-700 shadow-sm hover:shadow hover:scale-[1.05] transition"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-200">
                {/* WhatsApp icon */}
                <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M16.003 3.2c-7.05 0-12.8 5.65-12.8 12.6 0 2.222.6 4.3 1.65 6.095L3.2 28.8l7.112-1.61c1.73.95 3.695 1.45 5.69 1.45 7.05 0 12.8-5.65 12.8-12.6s-5.75-12.84-12.8-12.84Zm7.457 18.26c-.312.88-1.827 1.69-2.54 1.73-.65.04-1.48.06-2.39-.15-.55-.12-1.26-.41-2.17-.85-3.81-1.84-6.28-6-6.47-6.28-.2-.28-1.55-2.06-1.55-3.93 0-1.86.98-2.78 1.33-3.16.35-.38.77-.47 1.02-.47.25 0 .51 0 .73.01.24.01.55-.09.86.66.31.75 1.06 2.58 1.16 2.77.09.19.15.41.03.65-.12.24-.18.39-.36.61-.18.22-.38.49-.54.66-.18.18-.37.38-.16.75.21.38.95 1.56 2.06 2.53 1.41 1.22 2.6 1.61 2.98 1.8.38.19.6.16.83-.09.23-.25.96-1.11 1.22-1.49.26-.38.52-.31.86-.19.35.12 2.23 1.05 2.62 1.24.39.19.65.28.75.44.09.16.09.91-.22 1.79Z"
                    fill="#8f8f8fff"
                  />
                </svg>
              </span>
              <span className="font-medium">Join Us!</span>
            </Link>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-y-3 justify-items-start text-sm text-gray-600">
            <Link href="https://app.covelant.com/sign-up" className="hover:text-gray-900">
              Sign Up For Free
            </Link>
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/imprint" className="hover:text-gray-900">
              Imprint
            </Link>
          </div>
        </div>
      </div>

      {/* copyright pill */}
      <div className="absolute bottom-6 left-6">
        <span className="rounded-full border border-gray-200 bg-gray/80 px-4 py-2 text-xs text-gray-500 shadow-sm backdrop-blur">
          Covelant • © 2025 All rights reserved
        </span>
      </div>

      {/* big faded logo/watermark */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 flex justify-center">
        <img
          src="/images/logoGray.png"
          alt="Covalent watermark"
          className="w-[90%] max-w-[1200px] opacity-30"
        />
      </div>
    </footer>
  );
}

