import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function CTA() {
  return (
    //  <div className="w-full min-h-screen relative isolate overflow-hidden pt-14 bg-gray">
    //   <img
    //     src="/img/backgrounds/bg-1.svg"
    //     alt=""
    //     className="absolute inset-0 -z-10 h-full w-full object-cover"
    //   />

    //   <div className="w-full flex items-center justify-center mt-2 max-w-7xl mx-auto">
    <div className="bg-white w-full h-5/6 items-center flex  py-16 relative isolate overflow-hidde">
      <img
        src="/img/backgrounds/bg-3.svg"
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
            <Link href="#">
              <Button>Iscriviti</Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto my-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image
            src="/img/cta-changes.jpg"
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
