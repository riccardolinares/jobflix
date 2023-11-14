import Button from "./ui/Button";
import Image from "next/image";
import { Input } from "./ui/Input";

export default function Subscribe() {
  return (
    <form className="group relative w-full">
      <img
        src="/img/highlight-circle.svg"
        alt=""
        className="transition-opacity	absolute w-full h-full top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-[-1]"
      />

      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Indirizzo email
        </label>
        <Input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="bg-neutral-300  min-w-0 flex-auto rounded-full border border-neutral-400/50 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-blue text-xl"
          placeholder="Inserisci la tua email"
        />
        <Button type="submit" className="uppercase">
          Iscriviti
        </Button>

        <Image
          src="/img/arrows.svg"
          alt=""
          className="transition-opacity absolute -top-1/3 left-full opacity-0 group-hover:opacity-100 z-[-1]"
          width={90}
          height={90}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-900">
        Ci teniamo ai tuoi dati. Leggi la nostra{" "}
        <a href="#" className="font-semibold text-blue hover:text-blue-light">
          privacy&nbsp;policy
        </a>
        .
      </p>
    </form>
  );
}
