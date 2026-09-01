import { useState } from "react";
import styles from "../Demo.module.css";
import { TrialBalanceGrid } from "../../components/trial-balance-grid/TrialBalanceGrid";

const VIEWPORTS = [
  { key: "desktop", label: "Desktop — 1280", width: 1280 },
  { key: "tablet", label: "Tablet — 744", width: 744 },
  { key: "mobile", label: "Mobile — 390", width: 390 },
] as const;

/**
 * The mock reference-app screen: a "Ledger" app bar + Toolbar + full Trial
 * Balance grid, composed from Row / Header Cell / Cell / Toolbar.
 *
 * Column collapse order as width shrinks:
 * 1. Nothing — desktop (>= 900px) shows every column inline.
 * 2. Notes hides first once the tablet band gets tight (< 780px).
 * 3. Account Name (+ leading status + trailing action) freezes; the
 *    remaining columns scroll horizontally beneath it.
 * 4. Below 640px the grid becomes a stacked card list.
 *
 * Layout is measured from the component's own rendered width via
 * ResizeObserver, so it reacts identically to the buttons below or a manual
 * drag on the resizable frame.
 */
export function GridSection() {
  const [viewport, setViewport] = useState<(typeof VIEWPORTS)[number]["key"] | null>(
    "desktop",
  );
  const activeWidth = VIEWPORTS.find((v) => v.key === viewport)?.width ?? 1280;

  return (
    <section id="grid" className={styles.section}>
      <h2 className={styles.sectionHeading}>Mock Reference App Screen</h2>
      <p className={styles.sectionDescription}>
        The full composed, responsive grid. Use the viewport presets — pinned
        to the same 1280 / 744 / 390 Figma reference frames as the design —
        or drag the resizable frame's corner to watch the collapse live.
      </p>

      <div className={styles.viewportControls}>
        {VIEWPORTS.map((v) => (
          <button
            key={v.key}
            type="button"
            className={
              viewport === v.key
                ? `${styles.viewportButton} ${styles.viewportButtonActive}`
                : styles.viewportButton
            }
            onClick={() => setViewport(v.key)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div
        className={styles.pinnedFrame}
        style={{ ["--frame-width" as string]: `${activeWidth}px` }}
      >
        <TrialBalanceGrid showLayoutBadge />
      </div>

      <p className={styles.resizeHint} style={{ marginTop: 24 }}>
        Or drag the bottom-right corner below to resize freely:
      </p>
      <div className={styles.resizableFrame}>
        <TrialBalanceGrid showLayoutBadge />
      </div>
    </section>
  );
}
