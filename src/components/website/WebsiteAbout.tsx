import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";

type AboutProps = Record<string, never>;

export const WebsiteAbout: React.FC<AboutProps> = () => (
<section
    style={{
      height: 470,
      padding: "75px 48px",
    }}
  >
    <KMLabel number="05">SOBRE</KMLabel>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr .8fr",
        gap: 70,
        marginTop: 50,
      }}
    >
      <h2
        style={{
          fontFamily: FONTS.serif,
          fontSize: 48,
          fontWeight: 400,
          lineHeight: 1.05,
        }}
      >
        Design com{" "}
        <em
          style={{
            color: COLORS.gold,
            fontStyle: "italic",
          }}
        >
          propósito.
        </em>
      </h2>

      <div
        style={{
          color: COLORS.muted,
          fontSize: 8,
          lineHeight: 1.9,
        }}
      >
        <p>
          A KM Studio é um estúdio independente focado na criação de
          sites profissionais para empresas, profissionais e pequenos
          negócios.
        </p>

        <p style={{ marginTop: 20 }}>
          Unimos design, desenvolvimento e estratégia visual para
          transformar ideias em experiências digitais rápidas,
          responsivas e alinhadas à identidade de cada negócio.
        </p>
      </div>
    </div>
  </section>
);
