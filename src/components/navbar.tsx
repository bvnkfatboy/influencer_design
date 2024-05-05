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
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useSession, signOut, signIn } from "next-auth/react";

import DynamicNavbar from "@/components/ui/dynamicnavbar";
import { NotificationIcon } from "@/components/icon/notificationicon";
import { useRouter } from "next/navigation";
import { MessageCircle, Bell, Megaphone, BellRing } from "lucide-react";
export default function NavBar() {
  const { data: session } = useSession();
  const router = useRouter();
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

  const sessionItems = [
    {
      name: "หน้าแรก",
      path: "/",
    },
    {
      name: "งานของฉัน",
      path: "/myjob",
    },
    {
      name: "เติมเงิน",
      path: "/topup",
    },
  ];

  const messageItems = [
    {
      title: "แจ้งเตือน",
      description: "มีงานใหม่สามารถดูได้",
    },
    {
      title: "แจ้งเตือน",
      description: "มีลูกค้าติดตามคุณ",
    },
    {
      title: "แจ้งเตือน",
      description: "มีลูกค้าถูกใจโปรไฟล์คุณ",
    },
  ];
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
          {session
            ? sessionItems.map((item, index) => (
                <NavbarItem key={index}>
                  <Button
                    as={Link}
                    href={item.path}
                    className="text-md transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ease-in-out delay-150 bg-transparent"
                  >
                    {item.name}
                  </Button>
                </NavbarItem>
              ))
            : menuItems.map((item, index) => (
                <NavbarItem key={index}>
                  <Button
                    as={Link}
                    href={item.path}
                    className="text-md transition duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ease-in-out delay-150 bg-transparent"
                  >
                    {item.name}
                  </Button>
                </NavbarItem>
              ))}
        </div>
        {session ? (
          <div className="flex flex-row">
            <NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button>
                    <Badge color="danger" content={5} shape="circle">
                      <Bell />
                    </Badge>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  {messageItems.map((item, index) => (
                    <DropdownItem
                      key={index}
                      description={item.description}
                      startContent={<BellRing />}
                      className="text-ellipsis"
                    >
                      {item.title}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/chat");
                }}
                className="text-md  bg-transparent p-0 m-0"
              >
                <Badge color="danger" content={5} shape="circle">
                  {/* <NotificationIcon size={24} /> */}
                  <MessageCircle />
                </Badge>
              </Button>
            </NavbarItem>
          </div>
        ) : null}
        <NavbarItem className="z-100">
          <DynamicNavbar />
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
