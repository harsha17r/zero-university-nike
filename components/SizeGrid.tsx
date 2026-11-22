import { SIZES, isSoldOut, sizeName } from "@/lib/sizes";

type SizeGridProps = {
  selected: number | null;
  onSelect: (index: number) => void;
};

// All 26 sizes in display order. Sold-out sizes keep their cell and are disabled,
// so nothing shifts and they cannot be tapped or focused.
export default function SizeGrid({ selected, onSelect }: SizeGridProps) {
  return (
    <ul className="grid" aria-labelledby="size-label">
      {SIZES.map((size, i) => {
        const soldOut = isSoldOut(size);
        const isSelected = selected === i;
        return (
          <li key={size.men}>
            <button
              type="button"
              className="size"
              aria-pressed={isSelected}
              aria-label={`${sizeName(size)}${soldOut ? ", sold out" : ""}`}
              disabled={soldOut}
              onClick={() => onSelect(i)}
            >
              <span>M {size.men}</span>
              <span className="w">W {size.women}</span>
              {isSelected && (
                <span className="check" aria-hidden="true">
                  <svg viewBox="0 0 14 14">
                    <path d="M3.8 7.2l2.2 2.2 4.2-4.4" />
                  </svg>
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
