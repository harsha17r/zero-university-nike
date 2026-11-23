"use client";

import Image from "next/image";
import { BlossomCarousel, BlossomDot, BlossomDots } from "@blossom-carousel/react";

// The 8 gallery photos of the Nike Pegasus 42 (IB1873-105, White/Racer Blue/Atomic Pink/Black) from nike.com.
// Each photo is square. The box is 375 x 220, so "pos" picks which part of the photo shows.
const PHOTOS = [
  { src: "/pegasus/1.jpg", pos: "50% 70%", alt: "Outer side of the shoe: white mesh, blue and pink foam, black Swoosh" },
  { src: "/pegasus/2.jpg", pos: "50% 66%", alt: "The outsole: blue and black rubber" },
  { src: "/pegasus/3.jpg", pos: "50% 70%", alt: "Inner side of the shoe" },
  { src: "/pegasus/4.jpg", pos: "50% 50%", alt: "Both shoes from above", fit: "contain" as const },
  { src: "/pegasus/5.jpg", pos: "50% 84%", alt: "Both shoes from the front, at an angle" },
  { src: "/pegasus/6.jpg", pos: "50% 88%", alt: "Both shoes from behind" },
  { src: "/pegasus/7.jpg", pos: "50% 40%", alt: "Close-up of the laces and the black Swoosh" },
  { src: "/pegasus/8.jpg", pos: "50% 50%", alt: "Close-up of the pink and blue heel foam" },
];

// The photo box keeps its fixed 375 x 220 size. The carousel scrolls inside it,
// and the bar sits on top of the photos, so neither one adds height or moves the size grid.
export default function Gallery() {
  return (
    <section className="photo" aria-label="Photos of the shoe" aria-roledescription="carousel">
      <BlossomCarousel id="gallery" as="ul" className="gallery">
        {PHOTOS.map((p, i) => (
          <li
            key={p.src}
            data-blossom-slide
            className="slide"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${PHOTOS.length}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={936}
              height={936}
              sizes="(max-width: 480px) 100vw, 480px"
              priority={i === 0}
              data-testid={i === 0 ? "main-photo" : undefined}
              style={{ objectPosition: p.pos, objectFit: p.fit ?? "cover" }}
            />
          </li>
        ))}
      </BlossomCarousel>
      <BlossomDots for="gallery" className="gallery-bar">
        {({ index }) => (
          <BlossomDot className="seg" aria-label={`Show photo ${index + 1} of ${PHOTOS.length}`}>
            <span />
          </BlossomDot>
        )}
      </BlossomDots>
    </section>
  );
}
