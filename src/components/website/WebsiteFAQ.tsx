import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";
import { FAQItem } from "../ui/FAQItem";

type FAQProps = Record<string, never>;

export const WebsiteFAQ: React.FC<FAQProps> = () => (
<section
    style={{
      height: 620,
      padding: "75px 48px",
    }}
  >
    <KMLabel number="07">FAQ</KMLabel>

    <h2
      style={{
        marginTop: 42,
        fontFamily: FONTS.serif,
        fontSize: 42,
        fontWeight: 400,
      }}
    >
      Algumas dúvidas{" "}
      <em
        style={{
          color: COLORS.gold,
          fontStyle: "italic",
        }}
      >
        frequentes.
      </em>
    </h2>

    <div
      style={{
        marginTop: 45,
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <FAQItem
        question="Quanto custa criar um site?"
        answer="O valor depende do tipo, quantidade de páginas e funcionalidades do projeto."
      />

      <FAQItem
        question="O site funciona no celular?"
        answer="Sim. Os projetos são desenvolvidos para diferentes tamanhos de tela."
      />

      <FAQItem
        question="Posso colocar WhatsApp no site?"
        answer="Sim. WhatsApp, Instagram, Google Maps e outras integrações podem ser adicionadas."
      />

      <FAQItem
        question="A KM Studio publica o site?"
        answer="Sim. O projeto pode ser preparado e publicado em uma plataforma de hospedagem adequada."
      />
    </div>
  </section>
);
