import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import PaginationBar from "@/components/PaginationBar";
import ProductCardPreview from "@/components/ProductCardPreview";
import ProductsList from "@/components/ProductsList";
import ShopByCategory from "@/components/ShopByCategorySection";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

type HomeProps = {
  searchParams: { page: string };
};

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <>
      <Marquee/>
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
