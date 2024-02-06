import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ProductsList from "@/components/ProductsList";
import ShopByCategory from "@/components/ShopByCategorySection";

import { prisma } from "@/lib/db/prisma";

type HomeProps = {
  searchParams: { page: string };
};

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 8;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil(totalItemCount / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * pageSize + currentPage,
    take: pageSize,
  });

  return (
    <>
      <Marquee />
      <HeroSection />
      <ShopByCategory />
      <ProductsList
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
        title={"Products"}
      />
    </>
  );
}
