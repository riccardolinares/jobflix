// import Pagination from "@/app/ui/pagination";
import Table from "@/components/ui/search/table";
import { Suspense } from "react";
import { SearchTableSkeleton } from "@/components/ui/search/skeletons";
import Container from "@/components/template/Container";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Container>
      {/* <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Invoices</h1>
      </div> */}

      <Suspense key={query + currentPage} fallback={<SearchTableSkeleton />}>
        <div className="flex w-full max-w-7xl items-center py-12">
          <Table query={query} currentPage={currentPage} />
        </div>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </Container>
  );
}
