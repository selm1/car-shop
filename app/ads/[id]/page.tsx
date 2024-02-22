import { fetchAd } from "@/app/lib/data";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import car from "@/public/car.jpeg";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const id = params.id;
  const ad = await fetchAd(id);
  return (
    <main className="mx-16 my-8 flex h-screen flex-col items-center ">
      <Card className="flex w-full flex-row items-center justify-center p-8 ">
        <CardContent className="p-0">
          <Carousel
            className=""
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Image src={car} alt="car" className="w-full" />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Image src={car} alt="car" className="w-full" />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Image src={car} alt="car" className="w-full" />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Image src={car} alt="car" className="w-full" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
      <Card className="mt-8 h-[100%] w-full">
        <CardHeader>
          <CardTitle>{ad.title}</CardTitle>
          <CardDescription>
            {ad.make} {ad.model} {ad.year} {ad.color}
          </CardDescription>
          <CardDescription>Milage: {ad.mileage} km</CardDescription>
          <CardDescription>Status: {ad.status}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{ad.description}</p>
        </CardContent>
        <CardFooter>
          <p className="text-bold rounded-xl bg-slate-700 p-2 text-xl text-white">
            QAR {ad.price}
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
