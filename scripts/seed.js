const { db } = require("@vercel/postgres");
const { ads } = require("../app/lib/placeholder-data.js");

async function seedAds(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ads (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        make VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        year INT NOT NULL,
        mileage INT NOT NULL,
        color VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        sold BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "ads" table`);

    // Insert data into the "users" table
    const insertedAds = await Promise.all(
      ads.map(async (ad) => {
        return client.sql`
        INSERT INTO ads (title, description, price, make, model, year, mileage, color, status, sold)
        VALUES (${ad.title}, ${ad.description}, ${ad.price}, ${ad.make}, ${ad.model}, ${ad.year}, ${ad.mileage}, ${ad.color}, ${ad.status}, ${ad.sold})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedAds.length} ads`);

    return {
      createTable,
      ads: insertedAds,
    };
  } catch (error) {
    console.error("Error seeding ads:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedAds(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
