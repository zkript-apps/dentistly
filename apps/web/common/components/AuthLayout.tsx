"use client";
import Link from "next/link";
import {
  Bell,
  Bolt,
  CircleUser,
  CreditCard,
  Home,
  LockKeyhole,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/common/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/components/shadcn/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/components/shadcn/ui/dropdown-menu";
import { Input } from "@/common/components/shadcn/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/common/components/shadcn/ui/sheet";
import { usePathname } from "next/navigation";
import { Header } from "./ui/header/header";
import { Navigation } from "./ui/header/navigation";


export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
     <Header />
     <Navigation />

      {children}
    </div>
  );
}
