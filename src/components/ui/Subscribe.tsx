"use client";

import Button from "./Button";
import Image from "next/image";
import { Input } from "./Input";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="group relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
        signIn("email", {
          email: email,
          callbackUrl: "/dashboard",
        });
      }}
    >
      <img
        src="/img/highlight-circle.svg"
        alt=""
        className="transition-opacity	absolute w-full h-full top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-[-1]"
      />

      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Indirizzo email
        </label>
        <Input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="bg-gray-100 shadow-xl"
          placeholder="Inserisci la tua email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Button type="submit" className="uppercase shadow-xl">
          Iscriviti
        </Button>

        <Image
          src="/img/arrows.svg"
          alt=""
          className="transition-opacity absolute -top-1/3 left-full opacity-0 group-hover:opacity-100 z-[-1]"
          width={90}
          height={90}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-900">
        Ci teniamo ai tuoi dati. Leggi la nostra{" "}
        <a href="#" className="font-semibold text-blue hover:text-blue-light">
          privacy&nbsp;policy
        </a>
        .
      </p>
    </form>
  );
}
