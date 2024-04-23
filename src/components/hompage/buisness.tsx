import React from "react";
import DrawImage from "@/components/ui/drawImage";
import { StaticImageData } from "next/image";

const data = [
  {
    image: "https://i.imgur.com/QDN1420.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/PNH422X.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/7VMvCit.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/Bl9uSEv.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/NjTllM8.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/QibqBJX.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/5stfJsv.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/wI86Zcl.png" as unknown as StaticImageData,
  },
  {
    image: "https://i.imgur.com/OMc3AN9.png" as unknown as StaticImageData,
  },
];

export default function buisness() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {data.map((item, index) => (
          <div key={index} className="">
            <DrawImage
              src={item.image}
              className="h-auto max-w-full rounded-l"
              width={351}
              height={254}
              loading={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
