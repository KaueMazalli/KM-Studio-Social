import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";
import { ProcessItem } from "../ui/ProcessItem";

type ProcessProps = Record<string, never>;

export const WebsiteProcess: React.FC<ProcessProps> = () => (
<section
    style={{
      height: 580,
      padding: "75px 48px",
      background: "#080e16",
    }}
  >
    <KMLabel number="06">PROCESSO</KMLabel>

    <h2
      style={{
        marginTop: 42,
        marginBottom: 45,
        fontFamily: FONTS.serif,
        fontSize: 43,
        fontWeight: 400,
      }}
    >
      Do conceito ao{" "}
      <em
        style={{
          color: COLORS.gold,
          fontStyle: "italic",
        }}
      >
        resultado.
      </em>
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderTop: `1px solid ${COLORS.border}`,
        borderLeft: `1px solid ${COLORS.border}`,
      }}
    >
      <ProcessItem
        number="01"
        title="Briefing"
        text="Entendimento da marca, objetivos e necessidades do projeto."
      />

      <ProcessItem
        number="02"
        title="Design"
        text="Definição da direção visual, estrutura e experiência da página."
      />

      <ProcessItem
        number="03"
        title="Desenvolvimento"
        text="Transformação do conceito em uma experiência digital funcional e responsiva."
      />

      <ProcessItem
        number="04"
        title="Entrega & Publicação"
        text="Revisão final, publicação e preparação do projeto para entrar no ar."
      />
    </div>
  </section>
);
