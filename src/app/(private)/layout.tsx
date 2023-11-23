import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HeaderLogged from "@/components/template/HeaderLogged";
import Footer from "@/components/template/Footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <div className="bg-gray min-h-screen flex flex-col">
      <HeaderLogged />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
