import type { ReactNode } from "react";
import styles from "../Demo.module.css";
import { Swatch } from "../Swatch";
import { HeaderCell } from "../../components/trial-balance-grid/HeaderCell";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: 220, background: "#f3edf7", borderRadius: 8 }}>
      {children}
    </div>
  );
}

/**
 * Header Cell (Figma node 30:44). `sortable` and `pinned` are boolean
 * properties; the trailing icon slot swaps between unfold / sort-ascending /
 * sort-descending / filter-active, modeled here as the `variant` prop.
 */
export function HeaderCellSection() {
  return (
    <section id="header-cell" className={styles.section}>
      <h2 className={styles.sectionHeading}>Header Cell</h2>
      <p className={styles.sectionDescription}>
        Text property <code>columnLabel</code>, boolean properties{" "}
        <code>sortable</code> / <code>pinned</code>. Variants: Default /
        Sorted ascending / Sorted descending / Filter active.
      </p>
      <div className={styles.swatchGrid}>
        <Swatch label="Default">
          <Frame>
            <HeaderCell columnLabel="Account Name" sortable />
          </Frame>
        </Swatch>
        <Swatch label="Sorted ascending">
          <Frame>
            <HeaderCell columnLabel="Debit" sortable align="end" variant="sorted-ascending" />
          </Frame>
        </Swatch>
        <Swatch label="Sorted descending">
          <Frame>
            <HeaderCell columnLabel="Credit" sortable align="end" variant="sorted-descending" />
          </Frame>
        </Swatch>
        <Swatch label="Filter active">
          <Frame>
            <HeaderCell columnLabel="Notes" variant="filter-active" />
          </Frame>
        </Swatch>
        <Swatch label="Pinned">
          <Frame>
            <HeaderCell columnLabel="Account Name" sortable pinned />
          </Frame>
        </Swatch>
        <Swatch label="Not sortable">
          <Frame>
            <HeaderCell columnLabel="Ref #" />
          </Frame>
        </Swatch>
      </div>
    </section>
  );
}
