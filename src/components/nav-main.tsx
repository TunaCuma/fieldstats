"use client";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
}) {
  const t = useTranslations();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={isActive(item.href)}
              tooltip={t(`sidebar.${item.name}`)}
            >
              <Link href={item.href}>
                {item.icon && <item.icon />}
                <span className="capitalize">{t(`sidebar.${item.name}`)}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
