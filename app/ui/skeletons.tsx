export function AdCardsSkeleton() {
  return (
    <>
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
    </>
  );
}

export function AdCardSkeleton() {
  return (
    <div>
      <h1>Loading...</h1>
      <p>Loading...</p>
      <p>Loading...</p>
    </div>
  );
}
