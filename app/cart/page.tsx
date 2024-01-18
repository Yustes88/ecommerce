import CartEntry from "@/components/CartEntry";
import { getCart } from "@/lib/db/cart";
import setProductQuantity from "./action";

export const metadata = {
    title: 'Your Cart'
}

async function CartPage() {
    const cart = await getCart();


    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cart?.items.map((cartItem) => (
                <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity}/>
            ))}
        </div>
    )
}

export default CartPage;