import { SIZES, isSoldOut, sizeName } from "@/lib/sizes";

type SizeGridProps = {
  selected: number | null;
  onSelect: (index: number) => void;
};

// All 26 sizes in display order, 3 columns. One-line label, men's and women's at the same
// size and weight, like Nike: "M 10.5 / W 12". Sold-out sizes keep their cell and are disabled,
// so nothing shifts and they cannot be tapped or focused.
export default function SizeGrid({ selected, onSelect }: SizeGridProps) {
  return (
    <ul className="grid" aria-labelledby="size-label">
      {SIZES.map((size, i) => {
        const soldOut = isSoldOut(size);
        return (
          <li key={size.men}>
            <button
              type="button"
              className="size"
              aria-pressed={selected === i}
              aria-label={`${sizeName(size)}${soldOut ? ", sold out" : ""}`}
              disabled={soldOut}
              onClick={() => onSelect(i)}
            >
              <span>{sizeName(size)}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
