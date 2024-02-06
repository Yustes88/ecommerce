import PaginationBar from "./PaginationBar";
import ProductCardPreview from "./ProductCardPreview";
import Heading from "./Heading";

import { Product } from "@prisma/client";

type ProductsListProps = {
  products: Product[];
  currentPage: number;
  totalPages: number;
  title: string;
  className?: string;
};

export default async function ProductsList({
  products,
  currentPage,
  totalPages,
  title,
  className,
}: ProductsListProps) {
  return (
    <div
      className="m-auto flex flex-col items-center justify-center p-8 xl:max-w-7xl"
      id="products-list"
    >
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
