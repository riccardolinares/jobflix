import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import Subscribe from "./Subscribe";

export default function CTA() {
  return (
    <div className="bg-gray w-full h-screen items-center flex py-6">
      <div className="group mx-auto max-w-7xl px-6 lg:flex lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:py-8">
          <div className="font-nunito text-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <p>Sei uno studente?</p>
            <p className="text-blue">Parti alla scoperta di te stesso.</p>
            <p className="mt-5">Sei un insegnante?</p>
            <p className="text-blue">
              Entra nel mondo della didattica innovativa sull&apos;orientamento.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <Subscribe />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image
            src="/img/cta-questions.jpg"
            alt=""
            width={640}
            height={383}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
