import { categories } from "@/data/data";
import Image from "next/image";
import Heading from "./Heading";

export default function ShopByCategory() {
  return (
    <section
      aria-labelledby="category-heading"
      className="py-24 flex flex-col sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8 min-h-fit"
    >
     <Heading>{'Shop By Category'}</Heading>

      <div className="mt-4">
        <div className="-my-2">
          <div className="py-2">
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 justify-items-center items-stretch px-4 sm:px-6 lg:px-8 gap-4 xl:space-x-0 xl:px-0">
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
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl capitalize font-bold text-white">
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
