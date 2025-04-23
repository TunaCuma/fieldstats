import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { api } from "@/trpc/server";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { routes } from "@/constants/routes";
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { type UserSelectType } from "@/data-access/user/userTypes";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  let user: UserSelectType | null = null;
  try {
    user = await api.user.getProfile();
  } catch {
    redirect(routes.signin);
  }

  if (!session) {
    // Redirect to sign-in if not authenticated
    redirect(routes.signin);
  }

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b bg-card px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumbs />
        </header>
        <main className="flex-1 overflow-y-scroll p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
