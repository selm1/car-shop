import { fetchAd } from "@/app/lib/data";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const ad = fetchAd(id);
  return <div>{id}</div>;
}
