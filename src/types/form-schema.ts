import { z } from "zod";

export const onboardingFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/[a-z]/, "Password must include at least one lowercase letter.")
    .regex(/[0-9]/, "Password must include at least one number."),
  country: z.string().trim().min(1, "Country is required."),
});

export type OnboardingFormValues = z.infer<typeof onboardingFormSchema>;

export type OnboardingFormErrors = Partial<
  Record<keyof OnboardingFormValues, string>
>;
