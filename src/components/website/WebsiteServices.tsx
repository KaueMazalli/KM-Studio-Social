import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";
import { ServiceCard } from "../ui/ServiceCard";

type ServicesProps = Record<string, never>;

export const WebsiteServices: React.FC<ServicesProps> = () => (
<section
    style={{
      height: 620,
      padding: "75px 48px",
    }}
  >
    <KMLabel number="02">SERVIÇOS</KMLabel>

    <h2
      style={{
        marginTop: 42,
        marginBottom: 50,
        fontFamily: FONTS.serif,
        fontSize: 43,
        fontWeight: 400,
      }}
    >
      O que podemos{" "}
      <em
        style={{
          color: COLORS.gold,
          fontStyle: "italic",
        }}
      >
        criar.
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
      <ServiceCard
        number="01"
        title="Sites institucionais"
        text="Sites profissionais para empresas, profissionais e marcas que precisam de uma presença digital sólida."
      />

      <ServiceCard
        number="02"
        title="Landing Pages"
        text="Páginas objetivas e visualmente marcantes para apresentar serviços, produtos, campanhas ou projetos."
      />

      <ServiceCard
        number="03"
        title="Catálogos digitais"
        text="Catálogos online para apresentar produtos, serviços e informações de forma organizada e visual."
      />

      <ServiceCard
        number="04"
        title="Desenvolvimento Web"
        text="Desenvolvimento front-end com foco em desempenho, responsividade, interação e experiência."
      />
    </div>
  </section>
);
