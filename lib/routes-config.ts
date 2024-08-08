// NOTE: For Page Navigation
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
