import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type KMButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
};

export const KMButton: React.FC<KMButtonProps> = ({
  children,
  secondary = false,
}) => (
  <div style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 154,
    padding: "15px 23px",
    fontFamily: FONTS.sans,
    fontSize: 9,
    fontWeight: 500,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: secondary ? COLORS.gold : "#111",
    background: secondary ? "rgba(5,10,16,.12)" : COLORS.gold,
    border: `1px solid ${secondary ? "rgba(217,199,166,.42)" : COLORS.gold}`,
  }}>
    {children}
  </div>
);
