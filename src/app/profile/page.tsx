"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import DrawImage from "@/components/utils/drawImage";
import { useRouter, redirect } from "next/navigation";
import { Badge } from "@nextui-org/react";

import facebookIcon from "@/assets/svg/icon/social/Facebook.svg";
import twitterIcon from "@/assets/svg/icon/social/x.svg";
import instagramIcon from "@/assets/svg/icon/social/Ig.svg";
import youtubeIcon from "@/assets/svg/icon/social/youtube.svg";
import fbpageIcon from "@/assets/svg/icon/social/Page.svg";
import tiktokIcon from "@/assets/svg/icon/social/tiktok.svg";

import { GalleryIcon } from "@/components/icon/gallaryicon";
import { VideoIcon } from "@/components/icon/videoicon";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
export default function ProfilePage() {
  const { data: session } = useSession();
  const [videoSrc, setVideoSrc] = useState("");
  const [preview1Src, setPreview1Src] = useState("");
  const [preview2Src, setPreview2Src] = useState("");
  const [selected, setSelected] = useState("videos");

  useEffect(() => {
    if (selected == "videos") {
      setPreview1Src("");
      setPreview2Src("");
    } else if (selected == "preview1") {
      setPreview2Src("");
      setVideoSrc("");
    } else {
      setVideoSrc("");
      setPreview1Src("");
    }
  }, [selected]);

  if (!session) {
    redirect("/");
  }
  return (
    <div className="mt-10">
      <section className="profile-image flex-col flex justify-center items-center w-full">
        <div>
          <DrawImage
            //@ts-ignore
            src={session?.user?.image || ""}
            width={100}
            height={100}
            loading={false}
            quality={65}
            className={"rounded-full"}
          />
        </div>
        <div className="mt-3">
          <p className="text-3xl">{session?.user?.name}</p>
        </div>
        <Link href="/profile/edit">แก้ไขข้อมูลส่วนตัว</Link>
      </section>
      <section className="mt-5 w-full h-[10rem]">
        <div className="flex-col flex justify-center items-center  mx-auto bg-gradient-to-r from-[#DFEEF7] to-[#FFEBEB] text-white">
          <p className="text-1xl text-[#7F5539] pt-5">เชื่อมต่อโซเชียลมีเดีย</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-5 mb-10">
            <Badge color="danger" content={null} shape="circle">
              <DrawImage
                src={facebookIcon}
                width={50}
                height={49}
                loading={false}
                quality={65}
              />
            </Badge>
            <Badge color="danger" content={5} shape="circle">
              <DrawImage
                src={fbpageIcon}
                width={50}
                height={49}
                loading={false}
                quality={65}
              />
            </Badge>
            <Badge color="danger" content={5} shape="circle">
              <DrawImage
                src={instagramIcon}
                width={50}
                height={49}
                loading={false}
                quality={65}
              />
            </Badge>
            <Badge color="danger" content={5} shape="circle">
              <DrawImage
                src={tiktokIcon}
                width={50}
                height={49}
                loading={false}
                quality={65}
              />
            </Badge>
            <Badge color="danger" content={5} shape="circle">
              <DrawImage
                src={twitterIcon}
                width={50}
                height={49}
                loading={false}
                quality={65}
              />
            </Badge>
            <Badge color="danger" content={5} shape="circle">
              <DrawImage
                src={youtubeIcon}
                width={50}
                height={49}
                loading={false}
                quality={65}
              />
            </Badge>
          </div>
        </div>

        <div className="w-full container mx-auto mt-5">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="bordered"
            className="items-center justify-center flex"
            selectedKey={selected}
            //@ts-ignore
            onSelectionChange={setSelected}
          >
            <Tab
              key="videos"
              title={
                <div className="flex items-center space-x-2">
                  <VideoIcon />
                  <span>เพิ่มวิดีโอแนะนำสำหรับโชว์ Rate Card</span>
                </div>
              }
            >
              <Card className="max-w-[900px] max-h-[700px] mx-auto">
                <CardBody>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-100 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {videoSrc && (
                          <video
                            src={videoSrc}
                            className="object-contain h-auto w-100"
                            controls
                            loop
                            autoPlay
                            muted
                          />
                        )}
                        {!videoSrc && (
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                        )}
                        {!videoSrc && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            MP4, WEBM, OGG (MAX. 800x400px)
                          </p>
                        )}
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const fr = new FileReader();
                            fr.readAsDataURL(file);
                            fr.onload = () => {
                              setVideoSrc(fr.result as string);
                            };
                          }
                        }}
                      />
                    </label>
                  </div>
                  <Button
                    className="ml-3 mt-3"
                    color="success"
                    onClick={() => {
                      fetch("/api/upload", {
                        method: "POST",
                        body: JSON.stringify({
                          src: videoSrc,
                        }),
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          console.log(data);
                          setVideoSrc("");
                        });
                    }}
                  >
                    บันทึก
                  </Button>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="photos1"
              title={
                <div className="flex items-center space-x-2">
                  <GalleryIcon />
                  <span>เพิ่มรูปแนะนำสำหรับโชว์ Rate Card</span>
                </div>
              }
            >
              <Card className="max-w-[900px] max-h-[700px] mx-auto">
                <CardBody>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-100 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {preview1Src && (
                          <img
                            src={preview1Src}
                            className="object-contain h-auto w-96"
                            alt="preview"
                          />
                        )}
                        {!preview1Src && (
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                        )}
                        {!preview1Src && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        )}
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const fr = new FileReader();
                            fr.readAsDataURL(file);
                            fr.onload = () => {
                              setPreview1Src(fr.result as string);
                            };
                          }
                        }}
                      />
                    </label>
                  </div>
                  <Button
                    className="ml-3 mt-3"
                    color="success"
                    onClick={() => {
                      fetch("/api/upload", {
                        method: "POST",
                        body: JSON.stringify({
                          src: preview1Src,
                        }),
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          console.log(data);
                          setPreview1Src("");
                        });
                    }}
                  >
                    บันทึก
                  </Button>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="photo2"
              title={
                <div className="flex items-center space-x-2">
                  <GalleryIcon />
                  <span>เพิ่มรูปผลงาน</span>
                </div>
              }
            >
              <Card className="max-w-[900px] max-h-[700px] mx-auto">
                <CardBody>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-100 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {preview2Src && (
                          <img
                            src={preview2Src}
                            className="object-contain h-auto w-96"
                            alt="preview"
                          />
                        )}
                        {!preview2Src && (
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                        )}
                        {!preview2Src && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        )}
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const fr = new FileReader();
                            fr.readAsDataURL(file);
                            fr.onload = () => {
                              setPreview2Src(fr.result as string);
                            };
                          }
                        }}
                      />
                    </label>
                  </div>
                  <Button
                    className="ml-3 mt-3"
                    color="success"
                    onClick={() => {
                      fetch("/api/upload", {
                        method: "POST",
                        body: JSON.stringify({
                          src: preview2Src,
                        }),
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          console.log(data);
                          setPreview2Src("");
                        });
                    }}
                  >
                    บันทึก
                  </Button>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
