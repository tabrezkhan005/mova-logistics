export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "whole-spices" | "ground-spices" | "seeds" | "blends";
  tagline: string;
  description: string;
  longDescription: string;
  origin: string;
  image: string;
  exportPackaging: string[];
  certifications: string[];
  color: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "turmeric",
    name: "Turmeric",
    slug: "turmeric",
    category: "ground-spices",
    tagline: "The Golden Spice",
    description:
      "Premium Alleppey and Salem turmeric with high curcumin content, sourced from the finest farms across South India.",
    longDescription:
      "Our turmeric is sourced directly from certified farms in Kerala and Tamil Nadu — India's premier turmeric-growing regions. Available in whole finger, polished, and powder form, each batch undergoes rigorous lab testing for curcumin content (minimum 3%), moisture levels, and aflatoxin compliance. We offer both Alleppey (high color value, 200+ ASTA) and Salem varieties (medicinal grade, high curcumin). Our turmeric meets FDA, EU, and FSSAI standards, making it ideal for food manufacturers, nutraceutical companies, and retail brands worldwide.",
    origin: "Kerala & Tamil Nadu, India",
    image: "/images/turmeric.png",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Retail Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Spice Board"],
    color: "#E8A317",
    specs: [
      { label: "Curcumin Content", value: "3–5%" },
      { label: "Moisture", value: "≤10%" },
      { label: "ASTA Color", value: "200+" },
      { label: "Mesh Size", value: "60–100" },
    ],
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    category: "seeds",
    tagline: "Bold Aroma, Pure Flavor",
    description:
      "Hand-selected Gujarat and Rajasthan cumin seeds known for their bold aroma and rich flavor profile.",
    longDescription:
      "Our cumin seeds are double-cleaned, gravity-sorted, and steam-sterilized to ensure maximum purity and food safety. Sourced from the arid regions of Gujarat and Rajasthan — where India's finest cumin grows — our seeds are known for their distinctive earthy aroma and warm flavor. We offer Singapore quality, Europe quality, and USG grade cumin in whole seed and ground form. Each lot comes with a Certificate of Analysis covering volatile oil content, extraneous matter, and microbial counts.",
    origin: "Gujarat & Rajasthan, India",
    image: "/images/cumin-seeds.png",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#8B7355",
    specs: [
      { label: "Volatile Oil", value: "2.5–4.5%" },
      { label: "Moisture", value: "≤8%" },
      { label: "Purity", value: "99.5%" },
      { label: "Grade", value: "Singapore/EU" },
    ],
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    slug: "black-pepper",
    category: "whole-spices",
    tagline: "The King of Spices",
    description:
      "Malabar and Tellicherry black pepper sourced directly from Kerala plantations, renowned for pungency and flavor.",
    longDescription:
      "Known globally as the 'King of Spices,' our black pepper is sourced from the lush Western Ghats of Kerala. We offer both Malabar grade (garbled, semi-garbled, and ungarbled) and the premium Tellicherry grade (bold, 4.75mm+). Each lot is tested for piperine content, moisture, and density to ensure consistent quality. Our pepper is ideal for spice blenders, food processors, and retail brands seeking bold, aromatic pepper with high pungency levels.",
    origin: "Kerala, India",
    image: "/images/black-pepper.png",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Vacuum Packed"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Organic"],
    color: "#2C2C2C",
    specs: [
      { label: "Piperine", value: "4–9%" },
      { label: "Moisture", value: "≤12%" },
      { label: "Density", value: "500–600 g/L" },
      { label: "Grade", value: "MG-1 / TGSEB" },
    ],
  },
  {
    id: "cardamom",
    name: "Cardamom",
    slug: "cardamom",
    category: "whole-spices",
    tagline: "The Queen of Spices",
    description:
      "Premium green cardamom hand-picked from the Cardamom Hills, known for its intense aroma and oil content.",
    longDescription:
      "Our green cardamom is sourced from the misty Cardamom Hills of Kerala and Karnataka — where the world's most aromatic cardamom is grown. Hand-picked at peak maturity and carefully dried, our cardamom retains its vivid green color and intense flavor. Available in bold (8mm+), medium, and small grades, each lot is tested for volatile oil content, color consistency, and seed fill. Perfect for Middle Eastern coffee blends, Scandinavian baking, and Indian cuisine applications.",
    origin: "Kerala & Karnataka, India",
    image: "/images/cardamom.png",
    exportPackaging: ["5kg Cartons", "25kg PP Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#4A7C59",
    specs: [
      { label: "Volatile Oil", value: "5–8%" },
      { label: "Moisture", value: "≤12%" },
      { label: "Size", value: "7–8mm Bold" },
      { label: "Color", value: "AQL Green" },
    ],
  },
  {
    id: "red-chilli",
    name: "Red Chilli",
    slug: "red-chilli",
    category: "ground-spices",
    tagline: "Vivid Color, Controlled Heat",
    description:
      "Guntur, Byadgi, and Kashmiri red chillies selected for color, heat levels, and SHU consistency.",
    longDescription:
      "We offer India's most sought-after chilli varieties: Guntur S17 (high heat, 30,000+ SHU), Byadgi (deep red color, low heat), and Kashmiri (vibrant color, mild heat). Available in whole, crushed, and powder form, each variety is carefully tested for capsaicin content, ASTA color value, aflatoxin, and pesticide residue. Our chillies are ideal for hot sauce manufacturers, spice blenders, and food companies requiring consistent heat and color profiles across batches.",
    origin: "Andhra Pradesh & Karnataka, India",
    image: "/images/red-chilli.png",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#CC2936",
    specs: [
      { label: "SHU Range", value: "15K–50K" },
      { label: "Moisture", value: "≤10%" },
      { label: "ASTA Color", value: "80–200" },
      { label: "Varieties", value: "S17/Byadgi/Kashmiri" },
    ],
  },
  {
    id: "coriander",
    name: "Coriander Seeds",
    slug: "coriander",
    category: "seeds",
    tagline: "Citrusy Aroma, Consistent Quality",
    description:
      "Eagle and Scooter variety coriander seeds, double-cleaned and steam-sterilized for export.",
    longDescription:
      "Our coriander seeds are sourced from Rajasthan and Madhya Pradesh — India's largest coriander-producing states. We offer Eagle variety (large, elongated seeds) and Scooter variety (round, aromatic) in whole and ground form. Each lot is double-cleaned, gravity-sorted, and steam-sterilized to eliminate microbial contamination while preserving the citrusy aroma. Tested for volatile oil content, moisture, and extraneous matter to meet EU, US, and GCC import standards.",
    origin: "Rajasthan & Madhya Pradesh, India",
    image: "/images/coriander.png",
    exportPackaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Packaging"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    color: "#A0826D",
    specs: [
      { label: "Volatile Oil", value: "0.3–1.0%" },
      { label: "Moisture", value: "≤9%" },
      { label: "Purity", value: "99%" },
      { label: "variety", value: "Eagle/Scooter" },
    ],
  },
];

export const categories = [
  { id: "all", label: "All Spices" },
  { id: "whole-spices", label: "Whole Spices" },
  { id: "ground-spices", label: "Ground Spices" },
  { id: "seeds", label: "Seeds" },
];
