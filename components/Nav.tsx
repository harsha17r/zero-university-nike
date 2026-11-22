type NavProps = {
  bagCount: number;
};

// 56px nav bar. No brand logo. One icon style: 24px, 1.75 stroke, no bounding shapes.
export default function Nav({ bagCount }: NavProps) {
  return (
    <header className="nav gutter">
      <div className="group">
        <button className="icon-btn back" type="button" aria-label="Back">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
      </div>
      <div className="group">
        <button className="icon-btn" type="button" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </svg>
        </button>
        <button
          className="icon-btn"
          type="button"
          aria-label={bagCount > 0 ? `Bag, ${bagCount} items` : "Bag"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 8h14l-1 12H6L5 8z" />
            <path d="M9 8V6.5a3 3 0 016 0V8" />
          </svg>
          {bagCount > 0 && <span className="bag-count">{bagCount}</span>}
        </button>
        <button className="icon-btn" type="button" aria-label="Menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
