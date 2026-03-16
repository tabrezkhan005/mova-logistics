export interface ExportRegion {
  id: string;
  name: string;
  countries: string[];
  x: number;
  y: number;
  color: string;
}

export const exportRegions: ExportRegion[] = [
  {
    id: "north-america",
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    x: 22,
    y: 35,
    color: "#D4AF37",
  },
  {
    id: "europe",
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Spain"],
    x: 48,
    y: 28,
    color: "#1F7A6E",
  },
  {
    id: "middle-east",
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    x: 57,
    y: 40,
    color: "#D4AF37",
  },
  {
    id: "asia",
    name: "Asia",
    countries: ["Singapore", "Malaysia", "Japan", "South Korea", "China"],
    x: 72,
    y: 38,
    color: "#1F7A6E",
  },
  {
    id: "africa",
    name: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Egypt"],
    x: 50,
    y: 55,
    color: "#D4AF37",
  },
];

export const exportStats = [
  { label: "Countries Served", value: "40+" },
  { label: "Tons Exported Annually", value: "5000+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Quality Certifications", value: "8+" },
];
