import * as React from "react";
import { signIn } from "@/server/auth";
import { Button } from "@/components/ui/button";

export function SignUpForm() {
  return (
    <div className="grid gap-6">
      <form
        action={async () => {
          "use server";
          await signIn("discord");
        }}
      >
        <div className="grid gap-2">
          <Button variant="outline" type="submit">
            Sign Up with Discord
          </Button>
        </div>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <div className="grid gap-2">
          <Button variant="outline" type="submit">
            Sign Up with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
