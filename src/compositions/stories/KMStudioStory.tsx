import React from "react";
import { AbsoluteFill, Composition, Img, interpolate, useCurrentFrame } from "remotion";

import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { BrowserMockup } from "../../components/layout/BrowserMockup";
import { KMWebsite } from "../../components/website/KMWebsite";

const FPS = 30;
const DURATION = 450;

export const MyComposition: React.FC = () => (
  <Composition
    id="KMStudioStory"
    component={Story}
    durationInFrames={DURATION}
    fps={FPS}
    width={1080}
    height={1920}
  />
);

const Story = () => {
  const frame = useCurrentFrame();

  const browserTop = 810;
  const browserHeight = 610;
  const browserWidth = 970;

  const pageHeight = 5600;
  const viewportHeight = browserHeight - 58;

  /*
   * SCROLL CONTÍNUO
   *
   * Começa no frame 150 e termina no frame 405.
   * Não existem pausas intermediárias.
   */
  const scroll = interpolate(
    frame,
    [150, 405],
    [0, -(pageHeight - viewportHeight)],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const introOpacity = interpolate(frame, [0, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [15, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const browserOpacity = interpolate(frame, [45, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const browserY = interpolate(frame, [45, 90], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const browserScale = interpolate(frame, [45, 90], [0.96, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const finalOpacity = interpolate(frame, [330, 360], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: COLORS.black,
        color: COLORS.white,
        overflow: "hidden",
        fontFamily: FONTS.sans,
      }}
    >
      {/* FUNDO */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(
              circle at 78% 20%,
              rgba(59,107,143,.20),
              transparent 32%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(16,40,67,.28),
              transparent 38%
            )
          `,
        }}
      />

      {/* HEADER DO STORY */}
      <div
        style={{
          position: "absolute",
          top: 75,
          left: 80,
          right: 80,
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: introOpacity,
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
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: -1,
            }}
          >
            KM
          </span>

          <span
            style={{
              marginTop: 4,
              fontSize: 7,
              letterSpacing: 4,
              color: COLORS.muted,
              textTransform: "uppercase",
            }}
          >
            Studio
          </span>
        </div>

        <div
          style={{
            width: 9,
            height: 9,
            background: COLORS.gold,
          }}
        />
      </div>

      {/* TÍTULO DO STORY */}
      <div
        style={{
          position: "absolute",
          top: 205,
          left: 80,
          right: 80,
          zIndex: 20,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: COLORS.gold,
            fontSize: 9,
            letterSpacing: 3,
            marginBottom: 22,
          }}
        >
          <span
            style={{
              width: 25,
              height: 1,
              background: COLORS.gold,
            }}
          />

          WEB DESIGN · DESENVOLVIMENTO
        </div>

        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 67,
            lineHeight: 0.98,
            fontWeight: 400,
            letterSpacing: -2,
          }}
        >
          Criação de sites
          <br />
          profissionais para
          <br />
          <em
            style={{
              color: COLORS.gold,
              fontStyle: "italic",
            }}
          >
            empresas e negócios.
          </em>
        </div>

        <div
          style={{
            maxWidth: 470,
            marginTop: 25,
            color: COLORS.mutedLight,
            fontSize: 11,
            lineHeight: 1.8,
          }}
        >
          Sites institucionais, landing pages e catálogos digitais
          desenvolvidos sob medida.
        </div>
      </div>

      {/* BROWSER */}
      <BrowserMockup
        top={browserTop}
        width={browserWidth}
        height={browserHeight}
        viewportHeight={viewportHeight}
        opacity={browserOpacity}
        translateY={browserY}
        scale={browserScale}
      >
        <KMWebsite scroll={scroll} pageHeight={pageHeight} />
      </BrowserMockup>

      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 80,
          right: 80,
          zIndex: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: finalOpacity,
        }}
      >
        <span
          style={{
            color: COLORS.muted,
            fontSize: 10,
            letterSpacing: 0.5,
          }}
        >
          kmstudios.pages.dev
        </span>

        <span
          style={{
            color: COLORS.gold,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          CRIE O SEU →
        </span>
      </div>
    </AbsoluteFill>
  );
};