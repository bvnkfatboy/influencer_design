"use client";

import React from "react";
import Image from "next/image";
import bg from "../assets/svg/bg.svg";

export default function BackgroundOverlay() {
  return (
    <div className=" !bg-[#FFFAF1]">
      <Image
        src={bg}
        objectFit="cover"
        alt="bg"
        className="absolute -z-10"
        draggable={false}
      />
    </div>
  );
}
