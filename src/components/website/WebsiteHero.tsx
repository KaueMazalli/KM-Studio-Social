import React from "react";
import { Img } from "remotion";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMButton } from "../ui/KMButton";

type HeroProps = Record<string, never>;

export const WebsiteHero: React.FC<HeroProps> = () => (
<div
    style={{
      height: 760,
      position: "relative",
      padding: "150px 48px 60px",
      overflow: "hidden",
    }}
  >
    <Img
      src="https://kmstudios.pages.dev/assets/hero.webp"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.6,
      }}
    />

    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, rgba(5,10,16,.99), rgba(5,10,16,.87) 35%, rgba(5,10,16,.48) 100%)",
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 600,
        paddingTop: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: COLORS.gold,
          fontSize: 7,
          letterSpacing: 2.5,
          marginBottom: 20,
        }}
      >
        <span
          style={{
            width: 22,
            height: 1,
            background: COLORS.gold,
          }}
        />
        WEB DESIGN · DESENVOLVIMENTO
      </div>

      <h1
        style={{
          fontFamily: FONTS.serif,
          fontSize: 47,
          lineHeight: 0.98,
          fontWeight: 400,
          letterSpacing: -1.5,
          margin: 0,
        }}
      >
        Criação de sites profissionais para{" "}
        <em
          style={{
            color: COLORS.gold,
            fontStyle: "italic",
          }}
        >
          empresas e pequenos negócios.
        </em>
      </h1>

      <p
        style={{
          maxWidth: 380,
          marginTop: 25,
          color: COLORS.mutedLight,
          fontSize: 8,
          lineHeight: 1.9,
        }}
      >
        Sites institucionais, landing pages e catálogos digitais
        desenvolvidos sob medida.
      </p>

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 25,
        }}
      >
        <KMButton>Ver projetos</KMButton>
        <KMButton secondary>Falar no WhatsApp</KMButton>
      </div>
    </div>
  </div>
);
