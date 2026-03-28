export interface ExportRegion {
  id: string;
  name: string;
  countries: string[];
  coordinates: [number, number]; // [longitude, latitude]
  color: string;
}

export const exportRegions: ExportRegion[] = [
  {
    id: "north-america",
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    coordinates: [-100, 40],
    color: "#D4AF37",
  },
  {
    id: "europe",
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Spain"],
    coordinates: [10, 50],
    color: "#1F7A6E",
  },
  {
    id: "middle-east",
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    coordinates: [45, 25],
    color: "#D4AF37",
  },
  {
    id: "asia",
    name: "Asia",
    countries: ["Singapore", "Malaysia", "Japan", "South Korea", "China"],
    coordinates: [105, 30],
    color: "#1F7A6E",
  },
  {
    id: "africa",
    name: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Egypt"],
    coordinates: [20, 0],
    color: "#D4AF37",
  },
];

export const exportStats = [
  { label: "Countries Served", value: "10+" },
  { label: "Tons Exported", value: "100+" },
  { label: "Established", value: "2025" },
  { label: "Quality Checks", value: "100%" },
];
