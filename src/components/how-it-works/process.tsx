"use client";

import { motion } from "motion/react";
import Image from "next/image";

const processSteps = [
  {
    id: "assessments",
    eyebrow: "Assessments",
    title: "Complete Assessments",
    descriptions: [
      "Candidates complete structured assessments, practical tasks, and role-specific challenges designed to measure real-world capability, technical understanding, interviews designed to measure real-world ability and role-readiness.",
      "Every assessment is tailored to reflect the skills employers actually look for in modern professionals.",
    ],
    img: "/assets/step-assessments.svg",
    cardBg: "bg-sky-200",
    reverse: false,
  },
  {
    id: "verification",
    eyebrow: "Verification",
    title: "Get Verified",
    descriptions: [
      "SkillBridge evaluates overall performance and assigns a standardized employability score employers can trust and compare easily and confidently identify qualified talent.",
      "Verified profiles showcase proven capability, assessment performance, and professional credibility beyond a traditional CV.",
    ],
    img: "/assets/step-verification.svg",
    cardBg: "bg-violet-200",
    reverse: true,
  },
  {
    id: "connect",
    eyebrow: "Connect",
    title: "Connect Directly",
    descriptions: [
      "Based on assessment performance, skills, and profile strength, candidates gain access to employers actively hiring verified talent for real opportunities and open roles.",
      "Job-ready candidates become discoverable to employers actively hiring verified talent for real opportunities and open roles.",
    ],
    img: "/assets/step-connect.svg",
    cardBg: "bg-orange-300",
    reverse: false,
  },
];

const ease = [0.4, 0, 0.2, 1] as const;
const viewport = { once: true, margin: "-70px" } as const;

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-16 pb-32 sm:py-20 sm:pb-40 lg:py-24 lg:pb-56"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          {processSteps.map((step) => {
            const imgX = step.reverse ? 60 : -60;
            const textX = step.reverse ? -60 : 60;

            return (
              <div
                key={step.id}
                className={`flex flex-col items-center gap-8 lg:gap-16 ${
                  step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image card */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: imgX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease }}
                  viewport={viewport}
                >
                  <div
                    className={`relative flex h-72 sm:h-80 lg:h-96 w-full items-center justify-center overflow-hidden rounded-2xl ${step.cardBg}`}
                  >
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: textX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  viewport={viewport}
                >
                  <p className="mb-3 text-xs font-bold tracking-[0.15em] text-slate-500 uppercase">
                    {step.eyebrow}
                  </p>
                  <h3 className="mb-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {step.title}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {step.descriptions.map((para, i) => (
                      <p key={i} className="leading-relaxed text-slate-600">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
