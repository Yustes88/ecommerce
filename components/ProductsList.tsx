import Link from "next/link";
import PaginationBar from "./PaginationBar";
import ProductCardPreview from "./ProductCardPreview";
import Image from "next/image";
import { Product } from "@prisma/client";
import Heading from "./Heading";

type ProductsListProps = {
  products: Product[],
  currentPage: number,
  totalPages: number,
  title: string,
  className?: string,
};

export default async function ProductsList({products, currentPage, totalPages, title, className}: ProductsListProps) {

  return (
    <div className="flex flex-col m-auto xl:max-w-7xl p-8">
      <Heading className={className}>{title}</Heading>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCardPreview key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
