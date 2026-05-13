import * as React from "react";

import { cn } from "@/lib/utils";

type AuthShellProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

function AuthShell({ className, children, ...props }: AuthShellProps) {
  return (
    <div
      className={cn(
        "flex min-h-full flex-1 flex-col items-center justify-center bg-[#F1F5F9] px-4 py-10 sm:px-6 sm:py-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { AuthShell };
