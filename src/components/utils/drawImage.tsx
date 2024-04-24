import Image from "next/image";
import { StaticImageData } from "next/image";

export default function DrawImage({
  src,
  className,
  width,
  height,
  loading,
  quality,
}: {
  src: StaticImageData;
  className?: any;
  width: number;
  height: number;
  loading: boolean;
  quality: number;
}) {
  return (
    <Image
      src={src}
      alt="ตามหา influencer ที่คุณชื่นชอบและเหมาะกับงานของคุณ"
      className={className}
      width={width}
      height={height}
      loading={loading ? "lazy" : undefined}
      priority={!loading ? true : undefined}
      quality={quality}
      draggable={false}
    />
  );
}
