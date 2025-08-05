"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7EB] flex flex-col items-center justify-between px-4 py-10 font-sans text-[#333333]">
      {/* Logo */}
      <header className="flex flex-col items-center mb-12">
        <Image
          src="/svgs/EffaroLogo.svg"
          alt="Effaro Logo"
          width={160}
          height={40}
          className="h-auto w-[160px]"
        />
      </header>

      <main className="w-full max-w-xl text-center">
        <p className="text-md sm:text-lg font-medium text-[#555555] ">We are</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#1D1D1F]">
          Coming Soon
        </h1>
        <div className="bg-black/10 px-6 py-6 rounded-xl shadow-md mb-10 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-4">
            <p className="text-sm sm:text-base font-semibold flex items-center justify-center gap-2">
              Get
              <span className="inline-flex items-center bg-white border border-[#C6862C] px-3 py-1 rounded-full text-[#C6862C] text-xs font-semibold">
                <Image
                  src="/svgs/Notification.svg"
                  alt="Bell Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 mr-1"
                />
                Notified
              </span>
              when we launch
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-black bg-white text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#333333] text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition"
            >
              Notify Me
            </button>
          </form>
        </div>
      </main>
      {/* Blockquote */}
      <blockquote className="italic text-center text-gray-700 text-sm max-w-sm -mb-4 sm:-mb-2 sm:ml-[-40px] ml-[-20px]">
        “We are working hard to build something meaningful.{" "}
        <span className="font-semibold">
          Thanks for joining us early, you’re part of our journey”
        </span>
        <br />
        <span className="text-[#C6862C] font-medium mt-2 block">
          – Team Effaro
        </span>
      </blockquote>

      {/* Map */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center -mt-12 sm:-mt-10">
        <div className="relative w-full max-w-full">
          <Image
            src="/svgs/EffaroMap.svg"
            alt="Effaro Map"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-400 mt-16 text-center">
        &copy; {new Date().getFullYear()} Effaro. All rights reserved.
      </footer>
    </div>
  );
}
