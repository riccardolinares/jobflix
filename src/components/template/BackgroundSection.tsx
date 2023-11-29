import cn from "classnames";

export default function BackgroundSection({
  bg = "/img/backgrounds/bg-2.svg",
  className,
  children,
}: {
  bg?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        className,
        "w-full relative isolate overflow-hidden bg-gray"
      )}
    >
      <img
        src={bg}
        alt=""
        className="absolute translate translate-y-0 inset-0 -z-10 w-full object-cover"
      />
      {children}
    </div>
  );
}
