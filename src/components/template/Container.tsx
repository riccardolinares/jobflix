import cn from "classnames";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(className, "flex flex-col mx-auto max-w-7xl py-8 px-8")}>
      {children}
    </div>
  );
}
