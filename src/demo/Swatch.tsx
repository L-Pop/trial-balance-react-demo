import type { ReactNode } from "react";
import styles from "./Demo.module.css";

export interface SwatchProps {
  label: string;
  wide?: boolean;
  children: ReactNode;
}

/** A labeled tile showing one variant of a component, used across every demo section. */
export function Swatch({ label, wide, children }: SwatchProps) {
  return (
    <div className={wide ? `${styles.swatch} ${styles.swatchWide}` : styles.swatch}>
      <span className={styles.swatchLabel}>{label}</span>
      <div className={styles.swatchBody}>{children}</div>
    </div>
  );
}
