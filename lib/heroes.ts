import Database from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = new Database("heroes.db");

export interface HeroProps {
  name: string;
  slug: string;
  image?: any;
  description: string;
}

export interface CreateHeroProps {
  name: string;
  description: string;
  slug?: string;
  image: any;
  creator?: string;
  creator_email?: string;
}

export async function getHeroes() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("select * from heroes").all();
}

export function getHero(slug: string) {
  return db
    .prepare("SELECT * FROM heroes WHERE slug = ?")
    .get(slug) as HeroProps;
}

export async function saveHero(hero: CreateHeroProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  hero.slug = slugify(hero.name, { lower: true });
  hero.description = xss(hero.description);

  const imageExtension = hero.image.name.split(".").pop();
  const fileName = `${hero.slug}.${imageExtension}`;
  const stream = fs.createWriteStream(`/public/heroes/${fileName}`);
  const bufferedImage = await hero.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Saving image failed");
  });

  hero.image = `/heroes/${fileName}`;
  hero.creator = "test@email.com";
  hero.creator_email = "test@email.com";

  db.prepare(
    `
  INSERT INTO heroes
  (name, slug, description, image, creator, creator_email)
  VALUES (@name, @slug, @description, @image, @creator, @creator_email )
  `
  ).run(hero);
}
