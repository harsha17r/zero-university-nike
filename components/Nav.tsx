type NavProps = {
  bagCount: number;
};

// 56px nav bar. Nike Swoosh on the left (no back button), like Nike's mobile page. Icons: 24px, 1.75 stroke.
export default function Nav({ bagCount }: NavProps) {
  return (
    <header className="nav gutter">
      <div className="group">
        <a className="logo" href="/" aria-label="Nike home">
          <svg viewBox="3 8.55 18 6.6" aria-hidden="true">
            <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" />
          </svg>
        </a>
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
