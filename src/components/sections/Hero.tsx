/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/ui/Subscribe";
import HorizontalScrollCarousel from "@/components/ui/HorizontalScrollCarousel";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="w-full min-h-screen relative isolate overflow-hidden pt-14 bg-gray">
      <img
        src="/img/backgrounds/bg-1.svg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="w-full flex items-center justify-center mt-2 max-w-7xl mx-auto">
        <HorizontalScrollCarousel />
      </div>
      <div className="mx-auto  mt-16 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black uppercase">
          Diventa <br />
          <span className="text-blue-medium">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "l'ingegnere",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "il videomaker",
                1500,
                "il programmatore",
                1500,
                "il cuoco",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "inherit", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>{" "}
          <br />
          che c&apos;è in te
        </h1>
        <div className="max-w-2xl items-center mx-auto">
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
