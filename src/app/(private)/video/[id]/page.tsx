import { type Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getVideo } from "@/app/actions";
import { Play, Video, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import Speakers from "@/components/ui/Speakers";
// import ShareBtn from "@/components/ui/ShareBtn";

export interface VideoPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: VideoPageProps): Promise<Metadata> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return {};
  }

  const video = await getVideo(params.id);
  return {
    title: video?.title.toString().slice(0, 50) ?? "Video",
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(`/sign-in?next=/video/${params.id}`);
  }

  const video = await getVideo(params.id);

  if (!video) {
    notFound();
  }

  return (
    <>
      <div className="bg-gray">
        <div className="w-full">
          <div className="relative isolate overflow-hidden">
            <video
              width="100%"
              height="100%"
              muted
              loop
              autoPlay
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            >
              {/* TODO: handle the default video header */}
              <source src={video.headerVideoUrl || ""} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray  to-transparent"></div>

            <div className="mx-auto max-w-7xl py-48 sm:py-56 lg:py-64 xl:py-72 2xl:py-80 relative">
              <div className="absolute bottom-0 left-0 px-8 py-2 flex flex-col gap-x-2 ">
                <div className="flex flex-col mb-6 items-start gap-x-4 gap-y-4">
                  <h1 className="text-4xl font-bold text-black ">
                    {video.title}
                  </h1>
                  {/* <span className="max-h-6 bg-gray inline-flex items-center gap-x-1.5 rounded-md px-2  font-medium text-blue text-base ">
                    Top 5
                  </span> */}
                </div>

                <div className="flex flex-row gap-x-2">
                  <Link href={`/video/${params.id}/watch`}>
                    <Button className="flex flex-row gap-x-2 items-center justify-center">
                      <Play className="fill-white" /> Riproduci
                    </Button>
                  </Link>
                  <div className="flex flex-row gap-x-6 pl-8 items-center justify-center text-blue">
                    <Link href="#trailer">
                      <button className="group flex flex-col justify-center items-center hover:text-blue">
                        <Video className="group-hover:fill-blue" />
                        <span className="text-sm">Trailer</span>
                      </button>
                    </Link>
                    <button className="group flex flex-col justify-center items-center hover:text-blue">
                      <Heart className="group-hover:fill-blue" />
                      <span className="text-sm">Like</span>
                    </button>
                    {/* <ShareBtn /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-8 px-8">
          <div className="flex flex-col md:flex-row gap-x-24 gap-y-8 items-start justify-center ">
            <div className="w-full md:w-2/3">
              <p className="text-lg font-normal">{video.description}</p>
              <Speakers speakers={video.speakers} className="mt-8 w-full" />
              <div className="flex flex-row gap-x-2 mt-20">
                <button
                  type="button"
                  className="rounded-full bg-transparent border-blue border px-10 py-2 text-base font-semibold text-blue shadow-sm hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                >
                  Scarica Lesson Plan
                </button>
                <button
                  type="button"
                  className="rounded-full bg-transparent border-blue border px-10 py-2 text-base font-semibold text-blue shadow-sm hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                >
                  Documento di Approfondimento
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <p className="text-lg">
                Durata: <span className="font-bold">1 ora 29 minuti</span>
              </p>
              <p className="text-lg">
                Categoria:{" "}
                <span className="font-bold">
                  {video.categories
                    ?.map((category) => category.name)
                    .join(", ")}
                </span>
              </p>
              {video.sponsors?.length > 0 && (
                <div className="flex flex-col mt-6 items-start justify-start ">
                  <p className="text-lg">Grazie a: </p>
                  <div className="flex flex-row gap-x-6 items-center justify-start mt-2">
                    {video.sponsors?.map((sponsor) => (
                      <Link
                        key={sponsor.id}
                        target="_blank"
                        className="relative h-10 w-20"
                        href={sponsor.website || "#"}
                      >
                        <Image
                          src={sponsor.logo || "/img/placeholder.png"}
                          alt={sponsor.name}
                          layout="fill"
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    ))}
                  </div>
                  {video.sponsors?.map((sponsor) => (
                    <p key={sponsor.id}>{sponsor.description}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          id="trailer"
          className="flex mx-auto max-w-7xl py-8 px-8 items-center justify-center"
        >
          <div className="flex flex-col md:flex-row gap-x-5 gap-y-8 items-center justify-center">
            {video.trailerVideoUrl && (
              <div className="flex flex-col gap-y-2 w-1/2">
                <h2 className="text-2xl text-blue font-bold text-center">
                  Trailer
                </h2>
                <video
                  width="100%"
                  height="100%"
                  controls
                  className="rounded-3xl shadow-lg w-full"
                  poster="/img/filmmaker-preview.png"
                >
                  <source src={video.trailerVideoUrl || ""} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {video.sponsorVideoUrl && (
              <div className="flex flex-col gap-y-2 w-1/2">
                <h2 className="text-2xl text-blue font-bold text-center">
                  La parola allo sponsor
                </h2>

                <video
                  width="100%"
                  height="100%"
                  controls
                  className="rounded-3xl shadow-lg"
                  poster="/img/sponsored-preview.png"
                >
                  <source src={video.sponsorVideoUrl || ""} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
