
import "./DesignGuide.css";

const palette = [
  { name: "Deep Purple", var: "--palette-1", hex: "#2d033b" },
  { name: "Teal", var: "--palette-2", hex: "#14b8a6" },
  { name: "Blue", var: "--palette-3", hex: "#2563eb" },
  { name: "Deep Green", var: "--palette-4", hex: "#166534" },
  { name: "Magenta", var: "--palette-5", hex: "#ff1fae" },
];

export default function DesignGuide() {
  return (
    <div className="p-8">
      <h1>Design Guide</h1>
      <section className="mb-8">
        <h2>Color Palette</h2>
        <div className="palette-row">
          {palette.map((c) => (
            <div key={c.var} className="text-center">
              <div
                className="palette-swatch"
                style={{ background: c.hex }}
                title={c.hex}
              />
              <div className="text-sm">{c.name}</div>
              <div className="text-xs text-gray-500">{c.hex}</div>
              <div className="text-xs text-gray-500">{c.var}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2>Headings</h2>
        <h1>Heading 1 (h1)</h1>
        <h2>Heading 2 (h2)</h2>
        <h3>Heading 3 (h3)</h3>
        <h4>Heading 4 (h4)</h4>
        <h5>Heading 5 (h5)</h5>
      </section>
      <section>
        <h2>Container Example</h2>
        <div className="bg-white border border-[#e5e4e7] rounded-lg p-6 max-w-xl mx-auto shadow-sm">
          <p>
            This is a sample container. Adjust padding, border, and background
            to experiment with layout.
          </p>
        </div>
      </section>
    </div>
  );
}
