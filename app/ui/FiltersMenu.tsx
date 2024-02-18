import { ComboboxDemo } from "@/components/ui/combobox";
export default function FiltersMenu() {
  return (
    <div className="sticky top-16 mx-1 my-1 flex h-screen flex-col gap-1 bg-gray-100 p-1">
      <ComboboxDemo query="make" />
      <ComboboxDemo query="model" />
      <ComboboxDemo query="year" />
    </div>
  );
}
