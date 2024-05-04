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
  {
    heroes.map((hero) => console.log(hero.image));
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {heroes.map((hero) => (
        <div className="relative m-0 shadow-lg flex bg-white hover:scale-105 duration-500 ease-in-out">
          <div className="flex-no-shrink">
            {/* <Image
              alt=""
              src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
            /> */}
          </div>
          <div className="flex-1 card-block relative">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src={`/heroes/${hero.image}`}
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="p-6">
              <h4 className="font-medium text-2xl mb-3">
                {hero.name ?? "Unknown marvel hero"}
              </h4>
              <p className="leading-normal">
                {hero.description ??
                  "This marvel character doesn't have a description"}
              </p>
              <p className="text-sm text-grey block mt-6">Designation title</p>
              <a
                className="-m-4 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full text-white hover:bg-blue-darker absolute pin-t pin-r"
                href="#"
              >
                <i className="text-xl fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroesGrid;
