import React from "react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold">Ti abbiamo inviato una email!</h1>
      <p className="mt-6 mb-8">
        Controlla la tua casella email e fai clic sul link per accedere con il
        tuo account.
      </p>
      <p className="text-sm text-gray-500">
        Se non l&apos;hai ricevuta controlla lo spam oppure{" "}
        <Link href="/auth/signin" className="text-primary">
          richiedi un nuovo link
        </Link>
      </p>
    </>
  );
}
