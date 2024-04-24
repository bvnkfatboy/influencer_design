"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";

import {
  AppWindow,
  ChevronDown,
  Contact2,
  TimerReset,
  User2,
  Webhook,
  Mail,
  Lock,
} from "lucide-react";
import DrawImage from "../utils/drawImage";

import GoogleIcon from "@/assets/svg/icon/google.svg";
import FacebookIcon from "@/assets/svg/icon/facebook.svg";
import LineIcon from "@/assets/svg/icon/line.svg";
export default function NavBar() {
  const menuItems = [
    {
      name: "หน้าแรก",
      path: "/",
    },
    {
      name: "ติดต่อ",
      path: "/contact",
    },
    {
      name: "รีวิว",
      path: "/review",
    },
    {
      name: "แพ็คเกจ",
      path: "/package",
    },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar isBlurred maxWidth="xl" className="bg-[hsla(259,31%,88%,0.6)]">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <span className="font-bold text-inherit text-lg">Acme</span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarBrand>
          <span className="font-bold text-2xl flex gap-3 justify-center items-center">
            Acme
          </span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hidden sm:flex ">
          <NavbarItem>
            <Button
              as={Link}
              href={menuItems[0].path}
              className="text-md transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ease-in-out delay-150 bg-transparent"
            >
              {menuItems[0].name}
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              href={menuItems[1].path}
              className="text-md transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ease-in-out delay-150 bg-transparent"
            >
              {menuItems[1].name}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href={menuItems[2].path}
              className="text-md transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ease-in-out delay-150 bg-transparent"
            >
              {menuItems[2].name}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href={menuItems[3].path}
              className="text-md transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ease-in-out delay-150 bg-transparent"
            >
              {menuItems[3].name}
            </Button>
          </NavbarItem>
        </div>
        <NavbarItem className="z-100">
          <Button
            onClick={onOpen}
            variant="solid"
            className="bg-gradient-to-r from-[#B179FC] to-[#6885F5] text-white rounded-full"
          >
            เข้าสู่ระบบ
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[hsla(259,31%,88%,0.65)]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            className="transition duration-300 hover:text-blue-600"
          >
            <Link
              className="w-full text-2xl"
              href={item.path}
              color="foreground"
              underline="hover"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

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
                <Input
                  autoFocus
                  endContent={<Mail size={24} />}
                  label="Email"
                  placeholder="กรอกอีเมลของคุณ"
                  variant="bordered"
                />
                <Input
                  endContent={<Lock size={24} />}
                  label="Password"
                  placeholder="กรอกรหัสผ่านของคุณ"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-1 px-1 justify-between">
                  <Link color="primary" href="#" size="sm">
                    หากยังไม่มีบัญชี
                  </Link>
                  <Link color="primary" href="#" size="sm">
                    ลืมรหัสผ่าน?
                  </Link>
                </div>
                <Button color="primary" className="mb-2" onClick={onClose}>
                  Sign in
                </Button>
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                    หรือ
                  </span>
                </div>
                <div className="flex items-center justify-center gap-10 mb-10 mt-3">
                  <Link href="#" size="sm">
                    <DrawImage
                      src={GoogleIcon}
                      width={40}
                      height={40}
                      loading={true}
                      quality={65}
                      className="rounded-full"
                    />
                  </Link>
                  <Link href="#" size="sm">
                    <DrawImage
                      src={FacebookIcon}
                      width={40}
                      height={40}
                      loading={true}
                      quality={65}
                      className="rounded-full"
                    />
                  </Link>
                  <Link href="#" size="sm">
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
    </Navbar>
  );
}

{
  /* <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDown size={16} />} variant="light">
                Features
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={<AppWindow size={24} />}
              >
                <Link href={`${menuItems[1].path}/autoscaling`}>
                  Autoscaling
                </Link>
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={<User2 size={24} />}
              >
                <Link href={`${menuItems[1].path}/usage-metrics`}>
                  Usage Metrics
                </Link>
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={<Webhook size={24} />}
              >
                <Link href={`${menuItems[1].path}/production-ready`}>
                  Production Ready
                </Link>
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={<TimerReset size={24} />}
              >
                <Link href={`${menuItems[1].path}/99-uptime`}>
                  +99% Uptime
                </Link>
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={<Contact2 size={24} />}
              >
                <Link href={`${menuItems[1].path}/supreme-support`}>
                  +Supreme Support
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem> */
}
