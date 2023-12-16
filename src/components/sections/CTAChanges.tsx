/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <div className="bg-white w-full h-5/6 items-center flex  py-16 relative isolate overflow-hidden">
      <img
        src="/img/backgrounds/bg-4.svg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="group mx-auto max-w-7xl px-6 flex lg:flex-row flex-col-reverse lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:py-8">
          <h1 className="text-blue text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Il lavoro cambia. <br />I ragazzi cambiano. <br />
            Jobflix è la soluzione per l&apos;orientamento che si adatta al loro
            cambiamento.
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Jobflix nasce con uno scopo preciso: dare ai ragazzi gli strumenti
            per aiutarli a trovare la loro strada professionale. Jobflix aiuta a
            ridurre il mismatch tra le competenze richieste del mondo del lavoro
            e le attitudini personali e professionali delle nuove generazioni.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/auth/signin">
              <Button>Iscriviti</Button>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden mx-auto flex max-w-2xl lg:ml-10 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image
            src="/img/cta-changes.webp"
            alt=""
            width={640}
            height={383}
            className="group-hover:hidden object-contain"
          />
          <Image
            src="/img/cta-changes.webp"
            alt=""
            width={640}
            height={383}
            className="group-hover:block hidden object-contain"
          />
        </div>
      </div>
    </div>
  );
}
