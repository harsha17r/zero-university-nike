"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import SizeGrid from "./SizeGrid";
import SizeGuide from "./SizeGuide";
import { LAUNCH_DATE, SIZES, isLowStock, sizeName } from "@/lib/sizes";
import { hasLaunched, longLaunch, shortLaunch } from "@/lib/launch";

// Top of the page, in order: nav bar, title block (name, grey colorway line, price), photo, size grid.
// The sticky bar stays pinned to the bottom. Before the launch date from the stock feed it is disabled
// and says "Available 10 December"; from the launch date on it says "Add to bag".
export default function ShoeApp() {
  const [selected, setSelected] = useState<number | null>(null);
  const [bag, setBag] = useState(0);
  const [message, setMessage] = useState("");
  const [guideOpen, setGuideOpen] = useState(false);
  const [launched, setLaunched] = useState(false);
  const sizesRef = useRef<HTMLElement>(null);

  // Checked in the browser after the page loads, so the server and browser HTML match.
  // The button keeps the same size either way, so nothing moves.
  useEffect(() => {
    setLaunched(hasLaunched(LAUNCH_DATE, Date.now()));
  }, []);

  function handleSelect(index: number) {
    const size = SIZES[index];
    setSelected(index);
    setMessage(
      isLowStock(size) ? `Only ${size.qty} left in ${sizeName(size)}.` : "",
    );
  }

  function handleAddToBag() {
    if (!launched) return;
    if (selected === null) {
      const section = sizesRef.current;
      if (section) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        section.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
        const grid = section.querySelector(".grid");
        if (grid) {
          grid.classList.remove("shake");
          void (grid as HTMLElement).offsetWidth; // restart the animation
          grid.classList.add("shake");
        }
      }
      setMessage("Select a size.");
      return;
    }
    setBag((n) => n + 1);
    setMessage(`Added ${sizeName(SIZES[selected])} to your bag.`);
  }

  return (
    <div className="page">
      <Nav bagCount={bag} />

      <main>
        <section className="title gutter" aria-label="Product">
          <h1>Nike Pegasus 43</h1>
          <p className="meta">Road running shoe · Black/White-Volt</p>
          <div className="price-row">
            <span className="price" data-testid="price">$140</span>
            <span className="reviews" data-testid="launch-note">
              {launched ? (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8L12 3.5z" />
                  </svg>
                  No reviews yet
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="5.5" width="16" height="14" rx="2" />
                    <path d="M4 10h16M8 3.5v4M16 3.5v4" />
                  </svg>
                  Launches {shortLaunch(LAUNCH_DATE)}
                </>
              )}
            </span>
          </div>
        </section>

        <div className="photo">
          <Image
            src="/pegasus-photo.jpg"
            data-testid="main-photo"
            alt="Black running shoe with volt-yellow accents, side view, floating against a white background"
            width={900}
            height={557}
            sizes="(max-width: 480px) 100vw, 480px"
            priority
          />
        </div>

        <section className="gutter size-section" aria-label="Size selector" ref={sizesRef}>
          <div className="size-head">
            <h2 id="size-label">Select size</h2>
            <button className="link-btn" type="button" onClick={() => setGuideOpen(true)}>
              Size guide
            </button>
          </div>
          <SizeGrid selected={selected} onSelect={handleSelect} />
          <div className="status" aria-live="polite">
            {message && <p>{message}</p>}
          </div>
        </section>

        <footer className="foot gutter">
          Design prototype, not a store. The photo is a different Nike running shoe, by{" "}
          <a href="https://unsplash.com/photos/LxVxPA1LOVM" target="_blank" rel="noopener">
            Imani Bahati on Unsplash
          </a>
          .
        </footer>
      </main>

      <div className="bar gutter">
        <button className="cta" type="button" onClick={handleAddToBag} disabled={!launched}>
          {launched ? "Add to bag" : `Available ${longLaunch(LAUNCH_DATE)}`}
        </button>
      </div>

      <SizeGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}
