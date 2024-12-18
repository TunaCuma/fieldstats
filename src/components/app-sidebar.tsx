"use client";

import * as React from "react";
import {
  Upload,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  Frame,
  // Map,
  // PieChart,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { type UserSelectType } from "@/data-access/user/userTypes";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Keçiören Gücü",
      logoUrl: "https://www.keciorengucu.org.tr/akg-logo-white.png",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logoUrl: "https://www.keciorengucu.org.tr/akg-logo-white.png",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logoUrl: "https://www.keciorengucu.org.tr/akg-logo-white.png",
      plan: "Free",
    },
  ],
  navMain: [
    { name: "dashboard", href: "/dashboard", icon: BarChart2 },
    { name: "upload", href: "/upload", icon: Upload },
    { name: "matches", href: "/matches", icon: BarChart2 },
    { name: "teams", href: "/teams", icon: Users },
    { name: "players", href: "/players", icon: Users },
    { name: "settings", href: "/settings", icon: Settings },
    { name: "help", href: "/help", icon: HelpCircle },
  ],
  superAdminNavMain: [
    { name: "debug", href: "/debug", icon: HelpCircle },
    { name: "theme", href: "/theme", icon: Frame },
  ],
  projects: [
    // {
    //   name: "Design Engineering",
    //   url: "#",
    //   icon: Frame,
    // },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: UserSelectType | null;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} title="Platform" />
        <NavProjects projects={data.projects} />
        <NavMain items={data.superAdminNavMain} title="Super Admin" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
