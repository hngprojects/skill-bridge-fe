import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  ONBOARDING_STEPS,
  type OnboardingStepId,
} from "@/constants/talent-onboarding";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Talent onboarding: current step meta, index, and progress bar fill (0–100). */
export function getOnboardingStepProgress(currentStepId: OnboardingStepId) {
  const stepMeta = ONBOARDING_STEPS.find((s) => s.id === currentStepId);
  const stepIndex = Math.max(
    0,
    ONBOARDING_STEPS.findIndex((s) => s.id === currentStepId),
  );
  const progressPercent = ((stepIndex + 1) / ONBOARDING_STEPS.length) * 100;
  return {
    stepMeta,
    stepIndex,
    progressPercent,
    totalSteps: ONBOARDING_STEPS.length,
  };
}

/** Split UI “full name” into API firstName + lastName (first word / rest). */
export function splitFullName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const trimmed = fullName.trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}
