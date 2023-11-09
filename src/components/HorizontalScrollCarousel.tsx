/* eslint-disable @next/next/no-img-element */
import Card from "@/components/ui/Card";
import classNames from "classnames";

export default function HorizontalScrollCarousel() {
  const images = [
    "/img/jobs/job-1.webp",
    "/img/jobs/job-2.webp",
    "/img/jobs/job-3.webp",
    "/img/jobs/job-4.webp",
    "/img/jobs/job-5.webp",
  ];

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
            <Card>
              <img src={image} alt="" className="object-cover w-full h-full" />
            </Card>
          </div>
        );
      })}
    </div>
  );
}
