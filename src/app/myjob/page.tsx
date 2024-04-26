"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function MyJob() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#DFEEF7] to-[#FFEBEB] py-10 ">
        <h1 className="text-3xl font-bold text-center">งานของฉัน</h1>
      </div>
      <div className="flex w-full flex-col max-w-[1024px] mx-auto mt-5">
        <Tabs
          aria-label="Options"
          className="flex justify-center bg-[#C9C6E4] sm:rounded-md"
          classNames={{
            tabList: "bg-[#C9C6E4]",
            cursor: "bg-[#696683] text-white",
            tabContent: "group-data-[selected=true]:text-[#ffffff]",
          }}
        >
          <Tab key="all" title="ทั้งหมด">
            <Card className="sm:rounded-md">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="waiting_pick" title="รอคัดเลือก">
            <Card className="sm:rounded-md">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="waiting_approve" title="รอคัดเลือก">
            <Card className="sm:rounded-md">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="waiting_post" title="รอโพสต์">
            <Card className="sm:rounded-md">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="waiting_insight_post" title="รอส่ง Insight Post">
            <Card className="sm:rounded-md">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="waiting_insight_approve" title="รอตรวจ Insight">
            <Card className="sm:rounded-md">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
