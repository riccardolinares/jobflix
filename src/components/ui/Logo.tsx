import Image from "next/image";

export default function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "black" | "white";
}) {
  return (
    <Image
      className={className}
      src="/logo.svg"
      alt="Jobflix"
      width={200}
      height={71}
    />
  );
}
