import prisma from "@/lib/prisma";

export async function getVideo(id: string) {
  const res = prisma.video.findUnique({
    where: {
      id: id,
    },
    include: {
      categories: true,
      sponsors: true,
      speakers: true,
    },
  });

  return res;
}

export async function getVideos() {
  const res = prisma.video.findMany();
  return res;
}
