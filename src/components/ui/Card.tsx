import { Video } from "@prisma/client";
/* eslint-disable @next/next/no-img-element */
export default function Card({
  video,
  children,
}: {
  video: Video;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full h-full sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg overflow-hidden relative">
      <img
        src={video.thumbnail || "/img/jobs/job-1.webp"}
        alt={video.title}
        className="object-cover w-full h-full pointer-events-none"
      />
      <div className="absolute z-10">{children}</div>
    </div>
  );
}
