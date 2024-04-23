import React from "react";
import DrawImage from "@/components/ui/drawImage";
import { StaticImageData } from "next/image";

const data = [
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387348642271242/buisness_1.png?ex=662945a8&is=6627f428&hm=4089725a2292988398edbd7ef868fa113aaa769891f3be51655175890a475967&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387346356502528/buisness_2.png?ex=662945a8&is=6627f428&hm=1e39bb75c94fb4a3d0a606fcc9f94b0d9d7f7ddbc35fa3f139b76b9c26e97a35&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387346591256700/buisness_3.png?ex=662945a8&is=6627f428&hm=7339bcc80c1be9f7862a75a09d31948d1ec5f6a381361580fa47c5886902779a&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387346880790659/buisness_4.png?ex=662945a8&is=6627f428&hm=6b80313580950b93281ce51bf494796737b4d36062edcea2e39b5397c022b781&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387347165876274/buisness_5.png?ex=662945a8&is=6627f428&hm=56eef012f376a5de37733f56a5688bad8ccd4d9ef21026cb576020d3a98fe7ef&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387347447025674/buisness_6.png?ex=662945a8&is=6627f428&hm=448d4fbc5741cf67e50ed39d68ebf9a02805fb7f07b748c00b9d739bc320b302&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387347660931153/buisness_7.png?ex=662945a8&is=6627f428&hm=812bd02731ce577f2ee136c950159dd72748ffdc3931b60a6a0567470be60d71&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387348004868156/buisness_8.png?ex=662945a8&is=6627f428&hm=b0a81ce2fd6058d65a7c37b07478740194b887171c4bef167d9a40f00a19b6c6&" as unknown as StaticImageData,
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1232387259349864660/1232387348390740108/buisness_9.png?ex=662945a8&is=6627f428&hm=bdd052bfd0bc188a6bbe08fee4ff153205b1fe3f2262b83ee48beb93b969fc6c&" as unknown as StaticImageData,
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}
