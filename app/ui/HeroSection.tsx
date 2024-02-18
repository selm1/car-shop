import Search from "@/app/ui/Search";
export default function HeroSection() {
  return (
    <div className="w-full bg-gray-100 h-72 flex flex-col justify-center items-center ">
      <h1 className="text-gray-800 text-7xl font-bold">car-shop</h1>
      <p className="text-gray-700 my-5">Find your car today!</p>
      <Search />
    </div>
  );
}
