// export default function CTA() {
//   return (
//     <div className="mx-auto h-screen max-w-7xl px-6 lg:px-8 bg-gray py-6">

//     </div>
//   );
// }

import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <div className="bg-gray w-full h-screen">
      <div className="group mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mr-10 lg:ml-0 lg:mt-0 lg:max-w-none lg:flex-none xl:mr-32">
          <Image
            src="/img/cta-teacher.jpg"
            alt="App screenshot"
            width={500}
            height={200}
            className="group-hover:hidden"
          />
          <Image
            src="/img/cta-teacher-hover.jpg"
            alt="App screenshot"
            width={500}
            height={200}
            className="group-hover:block hidden"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="flex flex-row items-center gap-x-4 text-xl">
              <AcademicCapIcon className="h-10 w-10 text-blue" />
              Per gli insegnanti
            </span>
          </div>
          <h1 className="mt-10 text-3xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-blue">La piattaforma per assolvere </span>
            le ore
            <span className="text-blue">di orientamento </span> obbligatorie in
            classe
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
            <Link href="#">
              <Button>Scopri il lavoro dei tuoi sogni</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
