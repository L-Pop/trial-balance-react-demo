import type { ReactNode } from "react";
import styles from "../Demo.module.css";
import { Swatch } from "../Swatch";
import { Row } from "../../components/trial-balance-grid/Row";
import { Cell } from "../../components/trial-balance-grid/Cell";
import gridStyles from "../../components/trial-balance-grid/TrialBalanceGrid.module.css";

function toneFor(value: string): "default" | "positive" | "negative" {
  if (value === "—" || value === "") return "default";
  return value.trim().startsWith("(") ? "negative" : "positive";
}

function threeCells(a: string, b: string, c: string) {
  return (
    <>
      <Cell cellValue={a} />
      <Cell cellValue={b} align="end" tone={toneFor(b)} />
      <Cell cellValue={c} align="end" tone={toneFor(c)} />
    </>
  );
}

/** Matches the row-select radio used in the actual Mock Reference App Screen grid. */
function selectRadio(checked: boolean, disabled = false) {
  return (
    <input
      type="radio"
      name="row-demo"
      className={gridStyles.selectRadio}
      defaultChecked={checked}
      disabled={disabled}
      aria-label="Select row"
    />
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: "100%", border: "1px solid #cac4d0", borderRadius: 12, overflow: "hidden" }}>
      {children}
    </div>
  );
}

/**
 * Row (Figma node 31:245), composed of Cell instances. `selected` and
 * `hasError` toggle small inline badges independent of the full variant
 * container treatment. Leading/trailing slots are instance-swap icons —
 * shown here as the row-select radio used by the composed grid.
 */
export function RowSection() {
  return (
    <section id="row" className={styles.section}>
      <h2 className={styles.sectionHeading}>Row</h2>
      <p className={styles.sectionDescription}>
        Boolean properties <code>selected</code> / <code>hasError</code>,
        instance-swap slots <code>leadingSlot</code> / <code>trailingSlot</code>.
        Variants: Default / Hover / Selected / Disabled (read-only) / Error.
      </p>
      <div className={styles.swatchGrid}>
        <Swatch label="Default" wide>
          <Frame>
            <Row variant="default" leadingSlot={selectRadio(false)}>
              {threeCells("Accounts Receivable", "18,900.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Hover" wide>
          <Frame>
            <Row variant="hover" leadingSlot={selectRadio(false)}>
              {threeCells("Accounts Receivable", "18,900.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Selected" wide>
          <Frame>
            <Row variant="selected" leadingSlot={selectRadio(true)}>
              {threeCells("Accounts Receivable", "18,900.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Disabled / read-only" wide>
          <Frame>
            <Row variant="disabled" leadingSlot={selectRadio(false, true)}>
              {threeCells("Suspense Account", "0.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Error" wide>
          <Frame>
            <Row variant="error" leadingSlot={selectRadio(false)}>
              {threeCells("Utilities — Overdue", "—", "(3,150.00)")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="selected / hasError badges (independent of variant)" wide>
          <Frame>
            <Row variant="default" selected hasError leadingSlot={selectRadio(false)}>
              {threeCells("Accounts Receivable", "18,900.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Zebra striping (default variant only)" wide>
          <Frame>
            <div>
              <Row variant="default" zebra={false} leadingSlot={selectRadio(false)}>
                {threeCells("Cash", "45,230.00", "—")}
              </Row>
              <Row variant="default" zebra={true} leadingSlot={selectRadio(false)}>
                {threeCells("Accounts Receivable", "18,900.00", "—")}
              </Row>
            </div>
          </Frame>
        </Swatch>
      </div>
    </section>
  );
}
