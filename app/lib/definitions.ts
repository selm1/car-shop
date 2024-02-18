export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type CarAd = {
  title: string;
  description: string;
  price: number;
  status: "used" | "new";
  sold: boolean;
  make: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  id: string;
};
