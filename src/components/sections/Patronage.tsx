import Image from "next/image";

interface PatronageProps {
  alt: string;
  url: string;
}

export default function Patronage() {
  const patronages: PatronageProps[] = [
    {
      alt: "Campus Party",
      url: "/img/patronage/1.png",
    },
    {
      alt: "Kulta",
      url: "/img/patronage/2.png",
    },
    {
      alt: "Regione Lombardia",
      url: "/img/patronage/3.png",
    },
    {
      alt: "ASNOR",
      url: "/img/patronage/4.png",
    },
    {
      alt: "Comune di Roma",
      url: "/img/patronage/5.png",
    },
    {
      alt: "Comune di Milano",
      url: "/img/patronage/6.png",
    },
    {
      alt: "Camera Nazionale della Moda Italiana",
      url: "/img/patronage/7.png",
    },
  ];

  return (
    <div className="bg-gray py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold leading-8 text-blue">
          Con il supporto di
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {patronages
            .slice(0, 3)
            .map((patronage: PatronageProps, i: number) => {
              return (
                <div className="" key={`patronage-${i}`}>
                  <Image
                    className="h-full w-full object-contain"
                    src={patronage.url}
                    alt={patronage.alt}
                    width={800}
                    height={250}
                  />
                </div>
              );
            })}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
          {patronages.slice(3).map((patronage: PatronageProps, i: number) => {
            return (
              <div className="p-4" key={`patronage-${i}`}>
                <Image
                  className="h-full w-full object-contain"
                  src={patronage.url}
                  alt={patronage.alt}
                  width={800}
                  height={250}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
