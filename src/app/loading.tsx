import Image from "next/image";

export default function Loading() {
  return (
    <div className="mova-loader">
      <Image
        src="/mova_logistics_favicon.png"
        alt="Loading"
        width={64}
        height={64}
        priority
        className="mova-loader-logo"
      />
    </div>
  );
}
