"use clent";
import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  CircularProgress,
} from "@nextui-org/react";

import { Mail, Lock } from "lucide-react";

import GoogleIcon from "@/assets/svg/icon/google.svg";
import FacebookIcon from "@/assets/svg/icon/facebook.svg";
import LineIcon from "@/assets/svg/icon/line.svg";
import LoadingGif from "@/assets/gif/loading.gif";
import DrawImage from "@/components/utils/drawImage";
import { useRouter, redirect } from "next/navigation";

export default function DynamicNavbar() {
  const { data: session } = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginOpen, setisLoginOpen] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setLoading(false);
        setError("อีเมล หรือ รหัสผ่านไม่ถูกต้อง");
        return;
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const socialSubmit = async (provider: string) => {
    try {
      setError("");
      const res = await signIn(provider, {
        redirect: false,
      });
      if (res?.error) {
        setError("อีเมลนี้เคยลงทะเบียนแล้ว โปรดลองใช้อีเมลอื่น");
        return;
      }
    } catch (error) {
      // console.log(error);
    }
  };

  if (!session) {
    return (
      <div>
        <Button
          onClick={() => {
            setError("");
            setisLoginOpen(true);
            onOpen();
          }}
          variant="solid"
          className="bg-gradient-to-r from-[#B179FC] to-[#6885F5] text-white rounded-full"
        >
          เข้าสู่ระบบ
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center text-xl">
                  เข้าสู่ระบบ
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-center">
                    <p>{error}</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <Input
                      autoFocus
                      endContent={<Mail size={24} />}
                      label="Email"
                      placeholder="กรอกอีเมลของคุณ"
                      variant="bordered"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <Input
                      endContent={<Lock size={24} />}
                      label="Password"
                      placeholder="กรอกรหัสผ่านของคุณ"
                      type="password"
                      variant="bordered"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <div className="flex py-1 px-1 justify-between">
                      <Link color="primary" href="/register" size="sm">
                        หากยังไม่มีบัญชี
                      </Link>
                      <Link color="primary" href="#" size="sm">
                        ลืมรหัสผ่าน?
                      </Link>
                    </div>

                    <Button
                      color="primary"
                      className="mb-2 bg-gradient-to-r from-[#B179FC] to-[#6885F5] text-white rounded-full w-full"
                      type="submit"
                    >
                      {loading ? (
                        <CircularProgress
                          classNames={{
                            svg: "w-8 h-8 drop-shadow-md",
                            indicator: "stroke-white",
                            track: "stroke-white/10",
                            value: "font-semibold text-white",
                          }}
                          aria-label="Loading..."
                        />
                      ) : (
                        "เข้าสู่ระบบ"
                      )}
                    </Button>
                  </form>

                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                      หรือ
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-10 mb-10 mt-3">
                    <Link
                      onClick={() => {
                        socialSubmit("google");
                      }}
                      className="cursor-pointer"
                      size="sm"
                    >
                      <DrawImage
                        src={GoogleIcon}
                        width={40}
                        height={40}
                        loading={true}
                        quality={65}
                        className="rounded-full"
                      />
                    </Link>
                    <Link
                      onClick={() => {
                        socialSubmit("facebook");
                      }}
                      className="cursor-pointer"
                      size="sm"
                    >
                      <DrawImage
                        src={FacebookIcon}
                        width={40}
                        height={40}
                        loading={true}
                        quality={65}
                        className="rounded-full"
                      />
                    </Link>
                    <Link
                      onClick={() => {
                        socialSubmit("line");
                      }}
                      className="cursor-pointer"
                      size="sm"
                    >
                      <DrawImage
                        src={LineIcon}
                        width={40}
                        height={40}
                        loading={true}
                        quality={65}
                        className="rounded-full"
                      />
                    </Link>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  } else {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={session?.user?.name || ""}
            size="sm"
            src={session?.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">{session?.user?.name}</p>
            <p className="font-semibold">{session?.user?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="profile_page"
            onClick={() => router.push("/profile")}
          >
            หน้าโปรไฟล์
          </DropdownItem>
          <DropdownItem key="job_page" onClick={() => router.push("/myjob")}>
            งานของฉัน
          </DropdownItem>
          <DropdownItem key="chat_page" onClick={() => router.push("/chat")}>
            แชทสนทนา
          </DropdownItem>

          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => {
              signOut({
                redirect: true,
                callbackUrl: "/",
              });
              setisLoginOpen(false);
            }}
          >
            ออกจากระบบ
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      // <Button
      //   onClick={() => signOut()}
      //   variant="solid"
      //   className="bg-gradient-to-r from-[#B179FC] to-[#6885F5] text-white rounded-full"
      // >
      //   ออกจากระบบ
      // </Button>
    );
  }
}
