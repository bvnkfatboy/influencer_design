"use client";
import React from "react";
import { Link, Image, Input } from "@nextui-org/react";
import DrawImage from "@/components/utils/drawImage";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./c_gallery.css";
import { useRouter } from "next/navigation";
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import starSVG from "@/assets/svg/star.svg";
import likeSVG from "@/assets/svg/like.svg";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    package: "จำนวนชิ้นงานที่ส่งมอบ",
    package1: "1 ชิ้น",
    package2: "1 ชิ้น",
  },
];

const columns = [
  {
    key: "package",
    label: "แพ็กเกจ",
    detail: "",
  },
  {
    key: "package1",
    label: "แพ็กเกจ1",
    detail: "Lasdasdasdasdasdasdasdasfasf",
  },
  {
    key: "package2",
    label: "แพ็กเกจ2",
    detail: "Lasdasdasdasdasdasdasdasfasf",
  },
];

export default function UserMaketPage() {
  const images = [
    {
      original:
        "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/411777616_6770346813094302_3719123195732322053_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k0K17ifUp-IQ7kNvgGmjtXu&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfAyQMbMQGXJLtS5CrmDqZtjdD7Bhi7UX4ZQTPrQv9hOjw&oe=6632DDD6",
      thumbnail:
        "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/411777616_6770346813094302_3719123195732322053_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k0K17ifUp-IQ7kNvgGmjtXu&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfAyQMbMQGXJLtS5CrmDqZtjdD7Bhi7UX4ZQTPrQv9hOjw&oe=6632DDD6",
      // originalClass: "image-resize",
      embedvdo: "https://www.youtube.com/watch?v=qvF5iq_s01Q",
    },
    {
      original:
        "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/412052728_6770346893094294_7399207794863097603_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=twYeM2UkDrIQ7kNvgGscvTa&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfCkr-0Z82EWN1vOw7unKdExpvREEgHIXL7beE1WFHuXKA&oe=6632F8B9",
      thumbnail:
        "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/412052728_6770346893094294_7399207794863097603_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=twYeM2UkDrIQ7kNvgGscvTa&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfCkr-0Z82EWN1vOw7unKdExpvREEgHIXL7beE1WFHuXKA&oe=6632F8B9",
      // originalClass: "image-resize",
      embedvdo: "",
    },
  ];

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
      <div className="rounded-3xl mx-auto sm:p-5">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          slideInterval={1000}
          showIndex={true}
          lazyLoad={true}
          showNav={true}
        />
      </div>

      <div className="mt-[50px] p-5 w-full ">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          fullWidth={true}
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full ",
            tab: " px-0 h-12",
            tabContent: "",
          }}
        >
          <Tab
            key="all"
            title={
              <div className="flex items-center space-x-2">
                <span>ภาพรวม</span>
              </div>
            }
          >
            <Card>
              <CardBody className="flex flex-col w-full p-5">
                <b className="font-medium text-xl">
                  รับเขียนเว็บแอพ Node.js/ React / Next.js
                </b>
                <div className="mt-3 flex flex-row items-center content-center">
                  <div className="text-default-500">ขายได้: 20</div>
                  <div className="flex flex-row">
                    <DrawImage
                      src={starSVG}
                      width={18}
                      height={18}
                      loading={false}
                      quality={65}
                      className="ml-3"
                    />
                    <div className="text-default-500 ml-1">4.7</div>
                  </div>
                </div>
                <div className="flex flex-row items-center content-center ">
                  <DrawImage
                    src={likeSVG}
                    width={24}
                    height={24}
                    loading={false}
                    quality={65}
                    className=""
                  />
                  <div className="text-default-500 ml-1">
                    ผู้ว่าจ้างไว้ใจ! กลับมาจ้างซ้ำเป็นจำนวนมาก
                  </div>
                </div>
                <hr className="border-2-solid border-gray-300 mt-3 mb-3"></hr>
                <div>
                  <b className="font-medium text-xl">รายะละเอียด</b>
                  <p className="mt-3">
                    รับเขียนเว็บแอพ Node.js/ React / Next.js
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="package"
            title={
              <div className="flex items-center space-x-2">
                <span>แพ็กเกจ</span>
              </div>
            }
          >
            <Card>
              <Table
                aria-label="Example table with dynamic content "
                className=""
                classNames={{
                  base: "!shadow-none !border-none",
                }}
              >
                <TableHeader columns={columns} className="">
                  {(column) => (
                    <TableColumn key={column.key}>
                      <div className="flex flex-col text-center mt-3 mb-3">
                        <div className="text-xl mt text-primary-500">
                          {column.label}
                        </div>
                        <div>{column.detail}</div>
                      </div>
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                    <TableRow key={item.key} className="text-center">
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>
          </Tab>
          <Tab
            key="Influencer"
            title={
              <div className="flex items-center space-x-2">
                <span>อินฟลูเอนเซอร์</span>
              </div>
            }
          >
            <Card></Card>
          </Tab>
          <Tab
            key="Review"
            title={
              <div className="flex items-center space-x-2">
                <span>รีวิว</span>
              </div>
            }
          >
            <Card></Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
