export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full sm:rounded-2xl sm:shadow-xl rounded-lg shadow-lg overflow-hidden">
      {children}
    </div>
  );
}
