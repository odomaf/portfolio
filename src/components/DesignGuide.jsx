import React from "react";

const palette = [
  { name: "Deep Purple", var: "--palette-1", hex: "#2d033b" },
  { name: "Teal", var: "--palette-2", hex: "#14b8a6" },
  { name: "Blue", var: "--palette-3", hex: "#2563eb" },
  { name: "Deep Green", var: "--palette-4", hex: "#166534" },
  { name: "Magenta", var: "--palette-5", hex: "#ff1fae" },
];

export default function DesignGuide() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Design Guide</h1>
      <section style={{ marginBottom: 32 }}>
        <h2>Color Palette</h2>
        <div style={{ display: "flex", gap: 24 }}>
          {palette.map((c) => (
            <div key={c.var} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 8,
                  background: `var(${c.var}, ${c.hex})`,
                  border: "2px solid #eee",
                  marginBottom: 8,
                }}
                title={c.hex}
              />
              <div style={{ fontSize: 14 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{c.hex}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{c.var}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2>Headings</h2>
        <h1>Heading 1 (h1)</h1>
        <h2>Heading 2 (h2)</h2>
        <h3>Heading 3 (h3)</h3>
        <h4>Heading 4 (h4)</h4>
        <h5>Heading 5 (h5)</h5>
      </section>
      <section>
        <h2>Container Example</h2>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e4e7",
            borderRadius: 8,
            padding: 24,
            maxWidth: 600,
            margin: "0 auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <p>
            This is a sample container. Adjust padding, border, and background
            to experiment with layout.
          </p>
        </div>
      </section>
    </div>
  );
}
