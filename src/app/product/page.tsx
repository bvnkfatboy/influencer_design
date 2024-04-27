import React from "react";
import { Link, Image, Input } from "@nextui-org/react";
import DrawImage from "@/components/utils/drawImage";
export default function UserMaketPage() {
  return (
    <div className="max-w-[1200px] mx-auto mt-[5rem]">
      <div>
        <ul className="flex flex-col sm:flex-row mb-4">
          <li className="mr-2 after:content-['>'] after:inline-block after:w-[.425rem] after:h-[.425rem] after:ml-[.5rem] after:mb-[1px] after:border-r-[1px]-solid-var(--nextui-colors-gray300) after:border-b-[1px]-solid-var(--nextui-colors-gray300) after:transform-rotate-[-45deg]">
            <Link href="#">ผลการค้นหาทั้งหมด</Link>
          </li>
          <li className="mr-2 after:content-['>'] after:inline-block after:w-[.425rem] after:h-[.425rem] after:ml-[.5rem] after:mb-[1px] after:border-r-[1px]-solid-var(--nextui-colors-gray300) after:border-b-[1px]-solid-var(--nextui-colors-gray300) after:transform-rotate-[-45deg]">
            <Link href="#">ผลิตเว็บไซต์</Link>
          </li>
          <li className="mr-2">
            <Link href="#" color="foreground">
              Front-end
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-3xl font-bold mb-4">Front-end</div>
    </div>
  );
}
