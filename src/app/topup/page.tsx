"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button, Link } from "@nextui-org/react";
export default function TopupPage() {
  return (
    <div className="">
      <div className="flex justify-center flex-col w-full ">
        <div className="bg-gradient-to-r from-[#DFEEF7] to-[#FFEBEB] py-10 ">
          <h1 className="text-3xl font-bold text-center">เติมเงิน</h1>
        </div>
        <div className="w-full max-w-[1024px] mx-auto  mt-5 rounded-2xl shadow-lg border-solid border-[1px] border-black">
          <div className="p-10">
            <form>
              <div className="mb-6 flex items-center justify-center content-center">
                <label className="mr-10  text-[20px] font-medium text-gray-900 dark:text-white">
                  ระบุจำนวนเงินที่ต้องการเติม ขั้นต่ำ 100 บาท
                </label>
                <input
                  type="text"
                  className="max-w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="จำนวนเงิน"
                  required
                />
                <Button
                  color="primary"
                  className="ml-5 text-[20px] bg-gradient-to-r from-[#B179FC] to-[#6885F5] text-white rounded-full max-w-[50px]"
                  type="submit"
                >
                  เติมเงิน
                </Button>
              </div>

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="mr-10  text-[20px] font-medium text-gray-900 dark:text-white">
                    5,000 Coins
                  </label>
                </div>
                <div className="flex items-center justify-end content-center">
                  <Button
                    color="primary"
                    className="ml-5 text-md bg-gradient-to-r text-[20px] from-[#B179FC] to-[#6885F5] text-white rounded-full w-[200px] max-w-[200px]"
                    type="submit"
                  >
                    เติม 5,000 บาท
                  </Button>
                </div>
                <div>
                  <label className="mr-10  text-[20px] font-medium text-gray-900 dark:text-white">
                    10,000 Coins
                  </label>
                </div>
                <div className="flex items-center justify-end content-center">
                  <Button
                    color="primary"
                    className="ml-5 text-md bg-gradient-to-r text-[20px] from-[#B179FC] to-[#6885F5] text-white rounded-full w-[200px] max-w-[200px]"
                    type="submit"
                  >
                    เติม 10,000 บาท
                  </Button>
                </div>
                <div>
                  <label className="mr-10  text-[20px] font-medium text-gray-900 dark:text-white">
                    50,000 Coins
                  </label>
                </div>
                <div className="flex items-center justify-end content-center">
                  <Button
                    color="primary"
                    className="ml-5 text-md bg-gradient-to-r text-[20px] from-[#B179FC] to-[#6885F5] text-white rounded-full w-[200px] max-w-[200px]"
                    type="submit"
                  >
                    เติม 50,000 บาท
                  </Button>
                </div>
                <div>
                  <label className="mr-10  text-[20px] font-medium text-gray-900 dark:text-white">
                    100,000 Coins
                  </label>
                </div>
                <div className="flex items-center justify-end content-center">
                  <Button
                    color="primary"
                    className="ml-5 text-md bg-gradient-to-r text-[20px] from-[#B179FC] to-[#6885F5] text-white rounded-full w-[200px] max-w-[200px]"
                    type="submit"
                  >
                    เติม 100,000 บาท
                  </Button>
                </div>
                <div>
                  <label className="mr-10  text-[20px] font-medium text-gray-900 dark:text-white">
                    500,000 Coins
                  </label>
                </div>
                <div className="flex items-center justify-end content-center">
                  <Button
                    color="primary"
                    className="ml-5 text-md bg-gradient-to-r text-[20px] from-[#B179FC] to-[#6885F5] text-white rounded-full w-[200px] max-w-[200px]"
                    type="submit"
                  >
                    เติม 500,000 บาท
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <label className=" mb-2 text-sm font-medium text-[#FD4755] dark:text-white flex">
                  หมายเหตุ
                </label>
                <textarea
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="• Coin สามารถใช้ได้โดยไม่มีวันหมดอายุ"
                  readOnly
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
