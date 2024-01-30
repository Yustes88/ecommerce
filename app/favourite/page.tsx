import CartEntry from "@/components/CartEntry";
import { getCart } from "@/lib/db/cart";
import formatPrice from "@/lib/db/format";
import { getFavourites } from "@/lib/db/favourites";
import FavouriteEntry from "@/components/FavouriteEntry";
import Link from "next/link";

export const metadata = {
  title: "Your Cart",
};

async function CartPage() {
  const favourites = await getFavourites();

  return (
    <div className="my-4 flex flex-col items-center gap-4">
      <h1 className="mb-6 text-3xl font-bold">My Favourites</h1>
      {favourites?.items.map((cartItem) => (
        <FavouriteEntry cartItem={cartItem} key={cartItem.id} />
      ))}
      {!favourites?.items.length && (
        <>
          <p>Oops, you don&apos;t have your favourite items.</p>
          <Link href="/" className="btn btn-primary">
            Start shopping now!
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage;
