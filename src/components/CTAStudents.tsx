import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <div className="w-full min-h-screen items-center flex py-16">
      <div className="group mx-auto max-w-7xl px-6 flex lg:flex-row flex-col-reverse lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="flex flex-row items-center gap-x-4 text-xl">
              <Image
                src="/img/ico-student.svg"
                alt=""
                className="h-16 w-16"
                width={100}
                height={100}
              />
              Per gli studenti
            </span>
          </div>
          <h1 className="mt-10 text-3xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-blue">
              Vivi grazie alla voce dei testimonial l&apos;esperienza del{" "}
            </span>
            lavoro dei tuoi sogni
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Jobflix è la piattaforma video del lavoro in cui ogni puntata
            racconta una professione diversa con le sue specificità. Conosci
            ogni professione attraverso il racconto dei suoi protagonisti.
            Scopri il percorso e le competenze richieste, per capire se è la
            strada perfetta per te.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="#">
              <Button>Scopri il lavoro dei tuoi sogni</Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image
            src="/img/cta-student.webp"
            alt=""
            width={800}
            height={800}
            className="group-hover:hidden"
          />
          <Image
            src="/img/cta-student-hover.webp"
            alt=""
            width={800}
            height={800}
            className="group-hover:block hidden"
          />
        </div>
      </div>
    </div>
  );
}
