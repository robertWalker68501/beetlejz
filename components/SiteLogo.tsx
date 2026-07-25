import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SiteLogoProps {
  href: string;
  classNames?: string;
  onClick?: () => void;
  imgSrc?: string;
  imgAt?: string;
  imgHeight?: number;
  imgWidth?: number;
  text?: string;
}

const SiteLogo = ({
  href,
  classNames,
  onClick,
  imgSrc = '/assets/images/logo.png',
  imgAt = 'BeetleJz Logo',
  imgHeight = 40,
  imgWidth = 40,
  text = 'BeetleJz'
}: SiteLogoProps) => {
  return (
    <Link href={href} className={cn('flex items-center gap-2 text-2xl font-bold', classNames)} onClick={onClick}>
      <Image src={imgSrc} alt={imgAt} height={imgHeight} width={imgWidth} />
      {text}
    </Link>
  );
}

export default SiteLogo;