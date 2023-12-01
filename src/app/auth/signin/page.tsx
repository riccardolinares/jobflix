/* eslint-disable @next/next/no-img-element */
import React from "react";
import SigninForm from "./SigninForm";
import Logo from "@/components/ui/Logo";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full min-h-screen bg-gray py-10 bg-[url('/img/backgrounds/bg-1.svg')] bg-cover bg-center">
      <div className="flex min-h-full flex-col justify-start sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="h-16 w-auto mx-auto" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Accedi al tuo account
          </h2>
          <p className="text-lg text-center text-gray-500 mt-4 mb-6">
            Non sei registrato? Al primo accesso creeremo automaticamente il tuo
            account.
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <SigninForm />
          </div>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Non sei ancora registrato?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-blue hover:text-blue-light"
            >
              Registrati qui
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}
