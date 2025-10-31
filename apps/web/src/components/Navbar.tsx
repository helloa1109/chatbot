"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Tabs } from "@chatbot/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-20 px-6 bg-white dark:bg-black sm:items-start">
        <Tabs
          tabs={[
            { id: "tab-1", label: "Overview", content: <p className="text-zinc-700 dark:text-zinc-300">This is the Overview tab.</p> },
            { id: "tab-2", label: "Details", content: <p className="text-zinc-700 dark:text-zinc-300">Here are some details.</p> },
            { id: "tab-3", label: "Settings", content: <p className="text-zinc-700 dark:text-zinc-300">Adjust your settings here.</p> },
          ]}
          defaultTabId="tab-1"
        />
      </main>
    </div>
  );
}
