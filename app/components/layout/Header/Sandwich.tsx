import Image from "next/image";

export default function Burger() {
  return (
    <div
      style={{
        position: "relative",
        width: "42rem",
        height: "42rem",
      }}
    >
      <Image
        src="/images/icons/sandwich.svg"
        alt="Логотип"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
