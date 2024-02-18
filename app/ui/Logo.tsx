import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
export default function Logo() {
  return (
    <div className="bg-white px-7 py-2 rounded-lg text-center flex flex-row gap-2 items-center">
      <WrenchScrewdriverIcon className="text-red-600 w-7" />
      <p className={`text-red-600 font-bold text-2xl`}>car-shop</p>
    </div>
  );
}
