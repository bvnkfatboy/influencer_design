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
} from "@nextui-org/react";

export default function EditProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  return <div>EditProfilePage</div>;
}
