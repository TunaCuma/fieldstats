"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  const breadcrumbs = [
    { href: "/", label: "Dashboard", icon: Home },
    ...paths.map((path, index) => ({
      href: `/${paths.slice(0, index + 1).join("/")}`,
      label: path.charAt(0).toUpperCase() + path.slice(1),
    })),
  ];

  // TODO addd localization

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.href}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <BreadcrumbLink href={breadcrumb.href}>
                  {index === 0 ? (
                    <breadcrumb.icon className="h-4 w-4" />
                  ) : (
                    breadcrumb.label
                  )}
                </BreadcrumbLink>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
              </>
            ) : (
              <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
