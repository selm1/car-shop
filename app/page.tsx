import { Suspense } from "react";
import AdCardWrapper from "@/app/ui/AdCards";
import { CardsSkeleton } from "@/app/ui/skeletons";
import HeroSection from "@/app/ui/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="mx-48 my-10 flex flex-wrap justify-center gap-10">
        <Suspense fallback={<CardsSkeleton />}>
          <AdCardWrapper />
        </Suspense>
      </div>
    </main>
  );
}
