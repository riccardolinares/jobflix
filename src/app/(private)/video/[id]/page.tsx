import { type Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getVideo } from "@/app/actions";
import { Play, Video, Heart, Share2 } from "lucide-react";
import Button from "@/components/ui/Button";

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ChatPageProps): Promise<Metadata> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return {};
  }

  const video = await getVideo(params.id);
  return {
    title: video?.title.toString().slice(0, 50) ?? "Video",
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
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
        <div className="relative isolate overflow-hidden ">
          <video
            width="100%"
            height="100%"
            muted
            loop
            autoPlay
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          >
            <source src="/video/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray via-transparent to-transparent"></div>

          <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 relative">
            <div className="absolute bottom-0 left-0 m-4 p-4 flex space-x-2">
              <Button className="flex flex-row gap-x-2 items-center justify-center">
                <Play className="fill-white" /> Riproduci
              </Button>
              <div className="flex flex-row gap-x-6 pl-8 items-center justify-center text-blue">
                <button className="group flex flex-col justify-center items-center hover:text-blue-light">
                  <Video className="group-hover:fill-blue-light" />
                  <span className="text-sm">Trailer</span>
                </button>
                <button className="group flex flex-col justify-center items-center hover:text-blue-light">
                  <Heart className="group-hover:fill-blue-light" />
                  <span className="text-sm">Like</span>
                </button>
                <button className="group flex flex-col justify-center items-center hover:text-blue-light">
                  <Share2 className="group-hover:fill-blue-light" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-8 px-8">
          <div className="flex flex-col md:flex-row gap-x-24 gap-y-8 items-start justify-center ">
            <div className="w-full md:w-2/3">
              <p className="text-lg font-normal">{video.description}</p>
            </div>
            <div className="w-full md:w-1/3">
              <p className="text-lg">
                Durata della lezione:{" "}
                <span className="font-bold">10 lezioni (1 ora 29 minuti)</span>
              </p>
              <p className="text-lg">
                Categoria:{" "}
                <span className="font-bold">Business, Design, Programmi</span>
              </p>
              <div className="flex flex-col mt-6 items-start justify-start ">
                <p className="text-lg">Grazie a: </p>
                <div className="flex flex-row gap-x-12 items-center justify-start ">
                  <p>Samsung</p>
                  <p>Netflix</p>
                  <p>Meta</p>
                </div>
              </div>
              <div className="flex flex-col text-lg mt-6 items-start justify-start ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, repellat, quod, voluptatum dolorum quae
                quos voluptatem quibusdam doloremque magni expedita.
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto max-w-7xl py-8 px-8 items-center justify-center">
          <div className="max-w-2xl items-center justify-center">
            <video
              width="100%"
              height="100%"
              controls
              className="rounded-3xl shadow-lg"
            >
              <source src="/video/preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
