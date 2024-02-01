import CartEntry from "@/components/CartEntry";
import { getCart } from "@/lib/db/cart";
import setProductQuantity from "./action";
import formatPrice from "@/lib/db/format";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata = {
  title: "Your Cart",
};

async function CartPage() {
  const cart = await getCart();

  return (
    <div className="m-4 flex flex-col items-center justify-center gap-4">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}

      {!cart?.items.length && (
        <>
          <p>Oops, seems like your cart is empty.</p>
          <Link href="/" className="btn btn-primary">
            Start shopping now!
          </Link>
        </>
      )}

      {cart?.items.length !== 0 && cart?.items !== undefined ? (
        <div className="flex flex-col items-end sm:items-center">
          <p className="mb-3 font-bold">Total: {formatPrice(cart?.subtotal)}</p>
          <div className="mb-2 flex flex-col justify-center items-center">
            <p className="mb-1">
              We are sorry, checkout is temporary unavailable. We are already working on an issue.
            </p>
            <p>Please come back later. Your cart is saved.</p>
          </div>
          <button className="btn btn-primary sm:w-[200px]" disabled>
            Checkout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartPage;
