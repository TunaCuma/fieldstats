"use server";
import { redirect } from "next/navigation";
import { api } from "@/trpc/server";

export default async function createPlayer(formData: FormData) {
  const rawFormData = {
    name: formData.get("name") as string,
    position: formData.get("position")
      ? (formData.get("position") as string)
      : undefined,
    dateOfBirth: formData.get("dateOfBirth")
      ? (formData.get("dateOfBirth") as string)
      : undefined,
    height: formData.get("height")
      ? parseInt(formData.get("height") as string, 10)
      : undefined,
    weight: formData.get("weight")
      ? parseInt(formData.get("weight") as string, 10)
      : undefined,
    teamId: formData.get("team")
      ? parseInt(formData.get("team") as string, 10)
      : undefined,
    jerseyNumber: parseInt(formData.get("jerseyNumber") as string, 10),
  };

  // Call the procedure
  const newPlayer = await api.player.createPlayer(rawFormData);
  console.log(newPlayer);

  // Redirect to the player's page
  //TODO add toast notification

  redirect(`/players`);
}
