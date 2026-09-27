import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";

type BrowserMockupProps = {
  children: React.ReactNode;
  url?: string;
  width?: number;
  height?: number;
  top?: number;
  opacity?: number;
  translateY?: number;
  scale?: number;
  viewportHeight?: number;
};

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  children,
  url = "kmstudios.pages.dev",
  width = 970,
  height = 610,
  top = 810,
  opacity = 1,
  translateY = 0,
  scale = 1,
  viewportHeight = height - 58,
}) => (
  <div style={{
    position: "absolute",
    left: "50%",
    top,
    width,
    height,
    zIndex: 10,
    borderRadius: 18,
    overflow: "hidden",
    background: COLORS.deep,
    border: "1px solid rgba(59,107,143,.35)",
    boxShadow: "0 35px 90px rgba(0,0,0,.55)",
    opacity,
    transform: `translateX(-50%) translateY(${translateY}px) scale(${scale})`,
    transformOrigin: "center top",
  }}>
    <div style={{
      height: 58,
      padding: "0 18px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#111923",
      borderBottom: "1px solid rgba(255,255,255,.06)",
    }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#714c45" }} />
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#8d7955" }} />
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#496b77" }} />
      <div style={{
        flex: 1,
        height: 27,
        marginLeft: 12,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        paddingLeft: 12,
        background: "rgba(255,255,255,.045)",
        color: "#737c83",
        fontFamily: FONTS.sans,
        fontSize: 8,
      }}>
        {url}
      </div>
    </div>
    <div style={{
      position: "relative",
      height: viewportHeight,
      overflow: "hidden",
      background: COLORS.black,
    }}>
      {children}
    </div>
  </div>
);
