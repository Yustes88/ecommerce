"use client";

import { Product } from "@prisma/client";
import Image from "next/image";

type ProductCardFullProps = {
  product: Product;
};

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import AddToCartButton from "@/app/product/[id]/AddToCartButton";
import { incrementProductQuantity } from "@/app/product/[id]/actions";
import ProductDetails from "./ProductDetails";
import formatPrice from "@/lib/db/format";
import { sizes } from "@/data/data";
import AddToFavouritesButton from "@/app/product/[id]/AddToLikedFavouritesButton";

// const product = {
//   id: "dvfhosidvposdjpv0",
//   category: 'earrings',
//   name: "Basic Tee",
//   price: "$35",
//   rating: 3.9,
//   reviewCount: 512,
//   href: "#",
//   imgUrl:
//     "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
//   sizes: [
//     { name: "XXS", inStock: true },
//     { name: "XS", inStock: true },
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: false },
//   ],
//   description: `
//     <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
//     <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
//   `,
// };

export default function ProductCardFull({ product }: ProductCardFullProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[2].name);

  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div role="list" className="flex items-center space-x-4">
            <div className="flex items-center">
              <a
                href={`/category/${product.category}`}
                className="mr-4 text-sm font-medium capitalize text-gray-900"
              >
                {product.category}
              </a>

              <div className="text-gray-400">/</div>
            </div>
          </div>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium capitalize text-gray-900">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>
              </div>
              {/* Reviews */}
              {/* <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0",
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See all {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-[40rem] object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            <div className=" lg:col-span-5">
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

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
                      "mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    }
                  />
                  <AddToFavouritesButton
                    incrementProductQuantity={incrementProductQuantity}
                    productId={product.id}
                  />
              </div>

              {/* Product details */}
              <div className="mt-5">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Why us?</h2>

                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
