"use client";
import React from "react";
import {
  Checkbox,
  Button,
  ScrollShadow,
  DatePicker,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useRouter, redirect } from "next/navigation";
export default function InfluencerRegister() {
  const router = useRouter();
  const [isSelected, setIsSelected] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [onButton, setOnButton] = React.useState(false);
  React.useEffect(() => {
    if (onButton) {
      if (isSelected) {
        setIsChecked(true);
      } else {
        setOnButton(false);
      }
    }
  });

  if (isChecked) {
    return (
      <div>
        <div className="flex justify-center flex-col w-full ">
          <div className="bg-gradient-to-r from-[#DFEEF7] to-[#FFEBEB] py-10 ">
            <h1 className="text-3xl font-bold text-center">
              สมัครเป็นอินฟลูเอนเซอร์
            </h1>
          </div>
          <div className="w-full max-w-[1024px] mx-auto  mt-5 rounded-2xl shadow-lg border-solid border-[1px] border-black">
            <div className="p-10">
              <p className="text-xl py-3">ข้อมูลส่วนตัว</p>

              <form>
                <div className="mb-6">
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    อีเมล<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="อีเมล"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                    รหัสผ่าน<div className="text-red-500">*</div>
                  </label>
                  <input
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="รหัสผ่าน"
                    required
                  />
                </div>
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
  } else {
    return (
      <div className="max-w-[1024px] mx-auto mt-3 ">
        <ScrollShadow className="w-full h-[700px]">
          <div className="p-5">
            <p className="text-3xl font-bold">
              เงื่อนไข และข้อตกลงการใช้บริการ
            </p>

            <div className="w-full mt-10  flex flex-row items-start justify-start pt-0 px-0 pb-[47px] box-border leading-[normal] tracking-[normal]">
              <section className="h-[930px] flex-1 relative text-black text-left flex  max-w-full text-lg font-kanit">
                <span>
                  <p className="font-semibold whitespace-pre-wrap break-all">
                    1. คำจำกัดความ
                  </p>
                  <p className=" text-base font-medium font-poppins">&nbsp;</p>
                  <ol className="m-0 font-poppins text-base pl-[21px]">
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “งาน” หมายถึง สิ่งของ และ/หรือ ผลของการบริการต่าง ๆ
                        ที่สั่งทำ หรือว่าจ้างผ่านแพลตฟอร์
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ฟรีแลนซ์” หมายถึง
                        ผู้ใช้งานที่ประกาศรับทำงานและจะส่งมอบงานผ่านแพลตฟอร์ม
                        ซึ่งตกลงยอมรับตามข้อกำหนดการใช้งาน
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ผู้ว่าจ้าง” หมายถึง
                        ผู้ใช้งานที่จ้างงานและรับมอบงานผ่านแพลตฟอร์ม
                        ซึ่งตกลงยอมรับตามข้อกำหนดการใช้งาน
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ผู้ใช้งาน” หมายถึง บุคคลที่ใช้บริการแพลตฟอร์ม
                        โดยใช้บริการต่างๆ ตามที่แพลตฟอร์มกำหนด
                        โดยผู้ใช้งานให้หมายความรวมถึงฟรีแลนซ์ และผู้ว่าจ้างด้วย
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “แพลตฟอร์ม” หมายถึง เว็บไซต์ (https://fastwork.co)
                        หรือแอปพลิเคชันของบริษัทฯ (Fastwork บน Apple Store และ
                        Google Play Store) ซึ่งเป็นพื้นที่ที่ให้ผู้ใช้งาน
                        อันหมายความรวมถึงผู้ว่าจ้างใช้ค้นหา, ติดต่อและ/หรือ
                        จ้างงานฟรีแลนซ์ผ่าน รวมถึงฟรีแลนซ์ ใช้ประกาศรับทำงาน
                        ติดต่อผู้ว่าจ้างและ/หรือ
                        ขายงานผ่านเว็บไซต์หรือแอปพลิเคชันของบริษัทฯ
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “หน้ารายละเอียดงาน” หมายถึง หน้าหนึ่งบนแพลตฟอร์ม
                        ที่ฟรีแลนซ์ประกาศรับทำงาน
                        โดยฟรีแลนซ์สามารถอธิบายถึงรายละเอียดของงานที่ตนประกาศรับทำงาน
                        ซึ่งผู้ว่าจ้างสามารถอ่านและตัดสินใจว่าจ้างฟรีแลนซ์จากหน้ารายละเอียดงานดังกล่าว
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ออเดอร์” หมายถึง การทำสัญญาระหว่างผู้ว่าจ้างและฟรีแลนซ์
                        ซึ่งจะเกิดขึ้นหลังจากที่ผู้ว่าจ้างชำระเงินค่าจ้างฟรีแลนซ์ผ่านแพลตฟอร์ม
                        จากหน้ารายละเอียดงาน
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “หน้างาน” หมายถึง หน้าหนึ่งบนแพลตฟอร์ม
                        สำหรับใช้เป็นช่องทางการสื่อสารระหว่างผู้ว่าจ้างกับฟรีแลนซ์ที่เกี่ยวข้องกับงานที่ผู้ว่าจ้างได้ตกลงจ้างให้ฟรีแลนซ์ทำ
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “รายได้” หมายถึง จำนวนเงินก่อนภาษีหัก ณ ที่จ่าย
                        ที่ฟรีแลนซ์ได้รับหลังจากส่งมอบงานให้แก่ผู้ว่าจ้างเรียบร้อยแล้ว
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “เนื้อหาที่สร้างโดยผู้ใช้งาน” หมายถึง เนื้อหาต่าง ๆ
                        ที่ถูกสร้างขึ้นมาโดยผู้ใช้งานอื่น ๆ ในแพลตฟอร์ม
                        ซึ่งไม่ได้ถูกสร้างโดยบริษัทฯ หรือแพลตฟอร์มเอง
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ใบเสนอราคา” หมายถึง ข้อมูลที่ฟรีแลนซ์ส่งผ่านแพลตฟอร์ม
                        ให้แก่ผู้ว่าจ้างที่สนใจจะจ้างงาน
                        อันประกอบไปด้วยขอบเขตการทำงาน ระยะเวลาการทำงาน
                        พร้อมระบุเงื่อนไขและราคา เพื่อประกอบการตัดสินใจจ้างงาน
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ออเดอร์ที่ไม่มีการเคลื่อนไหว” หมายถึง
                        ออเดอร์ที่ไม่มีการเคลื่อนไหวทางสถานะ และไม่มีการติดต่อ
                        โต้ตอบผ่านแพลตฟอร์ม ระหว่างผู้ว่าจ้างและฟรีแลนซ์
                        จนถึงระยะเวลาตามที่บริษัทฯ กำหนด (อ้างอิงข้อ 3.6.8)
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ค่าธรรมเนียมการใช้บริการแพลตฟอร์ม (Commission)” หมายถึง
                        ค่าบริการที่แพลตฟอร์มเรียกเก็บจากทางฟรีแลนซ์ฝ่ายเดียว
                        โดยไม่เรียกเก็บจากผู้ว่าจ้าง
                        ผู้ว่าจ้างสามารถจ้างงานบนแพลตฟอร์มได้โดยไม่เสียค่าใช้จ่ายเพิ่มเติมจากราคางานที่ได้ตกลงรายละเอียดกับฟรีแลนซ์
                        ตามที่ระบุในใบเสนอราคา
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ค่าธุรกรรมการชำระเงิน (Transaction Fee)” หมายถึง
                        ค่าธรรมเนียมที่เรียกเก็บจากผู้ว่าจ้าง
                        เมื่อผู้ว่าจ้างทำการจ้างงานฟรีแลนซ์
                        และชำระเงินค่าจ้างงานให้แก่ฟรีแลนซ์ในทุกออเดอร์
                        เนื่องจากค่าธรรมเนียมดังกล่าวเป็นค่าบริการที่เรียกเก็บโดยผู้ให้บริการจากการรับชำระเงิน
                        ซึ่งจะเรียกเก็บตามอัตราค่าธรรมเนียมที่กำหนดไว้ตามแต่ละช่องทางการชำระเงินที่ผู้ว่าจ้างเลือกใช้บริการ
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        “ข้อมูลส่วนบุคคล” หมายถึง
                        ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้
                        ไม่ว่าทางตรงหรือทางอ้อม
                      </span>
                    </li>
                  </ol>
                  <p className="[margin-block-start:0] [margin-block-end:1px] font-semibold">
                    &nbsp;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:1px] font-semibold whitespace-pre-wrap">
                    {" "}
                    2. ทั่วไป
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:1px] font-semibold">
                    &nbsp;
                  </p>
                  <ol className="m-0  text-base pl-[21px]">
                    <li className="mb-0 ">
                      <span className="font-medium break-all">
                        เงื่อนไขข้อตกลงการใช้งานนี้ (“ข้อตกลงการใช้งาน”)
                        มีผลใช้บังคับตั้งแต่วันที่ 24 พฤษภาคม 2566 เป็นต้นไป
                        จนกว่าจะมีการประกาศแก้ไข เปลี่ยนแปลง เพิ่มเติม
                        หรือมีประกาศเงื่อนไขฉบับใหม่โดยบริษัท ฟาสต์เวิร์ค
                        เทคโนโลยีส์ จำกัด (ซึ่งต่อไป จะเรียกว่า “บริษัทฯ ”)
                        เมื่อมีการเปลี่ยนแปลง บริษัทฯ
                        จะทำการแสดงข้อตกลงการใช้งานใหม่บนหน้านี้
                        และมีการแจ้งเตือนเพื่อให้ผู้ใช้งานได้มีการยอมรับข้อตกลงการใช้งานใหม่ผ่านแพลตฟอร์ม
                      </span>
                    </li>
                    <li className="mb-0 whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        ข้อตกลงการใช้งานจะเป็นข้อตกลงการใช้งานระหว่างท่านกับแพลตฟอร์ม
                        ซึ่งกำหนดสิทธิ์ หน้าที่และความรับผิดชอบ
                        ที่แต่ละฝ่ายมีระหว่างกัน
                        เกี่ยวกับการให้บริการและการใช้บริการทั้งหมดบนแพลตฟอร์ม
                      </span>
                    </li>
                    <li className="whitespace-pre-wrap">
                      <span className="font-medium break-all">
                        การใช้งานแพลตฟอร์ม การสร้างบัญชีผู้ใช้งาน
                        หรือเมื่อท่านเริ่มใช้งานแพลตฟอร์ม
                        และยอมรับข้อตกลงการใช้งานของบริษัทฯ ทางบริษัทฯ
                        จะถือว่าท่านยอมรับที่จะปฏิบัติตามและอยู่ภายใต้ข้อตกลงการใช้งาน
                        รวมถึงยอมรับนโยบายความเป็นส่วนตัวที่บริษัทฯ กำหนด
                        โดยท่านจะไม่สามารถใช้บริการแพลตฟอร์มได้
                        หากท่านไม่เห็นด้วยกับข้อตกลง
                        หรือนโยบายความเป็นส่วนตัวดังกล่าว ทั้งนี้
                        ท่านในฐานะผู้ใช้งานจะต้องไม่ทำการใด ๆ
                        อันเป็นสิ่งผิดกฎหมาย
                        หรือขัดต่อความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชนผ่านแพลตฟอร์มโดยเด็ดขาด
                        รวมถึงจะต้องไม่ทำการใด ๆ อันขัดต่อข้อตกลงการใช้งาน
                        ซึ่งการพิจารณาการกระทำดังกล่าว บริษัทฯ
                        ขอสงวนสิทธิ์ให้เป็นการใช้ดุลพินิจของบริษัทฯ
                        และให้ถือเป็นข้อยุติ
                      </span>
                    </li>
                  </ol>
                </span>
              </section>
            </div>
          </div>
        </ScrollShadow>

        <div className="flex justify-center flex-col items-center mb-5 mt-3">
          <Checkbox
            isSelected={isSelected}
            onValueChange={setIsSelected}
            required
          >
            ฉันยอมรับเงื่อนไขและข้อตกลงการใช้บริการ
          </Checkbox>
          <Button
            color="primary"
            onClick={() => setOnButton(true)}
            className="mt-3 w-[200px]"
          >
            สมัครเป็นอินฟลูเอนเซอร์
          </Button>
        </div>
      </div>
    );
  }
}
