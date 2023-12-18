import Image from "next/image";
import { Play } from "lucide-react";
import cn from "classnames";

export default function Card({
  image,
  bgColor,
  withPlay,
  className,
  children,
}: {
  image: string;
  bgColor?: string;
  withPlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        withPlay ? "w-52 aspect-square" : "w-52 aspect-[9/16]",
        "group sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
      )}
    >
      <Image
        src={image}
        alt=""
        layout="fill"
        style={{ objectFit: "cover" }}
        className="pointer-events-none "
      />
      {withPlay && (
        <div
          className={cn(
            bgColor,
            "absolute z-10 flex justify-center items-center w-full h-full p-14"
          )}
        >
          <div className="aspect-square h-full">
            <Play className="aspect-square w-full h-full text-gray/60 group-hover:text-gray border-4 border-gray/60 group-hover:border-gray rounded-full py-6 pl-6 pr-4 bg-gray-500/60" />
          </div>
        </div>
      )}
      <div className="absolute z-10">{children}</div>
    </div>
  );
}
