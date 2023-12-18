import Container from "@/components/template/Container";
import VideoCard from "../../../components/ui/VideoCard";
import BackgroundSection from "@/components/template/BackgroundSection";
import Link from "next/link";
import Carousel from "@/components/ui/carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";

export default function Page() {
  const continueWatching = [
    {
      url: "/video/3e94aaa80c6009ee0452229ffa45ba6d",
      image: "/img/jobs/filmmaker.png",
    },
  ];

  const other = [
    { image: "/img/jobs/filmmaker.png" },
    {
      image: "/img/jobs/job-1.webp",
    },
    {
      image: "/img/jobs/job-2.webp",
    },
    {
      image: "/img/jobs/job-3.webp",
    },
    {
      image: "/img/jobs/job-4.webp",
    },
    {
      image: "/img/jobs/job-5.webp",
    },
    {
      image: "/img/jobs/job-6.webp",
    },
    {
      image: "/img/jobs/job-7.webp",
    },
    {
      image: "/img/jobs/job-8.webp",
    },
    {
      image: "/img/jobs/job-9.webp",
    },
    {
      image: "/img/jobs/job-10.webp",
    },
    {
      image: "/img/jobs/job-11.webp",
    },
    {
      image: "/img/jobs/job-12.webp",
    },
    {
      image: "/img/jobs/job-13.webp",
    },
    {
      image: "/img/jobs/job-14.webp",
    },
    {
      image: "/img/jobs/job-15.webp",
    },
    {
      image: "/img/jobs/job-16.webp",
    },
    {
      image: "/img/jobs/job-17.webp",
    },
    {
      image: "/img/jobs/job-18.webp",
    },
    {
      image: "/img/jobs/job-19.webp",
    },
    {
      image: "/img/jobs/job-20.webp",
    },
    {
      image: "/img/jobs/job-21.webp",
    },
    {
      image: "/img/jobs/job-22.webp",
    },
    {
      image: "/img/jobs/job-23.webp",
    },
    {
      image: "/img/jobs/job-24.webp",
    },
    {
      image: "/img/jobs/job-25.webp",
    },
    {
      image: "/img/jobs/job-26.webp",
    },
  ];

  const OPTIONS: EmblaOptionsType = {
    align: "center",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  };

  const SLIDES: { image: string; alt?: string; url?: string }[] = [
    { image: "/img/jobs/filmmaker.png" },
    { image: "/img/jobs/job-1.webp" },
    { image: "/img/jobs/job-2.webp" },
    { image: "/img/jobs/job-3.webp" },
    { image: "/img/jobs/job-4.webp" },
    { image: "/img/jobs/job-5.webp" },
    { image: "/img/jobs/job-6.webp" },
    { image: "/img/jobs/job-8.webp" },
  ];

  return (
    <BackgroundSection bg="/img/backgrounds/bg-2.svg">
      <div className="flex flex-col gap-y-16">
        <div className="p-8">
          <h1 className="sr-only">Dashboard</h1>
          <h2 className="text-3xl text-blue font-bold">Continua a guardare</h2>
          <div className="flex flex-row gap-x-4 items-center justify-start mt-5">
            {continueWatching.map((item, index) => (
              <Link
                key={`watch-${index}`}
                href={item.url || "/video/3e94aaa80c6009ee0452229ffa45ba6d"}
              >
                <VideoCard
                  key={index}
                  image={item.image}
                  bgColor="bg-blue/50"
                  withPlay
                  className="bg-top"
                ></VideoCard>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-blue font-bold px-8">Novità</h2>
          <div className="items-center w-full mt-5">
            <Carousel
              align="center"
              slidesToScroll="auto"
              containScroll="trimSnaps"
            >
              {SLIDES.map((slide, index) => {
                return (
                  <Link
                    className="relative flex-[0_0_256px] aspect-[9/16] w-52 m-2"
                    key={index}
                    href={
                      slide.url || "/video/3e94aaa80c6009ee0452229ffa45ba6d"
                    }
                  >
                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                    <Image
                      src={slide.image}
                      fill
                      className="object-cover sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg"
                      alt={slide.alt || ""}
                    />
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-blue font-bold px-8">Più visti</h2>
          <div className="items-center w-full mt-5">
            <Carousel
              align="center"
              slidesToScroll="auto"
              containScroll="trimSnaps"
            >
              {SLIDES.map((slide, index) => {
                return (
                  <Link
                    className="relative flex-[0_0_256px] aspect-[9/16] w-52 m-2"
                    key={index}
                    href={
                      slide.url || "/video/3e94aaa80c6009ee0452229ffa45ba6d"
                    }
                  >
                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                    <Image
                      src={slide.image}
                      fill
                      className="object-cover sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg"
                      alt={slide.alt || ""}
                    />
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div>
          <h2 className="text-3xl text-blue font-bold px-8">Lavori creativi</h2>
          <div className="items-center w-full mt-5">
            <Carousel
              align="center"
              slidesToScroll="auto"
              containScroll="trimSnaps"
            >
              {SLIDES.map((slide, index) => {
                return (
                  <Link
                    className="relative flex-[0_0_256px] aspect-[9/16] w-52 m-2"
                    key={index}
                    href={
                      slide.url || "/video/3e94aaa80c6009ee0452229ffa45ba6d"
                    }
                  >
                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                    <Image
                      src={slide.image}
                      fill
                      className="object-cover sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg"
                      alt={slide.alt || ""}
                    />
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
}
