"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import "easymde/dist/easymde.min.css";
import { heroSchema } from "@/validationSchema/hero-schema";
import ImagePicker from "./heroes/ImagePicker";
import { submitSaveHero } from "@/lib/actions";
import { Textarea } from "./ui/textarea";
import { useFormState } from "react-dom";
import HeroFormSubmitButton from "./heroes/HeroFormSubmit";

type HeroFormSchema = z.infer<typeof heroSchema>;

function HeroForm() {
  const [state, formAction] = useFormState(submitSaveHero, {
    validationErrors: [],
  });

  console.log(state.message);

  const form = useForm<HeroFormSchema>({
    resolver: zodResolver(heroSchema),
  });

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6" action={formAction}>
        {state?.message && <p>{state.message}</p>}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Textarea placeholder="Type your message here." name="description" />
        <ImagePicker name="image" label="image" />
        <HeroFormSubmitButton />
      </form>
    </Form>
  );
}

export default HeroForm;
