import { Metadata } from "next";

import ProductCardPreview from "@/components/ProductCardPreview";

import { prisma } from "@/lib/db/prisma";

type SearchPageProps = {
  searchParams: { query: string };
};

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - Shine`,
  };
}

async function SearchPage({ searchParams: { query } }: SearchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: {
      id: "desc",
    },
  });

  if (products.length === 0) {
    return <div className="text-center">No product found</div>;
  }
  return (
    <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCardPreview product={product} key={product.id} />
      ))}
    </div>
  );
}

export default SearchPage;
