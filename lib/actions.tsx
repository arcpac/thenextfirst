"use server";

import { redirect } from "next/navigation";
import { saveHero } from "./heroes";
import { heroSchema } from "@/validationSchema/hero-schema";
import { ZodError } from "zod";

function isInvalidText(text) {
  return !text || text.trim === "";
}

export async function submitSaveHero(prevState, formData: FormData) {
  // console.log(formData);
  try {
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
    redirect("/heroes");
  } catch (error) {
    if (error instanceof ZodError) {
      const validationErrors = error.errors.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));
      return { validationErrors };
    }
  }
}
