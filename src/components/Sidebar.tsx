"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Upload,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react";

const SidebarItems = [
  { name: "dashboard", href: "/", icon: BarChart2 },
  { name: "upload", href: "/upload", icon: Upload },
  { name: "matches", href: "/matches", icon: BarChart2 },
  { name: "teams", href: "/teams", icon: Users },
  { name: "players", href: "/players", icon: Users },
  { name: "profile", href: "/profile", icon: User },
  { name: "settings", href: "/settings", icon: Settings },
  { name: "help", href: "/help", icon: HelpCircle },
];

export function Sidebar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <MobileNav />
        </SheetContent>
      </Sheet>
      <nav className="hidden md:block">
        <ScrollArea className="py-6">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {t("sidebar.menu")}
            </h2>
            <div className="space-y-1">
              {SidebarItems.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {t(`sidebar.${item.name}`)}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </nav>
    </>
  );
}

function MobileNav() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-grow">
        <div className="flex flex-col gap-2 p-4">
          {SidebarItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant={isActive(item.href) ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {t(`sidebar.${item.name}`)}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/logout">
            <LogOut className="mr-2 h-4 w-4" />
            {t("sidebar.logout")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
