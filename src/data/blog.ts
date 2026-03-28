export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Global Demand for Indian Turmeric: 2025 Market Trends",
    slug: "global-demand-indian-turmeric-2025",
    excerpt:
      "Explore how India's premium turmeric is gaining traction in global markets with rising demand for high-curcumin content varieties. We analyze the key factors driving growth and what it means for exporters.",
    category: "Market Insights",
    date: "2025-12-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200",
    author: "Mova Research Team",
  },
  {
    id: "2",
    title: "Quality Control in Spice Exports: From Farm to Port",
    slug: "quality-control-spice-exports",
    excerpt:
      "A deep dive into the rigorous quality control processes that ensure every shipment meets international food safety standards — from sourcing to final inspection.",
    category: "Quality",
    date: "2025-11-28",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1200",
    author: "Mova Quality Team",
  },
  {
    id: "3",
    title: "Sustainable Spice Sourcing: Our Commitment to Ethical Trade",
    slug: "sustainable-spice-sourcing",
    excerpt:
      "How Mova Logistics partners with local farming communities to promote sustainable agriculture and fair trade practices across India's spice-growing regions.",
    category: "Sustainability",
    date: "2025-11-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200",
    author: "Mova Sustainability Team",
  },
  {
    id: "4",
    title: "Understanding FSSAI & ISO Certifications for Spice Exports",
    slug: "fssai-iso-certifications-spice-exports",
    excerpt:
      "A comprehensive guide to the certifications required for exporting Indian spices — what they mean, how to obtain them, and why they matter for your business.",
    category: "Compliance",
    date: "2025-10-22",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200",
    author: "Mova Compliance Team",
  },
  {
    id: "5",
    title: "The Rise of Organic Spices in the European Market",
    slug: "organic-spices-european-market",
    excerpt:
      "European demand for certified organic spices has surged 40% in the past three years. We explore what's driving this trend and how Indian exporters can capitalize.",
    category: "Market Insights",
    date: "2025-10-08",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1599909533601-aa23d041f4da?q=80&w=1200",
    author: "Mova Research Team",
  },
  {
    id: "6",
    title: "Packaging Innovation: Preserving Spice Quality During Transit",
    slug: "packaging-innovation-spice-transit",
    excerpt:
      "From vacuum-sealed containers to nitrogen-flushed pouches, discover the latest packaging technologies that keep spice aroma, color, and potency intact during global shipping.",
    category: "Logistics",
    date: "2025-09-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=1200",
    author: "Mova Logistics Team",
  },
];
