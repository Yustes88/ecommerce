import { CheckBadgeIcon, ClockIcon, CreditCardIcon, HeartIcon } from '@heroicons/react/24/solid';

export const categories = [
  {
    name: "earrings",
    id: '1',
    href: "/earrings",
    imageSrc:
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "necklaces",
    id: '2',
    href: "/necklaces",
    imageSrc:
      "https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rings",
    id: '3',
    href: "/rings",
    imageSrc:
      "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpbmdzfGVufDB8fDB8fHww",
  },
  {
    name: "bracelets",
    id: '4',
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
    name: 'Leonna Krasner',
    role: 'Jewelry Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D',
    bio: 'Creates original jewelry concepts, sketches, and technical drawings. Possesses a strong understanding of trends, materials, and manufacturing processes. Creative, trendsetter, technical.',
  },
  {
    name: 'Kate Lawernce',
    role: 'Production Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D',
    bio: 'Oversees the entire production process, ensuring quality, efficiency, and adherence to timelines. Requires strong organizational and communication skills. Organized, leader, communicator.',
  },
  {
    name: 'Kim Bonnet',
    role: 'Jewelry Sales Associate',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    bio: 'Assists customers in selecting and purchasing jewelry. Provides product knowledge, excellent customer service, and upselling opportunities. Personable, sales-driven, customer-focused.',
  },
  {
    name: 'Vanessa Morgan',
    role: 'Customer Service Representative',
    imageUrl:
      'https://images.unsplash.com/photo-1554727242-741c14fa561c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    bio: 'Addresses customer inquiries and concerns related to jewelry purchases and repairs. Requires excellent communication and problem-solving skills. Customer-focused, problem-solver, communicator.',
  },
]

export const features = [
  {
    name: 'Timeless Designs',
    description:
      'Our jewelry collection showcases intricate designs that transcend trends, allowing you to cherish each piece for years to come. Every detail is carefully considered, from the delicate filigree patterns to the sparkling gemstones, ensuring that your jewelry reflects your timeless elegance.',
    icon: ClockIcon,
  },
  {
    name: 'Premium Materials',
    description:
      'We believe in using only the finest materials to create jewelry that is both beautiful and durable. Our pieces are crafted from ethically sourced precious metals like gold, silver, and platinum, ensuring that they will remain cherished heirlooms for generations to come.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Affordable Luxury',
    description:
      'Experience the exquisite quality of fine jewelry without the extraordinary price tag. Our pieces are crafted with premium materials and meticulous attention to detail, making them an accessible gateway to the world of luxury.',
    icon: CreditCardIcon,
  },
  {
    name: 'Made with Love',
    description:
      'Each piece we create is not just an accessory; it is an expression of passion and dedication. We pour our hearts and souls into crafting timeless pieces that resonate with your unique story.',
    icon: HeartIcon,
  },
]