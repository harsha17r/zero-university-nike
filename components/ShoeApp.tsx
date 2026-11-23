"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import SizeGrid from "./SizeGrid";
import SizeGuide from "./SizeGuide";
import Gallery from "./Gallery";
import { LAUNCH_DATE, SIZES, isLowStock, sizeName } from "@/lib/sizes";
import { hasLaunched, monthDayLaunch } from "@/lib/launch";

// Top of the page, in order: nav bar, title block (name, grey category line, price, launch line),
// photo carousel, size grid. The sticky bar stays pinned to the bottom. Before the launch date from the
// stock feed it is disabled but still says "Add to bag", and the line under the price says
// "Launching December 10". From the launch date on the button works and that line says "No ratings yet".
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
          <p className="meta">Road running shoe</p>
          <p className="price" data-testid="price">$140</p>
          <p className="launch" data-testid="price-note">
            {launched ? (
              <>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8L12 3.5z" />
                </svg>
                No ratings yet
              </>
            ) : (
              <span className="launch-soon">Launching {monthDayLaunch(LAUNCH_DATE)}</span>
            )}
          </p>
        </section>

        <Gallery />

        <section className="gutter size-section" aria-label="Size selector" ref={sizesRef}>
          <div className="size-head">
            <h2 id="size-label">Select size</h2>
            <button className="link-btn" type="button" onClick={() => setGuideOpen(true)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M3 17.25c0 .414.336.75.75.75H6v-1.5h1.5V18h3.75v-1.5h1.5V18h3.75v-1.5H18V18h2.25a.75.75 0 0 0 .75-.75V10.5h1.5v6.75a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25V10.5H3zM19.56 8l-3.03 3.03-1.06-1.06 1.22-1.22H7.31l1.22 1.22-1.06 1.06L4.44 8l3.03-3.03 1.06 1.06-1.22 1.22h9.38l-1.22-1.22 1.06-1.06z" />
              </svg>
              Size guide
            </button>
          </div>
          <SizeGrid selected={selected} onSelect={handleSelect} />
          <div className="status" aria-live="polite">
            {message && <p>{message}</p>}
          </div>
        </section>

        <footer className="foot gutter">
          Design prototype, not a store. Photos of the Nike Pegasus 42 from nike.com.
        </footer>
      </main>

      <div className="bar">
        <button className="cta" type="button" onClick={handleAddToBag} disabled={!launched}>
          Add to Bag
        </button>
      </div>

      <SizeGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}
