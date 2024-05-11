export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NDash",
  description: "Internal dashboard for manage resource nime-crawler",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Patterns",
      href: "/patterns",
    },
    {
      label: "Sources",
      href: "/sources",
    },
  ],
  navMenuItems: [
    {
      label: "Patterns",
      href: "/patterns",
    },
    {
      label: "Sources",
      href: "/sources",
    },
  ],
  links: {
    github: "https://github.com/noneet/NDash",
    twitter: "",
    discord: "",
    sponsor: "",
  },
};
