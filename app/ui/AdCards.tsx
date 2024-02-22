import { CarAd } from "@/app/lib/definitions";
import car from "@/public/car.jpeg";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchAds } from "@/app/lib/data";

export default async function CardWrapper() {
  const ads = await fetchAds();
  return (
    <>
      {ads.map((ad) => (
        <Link key={ad.id} href={`/ads/${ad.id}`}>
          <Card className="min-h-96 duration-75 hover:scale-105">
            <CardHeader>
              <CardTitle>{ad.title}</CardTitle>
              <CardDescription>
                {ad.make} {ad.model} {ad.year} {ad.color}
              </CardDescription>
            </CardHeader>
            <CardContent className="m-0 flex flex-col">
              <Image src={car} alt="car" className="mb-6" />
              <p>{ad.description}</p>

              <div className="mt-6">
                <p>Milage: {ad.mileage} km</p>
                <p>Status: {ad.status}</p>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-bold text-l rounded-xl bg-slate-700 p-2 text-white">
                QAR {ad.price}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
}
