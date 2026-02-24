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
                    fill="#8f8f8f"
                    d="M32 16C32 7.163 24.837 0 16 0S0 7.163 0 16c0 7.987 5.852 14.61 13.5 15.854V20.75h-4.06V16h4.06v-3.62c0-4.017 2.392-6.244 6.052-6.244 1.754 0 3.59.313 3.59.313v3.94h-2.022c-1.994 0-2.616 1.237-2.616 2.505V16h4.45l-.712 4.75h-3.738v11.104C26.148 30.61 32 23.987 32 16z"
                  />
                </svg>
              </span>
              <span className="font-medium">Join Us!</span>
            </Link>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-y-3 justify-items-start text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
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
