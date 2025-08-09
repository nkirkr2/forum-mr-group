import Image from "next/image";

type SandwichProps = {
  onClick: () => void;
}

export default function Sandwich({onClick}: SandwichProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        width: "42rem",
        height: "42rem",
        cursor: 'pointer',
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
