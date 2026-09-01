import styles from "../Demo.module.css";
import { Swatch } from "../Swatch";
import { Toolbar } from "../../components/trial-balance-grid/Toolbar";

/**
 * Toolbar (Figma node 33:135). `filtersApplied` reveals the removable
 * filter-chip row and tints the filter button; `searchQuery` seeds the
 * search field's value. Also demonstrates the optional column-visibility
 * (settings), Edit, Export, and multi-term search controls used by the
 * composed Mock Reference App Screen grid.
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
        <Swatch label="Multiple search terms (committed chips)" wide>
          <Toolbar variant="search-active" searchTerms={["cash", "payable"]} />
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
        <Swatch label="Column visibility (settings)" wide>
          <Toolbar
            columns={[
              { key: "debit", label: "Debit", visible: true },
              { key: "credit", label: "Credit", visible: true },
              { key: "notes", label: "Notes", visible: false },
              { key: "ref", label: "Ref #", visible: true },
            ]}
          />
        </Swatch>
        <Swatch label="Edit button" wide>
          <Toolbar onEdit={() => {}} />
        </Swatch>
        <Swatch label="Edit button (active)" wide>
          <Toolbar onEdit={() => {}} editActive />
        </Swatch>
        <Swatch label="Export" wide>
          <Toolbar onExportPdf={() => {}} onExportExcel={() => {}} />
        </Swatch>
      </div>
    </section>
  );
}
