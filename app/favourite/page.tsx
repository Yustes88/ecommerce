import CartEntry from "@/components/CartEntry";
import { getCart } from "@/lib/db/cart";
import formatPrice from "@/lib/db/format";
import { getFavourites } from "@/lib/db/favourites";
import FavouriteEntry from "@/components/FavouriteEntry";

export const metadata = {
  title: "Your Cart",
};

async function CartPage() {
  const favourites = await getFavourites();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">My Favourites</h1>
      {favourites?.items.map((cartItem) => (
        <FavouriteEntry
          cartItem={cartItem}
          key={cartItem.id}
        />
      ))}
      {!favourites?.items.length && <p>Your cart is Empty</p>}
    </div>
  );
}

export default CartPage;