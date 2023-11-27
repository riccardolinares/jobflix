import prisma from "@/lib/prisma";
import Card from "@/components/ui/Card";
import { Video } from "@prisma/client";

export default async function SearchTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  console.log(query, currentPage);
  const videos = await prisma.video.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query,
            mode: "insensitive",
          },
        },
        // {
        //   tags: {
        //     has: query,
        // mode: 'insensitive'
        //   },
        // },
      ],
    },
    skip: (currentPage - 1) * 10,
    take: 10,
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {videos.map((video: Video, index: number) => (
        <div key={`video-${index}`} className="">
          <Card video={video} />
        </div>
      ))}
    </div>
  );
}
