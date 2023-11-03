import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Logo from "@/components/ui/Logo";

export default async function SigninLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/documents");
  }
  return (
    <div className="h-full bg-gray-200">
      <section className="min-h-screen py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 min-w-lg">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="mb-6 text-center flex items-center justify-center">
                <Logo className="text-5xl" />
              </div>
              <div className="p-10 bg-white shadow rounded-lg text-gray-900 text-center">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
