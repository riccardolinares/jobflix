import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <div className="w-full py-16">
      <div className="group mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto mt-8 flex max-w-2xl lg:mr-10 lg:ml-0 lg:max-w-none lg:flex-none xl:mr-32">
          <Image
            src="/img/cta-teacher.webp"
            alt=""
            width={500}
            height={500}
            className="group-hover:hidden object-contain"
          />
          <Image
            src="/img/cta-teacher-hover.webp"
            alt=""
            width={500}
            height={500}
            className="group-hover:block hidden object-contain"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="flex flex-row items-center gap-x-4 text-xl">
              <Image
                src="/img/ico-teacher.svg"
                alt=""
                className="h-16 w-16"
                width={100}
                height={100}
              />
              Per gli insegnanti
            </span>
          </div>
          <h1 className="mt-10 text-3xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-blue">La piattaforma per assolvere </span>
            le ore <span className="text-blue">di orientamento </span>{" "}
            obbligatorie in classe
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Jobflix ti consente di svolgere il programma dedicato alle ore di
            orientamento in modo divertente ed innovativo. Dopo la visione del
            video, puoi scariscare il materiale didattico per trasformare i
            contenuti in ore d&apos;aula con i tuoi studenti
            sull&apos;autoconsapevolezza, sui percorsi di studi e sui dettagli
            dei lavori visti.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/auth/signin">
              <Button>Scopri il lavoro dei tuoi sogni</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
