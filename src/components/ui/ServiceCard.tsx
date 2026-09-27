import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type ServiceCardProps = {
  number: string;
  title: string;
  text: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  text,
}) => (
  <div style={{
    position: "relative",
    minHeight: 250,
    padding: "32px 30px",
    borderRight: `1px solid ${COLORS.border}`,
    borderBottom: `1px solid ${COLORS.border}`,
    background: COLORS.black,
  }}>
    <span style={{
      position: "absolute",
      top: 28,
      right: 25,
      color: COLORS.blue,
      fontFamily: FONTS.sans,
      fontSize: 10,
    }}>{number}</span>
    <h3 style={{
      marginTop: 55,
      fontFamily: FONTS.serif,
      fontSize: 25,
      fontWeight: 400,
      color: COLORS.white,
    }}>{title}</h3>
    <p style={{
      maxWidth: 320,
      marginTop: 15,
      color: COLORS.muted,
      fontFamily: FONTS.sans,
      fontSize: 10,
      lineHeight: 1.8,
    }}>{text}</p>
  </div>
);
