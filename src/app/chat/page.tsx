"use client";
import React from "react";
import { Drawer } from "antd";
import type { DrawerProps } from "antd";
import { useEffect, useState } from "react";
import SearchIcon from "@/assets/svg/search.svg";
import DrawImage from "@/components/utils/drawImage";
import { Input, ScrollShadow } from "@nextui-org/react";

import { Tooltip } from "@nextui-org/react";
interface MassageDetail {
  id: string;
  message: string;
  sendby: string;
  reciveby: string;
  date: string;
}

interface Massage {
  id: string;
  send: string;
  recive: string;
  detail: MassageDetail[];
}

import Massages from "@/app/chat/data";

export default function ChatPage() {
  const [showMassages, setShowMassages] = useState<Massage[]>([]);
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setShowMassages((prev) => {
      let newArray = prev.filter((item) => item.id !== id);
      let clickedMassage = Massages.filter((item) => item.id === id)[0];
      newArray.unshift(clickedMassage);
      return newArray;
    });
  };

  return (
    <div className="flex mx-auto max-w-[1024px] max-h-[1080px] sm:mt-10  ">
      <div className="flex w-[1024px] mx-auto ">
        <div className="message hidden flex-col  sm:flex w-[300px] max-h-[1080px] ">
          <div className=" pt-3 pb-3 pl-3 bg-[#D9D9D9]  ">
            <form className="max-w-md mx-auto ">
              <div className="">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>

          <div className="list-massage flex flex-col bg-gray-300 h-[707px]">
            <ScrollShadow className="overflow-y-auto">
              {Massages.filter((Massage) => Massage.recive === "Bob").map(
                (Massage) => (
                  <a
                    onClick={() => handleClick(Massage.id)}
                    className="chat-click"
                  >
                    <div
                      key={Massage.id}
                      className="flex flex-row items-center content-center mt-2 mb-2 pl-5"
                    >
                      <DrawImage
                        //@ts-ignore
                        src="https://i.imgur.com/YcP0tik.jpeg"
                        width={53}
                        height={53}
                        loading={false}
                        className="rounded-full"
                      />
                      <div className="flex flex-col px-3">
                        <span className="whosendtobob">{Massage.send}</span>
                        <span className="massage">
                          {Massage.detail.at(-1)?.message}
                        </span>
                      </div>
                    </div>
                    <hr className="border-2px-solid border-black"></hr>
                  </a>
                )
              )}
            </ScrollShadow>
          </div>
        </div>

        <div className="massage-detail w-full max-h-[1080px]">
          <div className="message bg-gray-200 h-[780px]">
            <div className="massage-header bg-[#D9D9D9]">
              <div className="massage-header-name flex flex-row items-center content-center pt-3 pb-3 pl-[30px]">
                <DrawImage
                  //@ts-ignore
                  src="https://i.imgur.com/YcP0tik.jpeg"
                  width={53}
                  height={53}
                  loading={false}
                  className="rounded-full"
                />
                <span className="whosendtobob ml-5">
                  {showMassages[0]?.send}
                </span>
              </div>
            </div>
            <div className="message-content ">
              <ScrollShadow className="w-[100%] h-[650px]">
                <div className="">
                  {showMassages[0]?.detail.map((detail, index) => (
                    <div className="flex-1" key={index}>
                      <div className="px-4 py-2">
                        <div className="flex items-center mb-2">
                          <div className="font-medium ">
                            {/* {detail.sendby !== "Bob" ? detail.sendby : ""} */}
                          </div>
                        </div>

                        <div
                          className={`flex items-center ${
                            detail.sendby === "Bob"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {detail.sendby === "Bob" ? (
                            <>
                              <Tooltip showArrow={true} content={detail.date}>
                                <div
                                  className={`bg-${
                                    detail.sendby === "Bob"
                                      ? "blue-500"
                                      : "white"
                                  } text-${
                                    detail.sendby === "Bob" ? "white" : "black"
                                  } rounded-lg p-2 shadow  max-w-sm leading-1.5 border-blue-500 rounded-s-xl rounded-es-xl`}
                                >
                                  {detail.message}
                                </div>
                              </Tooltip>
                            </>
                          ) : (
                            <>
                              <DrawImage
                                //@ts-ignore
                                src="https://i.imgur.com/YcP0tik.jpeg"
                                width={30}
                                height={30}
                                loading={false}
                                className="rounded-full"
                                quality={100}
                              />
                              <Tooltip showArrow={true} content={detail.date}>
                                <div
                                  className={`bg-${
                                    detail.sendby === "Bob"
                                      ? "blue-500"
                                      : "white"
                                  } text-${
                                    detail.sendby === "Bob" ? "white" : "black"
                                  } rounded-lg p-2 shadow ml-2 max-w-sm leading-1.5 border-gray-200  rounded-e-xl rounded-es-xl`}
                                >
                                  <div className="rtl:space-x-reverse">
                                    {detail.message}{" "}
                                  </div>
                                </div>
                              </Tooltip>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollShadow>
            </div>
            <div className="message-footer">
              <div className="bg-gray-100 px-4 py-2">
                <div className="flex items-center">
                  {/* <input className="w-full border rounded-full py-2 px-4 mr-2" type="text" placeholder="Type your message...">
                   */}
                  <input
                    className="w-full border rounded-full py-2 px-4 mr-2"
                    type="text"
                    placeholder="Type your message..."
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
