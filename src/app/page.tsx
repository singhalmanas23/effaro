"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-fade-in-up" : "animate-fade-out"
          } max-w-md w-full bg-[#f0fdf4] border border-green-200 rounded-lg shadow-xl p-4 flex items-start space-x-3`}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-green-800">
              You’re on the list! 🎉
            </p>
            <p className="text-sm text-green-700">
              We’ll let you know as soon as <strong>Effaro</strong> goes live.
            </p>
          </div>
        </div>
      ),
      {
        duration: 4000,
        position: "top-center",
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF7EB] font-sans overflow-x-hidden text-[#1D1D1F] px-2 py-1 sm:px-4 sm:py-4">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

      {/* Header */}
      <header className="mb-2 -mt-10 sm:-mt-16 md:-mt-20">
        <div className="flex flex-col items-start">
          <Image
            src="/svgs/EffaroLogo.svg"
            alt="Effaro Logo"
            width={130}
            height={40}
            className="h-auto w-[180px] sm:w-[220px] md:w-[320px]"
          />
        </div>
      </header>

      <main className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-10 md:gap-0">
        <div className="w-full lg:w-1/2 -mt-10 sm:-mt-24 md:-mt-36 lg:-mt-48 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#1D1D1F]">
            Coming Soon
          </h1>

          {/* Notification section */}
          <div className="mb-8 sm:mb-10 w-full flex flex-col items-center lg:items-start">
            <p className="text-sm sm:text-base font-medium mb-3 sm:mb-4 flex items-center gap-2 text-[#1D1D1F]">
              Get
              <span className="inline-flex items-center gap-1 bg-white border border-[#C6862C] px-2 sm:px-3 py-1 rounded-full text-[#C6862C] text-xs font-semibold">
                <Image
                  src="/svgs/Notification.svg"
                  alt="Notification Bell"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                Notified
              </span>
              when we launch
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border border-[#1D1D1F] bg-white text-sm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#1D1D1F] text-nowrap text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition w-full sm:w-auto"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex items-center justify-center mb-8 lg:mb-0">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 sm:-top-6 sm:left-[32%] sm:translate-x-0 text-center z-10">
            <p className="text-[#C6862C] text-base sm:text-xl font-medium mb-1">
              You Belong here
            </p>
            <p className="text-[#C6862C] text-xl sm:text-3xl font-bold">
              Soon...
            </p>
          </div>
          <Image
            src="/svgs/EffaroMap.svg"
            alt="Effaro Map"
            width={1400}
            height={1000}
            className="w-full sm:w-[120%] md:w-[140%] lg:w-[160%] h-auto max-w-none"
          />
        </div>
      </main>
      <footer className="text-xs text-gray-400 mt-10 sm:mt-16 text-center w-full">
        &copy; {new Date().getFullYear()} Effaro. All rights reserved.
      </footer>
    </div>
  );
}
