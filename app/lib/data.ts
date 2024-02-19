import { sql } from "@vercel/postgres";

export async function fetchAd(id: string) {
  const { rows } = await sql`SELECT * FROM ads WHERE id = ${id}`;
  return rows[0];
}
