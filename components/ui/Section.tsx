import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Render as a different semantic element. Defaults to `section`. */
  as?: "section" | "div" | "article" | "header";
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: As = "section",
}: Props) {
  return (
    <As id={id} className={`relative w-full py-16 md:py-24 ${className}`}>
      <div
        className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${containerClassName}`}
      >
        {children}
      </div>
    </As>
  );
}
