import Link from "next/link";
import PaginationBar from "./PaginationBar";
import ProductCardPreview from "./ProductCardPreview";
import Image from "next/image";
import { Product } from "@prisma/client";

type ProductsListProps = {
  products: Product[],
  currentPage: number,
  totalPages: number
};

export default async function ProductsList({products, currentPage, totalPages}: ProductsListProps) {

  return (
    <div className="flex flex-col items-center m-auto max-w-[70%] p-8">
      {currentPage === 1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <Link
                href={`/product/${products[0].id}`}
                className="btn btn-primary"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {(currentPage === 1 ? products.slice(1) : products).map((product) => (
          <ProductCardPreview key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
