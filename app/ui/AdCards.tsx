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

const cars: CarAd[] = [
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "1",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "2",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "3",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "1",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "2",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "3",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "1",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "2",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "3",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "1",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "2",
  },
  {
    title: "Nissan Maxima for Sale",
    description: "2012 Nissan Maxima",
    price: 10000,
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    mileage: 100000,
    color: "Silver",
    status: "used",
    sold: false,
    id: "3",
  },
];

export default async function CardWrapper() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const ads = cars;
  return (
    <>
      {ads.map((ad) => (
        <Link key={ad.id} href={`/ads/${ad.id}`}>
          <Card className="min-h-96 duration-75 hover:scale-105">
            <CardHeader>
              <CardTitle>{ad.title}</CardTitle>
              <CardDescription>
                {ad.make} {ad.model} {ad.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <Image src={car} alt="car" />
              <p>{ad.description}</p>

              <p>{ad.mileage}</p>

              <p>{ad.color}</p>

              <p>{ad.status}</p>
            </CardContent>
            <CardFooter>
              <p>{ad.price}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
}
