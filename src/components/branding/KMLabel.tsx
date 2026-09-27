import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type KMLabelProps = {
  number: string;
  children: React.ReactNode;
};

export const KMLabel: React.FC<KMLabelProps> = ({ number, children }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16,
    color: COLORS.gold,
    fontFamily: FONTS.sans,
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 3,
  }}>
    <span style={{ color: COLORS.blue, fontSize: 11, letterSpacing: 1 }}>
      {number}
    </span>
    <span>{children}</span>
  </div>
);
