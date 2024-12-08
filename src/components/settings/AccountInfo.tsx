import { api } from "@/trpc/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default async function AccountInfo() {
  const user = await api.user.getProfile();

  console.log(user?.image);

  return (
    <CardHeader className="flex flex-row items-center gap-4 p-2">
      <Avatar className="h-16 w-16">
        <AvatarImage
          src={user?.image ?? undefined}
          alt={user?.name ?? "User avatar"}
        />
        <AvatarFallback>
          <User className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
      <CardTitle>
        <div className="text-lg">{user?.name ?? "User Profile"}</div>
        <div className="text-sm opacity-70">
          {user?.email ?? "User Profile"}
        </div>
      </CardTitle>
    </CardHeader>
  );
}
