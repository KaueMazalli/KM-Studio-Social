import React from "react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/typography";
import { WebsiteHeader } from "./WebsiteHeader";
import { WebsiteHero } from "./WebsiteHero";
import { WebsiteIntro } from "./WebsiteIntro";
import { WebsiteServices } from "./WebsiteServices";
import { WebsiteBenefits } from "./WebsiteBenefits";
import { WebsitePortfolio } from "./WebsitePortfolio";
import { WebsiteAbout } from "./WebsiteAbout";
import { WebsiteProcess } from "./WebsiteProcess";
import { WebsiteFAQ } from "./WebsiteFAQ";
import { WebsiteContact } from "./WebsiteContact";
import { WebsiteFooter } from "./WebsiteFooter";

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
      fontFamily: FONTS.sans,
    }}
  >
    <WebsiteHeader />
    <WebsiteHero />
    <WebsiteIntro />
    <WebsiteServices />
    <WebsiteBenefits />
    <WebsitePortfolio />
    <WebsiteAbout />
    <WebsiteProcess />
    <WebsiteFAQ />
    <WebsiteContact />
    <WebsiteFooter />
  </div>
);
