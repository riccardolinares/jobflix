/* eslint-disable @next/next/no-img-element */
import Slider from "../ui/Slider";
import Image from "next/image";
const items = [
  "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
];

export default function LogoCloud() {
  const imgItems = items.map((item, i) => {
    return (
      <Image
        key={`logo-${i}`}
        src={item}
        alt=""
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        width={158}
        height={48}
      />
    );
  });

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-white py-6">
        <h2 className="text-center text-4xl font-extrabold leading-8 text-blue">
          I nostri sostentitori
        </h2>
        <img src="/img/underline.svg" alt="" className="mx-auto mt-2" />
        <div className="mt-10 max-w-lg items-center sm:max-w-xl lg:mx-0 lg:max-w-none">
          <Slider items={imgItems} />
        </div>
      </div>
    </>
  );
}
