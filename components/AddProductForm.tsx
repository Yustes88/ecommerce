import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import Button from "./Button";

import { categories } from "@/data/data";

import { authOptions } from "@/utils/authOptions";
import { prisma } from "@/lib/db/prisma";

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  const category = formData.get("category")?.toString();
  const details = formData.get("details")?.toString();

  if (!name || !description || !imageUrl || !price || !category || !details) {
    throw Error("Missing required filed");
  }

    await prisma.product.create({
      data: {
        name,
        description,
        imageUrl,
        price,
        category,
        details,
      },
    });

  redirect("/");
}

async function AddProductForm() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signIn?callbackUrl=/add-product");
  }

  return (
    <form action={addProduct}>
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-4xl font-semibold leading-7">
            Add a new product
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Please enter product&apos;s title, description, image, price and etc
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product category
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <select name="category">
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    min="1"
                    step="any"
                    name="price"
                    id="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Please enter the product description here"
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="details"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product details
              </label>
              <div className="mt-2">
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Outer Diameter: 12 mm, Width: 2 mm, Thickness: 2 mm"
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image link
              </label>
              <div className="mt-2">
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Please enter the product image link here"
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          type={"button"}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Button>
        <Button
          type={"submit"}
          spinner="loading loading-spinner loading-xs text-neutral pr-2"
          className="focus-visible:outline-[#534555]} rounded-md bg-[#53453c] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#534555] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default AddProductForm;
