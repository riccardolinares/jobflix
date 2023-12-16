export function SearchTableSkeleton() {
  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <div className="w-full h-64 sm:h-96 sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg bg-gray-300 animate-pulse"></div>
      </div>
      <div className="sr-only">Caricamento</div>
    </div>
  );
}
