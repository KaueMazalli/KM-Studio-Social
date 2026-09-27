import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { KMLabel } from "../branding/KMLabel";

type ContactProps = Record<string, never>;

export const WebsiteContact: React.FC<ContactProps> = () => (
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
);
