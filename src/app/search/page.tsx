"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Input,
} from "@nextui-org/react";
import starSVG from "@/assets/svg/star.svg";
import likeSVG from "@/assets/svg/like.svg";
import DrawImage from "@/components/utils/drawImage";
import SearchIcon from "@/assets/svg/search.svg";
import { useRouter, redirect } from "next/navigation";
export default function SearchPage() {
  const router = useRouter();
  const list = [
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
    {
      title:
        "UX/UI Design หลากหลายสไตล์ตามต้องการสำหรับ Website และ Mobile Application",
      img: "https://i.imgur.com/QDN1420.png",
      salable: "20",
      mostsaled: true,
      star: 4.5,
      review: 10,
      feedbackable: 4,
      pricestart: 1000,
    },
  ];

  const priceformatter = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
  });

  return (
    <div suppressHydrationWarning>
      <div className="max-w-[1000px] mx-auto  p-10">
        <div className="mb-10">
          <form className="max-w-md mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="flex ">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <DrawImage
                  src={SearchIcon}
                  width={24}
                  height={24}
                  loading={false}
                  quality={65}
                />
              </button>
            </div>
          </form>
        </div>
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
          <h1 className="text-3xl font-bold mb-4">Front-end</h1>
        </div>
        <div className="gap-6 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, index) => (
            <Card
              key={index}
              isPressable
              className="flex flex-col"
              onPress={() => router.push(`/product/`)}
            >
              <CardHeader className="overflow-visible p-0 max-w-[425px]">
                <Image
                  // shadow="sm"
                  // radius="md"

                  alt={item.title}
                  className="object-cover w-[425px] h-[185px] max-h-[185px]"
                  src={item.img}
                />
              </CardHeader>
              <CardBody className="flex flex-col w-full">
                <b className="font-medium text-[14px]">{item.title}</b>
                <div className="mt-3 flex flex-row items-center content-center">
                  <div className="text-default-500">ขายได้: {item.salable}</div>
                  <DrawImage
                    src={likeSVG}
                    width={18}
                    height={18}
                    loading={false}
                    quality={65}
                    className="ml-3"
                  />
                  <div className="flex flex-row">
                    <DrawImage
                      src={starSVG}
                      width={18}
                      height={18}
                      loading={false}
                      quality={65}
                      className="ml-3"
                    />
                    <div className="text-default-500 ml-1">
                      {item.star} ({item.review})
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-between">
                <div className="text-default-500 text-sm">
                  ตอบกลับภายใน: {item.feedbackable} ชม
                </div>

                <div className="text-default-500 text-sm">
                  ราคาเริ่มต้น
                  <div className="ml-1 text-blue-500">
                    {priceformatter.format(item.pricestart)}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
