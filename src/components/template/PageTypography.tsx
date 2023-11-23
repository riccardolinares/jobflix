export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-200 pb-5 mb-10">
      <h1 className="text-3xl font-semibold leading-6 text-gray-900">
        {children}
      </h1>
    </div>
  );
}
