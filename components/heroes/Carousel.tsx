import * as React from "react";

import bp from "@/assets/heroes/blackpanther.jpeg";
import ironman from "@/assets/heroes/ironman.jpeg";
import wolverine from "@/assets/heroes/wolverine.jpeg";

const images = [
  { image: bp, alt: "A ...." },
  { image: ironman, alt: "A ...." },
  { image: wolverine, alt: "A ...." },
];
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselHeroes() {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.alt} className="basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center my-auto">
                  <Image
                    className="hero-img-tile"
                    src={image.image}
                    alt="sdfsdf"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
