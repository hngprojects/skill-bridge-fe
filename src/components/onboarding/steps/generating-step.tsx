"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const orbitingIcons = [
  {
    id: 1,
    src: "/assets/images/yellow-asset.svg",
    width: 46,
    height: 46,
    startAngle: 0,
  },
  {
    id: 2,
    src: "/assets/images/purple-asset.svg",
    width: 46,
    height: 46,
    startAngle: 60,
  },
  {
    id: 3,
    src: "/assets/images/blue-asset.svg",
    width: 46,
    height: 46,
    startAngle: 120,
  },
  {
    id: 4,
    src: "/assets/images/navy-blue-asset.svg",
    width: 56,
    height: 56,
    startAngle: 180,
  },
  {
    id: 5,
    src: "/assets/images/green-asset.svg",
    width: 46,
    height: 46,
    startAngle: 240,
  },
  {
    id: 6,
    src: "/assets/images/light-yellow-asset.svg",
    width: 46,
    height: 46,
    startAngle: 300,
  },
];

const ORBIT_RADIUS = 130;
const ORBIT_SPEED = 8;
const REDIRECT_DELAY = 2000;
const CENTER_ICON_SIZE = 69;

function GenerateRoadmapStep() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [dots, setDots] = React.useState("");

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);

    const dotsInterval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 500);

    setTimeout(() => {
      clearInterval(dotsInterval);
      router.push("/dashboard");
    }, REDIRECT_DELAY);
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden">
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle)));
          }
          to {
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) + 360deg)));
          }
        }
        .orbit-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: calc(var(--size) / -2);
          margin-left: calc(var(--size) / -2);
          animation: orbit var(--speed) linear infinite;
        }
      `}</style>

      {/* Orbit container */}
      <div className="relative flex h-72 w-72 items-center justify-center">
        {/* Static center icon */}
        <div className="z-10 drop-shadow-lg">
          <Image
            src="/assets/images/light-blue-asset.svg"
            alt=""
            width={CENTER_ICON_SIZE}
            height={CENTER_ICON_SIZE}
          />
        </div>

        {/* Orbiting icons */}
        {orbitingIcons.map((icon) => (
          <div
            key={icon.id}
            className="orbit-icon"
            style={
              {
                "--start-angle": `${icon.startAngle}deg`,
                "--radius": `${ORBIT_RADIUS}px`,
                "--speed": `${ORBIT_SPEED}s`,
                "--size": `${icon.width}px`,
              } as React.CSSProperties
            }
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.width}
              height={icon.height}
              className="drop-shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="flex w-full max-w-md items-center justify-center gap-2.5 rounded-lg bg-primary px-4 py-2.5 transition-opacity disabled:opacity-80"
      >
        <span className="text-xl font-bold tracking-wide text-primary-foreground">
          {isGenerating ? `Generating${dots}` : "Generate"}
        </span>
      </button>
    </div>
  );
}

export { GenerateRoadmapStep };
