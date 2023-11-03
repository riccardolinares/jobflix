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
    redirect("/documents");
  }

  return (
    <>
      <div className="py-12 bg-white sm:py-16 lg:py-20 md:h-screen">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl h-full">
          <div className="flex flex-col md:flex-row items-center content-center justify-between max-w-7xl h-full space-y-8 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="max-w-[400px]">
                <Logo className="text-3xl" />
                <h2 className="text-xl font-medium mt-8">
                  Semplifica e accelera il processo di candidatura ai bandi.
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  Crea un account o accedi con uno esistente per continuare:
                </p>
                <SigninForm />
                <p className="mt-4 text-[11px] text-gray-400">
                  I nuovi account sono soggetti ai nostri{" "}
                  <a
                    href="/legal/terms-and-conditions"
                    target="_blank"
                    className="underline"
                  >
                    termini &amp; condizioni
                  </a>{" "}
                  e alla{" "}
                  <a
                    href="/legal/privacy-policy"
                    target="_blank"
                    className="underline"
                  >
                    privacy policy
                  </a>
                  .
                </p>
                <div className="flex flex-col my-4">
                  <div className="flex items-center justify-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-1.5" />
                    <span className="text-xs text-gray-400">
                      Creato in Italia. Conosciamo la burocrazia.
                    </span>
                  </div>{" "}
                  <div className="flex items-center justify-start">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-px">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-1.5" />

                        <p className="ml-2 text-xs font-normal text-gray-400">
                          Consulente dedicato per ogni tua esigenza.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-1.5" />

                    <span className="text-xs text-gray-400">
                      Tutta la documentazione in un unico posto.
                    </span>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <div className="flex flex-col md:flex-row items-center space-x-2">
                      <span className="text-xs text-gray-500 flex flex-shrink-0">
                        BandoFacile è stato visto su:{" "}
                      </span>{" "}
                      <div className="flex items-center space-x-2">
                        <img
                          src="/img/indiehackers.png"
                          alt="Indiehackers logo"
                          className="h-[20px] w-auto"
                        />
                        <img
                          src="/img/linkedin.png"
                          alt="Linkedin logo"
                          className="h-[20px] w-auto"
                        />
                        <img
                          src="/img/twitter-x.png"
                          alt="Twitter X logo"
                          className="h-[20px] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden text-center bg-[#edf7ff] rounded-2xl">
              <div className="flex items-center justify-center px-8 py-12 sm:px-12 sm:py-16 md:py-24 md:px-16">
                <div className="space-y-6">
                  {/* <div className="grid grid-cols-6 rounded-md overflow-hidden"></div>{" "} */}
                  <div className="relative overflow-hidden px-6 py-20 rounded-md sm:px-10 sm:py-24 md:px-12 lg:px-20">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src="/background.jpg"
                      width={4500}
                      height={3000}
                      alt=""
                    />
                  </div>
                  <p className="text-lg md:text-xl">
                    Più di 214 bandi già analizzati per 107 utenti soddisfatti!
                  </p>
                  {/* <div className="w-full max-w-2xl mx-auto mt-8">
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
