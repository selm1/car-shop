import { Suspense } from "react";
import AdCardWrapper from "@/app/ui/AdCards";
import { AdCardsSkeleton } from "@/app/ui/skeletons";
import HeroSection from "@/app/ui/HeroSection";
import FiltersMenu from "@/app/ui/FiltersMenu";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex h-[2000px] flex-row gap-10">
        <FiltersMenu />
        <Suspense fallback={<AdCardsSkeleton />}>
          <AdCardWrapper />
        </Suspense>
      </div>
    </main>
  );
}
