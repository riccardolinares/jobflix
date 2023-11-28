/* eslint-disable @next/next/no-img-element */
import Card from "@/components/ui/Card";
import classNames from "classnames";
import { Video } from "@prisma/client";

export default function HorizontalScrollCarousel() {
  const images = [
    { thumbnail: "/img/jobs/job-1.webp" },
    { thumbnail: "/img/jobs/job-2.webp" },
    { thumbnail: "/img/jobs/job-3.webp" },
    { thumbnail: "/img/jobs/job-4.webp" },
    { thumbnail: "/img/jobs/job-5.webp" },
  ] as Video[];

  return (
    <div className="flex flex-row gap-x-4 items-center justify-center ">
      {images.map((image, index) => {
        return (
          <div
            key={`person-${index}`}
            className={classNames(
              index == 0 ? "-ml-12" : "",
              index == images.length - 1 ? "-mr-12" : ""
            )}
          >
            <Card video={image}></Card>
          </div>
        );
      })}
    </div>
  );
}
