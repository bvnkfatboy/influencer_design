"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import DrawImage from "@/components/utils/drawImage";
import { useRouter, redirect } from "next/navigation";

import {
  Checkbox,
  Input,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  DatePicker,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

export default function EditProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="">
      <div className="flex justify-center flex-col w-full ">
        <div className="bg-gradient-to-r from-[#DFEEF7] to-[#FFEBEB] py-10 ">
          <h1 className="text-3xl font-bold text-center">แก้ไขข้อมูลส่วนตัว</h1>
        </div>
        <div className="w-full max-w-[1024px] mx-auto  mt-5 rounded-2xl shadow-lg border-solid border-[1px] border-black">
          <div className="p-10">
            <p className="text-xl py-3">ข้อมูลส่วนตัว</p>

            <form>
              <div className="mb-6">
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                  ชื่อหน้าโปรไฟล์<div className="text-red-500">*</div>
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ชื่อหน้าโปรไฟล์"
                  required
                />
              </div>

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    ชื่อ<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ชื่อ"
                    required
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    นามสกุล<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="นามสกุล"
                    required
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    ชื่อเล่น<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ชื่อเล่น"
                    required
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    อายุ<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xx"
                    required
                  />
                </div>

                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    วัน/เดือน/ปีเกิด<div className="text-red-500">*</div>
                  </label>
                  <DatePicker
                    showMonthAndYearPickers
                    className="border-1 border-solid rounded-lg border-gray-300 !bg-gray-50"
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    ประเทศ<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    เบอร์โทรศัพท์<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="tel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xx-xxxx-xxxx"
                    pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                    required
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    น้ำหนัก<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xx"
                    required
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    ส่วนสูง<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xxx"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                  เพศสภาพ<div className="text-red-500">*</div>
                </label>
                <RadioGroup orientation="horizontal">
                  <Radio value="Male">ชาย</Radio>
                  <Radio value="Female">หญิง</Radio>
                  <Radio value="Lgbtq">LGBTQIA+</Radio>
                </RadioGroup>
                {/* <div className="flex gap-4">
                  <Checkbox color="primary">ชาย</Checkbox>
                  <Checkbox color="primary">หญิง</Checkbox>
                  <Checkbox color="primary">LGBTQIA+</Checkbox>
                </div> */}
              </div>
              <p className="text-xl py-3">ข้อมูลแนะนำตัวเอง</p>
              <div className="mb-6">
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                  BIO
                </label>
                <textarea
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <Button
                color="primary"
                className=" text-md mb-2 bg-gradient-to-r from-[#B179FC] to-[#6885F5] text-white rounded-full w-full"
                type="submit"
              >
                บันทึก
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
