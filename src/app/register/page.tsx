"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import DrawImage from "@/components/utils/drawImage";
import React from "react";
import bgInfluencer from "@/assets/images/bg-influencer.jpg";
import Router from "next/navigation";
export default function RegisterPage() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <div className="influencer relative h-screen w-full flex  flex-col items-center content-center justify-center">
        <div className="banner relative">
          <div className="banner-detail text-center relative text-white ">
            <h1 className="text-[48px] font-bold">Influencer</h1>
            <div className="text-[24px] m-3">สร้างผลงานจากความเป็นตัวคุณ</div>
            <div className="mt-5">
              <a href="/register/influencer">
                <Button color="primary" className="text-xl">
                  สมัครเป็นอินฟลูเอนเซอร์
                </Button>
              </a>
            </div>
            {/* <img src={bgInfluencer} width="100%" height="100%" /> */}
          </div>
        </div>
      </div>
      <div className="Maketeer relative h-screen w-full flex  flex-col items-center content-center justify-center">
        <div className="banner relative">
          <div className="banner-detail text-center relative text-white ">
            <h1 className="text-[48px] font-bold">Maketeer</h1>
            <div className="text-[24px] m-3">
              ตามหาอินฟลูเอนเซอร์ที่ใช่ให้เหมาะกับงานของคุณ
            </div>

            <div className="mt-5">
              <a href="/register/marketeer">
                <Button color="primary" className="text-xl">
                  สมัครเป็นนักการตลาด
                </Button>
              </a>
            </div>
            {/* <img src={bgInfluencer} width="100%" height="100%" /> */}
          </div>
        </div>
      </div>
      <Image
        //@ts-ignore
        src={bgInfluencer}
        // width={1920}
        // height={3000}
        objectFit="cover"
        alt="ตามหา influencer ที่คุณชื่นชอบและเหมาะกับงานของคุณ"
        className="absolute -z-10 object-cover h-full w-full"
      />
    </div>
  );
}
