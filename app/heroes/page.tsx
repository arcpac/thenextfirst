import React, { Suspense } from "react";
import { getHeroes } from "@/lib/heroes";

import HeroesGrid from "@/components/heroes/HeroesGrid";
import classes from "./loading.module.css";
import Link from "next/link";

async function Heroes() {
  const heroes = await getHeroes();
  return <HeroesGrid heroes={heroes} />;
}
const LoadHeroes = () => {
  return <p className={classes.loading}>Jarvis loading</p>;
};

const HeroesPage = async () => {
  return (
    <div className="">
      <Suspense fallback={<LoadHeroes />}>
        <Link href={`/heroes/add`}>Add marvel hero</Link>
        <Heroes />
      </Suspense>
    </div>
  );
};

export default HeroesPage;
