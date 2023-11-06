/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";

export default function Hero() {
  return (
    <div className="w-full min-h-screen relative isolate overflow-hidden pt-14 bg-gray">
      <img
        src="/img/bg-hero.svg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="w-full flex items-center justify-center mt-2">
        <HorizontalScrollCarousel />
      </div>
      <div className="mx-auto max-w-2xl mt-16">
        {/* py-32 sm:py-48 lg:py-56 */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl uppercase">
            {/* TODO: igegnere che viene scritto, come se fosse digitato */}
            Diventa
            <span className="text-blue-medium"> l&apos;ingegnere</span> <br />
            che c&apos;è in te
          </h1>
          <p className="mt-6 sm:text-xl text-lg font-normal leading-8  text-blue">
            Jobflix è la bussola per orientarti al lavoro: scopri i mestieri,
            valuta le tue attitudini e pianifica il percorso di studi che ti
            guiderà alla professioen che davvero fa per te!
          </p>
          <div className="flex items-center justify-center">
            <div className="max-w-xl w-full mt-10">
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
