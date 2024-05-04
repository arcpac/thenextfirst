import React from "react";
import dynamic from "next/dynamic";

const HeroForm = dynamic(() => import("@/components/HeroForm"), {
    ssr: false,
  });
const AddHeroPage = () => {
  return (
    <div>
      <HeroForm />
    </div>
  );
};

export default AddHeroPage;
