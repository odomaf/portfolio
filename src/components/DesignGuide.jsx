import "./DesignGuide.css";

// Import centralized color palette for consistent theming
import palette from "../theme/palette";

export default function DesignGuide() {
  return (
    <div className="p-8 design-guide">
      {/* Page title */}
      <h1 className="text-[32px] leading-[110%]">Design Guide</h1>

      {/* Color palette section: shows all theme colors as swatches */}
      <section className="mb-8" id="color-palette-section">
        <h2 className="text-[24px] leading-[130%]">Color Palette</h2>
        <div className="palette-table">
          {palette.map((c) => (
            <div key={c.var} className="palette-table-row">
              {/* Column 1: Name, Hex, Var */}
              <div className="palette-table-col palette-table-info">
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-gray-500">{c.hex}</div>
                <div className="text-xs text-gray-500">{c.var}</div>
              </div>
              {/* Column 2: Swatch */}
              <div className="palette-table-col palette-table-swatch">
                <div
                  className="palette-swatch"
                  style={{ background: `var(${c.var})` }}
                  title={c.hex}
                />
              </div>
              {/* Column 3: Sample element */}
              <div className="palette-table-col palette-table-sample">
                {c.var === "--palette-1" && (
                  <>
                    <h1>Heading 1</h1>
                    <div className="header-footer-bg p-2 rounded">
                      Header/Footer Background
                    </div>
                  </>
                )}
                {c.var === "--palette-2" && (
                  <>
                    <h2>Heading 2</h2>
                    <span className="section-title">Section Title</span>
                    <button className="button-secondary">
                      Secondary Button
                    </button>
                  </>
                )}
                {c.var === "--palette-3" && (
                  <>
                    <h3>Heading 3</h3>
                    <a href="#">Link</a>
                  </>
                )}
                {c.var === "--palette-4" && (
                  <>
                    <h4>Heading 4</h4>
                    <button className="button-primary mt-2">
                      Primary Button
                    </button>
                  </>
                )}
                {c.var === "--palette-5" && (
                  <>
                    <h5
                      style={{
                        color: "var(--palette-5)",
                        margin: 0,
                        fontWeight: 700,
                      }}
                    >
                      Heading 5
                    </h5>
                    <span className="badge">Badge</span>
                  </>
                )}
                {c.var === "--palette-6" && (
                  <>
                    <span className="palette-sample-default-text">
                      Default Text
                    </span>
                    <button className="button-cancel mt-2">Close</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section Sample */}
      <section className="hero-section mt-12">
        <h1 className="on-dark-bg">Welcome to My Portfolio</h1>
        <p>
          Showcasing my work and skills with an accessible, vibrant palette.
          <br />
          <a
            href="https://github.com/odomaf/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source on GitHub
          </a>
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 700,
            margin: "0 auto 1.5rem auto",
          }}
        >
          <button className="button-primary">Primary Button</button>
          <button className="button-secondary">Secondary Button</button>
          <button className="button-cancel">Close</button>
          <div className="badge">
            <strong>Badge</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
