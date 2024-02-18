export type User  = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type CarAd = {
    id: string;
    title: string;
    description: string;
    price: number;
    user_id: string;
    status: "available" | "sold";
    make: string;
    model: string;
    year: number;
    mileage: number;
    color: string;
}