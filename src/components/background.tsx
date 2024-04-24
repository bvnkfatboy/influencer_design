"use client";
import React from "react";
import Image from "next/image";
import bg from "@/assets/svg/background/bg.svg";
import DrawImage from "./utils/drawImage";
export default function Background() {
  return (
    <div className=" !bg-[#FFFAF1]">
      <DrawImage
        src={bg}
        width={1920}
        height={3000}
        loading={false}
        className="absolute -z-10 object-cover"
        quality={65}
      />
    </div>
  );
}
