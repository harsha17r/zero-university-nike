import feed from "@/data/stock-2026-12-08.json";

// Nike Pegasus 43, style HV7521-001, Black/White-Volt, $140.
// Source of truth: data/stock-2026-12-08.json (the 8 December 2026 stock list).
// Status comes straight from the feed's stock_status. Order is the feed's display_order.

export type Status = "in_stock" | "low_stock" | "sold_out";

export type Size = {
  men: number;
  women: number;
  eu: string;
  qty: number;
  status: Status;
};

export const SIZES: Size[] = [...feed]
  .sort((a, b) => a.display_order - b.display_order)
  .map((row) => ({
    men: row.size_us_men,
    women: row.size_us_women,
    eu: row.size_eu,
    qty: row.stock_quantity,
    status: row.stock_status as Status,
  }));

// Release date, shared by every row of the feed.
export const LAUNCH_DATE: string = feed[0].launch_date;

export const isSoldOut = (s: Size) => s.status === "sold_out";
export const isLowStock = (s: Size) => s.status === "low_stock";
export const sizeName = (s: Size) => `M ${s.men} / W ${s.women}`;
