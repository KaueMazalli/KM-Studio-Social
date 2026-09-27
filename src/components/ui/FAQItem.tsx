import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div style={{
    padding: "24px 0",
    borderBottom: `1px solid ${COLORS.border}`,
  }}>
    <h3 style={{
      fontFamily: FONTS.serif,
      fontSize: 18,
      fontWeight: 400,
      color: COLORS.white,
    }}>{question}</h3>
    <p style={{
      maxWidth: 680,
      marginTop: 10,
      color: COLORS.muted,
      fontFamily: FONTS.sans,
      fontSize: 9,
      lineHeight: 1.8,
    }}>{answer}</p>
  </div>
);
