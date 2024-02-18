"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const makes = [
  {
    value: "nissan",
    label: "Nissan",
  },
  {
    value: "toyota",
    label: "Toyota",
  },
  {
    value: "kia",
    label: "Kia",
  },
  {
    value: "honda",
    label: "Honda",
  },
  {
    value: "bmw",
    label: "BMW",
  },
];

const models = [
  {
    value: "maxima",
    label: "Maxima",
  },
  {
    value: "camry",
    label: "Camry",
  },
  {
    value: "k5",
    label: "K5",
  },
  {
    value: "x5",
    label: "X5",
  },
  {
    value: "accord",
    label: "Accord",
  },
];

const years = [
  {
    value: "2012",
    label: "2012",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2013",
    label: "2013",
  },
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2024",
    label: "2024",
  },
];

export function ComboboxDemo({ query }: { query: string }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value && query === "make"
            ? makes.find((make) => make.value === value)?.label
            : "Select a make..." || (value && query === "model")
              ? models.find((model) => model.value === value)?.label
              : "Select a model..." || (value && query === "year")
                ? years.find((year) => year.value === value)?.label
                : "Select a year..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {(query === "make" &&
              makes.map((make) => (
                <CommandItem
                  key={make.value}
                  value={make.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === make.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {make.label}
                </CommandItem>
              ))) ||
              (query === "model" &&
                models.map((model) => (
                  <CommandItem
                    key={model.value}
                    value={model.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === model.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {model.label}
                  </CommandItem>
                ))) ||
              (query === "year" &&
                years.map((year) => (
                  <CommandItem
                    key={year.value}
                    value={year.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === year.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {year.label}
                  </CommandItem>
                )))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
