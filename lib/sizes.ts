// Nike Pegasus 43, style HV7521-001, Black/White-Volt, $140.
// Source of truth: PEGASUS-STOCK.md. The order here is display_order (smallest to largest).
// qty 0 = sold out. 1 to LOW_STOCK_MAX = low stock.

export type Size = {
  men: number;
  women: number;
  eu: string;
  qty: number;
};

export const LOW_STOCK_MAX = 5;

export const SIZES: Size[] = [
  { men: 3.5, women: 5, eu: "35.5", qty: 0 },
  { men: 4, women: 5.5, eu: "36", qty: 4 },
  { men: 4.5, women: 6, eu: "36.5", qty: 18 },
  { men: 5, women: 6.5, eu: "37.5", qty: 26 },
  { men: 5.5, women: 7, eu: "38", qty: 34 },
  { men: 6, women: 7.5, eu: "38.5", qty: 47 },
  { men: 6.5, women: 8, eu: "39", qty: 63 },
  { men: 7, women: 8.5, eu: "40", qty: 88 },
  { men: 7.5, women: 9, eu: "40.5", qty: 112 },
  { men: 8, women: 9.5, eu: "41", qty: 164 },
  { men: 8.5, women: 10, eu: "42", qty: 198 },
  { men: 9, women: 10.5, eu: "42.5", qty: 3 },
  { men: 9.5, women: 11, eu: "43", qty: 2 },
  { men: 10, women: 11.5, eu: "44", qty: 0 },
  { men: 10.5, women: 12, eu: "44.5", qty: 212 },
  { men: 11, women: 12.5, eu: "45", qty: 5 },
  { men: 11.5, women: 13, eu: "45.5", qty: 176 },
  { men: 12, women: 13.5, eu: "46", qty: 138 },
  { men: 12.5, women: 14, eu: "47", qty: 84 },
  { men: 13, women: 14.5, eu: "47.5", qty: 71 },
  { men: 13.5, women: 15, eu: "48", qty: 36 },
  { men: 14, women: 15.5, eu: "48.5", qty: 29 },
  { men: 14.5, women: 16, eu: "49", qty: 14 },
  { men: 15, women: 16.5, eu: "49.5", qty: 1 },
  { men: 15.5, women: 17, eu: "50", qty: 0 },
  { men: 16, women: 17.5, eu: "50.5", qty: 0 },
];

export const isSoldOut = (s: Size) => s.qty === 0;
export const isLowStock = (s: Size) => s.qty > 0 && s.qty <= LOW_STOCK_MAX;
export const sizeName = (s: Size) => `M ${s.men} / W ${s.women}`;
