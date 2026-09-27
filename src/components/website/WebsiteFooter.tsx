import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type FooterProps = Record<string, never>;

export const WebsiteFooter: React.FC<FooterProps> = () => (
<section
    style={{
      height: 450,
      padding: "60px 48px 25px",
      background: "#060b11",
      borderTop: `1px solid ${COLORS.border}`,
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
        gap: 35,
        paddingBottom: 55,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 27,
            color: COLORS.gold,
          }}
        >
          KM
        </div>

        <p
          style={{
            maxWidth: 200,
            marginTop: 18,
            color: COLORS.muted,
            fontSize: 8,
            lineHeight: 1.8,
          }}
        >
          Criação de sites profissionais para empresas e pequenos
          negócios.
        </p>
      </div>

      {[
        {
          title: "Navegação",
          items: ["Início", "Serviços", "Projetos", "Sobre"],
        },
        {
          title: "Serviços",
          items: [
            "Sites institucionais",
            "Landing Pages",
            "Catálogos digitais",
            "Desenvolvimento Web",
          ],
        },
        {
          title: "Contato",
          items: ["WhatsApp", "Instagram"],
        },
      ].map((column) => (
        <div key={column.title}>
          <div
            style={{
              color: COLORS.blue,
              fontSize: 7,
              letterSpacing: 2,
              marginBottom: 18,
            }}
          >
            {column.title.toUpperCase()}
          </div>

          {column.items.map((item) => (
            <div
              key={item}
              style={{
                marginBottom: 10,
                color: "#8f979c",
                fontSize: 7,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 22,
        color: "#555e64",
        fontSize: 6,
        letterSpacing: 0.5,
      }}
    >
      <span>Brasil · Atendimento online</span>
      <span>© 2026 KM Studio</span>
      <span>DESIGN · DEVELOPMENT · DIGITAL PRESENCE</span>
    </div>
  </section>
);
