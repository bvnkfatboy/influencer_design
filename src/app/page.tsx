"use client";
import Image from "next/image";

import Frame_1 from "@/assets/images/homepage/Frame1.png";
import Frame_2 from "@/assets/images/homepage/Frame2.png";
import SearchIcon from "@/assets/svg/search.svg";
import DrawImage from "@/components/utils/drawImage";
import Buisness from "@/components/homepage/buisness";
import Background from "@/components/background";
import { Link } from "@nextui-org/link";
import SignUpIcon from "@/assets/svg/signup.svg";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main>
      <Background />
      <div className="flex flex-col justify-center items-center sm:gap-x-12">
        <div className="relative mt-10 w-full max-w-[384px] max-[425px]:max-w-[350px]  sm:w-auto min-[1024px]:absolute min-[1024px]:left-[50%] min-[1024px]:top-[7%]">
          <div className="text-gray-600 search-infu">
            <form className="rounded-full p-2 bg-gradient-to-r from-[#B179FC] to-[#6885F5]">
              <input
                type="text"
                name="serch"
                placeholder="ค้นหาอินฟูเอนเซอร์หน้าใหม่"
                className="bg-white h-10 px-5 mr-[3rem] pr-[8rem] min-[375px]:pr-[6rem] min-[320px]:pr-[4rem]  rounded-full text-sm focus:outline-none w-100"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4 "
              >
                <div className="h-7 w-7 fill-current ">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <DrawImage
                      src={SearchIcon}
                      width={240}
                      height={240}
                      loading={false}
                      quality={65}
                    />
                  </motion.div>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="section-1  min-[1024px]:mt-[0rem] min-[768px]:mt-[0.5rem] max-[425px]:mt-[1rem]">
          <DrawImage
            src={Frame_1}
            width={1091}
            height={797}
            loading={false}
            quality={85}
          />
        </div>
        <div className="w-full flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <Link
              href="/register"
              size="sm"
              className="relative md:left-[10rem] lg:left-[13.5rem] xl:left-[15rem] 2xl:left-[14.5rem] md:-mt-5"
            >
              <DrawImage
                src={SignUpIcon}
                width={195}
                height={67}
                loading={false}
                quality={65}
                className="object-cover"
              />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="section-2">
          <DrawImage
            src={Frame_2}
            width={1166}
            height={652}
            loading={true}
            quality={85}
          />
          <Buisness />
        </div>
      </div>
    </main>
  );
}
