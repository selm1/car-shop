import { fetchAd } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const ad = await fetchAd(id);
  return <div>{id}</div>;
}
