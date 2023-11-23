export default function BackgroundSection({
  bg = "/img/backgrounds/bg-2.svg",
  children,
}: {
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative isolate overflow-hidden bg-gray">
      <img
        src={bg}
        alt=""
        className="absolute translate translate-y-0 inset-0 -z-10 w-full object-cover"
      />
      {children}
    </div>
  );
}
