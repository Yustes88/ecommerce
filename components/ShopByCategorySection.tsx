import Image from "next/image";

import Heading from "./Heading";

import { categories } from "@/data/data";

export default function ShopByCategory() {
  return (
    <section
      aria-labelledby="category-heading"
      className="flex min-h-fit flex-col py-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      <Heading>{"Shop By Category"}</Heading>

      <div className="mt-4">
        <div className="-my-2">
          <div className="py-2">
            <div className="grid grid-cols-1 items-stretch justify-items-center gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`category${category.href}`}
                  className="relative flex min-h-80 w-full flex-col overflow-hidden rounded-lg p-6 hover:opacity-75"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <Image
                      src={category.imageSrc}
                      alt={category.name}
                      className="h-full w-full object-cover object-center"
                      width={600}
                      height={600}
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#beb287c9] "
                  />
                  <span className="relative mt-auto text-center text-xl font-bold capitalize">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
