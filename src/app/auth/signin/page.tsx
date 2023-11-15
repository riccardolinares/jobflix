/* eslint-disable @next/next/no-img-element */
import React from "react";
import SigninForm from "./SigninForm";
import Logo from "@/components/ui/Logo";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen w-full bg-gray">
      <div className="flex min-h-full flex-col justify-start pt-20 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="h-16 w-auto mx-auto" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Accedi al tuo account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <SigninForm />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Non sei ancora registrato?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-blue hover:text-blue-light"
            >
              Registrati qui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
