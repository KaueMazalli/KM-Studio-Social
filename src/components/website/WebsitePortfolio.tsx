import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";

type PortfolioProps = Record<string, never>;

export const WebsitePortfolio: React.FC<PortfolioProps> = () => (
<section
    style={{
      height: 700,
      padding: "75px 48px",
    }}
  >
    <KMLabel number="04">PORTFÓLIO</KMLabel>

    <h2
      style={{
        marginTop: 42,
        marginBottom: 50,
        fontFamily: FONTS.serif,
        fontSize: 43,
        fontWeight: 400,
      }}
    >
      Projetos e{" "}
      <em
        style={{
          color: COLORS.gold,
          fontStyle: "italic",
        }}
      >
        modelos.
      </em>
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
      }}
    >
      {[
        {
          n: "01",
          label: "PROJETOS CONCLUÍDOS",
          title: "Trabalhos reais,",
          italic: "resultados reais.",
          text: "Sites desenvolvidos e publicados para clientes e negócios.",
        },
        {
          n: "02",
          label: "MODELOS",
          title: "Ideias prontas para",
          italic: "inspirar.",
          text: "Projetos conceituais criados pela KM Studio para diferentes segmentos.",
        },
      ].map((item) => (
        <div
          key={item.n}
          style={{
            height: 390,
            padding: 35,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            border: `1px solid ${COLORS.border}`,
            background:
              item.n === "01"
                ? "radial-gradient(circle at 80% 20%,rgba(59,107,143,.18),transparent 45%),#060b11"
                : "radial-gradient(circle at 20% 20%,rgba(217,199,166,.12),transparent 45%),#060b11",
          }}
        >
          <div
            style={{
              color: COLORS.blue,
              fontSize: 9,
              letterSpacing: 2,
            }}
          >
            {item.n}
          </div>

          <div
            style={{
              marginTop: 18,
              color: COLORS.gold,
              fontSize: 7,
              letterSpacing: 2,
            }}
          >
            {item.label}
          </div>

          <h3
            style={{
              marginTop: 18,
              fontFamily: FONTS.serif,
              fontSize: 31,
              fontWeight: 400,
              lineHeight: 1.05,
            }}
          >
            {item.title}{" "}
            <em
              style={{
                color: COLORS.gold,
                fontStyle: "italic",
              }}
            >
              {item.italic}
            </em>
          </h3>

          <p
            style={{
              marginTop: 17,
              color: COLORS.muted,
              fontSize: 8,
              lineHeight: 1.8,
            }}
          >
            {item.text}
          </p>

          <div
            style={{
              marginTop: 22,
              color: COLORS.white,
              fontSize: 7,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Ver projetos →
          </div>
        </div>
      ))}
    </div>
  </section>
);
