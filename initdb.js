const sql = require('better-sqlite3');
const db = sql('heroes.db'); 

const dummyHeroes = [
    {
        name: 'Spider-Man',
        slug: 'spider-man',
        image: '/heroes/spiderman.jpg',
        description: 'The friendly neighborhood superhero with spider-like abilities.',
        creator: 'Stan Lee',
        creator_email: 'stanlee@example.com',
    },
    {
        name: 'Iron Man',
        slug: 'iron-man',
        image: '/heroes/ironman.jpg',
        description: 'Genius billionaire playboy philanthropist, also known as Tony Stark.',
        creator: 'Stan Lee',
        creator_email: 'stanlee@example.com',
    },
    {
        name: 'Captain America',
        slug: 'captain-america',
        image: '/heroes/captainamerica.jpg',
        description: 'A super-soldier who fought during World War II and continues to defend justice.',
        creator: 'Joe Simon',
        creator_email: 'joesimon@example.com',
    },
    {
        name: 'Thor',
        slug: 'thor',
        image: '/heroes/thor.jpg',
        description: 'The Norse God of Thunder and member of the Avengers.',
        creator: 'Stan Lee',
        creator_email: 'stanlee@example.com',
    },
    {
        name: 'Hulk',
        slug: 'hulk',
        image: '/heroes/hulk.jpg',
        description: 'A scientist who transforms into a green behemoth when enraged.',
        creator: 'Stan Lee',
        creator_email: 'stanlee@example.com',
    },
    {
        name: 'Black Widow',
        slug: 'black-widow',
        image: '/heroes/blackwidow.jpg',
        description: 'A highly trained spy and member of the Avengers.',
        creator: 'Stan Lee',
        creator_email: 'stanlee@example.com',
    },
    {
        name: 'Black Panther',
        slug: 'black-panther',
        image: '/heroes/blackpanther.jpg',
        description: 'The king of the fictional African nation of Wakanda, possessing superhuman abilities.',
        creator: 'Stan Lee',
        creator_email: 'stanlee@example.com',
    },
    {
        name: 'Captain Marvel',
        slug: 'captain-marvel',
        image: '/heroes/captainmarvel.jpg',
        description: 'A former U.S. Air Force pilot imbued with cosmic powers.',
        creator: 'Roy Thomas',
        creator_email: 'roythomas@example.com',
    },
    {
        name: 'Wolverine',
        slug: 'wolverine',
        image: '/heroes/wolverine.jpg',
        description: 'A mutant with rapid healing abilities, retractable claws, and heightened senses.',
        creator: 'Len Wein',
        creator_email: 'lenwein@example.com',
    },
    // Add more heroes as needed
];


db.prepare(`
   CREATE TABLE IF NOT EXISTS heroes (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       name TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
      INSERT INTO heroes VALUES (
         null,
         @slug,
         @name,
         @image,
         @description,
         @creator,
         @creator_email
      )
   `);

    for (const hero of dummyHeroes) {
        stmt.run(hero);
    }
}

initData();
