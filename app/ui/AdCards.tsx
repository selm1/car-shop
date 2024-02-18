import { CarAd } from "@/app/lib/definitions";

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
];

export default function AdCardWrapper() {
  const ads = cars;
  return (
    <div>
      {ads.map((ad) => (
        <AdCard
          key={ad.id}
          title={ad.title}
          description={ad.description}
          price={ad.price}
          make={ad.make}
          model={ad.model}
          year={ad.year}
          mileage={ad.mileage}
          color={ad.color}
          status={ad.status}
          sold={ad.sold}
          id={ad.id}
        />
      ))}
    </div>
  );
}

export function AdCard({
  title,
  description,
  price,
  make,
  model,
  year,
  mileage,
  color,
  status,
  sold,
}: CarAd) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{mileage}</p>
      <p>{color}</p>
      <p>{status}</p>
      <p>{sold}</p>
    </div>
  );
}
