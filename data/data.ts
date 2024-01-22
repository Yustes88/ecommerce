import { randomUUID } from "crypto";

export const categories = [
  {
    name: "earrings",
    id: randomUUID(),
    href: "/earrings",
    imageSrc:
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "necklaces",
    id: randomUUID(),
    href: "/necklaces",
    imageSrc:
      "https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rings",
    id: randomUUID(),
    href: "/rings",
    imageSrc:
      "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpbmdzfGVufDB8fDB8fHww",
  },
  {
    name: "bracelets",
    id: randomUUID(),
    href: "/braceletes",
    imageSrc:
      "https://images.unsplash.com/photo-1591210244853-ea68b6126edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYWNlbGV0fGVufDB8fDB8fHww",
  },
];
