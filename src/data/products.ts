export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "whole-spices" | "ground-spices" | "seeds" | "blends";
  description: string;
  origin: string;
  image: string;
  exportPackaging: string[];
  certifications: string[];
  color: string;
}

export const products: Product[] = [
  {
    id: "turmeric",
    name: "Turmeric",
    slug: "turmeric",
    category: "ground-spices",
    description:
      "Premium Alleppey and Salem turmeric with high curcumin content, sourced from the finest farms across South India. Our turmeric meets the highest international quality standards.",
    origin: "Kerala & Tamil Nadu, India",
    image: "/images/spices/turmeric.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Spice Board of India"],
    color: "#E8A317",
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    category: "seeds",
    description:
      "Hand-selected Gujarat and Rajasthan cumin seeds known for their bold aroma and rich flavor profile. Processed in state-of-the-art facilities with strict quality checks.",
    origin: "Gujarat & Rajasthan, India",
    image: "/images/spices/cumin.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#8B7355",
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    slug: "black-pepper",
    category: "whole-spices",
    description:
      'Malabar and Tellicherry black pepper — the "King of Spices" — sourced directly from Kerala plantations. Renowned for its pungency and superior flavor.',
    origin: "Kerala, India",
    image: "/images/spices/black-pepper.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Vacuum Packed"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Organic Certified"],
    color: "#2C2C2C",
  },
  {
    id: "cardamom",
    name: "Cardamom",
    slug: "cardamom",
    category: "whole-spices",
    description:
      'Premium green cardamom, the "Queen of Spices," hand-picked from the Cardamom Hills. Known for its intense aroma and superior oil content.',
    origin: "Kerala & Karnataka, India",
    image: "/images/spices/cardamom.jpg",
    exportPackaging: ["5kg Cartons", "25kg PP Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#4A7C59",
  },
  {
    id: "fennel",
    name: "Fennel Seeds",
    slug: "fennel",
    category: "seeds",
    description:
      "Lucknow and Gujarat fennel seeds with sweet anise flavor. Our vacuum-cleaned and gravity-sorted fennel meets the highest export standards.",
    origin: "Gujarat & Uttar Pradesh, India",
    image: "/images/spices/fennel.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000"],
    color: "#9CB770",
  },
  {
    id: "red-chilli",
    name: "Red Chilli",
    slug: "red-chilli",
    category: "ground-spices",
    description:
      "Guntur, Byadgi, and Kashmiri red chillies available in whole and powder form. Carefully selected for color, heat levels, and SHU consistency.",
    origin: "Andhra Pradesh & Karnataka, India",
    image: "/images/spices/red-chilli.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#CC2936",
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    slug: "sesame-seeds",
    category: "seeds",
    description:
      "Natural, hulled, and roasted sesame seeds in white and black varieties. Machine-cleaned with 99.95% purity for export-grade quality.",
    origin: "Rajasthan & Gujarat, India",
    image: "/images/spices/sesame.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Paper Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "Kosher", "Halal"],
    color: "#F5E6C4",
  },
  {
    id: "coriander",
    name: "Coriander Seeds",
    slug: "coriander",
    category: "seeds",
    description:
      "Eagle and Scooter variety coriander seeds, double-cleaned and steam-sterilized. Known for their citrusy aroma and consistent quality.",
    origin: "Rajasthan & Madhya Pradesh, India",
    image: "/images/spices/coriander.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#A0826D",
  },
  {
    id: "mustard-seeds",
    name: "Mustard Seeds",
    slug: "mustard-seeds",
    category: "seeds",
    description:
      "Yellow and brown mustard seeds, machine-cleaned to export standards. Sourced from premium growing regions with consistent oil content.",
    origin: "Rajasthan & Madhya Pradesh, India",
    image: "/images/spices/mustard.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Bulk"],
    certifications: ["FSSAI", "ISO 22000"],
    color: "#D4A520",
  },
  {
    id: "fenugreek",
    name: "Fenugreek Seeds",
    slug: "fenugreek",
    category: "seeds",
    description:
      "Premium quality fenugreek seeds, meticulously sorted and cleaned. Rich in flavor and widely used in culinary and pharmaceutical applications globally.",
    origin: "Rajasthan & Gujarat, India",
    image: "/images/spices/fenugreek.jpg",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000"],
    color: "#B8860B",
  },
];

export const categories = [
  { id: "all", label: "All Spices" },
  { id: "whole-spices", label: "Whole Spices" },
  { id: "ground-spices", label: "Ground Spices" },
  { id: "seeds", label: "Seeds" },
  { id: "blends", label: "Blends" },
];
