import Link from "next/link";
import styles from "./Logo.module.css";
import Image, { StaticImageData } from "next/image";
import { NextFont } from "next/dist/compiled/@next/font";

export default function Logo( { linkHref, logoStyle, logoImg, logoText, logoFont }:{
    linkHref: string
    logoStyle?: "inline" | "stacked",
    logoImg: StaticImageData,
    logoText?: string
    logoFont?: NextFont
} ) {
    return <Link href={linkHref} className={logoStyle === "inline" ? styles.logoInline:styles.logoStacked}>
                    <Image src={logoImg} alt="Logo link with image" priority width={100} height={100} />
                    <h1 className={logoFont?.className}>{logoText}</h1>
            </Link>
}