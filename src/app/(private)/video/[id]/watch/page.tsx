export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params.id);
  return (
    <div className="h-screen w-full bg-gray">
      <iframe
        src={`https://customer-${process.env.NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_ID}.cloudflarestream.com/${params.id}/iframe`}
        height="100%"
        width="100%"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        id="stream-player"
        className="border-none"
      ></iframe>
    </div>
  );
}
