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
      "Explore how India's premium turmeric is gaining traction in global markets with rising demand for high-curcumin content varieties.",
    category: "Market Insights",
    date: "2025-12-15",
    readTime: "5 min read",
    image: "/images/blog/turmeric-market.jpg",
    author: "Mova Research Team",
  },
  {
    id: "2",
    title: "Quality Control in Spice Exports: From Farm to Port",
    slug: "quality-control-spice-exports",
    excerpt:
      "A deep dive into the rigorous quality control processes that ensure every shipment meets international food safety standards.",
    category: "Quality",
    date: "2025-11-28",
    readTime: "7 min read",
    image: "/images/blog/quality-control.jpg",
    author: "Mova Quality Team",
  },
  {
    id: "3",
    title: "Sustainable Spice Sourcing: Our Commitment to Ethical Trade",
    slug: "sustainable-spice-sourcing",
    excerpt:
      "How Mova Logistics partners with local farming communities to promote sustainable agriculture and fair trade practices.",
    category: "Sustainability",
    date: "2025-11-10",
    readTime: "4 min read",
    image: "/images/blog/sustainable-farming.jpg",
    author: "Mova Sustainability Team",
  },
];
