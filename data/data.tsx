import {
  CheckBadgeIcon,
  ClockIcon,
  CreditCardIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { SVGProps } from "react";

export const categories = [
  {
    name: "earrings",
    id: "1",
    href: "/earrings",
    imageSrc:
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "necklaces",
    id: "2",
    href: "/necklaces",
    imageSrc:
      "https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rings",
    id: "3",
    href: "/rings",
    imageSrc:
      "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpbmdzfGVufDB8fDB8fHww",
  },
  {
    name: "bracelets",
    id: "4",
    href: "/braceletes",
    imageSrc:
      "https://images.unsplash.com/photo-1591210244853-ea68b6126edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYWNlbGV0fGVufDB8fDB8fHww",
  },
];

export const policies = [
  "High-quality materials and craftsmanship",
  "Unique and stylish designs",
  "Exceptional customer service",
  "Ethical sourcing",
  "Supporting local business",
];

export const people = [
  {
    name: "Leonna Krasner",
    role: "Jewelry Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Creates original jewelry concepts, sketches, and technical drawings. Possesses a strong understanding of trends, materials, and manufacturing processes. Creative, trendsetter, technical.",
  },
  {
    name: "Kate Lawernce",
    role: "Production Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Oversees the entire production process, ensuring quality, efficiency, and adherence to timelines. Requires strong organizational and communication skills. Organized, leader, communicator.",
  },
  {
    name: "Kim Bonnet",
    role: "Jewelry Sales Associate",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Assists customers in selecting and purchasing jewelry. Provides product knowledge, excellent customer service, and upselling opportunities. Personable, sales-driven, customer-focused.",
  },
  {
    name: "Vanessa Morgan",
    role: "Customer Service Representative",
    imageUrl:
      "https://images.unsplash.com/photo-1554727242-741c14fa561c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Addresses customer inquiries and concerns related to jewelry purchases and repairs. Requires excellent communication and problem-solving skills. Customer-focused, problem-solver, communicator.",
  },
];

export const features = [
  {
    name: "Timeless Designs",
    description:
      "Our jewelry collection showcases intricate designs that transcend trends, allowing you to cherish each piece for years to come. Every detail is carefully considered, from the delicate filigree patterns to the sparkling gemstones, ensuring that your jewelry reflects your timeless elegance.",
    icon: ClockIcon,
  },
  {
    name: "Premium Materials",
    description:
      "We believe in using only the finest materials to create jewelry that is both beautiful and durable. Our pieces are crafted from ethically sourced precious metals like gold, silver, and platinum, ensuring that they will remain cherished heirlooms for generations to come.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Affordable Luxury",
    description:
      "Experience the exquisite quality of fine jewelry without the extraordinary price tag. Our pieces are crafted with premium materials and meticulous attention to detail, making them an accessible gateway to the world of luxury.",
    icon: CreditCardIcon,
  },
  {
    name: "Made with Love",
    description:
      "Each piece we create is not just an accessory; it is an expression of passion and dedication. We pour our hearts and souls into crafting timeless pieces that resonate with your unique story.",
    icon: HeartIcon,
  },
];

export const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/Yustes88",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/iuliia-obruchkova-2b650a208/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        fill="currentColor"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 97.75 97.75"
        {...props}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964 c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467 c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185 c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
];

export const marquees = [
  "Absolute Inspiration",
  "Sparkle & Shine",
  "Glittering Treasures",
  "Rings",
  "Opulent Ornaments",
  "Braclettes",
  "Shimmering Elegance",
  "Necklaces",
  "Exquisite Adornments",
  "Earrings",
  "Impressive Details",
  "Genuine Impression",
  "Longlasting Effect",
];
