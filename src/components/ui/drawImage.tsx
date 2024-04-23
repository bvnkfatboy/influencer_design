import Image from "next/image";
import { StaticImageData } from "next/image";

export default function DrawImage({
  src,
  className,
  width,
  height,
}: {
  src: StaticImageData;
  className?: any;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt="ตามหา influencer ที่คุณชื่นชอบและเหมาะกับงานของคุณ"
      className={className}
      width={width}
      height={height}
      priority
      quality={85}
      draggable={false}
    />
  );
}
