"use client";

import Image from "next/image";

import { Product } from "@prisma/client";
import formatPrice from "@/lib/db/format";

import AddToCartButton from "@/app/product/[id]/AddToCartButton";
import { incrementProductQuantity } from "@/app/product/[id]/actions";
import AddToFavouritesButton from "@/app/product/[id]/AddToLikedFavouritesButton";

import ProductDetails from "./ProductDetails";

type ProductCardFullProps = {
  product: Product;
};

export default function ProductCardFull({ product }: ProductCardFullProps) {
  return (
    <div>
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div role="list" className="flex items-center space-x-4">
            <div className="flex items-center">
              <a
                href={`/category/${product.category}`}
                className="mr-4 text-sm font-medium capitalize"
              >
                {product.category}
              </a>

              <div className="text-gray-400">/</div>
            </div>
          </div>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold capitalize ">
                  {product.name}
                </h1>
                <p className="text-xl font-medium">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className=" object-cover"
                  width={1200}
                  height={400}
                />
              </div>
            </div>

            <div className=" lg:col-span-5">
              <div className="mt-10">
                <h2 className="text-sm font-medium">Details</h2>

                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul className="flex flex-col">
                    {product.details.split(",").map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <AddToCartButton
                  incrementProductQuantity={incrementProductQuantity}
                  productId={product.id}
                  className={
                    "mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-[#53453c] px-8 py-3 text-base font-medium text-white hover:bg-[#534555] focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-[#534555]"
                  }
                />
                <AddToFavouritesButton
                  productId={product.id}
                  liked={product.isLiked}
                />
              </div>

              {/* Product details */}
              <div className="mt-5">
                <h2 className="text-sm font-medium">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium">Why us?</h2>

                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
