import NavLink from "@/components/NavLink";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroItemProps {
  image: StaticImageData;
  slug: string;
  title: string;
  description: string;
}

const HeroItem = ({ image, slug, title, description }: HeroItemProps) => {
  return (
    <NavLink href={`/heroes/${slug}`} className="">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent
          style={{ width: "200px", height: "200px", overflow: "hidden" }}
        >
          <Image
            className="hero-img-tile"
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </NavLink>
  );
};

export default HeroItem;
