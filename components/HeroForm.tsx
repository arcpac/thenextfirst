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
import { AlertDestructive } from "./AlertDestructive";

type HeroFormSchema = z.infer<typeof heroSchema>;

function HeroForm() {
  const [state, formAction] = useFormState(submitSaveHero, {
    message: "",
  });

  const form = useForm<HeroFormSchema>({
    resolver: zodResolver(heroSchema),
  });

  return (
    <Form {...form}>
      {state.message && <AlertDestructive message={state.message} />}
      <form className="w-2/3 space-y-6" action={formAction}>
        <div className="grid grid-cols-3 gap-5">
          {state?.message && <p>{state.message}</p>}
          <div className="sm:col-span-2 col-span-3 ">
            <div className="">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type hero name" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type hero description here."
                        name="description"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="sm:col-span-1 col-span-3 place-content-center self-end ">
            <ImagePicker name="image" label="image" />
          </div>
          <div className="col-span-3  sm:col-span-1">
            <HeroFormSubmitButton />
          </div>
        </div>
      </form>
    </Form>
  );
}

export default HeroForm;
