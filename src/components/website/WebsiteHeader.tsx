import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type HeaderProps = Record<string, never>;

export const WebsiteHeader: React.FC<HeaderProps> = () => (
<div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      zIndex: 5,
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(6,11,17,.75)",
      borderBottom: `1px solid ${COLORS.border}`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        lineHeight: 1,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.serif,
          fontSize: 25,
          fontWeight: 600,
        }}
      >
        KM
      </span>

      <span
        style={{
          marginTop: 3,
          color: COLORS.muted,
          fontSize: 6,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        Studio
      </span>
    </div>

    <div
      style={{
        display: "flex",
        gap: 19,
        color: "rgba(238,236,231,.68)",
        fontSize: 6,
        letterSpacing: 1,
      }}
    >
      <span>Início</span>
      <span>Serviços</span>
      <span>Projetos</span>
      <span>Modelos</span>
      <span>Sobre</span>
      <span>Contato</span>
    </div>
  </div>
);
