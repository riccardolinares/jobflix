/* eslint-disable @next/next/no-img-element */
import Card from "@/components/ui/Card";
import classNames from "classnames";

export default function HorizontalScrollCarousel() {
  const images = [
    "/img/Rettangolo 24.jpg",
    "/img/Rettangolo 25.jpg",
    "/img/Rettangolo 26.jpg",
    "/img/Rettangolo 27.jpg",
    "/img/Rettangolo 28.jpg",
    "/img/Rettangolo 29.jpg",
  ];

  return (
    <div className="flex flex-row gap-x-4">
      {images.map((image, index) => {
        return (
          <div
            key={`person-${index}`}
            className={classNames(
              index == 0 ? "-ml-12" : "",
              index == images.length - 1 ? "-mr-12" : "",
              "w-1/6"
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
