import type { ReactNode } from "react";
import styles from "../Demo.module.css";
import { Swatch } from "../Swatch";
import { Row } from "../../components/trial-balance-grid/Row";
import { Cell } from "../../components/trial-balance-grid/Cell";
import {
  IconStatusFlagged,
  IconStatusNone,
  IconStatusSelected,
} from "../../components/trial-balance-grid/icons/Icons";

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
 * container treatment. Leading/trailing slots are instance-swap icons.
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
            <Row variant="default">{threeCells("Accounts Receivable", "18,900.00", "—")}</Row>
          </Frame>
        </Swatch>
        <Swatch label="Hover" wide>
          <Frame>
            <Row variant="hover">{threeCells("Accounts Receivable", "18,900.00", "—")}</Row>
          </Frame>
        </Swatch>
        <Swatch label="Selected" wide>
          <Frame>
            <Row variant="selected" leadingSlot={<IconStatusSelected />}>
              {threeCells("Accounts Receivable", "18,900.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Disabled / read-only" wide>
          <Frame>
            <Row variant="disabled" leadingSlot={<IconStatusNone />}>
              {threeCells("Suspense Account", "0.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Error" wide>
          <Frame>
            <Row variant="error" leadingSlot={<IconStatusFlagged />}>
              {threeCells("Utilities — Overdue", "—", "(3,150.00)")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="selected / hasError badges (independent of variant)" wide>
          <Frame>
            <Row variant="default" selected hasError>
              {threeCells("Accounts Receivable", "18,900.00", "—")}
            </Row>
          </Frame>
        </Swatch>
        <Swatch label="Zebra striping (default variant only)" wide>
          <Frame>
            <div>
              <Row variant="default" zebra={false}>
                {threeCells("Cash", "45,230.00", "—")}
              </Row>
              <Row variant="default" zebra={true}>
                {threeCells("Accounts Receivable", "18,900.00", "—")}
              </Row>
            </div>
          </Frame>
        </Swatch>
      </div>
    </section>
  );
}
