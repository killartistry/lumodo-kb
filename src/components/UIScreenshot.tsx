"use client";

import Image from "next/image";

type BlurZone = {
  top: string;
  left: string;
  width: string;
  height: string;
};

export function UIScreenshot({
  src,
  alt,
  blurZones = [],
  caption,
}: {
  src: string;
  alt: string;
  blurZones?: BlurZone[];
  caption?: string;
}) {
  return (
    <figure className="my-6 sm:my-8">
      <div className="relative rounded-xl overflow-hidden border border-[var(--border)] shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={2880}
          height={1800}
          className="w-full h-auto block"
          quality={90}
        />
        {blurZones.map((zone, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: zone.top,
              left: zone.left,
              width: zone.width,
              height: zone.height,
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              backgroundColor: "rgba(241, 241, 241, 0.25)",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>
      {caption && (
        <figcaption className="text-xs text-[var(--slate)] mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── Predefined blur-zone sets per screenshot ── */

export const BLUR_DASHBOARD: BlurZone[] = [
  { top: "1%", left: "82%", width: "18%", height: "6%" },
  { top: "44%", left: "12%", width: "83%", height: "8%" },
  { top: "57%", left: "12%", width: "83%", height: "8%" },
];

export const BLUR_PROPERTIES: BlurZone[] = [
  { top: "1%", left: "82%", width: "18%", height: "6%" },
  { top: "23%", left: "10%", width: "16%", height: "77%" },
];

export const BLUR_ADD_PROPERTY: BlurZone[] = [];

export const BLUR_REPORTS: BlurZone[] = [
  { top: "1%", left: "82%", width: "18%", height: "6%" },
];

export const BLUR_PERIOD_STATUS: BlurZone[] = [
  { top: "1%", left: "82%", width: "18%", height: "6%" },
  { top: "62%", left: "10%", width: "16%", height: "38%" },
];
