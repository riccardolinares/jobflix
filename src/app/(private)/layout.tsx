
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-gray min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
