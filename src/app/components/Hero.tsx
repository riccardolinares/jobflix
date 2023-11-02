import Subscribe from "@/components/Subscribe";

export default function Hero() {
  return (
    <div className="w-full relative isolate overflow-hidden pt-14 bg-gray">
      <img
        src="/img/bg-hero.svg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-2xl">
        {/* py-32 sm:py-48 lg:py-56 */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl uppercase">
            Diventa <span className="text-medium-blue">l&apos;ingegnere</span>{" "}
            che c&apos;è in te
          </h1>
          <p className="mt-6 sm:text-xl text-lg font-normal leading-8 text-gray-300 text-blue">
            Jobflix è la bussola per orientarti al lavoro: scopri i mestieri,
            valuta le tue attitudini e pianifica il percorso di studi che ti
            guiderà alla professioen che davvero fa per te!
          </p>
          <div className="flex items-center justify-center">
            <div className="max-w-xl w-full">
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
