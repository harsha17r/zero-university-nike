"use client";

import { useEffect, useRef } from "react";
import { SIZES, isSoldOut } from "@/lib/sizes";

type SizeGuideProps = {
  open: boolean;
  onClose: () => void;
};

// Bottom sheet with the men's, women's and EU sizes. EU sizes live only here, not on the buttons.
export default function SizeGuide({ open, onClose }: SizeGuideProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="sheet-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sheet-head gutter">
        <h2 id="sheet-title">Size guide</h2>
        <button
          className="icon-btn"
          type="button"
          aria-label="Close size guide"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div className="sheet-body gutter">
        <table>
          <thead>
            <tr>
              <th>Men’s US</th>
              <th>Women’s US</th>
              <th>EU</th>
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
    </dialog>
  );
}
