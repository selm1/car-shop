import { sql } from "@vercel/postgres";

export async function fetchAd(id: string) {
  const { rows } = await sql`SELECT * FROM ads WHERE id = ${id}`;
  return rows[0];
}

export async function fetchAds() {
  const { rows } = await sql`SELECT * FROM ads`;
  return rows;
}
