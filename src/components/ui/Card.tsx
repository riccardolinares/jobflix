/* eslint-disable @next/next/no-img-element */
export default function Card({
  image,
  children,
}: {
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full h-full sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg overflow-hidden relative">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full pointer-events-none"
      />
      <div className="absolute z-10">{children}</div>
    </div>
  );
}
