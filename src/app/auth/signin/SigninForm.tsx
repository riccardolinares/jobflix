"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { GoogleIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();

  return (
    <>
      <form
        className="mt-4 register-form text-left"
        onSubmit={(e) => {
          e.preventDefault();
          signIn("email", {
            email: email,
            callbackUrl: searchParams.get("callbackUrl") || "/dashboard",
          });
        }}
      >
        <div className="pb-4">
          <div className="mt-1">
            <label htmlFor="email" className="sr-only">
              Indirizzo email
            </label>
            <Input
              type="email"
              className="w-full px-3 py-3 text-base text-gray-500 placeholder:text-gray-500 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue focus:border-blue"
              placeholder="Il tuo indirizzo email"
              name="email"
              id="email"
              required
              aria-label="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 text-base font-medium text-white bg-blue border border-transparent rounded-md hover:bg-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
          >
            Accedi
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm leading-6">
          <span className="bg-white px-6 text-gray-900">oppure</span>
        </div>
      </div>
      <button
        className="w-full px-6 py-3 mt-4 justify-center flex items-center text-base font-medium bg-white border border-gray-300 rounded-md shadow-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={() =>
          signIn("google", {
            callbackUrl: searchParams.get("callbackUrl") || "/dashboard",
          })
        }
      >
        <GoogleIcon className="h-6 w-6 mr-2" />
        Accedi con Google
      </button>
      <button
        className="w-full px-6 py-3 mt-4 justify-center flex items-center text-base font-medium bg-white border border-gray-300 rounded-md shadow-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={() =>
          signIn("linkedin", {
            callbackUrl: searchParams.get("callbackUrl") || "/dashboard",
          })
        }
      >
        <LinkedinIcon className="h-7 w-7 mr-2" />
        Accedi con Linkedin
      </button>
    </>
  );
}
