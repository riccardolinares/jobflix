"use client";

import Logo from "../ui/Logo";
import Link from "next/link";
import { User2, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray px-6 py-6 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/dashboard">
            <span className="sr-only">Jobflix</span>
            <Logo className="h-12 w-auto" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center relative">
          <input
            type="search"
            className="bg-neutral-300 min-w-0 flex-auto rounded-full border border-neutral-400/50 pl-12 pr-6 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-blue text-xl"
            placeholder="Cerca..."
          />
          <div className="absolute left-0 ml-3 pointer-events-none">
            <Search className="w-5 h-5 text-blue" />
          </div>
        </div>
        <Link
          href="/account"
          className="flex flex-1 items-center justify-end gap-x-6"
        >
          <User2 className="w-10 h-10 text-blue" />
        </Link>
      </nav>
    </header>
  );
}
