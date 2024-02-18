import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
export default function Logo() {
  return (
    <div className="flex flex-row items-center gap-2 rounded-lg bg-white px-7 py-2 text-center">
      <WrenchScrewdriverIcon className="w-7 text-red-600" />
      <p className={`text-2xl font-bold text-red-600`}>car-shop</p>
    </div>
  );
}
