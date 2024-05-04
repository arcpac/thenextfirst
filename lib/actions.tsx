"use server";

import { redirect } from "next/navigation";
import { saveHero } from "./heroes";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim === "";
}

export async function submitSaveHero(prevState, formData: FormData) {
  const heroData = {
    name: formData.get("name") ?? "",
    description: formData.get("description") ?? "",
    image: formData.get("image") ?? "",
    creator: "test",
    creator_email: "test@email.com",
  };

  if (
    isInvalidText(heroData.name) ||
    isInvalidText(heroData.description) ||
    heroData.image.size === 0 ||
    !heroData.image ||
    !heroData.creator_email.includes("@")
  ) {
    return { message: "Wrong input" };
  }

  await saveHero(heroData);
  revalidatePath("/heroes");
  redirect("/heroes");
}
