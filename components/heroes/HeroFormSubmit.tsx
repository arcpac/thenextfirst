import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const HeroFormSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Creating" : "Create Hero"}
    </Button>
  );
};

export default HeroFormSubmitButton;
