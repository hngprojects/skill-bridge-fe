"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SHELL_MAX_W = "max-w-shell";

type AuthShellProps = Omit<React.ComponentProps<"div">, "children"> & {
  children: React.ReactNode;
  headerTrailing?: React.ReactNode;
  logoHref?: string;
  mainClassName?: string;
  simpleFooter?: boolean;
};

function AuthShell({
  className,
  children,
  headerTrailing,
  logoHref = "/",
  mainClassName,
  simpleFooter = false,
  ...props
}: AuthShellProps) {
  return (
    <div
      className={cn(
        "flex min-h-dvh w-full flex-col",
        simpleFooter ? "bg-background" : "bg-secondary",
        "font-sans",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 mx-auto flex min-h-0 w-full flex-1 flex-col",
          SHELL_MAX_W,
        )}
      >
        <header className="sticky top-0 z-40 flex h-18 w-full flex-col justify-center border-b border-border bg-background px-4 sm:px-15">
          <div className="max-w-360  mx-auto flex w-full items-center justify-between">
            <Link href={logoHref} className="inline-flex shrink-0">
              <Image
                src="/assets/logo/logo-with-text.svg"
                alt="SkillBridge"
                width={220}
                height={55}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {headerTrailing && (
              <div className="flex items-center justify-end flex-1">
                {headerTrailing}
              </div>
            )}
          </div>
        </header>

        <main
          className={cn(
            "flex w-full min-h-0 flex-1 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 lg:py-10",
            mainClassName,
          )}
        >
          {children}
        </main>
      </div>

      {simpleFooter ? (
        <footer className="w-full bg-[#05060F] z-20">
          <div
            className={cn(
              "mx-auto flex min-h-14 w-full flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row sm:py-0 lg:px-16",
              SHELL_MAX_W,
            )}
          >
            <div className="body font-light text-primary-foreground">
              © 2026 SkillBridge Inc. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-primary-foreground">
              <Link href="#" className="body font-light hover:opacity-80">
                Talent Terms
              </Link>
              <span className="size-0.75 rounded-full bg-primary-foreground/20" />
              <Link href="#" className="body font-light hover:opacity-80">
                Employer Terms
              </Link>
              <span className="size-0.75 rounded-full bg-primary-foreground/20" />
              <Link
                href="/privacy-policy"
                className="body font-light hover:opacity-80"
              >
                Privacy Policy
              </Link>
              <span className="size-0.75 rounded-full bg-primary-foreground/20" />
              <Link href="#" className="body font-light hover:opacity-80">
                Cookies Settings
              </Link>
            </div>
          </div>
        </footer>
      ) : (
        <div className="relative -mt-70 hidden h-80 w-full shrink-0 overflow-hidden sm:block">
          <div className="absolute inset-x-0 bottom-0 z-0 h-70">
            <Image
              src="/assets/images/footer-assets.svg"
              alt=""
              fill
              className="pointer-events-none select-none object-contain object-bottom"
              priority={false}
            />
          </div>
          <div className="absolute bottom-0 left-0 z-10 w-full">
            <svg
              viewBox="0 0 1440 180"
              fill="none"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 180C240 60 1200 60 1440 180V180H0V150Z"
                fill="var(--color-background)"
              />
              <rect
                y="179"
                width="1440"
                height="100"
                fill="var(--color-background)"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export { AuthShell };
export type { AuthShellProps };
