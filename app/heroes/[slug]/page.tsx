import React from "react";
import { getHero } from "@/lib/heroes";
import ironman from "@/assets/heroes/ironman.jpeg";
import Image from "next/image";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

const Hero: React.FC<{ params: Params }> = ({ params }) => {
  const hero = getHero(params.slug);
  if (!hero) notFound();
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className={`${classes.headerText}`}>
          <Image
            src={`${hero.image}`}
            alt="test"
            className="p-3 border-none"
            width={500}
            height={500}
          />
        </div>
        <div className={`${classes.headerText}`}>
          <h1>{hero.name}</h1>
          <p className={classes.creator}>...</p>
          <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{ __html: hero.description }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default Hero;
