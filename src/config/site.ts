export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Wash The Skyscraper Wiki",
  shortName: "Wash The Skyscraper",
  logoText: "WS",
  tagline: "Cleaning Guides, Codes, Upgrades & Tips",
  description: "Your ultimate guide to Wash The Skyscraper on Roblox! Explore active codes, cleaning guides, best upgrades, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://washtheskyscraper.top",
  supportEmail: "support@washtheskyscraper.top",
  gameUrl: "https://www.roblox.com/games/88844652058629/Wash-The-Skyscraper",
  heroVideoId: "0kvMI_Vt4kQ", // Wash the Skyscraper - Roblox gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
