import githubIcon from "../../assets/images/github-brands-solid-full.svg";
import instagramIcon from "../../assets/images/instagram-brands-solid-full.svg";
import linkedinIcon from "../../assets/images/linkedin-brands-solid-full.svg";
import { twMerge } from "tailwind-merge";

const icons = {
  github: githubIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
};

export type Brand = keyof typeof icons;

interface BrandIconProps {
  brand: Brand;
  className?: string;
}

export default function BrandIcon({ brand, className = "" }: BrandIconProps) {
  const icon = icons[brand];

  return (
    <span
      aria-hidden="true"
      className={twMerge("bg-current inline-block size-4 shrink-0", className)}
      style={{
        maskImage: `url("${icon}")`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: `url("${icon}")`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
