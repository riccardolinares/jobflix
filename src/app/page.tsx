"use client";

import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray pb-16 bg-[url('/img/backgrounds/bg-1.svg')] bg-cover bg-center">
        <Logo className="w-72" />
        <h1 className="text-5xl text-blue font-bold mt-10">Coming Soon</h1>
        <p className="text-2xl mt-4">
          Per info contattare{" "}
          <Link
            className="underline font-semibold"
            href="mailto:info@jobflix.it"
          >
            info@jobflix.it
          </Link>
        </p>
      </main>
    </>
  );
}
