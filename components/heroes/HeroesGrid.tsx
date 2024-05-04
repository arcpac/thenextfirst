import Image from "next/image";
import React from "react";
import wolverine from "@/assets/heroes/wolverine.jpeg";
import bp from "@/assets/heroes/blackpanther.jpeg";
import ironman from "@/assets/heroes/ironman.jpeg";
import Link from "next/link";
interface HeroesProps {
  heroes: any[];
}
const HeroesGrid = ({ heroes }: HeroesProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {heroes.map((hero) => (
        <ul>
          <li>{hero.name}</li>
          <li>
            <Link href={`/heroes/${hero.slug}`}>{hero.slug}</Link>
          </li>
          <li>{hero.description}</li>
        </ul>
      ))}
    </div>
  );
};

export default HeroesGrid;
