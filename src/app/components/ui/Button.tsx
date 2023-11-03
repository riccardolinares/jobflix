import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  type = "button",
  className,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      className={classNames(
        className,
        "rounded-full bg-blue px-10 py-2 text-base font-semibold text-white shadow-sm hover:bg-medium-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
      )}
    >
      {children}
    </button>
  );
}
