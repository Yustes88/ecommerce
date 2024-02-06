import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import FavouritesButton from "./FavouritesButton";

import { authOptions } from "@/utils/authOptions";

import { getCart } from "@/lib/db/cart";
import { getFavourites } from "@/lib/db/favourites";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

async function NavBar() {
  const cart = await getCart();
  const favourites = await getFavourites();
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-[#eddb9841]">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <div>
            <Link href="/" className="btn btn-ghost text-xl normal-case">
              Home
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/about" className="btn btn-ghost text-xl normal-case">
              About
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
                type="text"
              />
            </div>
          </form>
          <FavouritesButton favourites={favourites} />
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
