import type { ReactNode } from "react";
import styles from "../Demo.module.css";
import { Swatch } from "../Swatch";
import { Cell } from "../../components/trial-balance-grid/Cell";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: 220, border: "1px dashed #cac4d0", borderRadius: 8 }}>
      {children}
    </div>
  );
}

/**
 * Cell (Figma node 28:26). minWidth 72 / maxWidth 220 — text truncates with
 * an ending ellipsis past maxWidth. `editable` shows a pencil affordance;
 * `hasError` shows an inline error glyph independent of the Error variant.
 */
export function CellSection() {
  return (
    <section id="cell" className={styles.section}>
      <h2 className={styles.sectionHeading}>Cell</h2>
      <p className={styles.sectionDescription}>
        Text property <code>cellValue</code>, boolean properties{" "}
        <code>editable</code> / <code>hasError</code>. Variants: Default /
        Editing / Error.
      </p>
      <div className={styles.swatchGrid}>
        <Swatch label="Default">
          <Frame>
            <Cell cellValue="18,900.00" variant="default" />
          </Frame>
        </Swatch>
        <Swatch label="Editing">
          <Frame>
            <Cell cellValue="18,900.00" editable variant="editing" />
          </Frame>
        </Swatch>
        <Swatch label="Error">
          <Frame>
            <Cell cellValue="(3,150.00)" hasError variant="error" />
          </Frame>
        </Swatch>
        <Swatch label="Editable (independent of Editing variant)">
          <Frame>
            <Cell cellValue="45,230.00" editable variant="default" />
          </Frame>
        </Swatch>
        <Swatch label="hasError badge (independent of Error variant)">
          <Frame>
            <Cell cellValue="8,200.00" hasError variant="default" />
          </Frame>
        </Swatch>
        <Swatch label="Positive value">
          <Frame>
            <Cell cellValue="12,400.00" tone="positive" align="end" />
          </Frame>
        </Swatch>
        <Swatch label="Negative value">
          <Frame>
            <Cell cellValue="(3,150.00)" tone="negative" align="end" />
          </Frame>
        </Swatch>
        <Swatch label="Truncated text (past 220px maxWidth)">
          <Frame>
            <Cell cellValue="Accumulated Depreciation — Office Equipment (Building B)" />
          </Frame>
        </Swatch>
      </div>
    </section>
  );
}
