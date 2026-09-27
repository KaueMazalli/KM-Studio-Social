import React from "react";
import { Img } from "remotion";

import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../../components/branding/KMLabel";
import { KMButton } from "../../components/ui/KMButton";
import { ServiceCard } from "../../components/ui/ServiceCard";
import { BenefitCard } from "../../components/ui/BenefitCard";
import { ProcessItem } from "../../components/ui/ProcessItem";
import { FAQItem } from "../../components/ui/FAQItem";

type KMWebsiteProps = {
  scroll: number;
  pageHeight: number;
};

export const KMWebsite: React.FC<KMWebsiteProps> = ({
  scroll,
  pageHeight,
}) => (

<div
  style={{
    position: "absolute",
    top: scroll,
    left: 0,
    width: "100%",
    height: pageHeight,
    background: COLORS.black,
  }}
>
  {/* HEADER DO SITE */}
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

  {/* HERO */}
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

  {/* INTRO */}
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

  {/* SERVIÇOS */}
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

  {/* BENEFÍCIOS */}
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

  {/* PORTFÓLIO */}
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

  {/* SOBRE */}
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

  {/* PROCESSO */}
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

  {/* FAQ */}
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

  {/* CONTATO */}
  <section
    style={{
      height: 520,
      padding: "80px 48px",
    }}
  >
    <KMLabel number="08">CONTATO</KMLabel>

    <div
      style={{
        marginTop: 50,
      }}
    >
      <h2
        style={{
          maxWidth: 650,
          fontFamily: FONTS.serif,
          fontSize: 53,
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        Vamos criar algo{" "}
        <em
          style={{
            color: COLORS.gold,
            fontStyle: "italic",
          }}
        >
          para sua marca?
        </em>
      </h2>

      <p
        style={{
          maxWidth: 370,
          marginTop: 25,
          color: COLORS.muted,
          fontSize: 9,
          lineHeight: 1.8,
        }}
      >
        Tem um projeto em mente? Vamos conversar sobre ele.
      </p>

      <div
        style={{
          display: "inline-flex",
          marginTop: 25,
          padding: "14px 20px",
          border: `1px solid ${COLORS.gold}`,
          color: COLORS.gold,
          fontSize: 8,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        Fale com a KM Studio pelo WhatsApp
      </div>
    </div>
  </section>

  {/* FOOTER */}
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
</div>
);
