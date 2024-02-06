import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import ProductCardFull from "@/components/ProductCardFull";

import { prisma } from "@/lib/db/prisma";

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) notFound();

  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function ProductPage({ params: { id } }: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <>
      <ProductCardFull product={product} />
    </>
  );
}

export default ProductPage;
