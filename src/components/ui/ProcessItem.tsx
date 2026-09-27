import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type ProcessItemProps = {
  number: string;
  title: string;
  text: string;
};

export const ProcessItem: React.FC<ProcessItemProps> = ({
  number,
  title,
  text,
}) => (
  <div style={{
    minHeight: 165,
    padding: 28,
    display: "grid",
    gridTemplateColumns: "45px 1fr",
    columnGap: 20,
    borderRight: `1px solid ${COLORS.border}`,
    borderBottom: `1px solid ${COLORS.border}`,
  }}>
    <span style={{
      color: COLORS.blue,
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: 2,
    }}>{number}</span>
    <h3 style={{
      fontFamily: FONTS.serif,
      fontSize: 22,
      fontWeight: 400,
      color: COLORS.white,
    }}>{title}</h3>
    <p style={{
      gridColumn: 2,
      marginTop: -5,
      color: COLORS.muted,
      fontFamily: FONTS.sans,
      fontSize: 9,
      lineHeight: 1.8,
    }}>{text}</p>
  </div>
);
