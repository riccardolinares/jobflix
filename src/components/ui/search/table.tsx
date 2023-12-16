import prisma from "@/lib/prisma";
import Card from "@/components/ui/Card";
import { Video } from "@prisma/client";
import Link from "next/link";
import { SearchTableSkeleton } from "./skeletons";

export default async function SearchTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  console.log(query, currentPage);
  // const videos = await prisma.video.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: query,
  //           mode: "insensitive",
  //         },
  //       },
  //       {
  //         description: {
  //           contains: query,
  //           mode: "insensitive",
  //         },
  //       },
  //       // {
  //       //   tags: {
  //       //     has: query,
  //       // mode: 'insensitive'
  //       //   },
  //       // },
  //     ],
  //   },
  //   skip: (currentPage - 1) * 10,
  //   take: 10,
  // });

  const videos = await prisma.video.findMany();

  const dummyVideo = [] as Video[];

  dummyVideo.push({
    thumbnail: "/img/jobs/job-1.webp",
  } as Video);
  dummyVideo.push({
    thumbnail: "/img/jobs/job-2.webp",
  } as Video);
  dummyVideo.push({
    thumbnail: "/img/jobs/job-3.webp",
  } as Video);
  dummyVideo.push({
    thumbnail: "/img/jobs/job-4.webp",
  } as Video);
  dummyVideo.push({
    thumbnail: "/img/jobs/job-5.webp",
  } as Video);
  dummyVideo.push({
    thumbnail: "/img/jobs/job-6.webp",
  } as Video);
  dummyVideo.push({
    thumbnail: "/img/jobs/job-7.webp",
  } as Video);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {videos.map((video: Video, index: number) => (
        <Link
          key={`video-${index}`}
          href={`/video/${video.id}` || "#"}
          className=""
        >
          <Card video={video} />
        </Link>
      ))}
      {dummyVideo.map((video: Video, index: number) => (
        <Link
          key={`video-${index}`}
          href={`/video/5dcbcdd68b8f22fbfe0d54c6b21ab714`}
          className=""
        >
          <Card video={video} />
        </Link>
      ))}
    </div>
  );
}
