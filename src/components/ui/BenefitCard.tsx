import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type BenefitCardProps = {
  number: string;
  title: string;
  text: string;
};

export const BenefitCard: React.FC<BenefitCardProps> = ({
  number,
  title,
  text,
}) => (
  <div style={{
    minHeight: 190,
    padding: 28,
    borderRight: `1px solid ${COLORS.border}`,
    borderBottom: `1px solid ${COLORS.border}`,
  }}>
    <div style={{
      color: COLORS.blue,
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: 2,
    }}>{number}</div>
    <h3 style={{
      marginTop: 38,
      fontFamily: FONTS.serif,
      fontSize: 21,
      fontWeight: 400,
      color: COLORS.white,
    }}>{title}</h3>
    <p style={{
      marginTop: 10,
      color: COLORS.muted,
      fontFamily: FONTS.sans,
      fontSize: 9,
      lineHeight: 1.75,
    }}>{text}</p>
  </div>
);
