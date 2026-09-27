import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";
import { BenefitCard } from "../ui/BenefitCard";

type BenefitsProps = Record<string, never>;

export const WebsiteBenefits: React.FC<BenefitsProps> = () => (
<section
    style={{
      height: 500,
      padding: "75px 48px",
      background: "#080e16",
    }}
  >
    <KMLabel number="03">O QUE VOCÊ RECEBE</KMLabel>

    <h2
      style={{
        marginTop: 42,
        fontFamily: FONTS.serif,
        fontSize: 39,
        fontWeight: 400,
        lineHeight: 1.05,
      }}
    >
      Um projeto pensado{" "}
      <em
        style={{
          color: COLORS.gold,
          fontStyle: "italic",
        }}
      >
        para o seu negócio.
      </em>
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        marginTop: 45,
        borderTop: `1px solid ${COLORS.border}`,
        borderLeft: `1px solid ${COLORS.border}`,
      }}
    >
      <BenefitCard
        number="01"
        title="Design personalizado"
        text="Layout desenvolvido de acordo com a identidade e objetivos do negócio."
      />

      <BenefitCard
        number="02"
        title="Responsivo"
        text="Experiência adaptada para celulares, tablets e computadores."
      />

      <BenefitCard
        number="03"
        title="Desenvolvimento"
        text="Código estruturado com foco em desempenho, organização e funcionalidade."
      />

      <BenefitCard
        number="04"
        title="Publicação"
        text="Projeto preparado para ser publicado e disponibilizado na internet."
      />
    </div>
  </section>
);
