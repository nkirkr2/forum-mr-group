import Image from "next/image";

export default function Logo() {
  return (
    <div
      style={{
        position: "absolute",
        width: "28rem",
        height: "42rem",
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <Image
        src="/images/icons/forum-logo.svg"
        alt="Логотип"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
