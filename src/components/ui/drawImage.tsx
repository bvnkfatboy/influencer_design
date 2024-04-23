import Image from "next/image";
import { StaticImageData } from "next/image";

export default function DrawImage({
  src,
  className,
  width,
  height,
  loading,
}: {
  src: StaticImageData;
  className?: any;
  width: number;
  height: number;
  loading: boolean;
}) {
  return (
    <Image
      src={src}
      alt="ตามหา influencer ที่คุณชื่นชอบและเหมาะกับงานของคุณ"
      className={className}
      width={width}
      height={height}
      loading={loading ? "lazy" : undefined}
      priority={!loading}
      quality={85}
      draggable={false}
    />
  );
}
