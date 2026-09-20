export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = [
  "guide",
  "mechanics",
  "controls",
  "progression",
  "community",
  "maps",
];
