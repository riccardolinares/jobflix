import { Speaker } from "@prisma/client";
import cn from "classnames";
import Image from "next/image";

export default function Speakers({
  speakers,
  className,
}: {
  speakers: Speaker[];
  className?: string;
}) {
  return (
    <ul role="list" className={cn(className, "space-y-6")}>
      {speakers.map((speaker: Speaker, index: number) => (
        <li
          key={`speaker-${index}`}
          className="flex items-center justify-between gap-x-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50 border-3 border-white"
              src={speaker.avatar || "/img/placeholder.png"}
              alt=""
              width={48}
              height={48}
            />
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-semibold leading-6 text-gray-900">
                {speaker.name}
              </p>
              <p className="mt-1 truncate text-base leading-5 text-gray-500">
                {speaker.jobTitle}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
