"use client";

import { Drawer } from "vaul";
import { SIZES, isSoldOut } from "@/lib/sizes";

type SizeGuideProps = {
  open: boolean;
  onClose: () => void;
};

// Bottom drawer with the men's, women's and EU sizes, built on Vaul (github.com/emilkowalski/vaul).
// It slides up, can be dragged down to close, and closes on the overlay, Escape or the X.
// EU sizes live only here, not on the buttons.
// Alignment: one left edge (the 16px gutter) for the title, the first column's header and its numbers.
// Three equal columns, all left-aligned, so each column starts on one straight line.
export default function SizeGuide({ open, onClose }: SizeGuideProps) {
  return (
    <Drawer.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Drawer.Portal>
        <Drawer.Overlay className="sheet-overlay" />
        <Drawer.Content className="sheet" aria-describedby={undefined}>
          <Drawer.Handle className="sheet-handle" />
          <div className="sheet-head gutter">
            <Drawer.Title className="sheet-title">Size guide</Drawer.Title>
            <Drawer.Close className="icon-btn" aria-label="Close size guide">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </Drawer.Close>
          </div>
          <div className="sheet-body gutter">
            <table>
              <thead>
                <tr>
                  <th scope="col">Men’s US</th>
                  <th scope="col">Women’s US</th>
                  <th scope="col">EU</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((size) => (
                  <tr key={size.men} className={isSoldOut(size) ? "gone" : undefined}>
                    <td>{size.men}</td>
                    <td>{size.women}</td>
                    <td>{size.eu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
