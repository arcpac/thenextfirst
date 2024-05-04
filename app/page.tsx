"use client";
import { useState } from "react";
import classes from "./page.module.css";
import { CarouselHeroes } from "@/components/heroes/Carousel";
import Link from "next/link";
import ImageSlideshow from "@/components/heroes/ImageSlideShow";

export default function Home() {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleModal = () => {
    setIsModal((previsModal: boolean) => !previsModal);
  };

  return (
    <>
      <div className="flex justify-center"> </div>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Marvel Heroes Catalouge</h1>
            <p className="text-black dark:text-white">
              Choose & share heroes from all over the world.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/heroes">Explore Heroes</Link>
          </div>
        </div>
      </header>
      <div className="flex justify-center">
        <CarouselHeroes />
      </div>
      <div className="flex justify-center my-3">
        <Link href="/heroes">View all</Link>
      </div>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
