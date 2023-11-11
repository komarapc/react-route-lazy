import { HTMLAttributes } from "react";

export default function BodyWrapper({
  className = "",
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div className={`w-full min-h-screen font-roboto ${className}`}>
        {children}
      </div>
    </>
  );
}
