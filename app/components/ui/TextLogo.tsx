import Image from "next/image";

function TextLogo() {
    return (
        <Image
        src="/images/icons/text-logo.svg"
        alt="Логотип"
        fill
        style={{ objectFit: "contain" }}
        />
    )
}

export default TextLogo;
