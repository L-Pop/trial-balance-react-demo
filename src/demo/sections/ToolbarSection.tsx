import styles from "../Demo.module.css";
import { Swatch } from "../Swatch";
import { Toolbar } from "../../components/trial-balance-grid/Toolbar";

/**
 * Toolbar (Figma node 33:135). `filtersApplied` reveals the removable
 * filter-chip row and tints the filter button; `searchQuery` seeds the
 * search field's value.
 */
export function ToolbarSection() {
  return (
    <section id="toolbar" className={styles.section}>
      <h2 className={styles.sectionHeading}>Toolbar</h2>
      <p className={styles.sectionDescription}>
        Text property <code>searchQuery</code>, boolean property{" "}
        <code>filtersApplied</code>. Variants: Default / Search active /
        Filters applied.
      </p>
      <div className={styles.swatchGrid}>
        <Swatch label="Default" wide>
          <Toolbar />
        </Swatch>
        <Swatch label="Search active" wide>
          <Toolbar variant="search-active" searchQuery="accounts rec" />
        </Swatch>
        <Swatch label="Filters applied" wide>
          <Toolbar
            variant="filters-applied"
            filtersApplied
            filters={[
              { label: "All accounts" },
              { label: "Assets", active: true },
              { label: "Liabilities" },
              { label: "Equity" },
              { label: "Revenue", active: true },
              { label: "Expenses" },
            ]}
          />
        </Swatch>
      </div>
    </section>
  );
}
