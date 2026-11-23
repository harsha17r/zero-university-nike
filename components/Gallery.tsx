"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BlossomCarousel } from "@blossom-carousel/react";

// The 8 gallery photos of the Nike Pegasus 42 (IB1873-105, White/Racer Blue/Atomic Pink/Black) from nike.com.
// Each photo is square. The box is 375 x 270, so "pos" picks which part of the photo shows.
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

// The photo box keeps its fixed 375 x 270 size. The carousel scrolls inside it,
// and the dots sit on top of the photos, so neither one adds height or moves the size grid.
//
// Infinite loop: after the page loads, a copy of photo 8 goes before photo 1 and a copy of photo 1
// goes after photo 8. When a swipe lands on a copy, the scroll jumps (with no animation) to the real photo,
// so swiping never hits an end. The server sends only the 8 real photos, so photo 1 shows first with no jump.
const N = PHOTOS.length;
const DOTS = 4; // how many dots show at once

function Slide({ p, i, copy }: { p: (typeof PHOTOS)[number]; i: number; copy?: boolean }) {
  return (
    <li
      data-blossom-slide
      className="slide"
      aria-roledescription={copy ? undefined : "slide"}
      aria-label={copy ? undefined : `${i + 1} of ${N}`}
      aria-hidden={copy || undefined}
    >
      <Image
        src={p.src}
        alt={copy ? "" : p.alt}
        width={936}
        height={936}
        sizes="(max-width: 480px) 100vw, 480px"
        priority={i === 0 && !copy}
        data-testid={i === 0 && !copy ? "main-photo" : undefined}
        style={{ objectPosition: p.pos, objectFit: p.fit ?? "cover" }}
      />
    </li>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [looped, setLooped] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => setLooped(true), []);

  // Before the copies paint, move the scroll one photo along so photo 1 stays in view.
  useLayoutEffect(() => {
    const el = ref.current;
    if (looped && el) el.scrollLeft = el.clientWidth;
  }, [looped]);

  useEffect(() => {
    const el = ref.current;
    if (!looped || !el) return;
    let timer: ReturnType<typeof setTimeout>;
    const settle = () => {
      const w = el.clientWidth;
      const pos = Math.round(el.scrollLeft / w);
      if (pos === 0) el.scrollTo({ left: N * w, behavior: "instant" });
      if (pos === N + 1) el.scrollTo({ left: w, behavior: "instant" });
    };
    const onScroll = () => {
      const pos = Math.round(el.scrollLeft / el.clientWidth);
      setActive((((pos - 1) % N) + N) % N);
      clearTimeout(timer);
      timer = setTimeout(settle, 140); // fallback for browsers without scrollend
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", settle);
    return () => {
      clearTimeout(timer);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", settle);
    };
  }, [looped]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (el) el.scrollTo({ left: (i + (looped ? 1 : 0)) * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="photo" aria-label="Photos of the shoe" aria-roledescription="carousel">
      <BlossomCarousel ref={(h) => { ref.current = h?.element ?? null; }} as="ul" className="gallery">
        {looped && <Slide p={PHOTOS[N - 1]} i={N - 1} copy />}
        {PHOTOS.map((p, i) => (
          <Slide key={p.src} p={p} i={i} />
        ))}
        {looped && <Slide p={PHOTOS[0]} i={0} copy />}
      </BlossomCarousel>
      <div className="gallery-bar">
        {PHOTOS.map((p, i) => {
          // Like Nike: only a window of 4 dots shows. The photo in view is a long pill,
          // and an end dot with more photos past it is drawn smaller.
          const start = Math.min(Math.max(active - 1, 0), N - DOTS);
          const end = start + DOTS - 1;
          const state =
            i === active ? "active"
            : i < start || i > end ? "hidden"
            : (i === start && start > 0) || (i === end && end < N - 1) ? "edge"
            : undefined;
          return (
            <button
              key={p.src}
              type="button"
              className="seg"
              data-state={state}
              tabIndex={state === "hidden" ? -1 : undefined}
              aria-label={`Show photo ${i + 1} of ${N}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            >
              <span />
            </button>
          );
        })}
      </div>
    </section>
  );
}
