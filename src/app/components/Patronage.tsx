import Image from "next/image";

interface PatronageProps {
  id: number;
  alt: string;
  url: string;
}

export default function Patronage() {
  const patronages: PatronageProps[] = [
    {
      id: 1,
      alt: "Commissione Europea",
      url: "/img/patronage/commissione-europea.jpg",
    },
    {
      id: 2,
      alt: "Ministero dell'Istruzione e del Merito",
      url: "/img/patronage/ministero-istruzione.jpg",
    },
    {
      id: 3,
      alt: "Regione Lombardia",
      url: "/img/patronage/regione-lombardia.jpg",
    },
    {
      id: 4,
      alt: "ASNOR",
      url: "/img/patronage/asnor.jpg",
    },
    {
      id: 5,
      alt: "Comune di Roma",
      url: "/img/patronage/roma.jpg",
    },
    {
      id: 6,
      alt: "Comune di Milano",
      url: "/img/patronage/milano.jpg",
    },
    {
      id: 7,
      alt: "Camera Nazionale della Moda Italiana",
      url: "/img/patronage/moda-italiana.jpg",
    },
    {
      id: 8,
      alt: "Confcommercio",
      url: "/img/patronage/confcommercio.jpg",
    },
    {
      id: 9,
      alt: "Confartigianato",
      url: "/img/patronage/confartigianato.jpg",
    },
    {
      id: 10,
      alt: "FLA",
      url: "/img/patronage/fla.jpg",
    },
    {
      id: 11,
      alt: "CISL",
      url: "/img/patronage/cisl.jpg",
    },
  ];

  return (
    <div className="bg-gray py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold leading-8 text-blue">
          Con il patrocinio di
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {patronages
            .slice(0, 3)
            .map((patronage: PatronageProps, i: number) => {
              return (
                <div className="" key={`patronage-${i}`}>
                  <Image
                    className="max-h-28 w-full object-contain"
                    src={patronage.url}
                    alt={patronage.alt}
                    width={158}
                    height={48}
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
                  className="max-h-20 w-full object-contain"
                  src={patronage.url}
                  alt={patronage.alt}
                  width={158}
                  height={48}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
