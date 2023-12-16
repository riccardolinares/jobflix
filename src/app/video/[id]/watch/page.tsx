import Button from "@/components/ui/Button";
import Link from "next/link";

export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params.id);
  return (
    <div className="h-screen w-full bg-[#000]">
      <div className="group absolute top-0 left-0 w-full h-16  items-center flex">
        <div className="hidden group-hover:flex items-center max-w-7xl justify-center px-6">
          <Link href={`/video/${params.id}`}>
            <Button>Go back</Button>
          </Link>
        </div>
      </div>
      <iframe
        src={`https://customer-${process.env.NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_ID}.cloudflarestream.com/${params.id}/iframe`}
        height="100%"
        width="100%"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        id="stream-player"
        className="border-none"
      ></iframe>
      <div className="absolute bottom-0 left-0 w-full h-16  items-center flex"></div>
    </div>
  );
}
