"use server";

import { redirect } from "next/navigation";
import { saveHero } from "./heroes";
import { revalidatePath } from "next/cache";

interface HeroFormData {
  name: string;
  description: string;
  image: any;
  creator?: string;
  creator_email?: string;
}
interface FormState {
  message: string;
}

function isInvalidText(text: string) {
  return !text;
}

export async function submitSaveHero(
  prevState: FormState,
  formData: HeroFormData
): Promise<FormState> {
  const heroData = {
    name: formData.get("name") ?? "",
    description: formData.get("description") ?? "",
    image: formData.get("image") ?? "",
    creator: "test",
    creator_email: "test@email.com",
  };
  console.log("form Data", heroData);

  // console.log(heroData);
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
