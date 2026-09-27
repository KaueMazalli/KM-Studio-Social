import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";

type IntroProps = Record<string, never>;

export const WebsiteIntro: React.FC<IntroProps> = () => (
<section
    style={{
      height: 500,
      padding: "75px 48px",
    }}
  >
    <KMLabel number="01">KM STUDIO</KMLabel>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr .8fr",
        gap: 60,
        marginTop: 45,
      }}
    >
      <h2
        style={{
          fontFamily: FONTS.serif,
          fontSize: 41,
          fontWeight: 400,
          lineHeight: 1.05,
          margin: 0,
        }}
      >
        Presença digital{" "}
        <em
          style={{
            color: COLORS.gold,
            fontStyle: "italic",
          }}
        >
          com intenção.
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
          A KM Studio cria sites profissionais, landing pages e
          experiências digitais para empresas, profissionais e marcas.
        </p>

        <p style={{ marginTop: 18 }}>
          Unimos web design, desenvolvimento e estratégia visual para
          criar sites rápidos, responsivos e alinhados aos objetivos
          de cada negócio.
        </p>

        <p style={{ marginTop: 18 }}>
          Cada projeto é pensado para apresentar uma marca de forma
          clara, profissional e coerente com sua identidade.
        </p>
      </div>
    </div>
  </section>
);
