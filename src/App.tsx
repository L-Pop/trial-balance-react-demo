import "./components/trial-balance-grid/tokens.css";
import styles from "./demo/Demo.module.css";
import { ToolbarSection } from "./demo/sections/ToolbarSection";
import { HeaderCellSection } from "./demo/sections/HeaderCellSection";
import { RowSection } from "./demo/sections/RowSection";
import { CellSection } from "./demo/sections/CellSection";
import { GridSection } from "./demo/sections/GridSection";

const NAV = [
  { href: "#toolbar", label: "Toolbar" },
  { href: "#header-cell", label: "Header Cell" },
  { href: "#row", label: "Row" },
  { href: "#cell", label: "Cell" },
  { href: "#grid", label: "Mock Reference App Screen" },
];

function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Trial Balance Grid — Component Demo</h1>
        <p className={styles.subtitle}>
          A React implementation of the Figma{" "}
          <a href="https://www.figma.com/design/YCIOOyXcatc7zjImBIegHP/Trial-Balance-Table">
            Trial Balance Table
          </a>{" "}
          component set — Toolbar, Header Cell, Row and Cell, composed into a
          responsive grid.
        </p>
        <nav className={styles.nav}>
          {NAV.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <ToolbarSection />
        <HeaderCellSection />
        <RowSection />
        <CellSection />
        <GridSection />
      </main>

      <footer className={styles.footer}>
        Design tokens are Material 3 component tokens extracted from the
        Figma file's Design Tokens page.
      </footer>
    </div>
  );
}

export default App;
