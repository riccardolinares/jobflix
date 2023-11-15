import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HeaderLogged from "@/components/HeaderLogged";
import Footer from "@/components/Footer";

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
    <>
      <HeaderLogged />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
