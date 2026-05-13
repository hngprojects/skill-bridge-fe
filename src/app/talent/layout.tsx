import { AuthShell } from "@/components/custom/auth-shell";
import React, { ReactNode } from "react";

const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthShell>
      <main className="">{children}</main>
    </AuthShell>
  );
};

export default OnboardingLayout;
