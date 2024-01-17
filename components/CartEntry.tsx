'use client'

import { CartItemWithProduct } from "@/lib/db/cart";
import Image from "next/image";

type CartEntryProps = {
    cartItem: CartItemWithProduct
}

function CartEntry({cartItem: {product, quantity}}: CartEntryProps) {
    return(
        <div>
            <div className="flex flex-wrap items-center gap-3">
                <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="rounded-none"/>
            </div>
            <div className="divider"/>
        </div>
    )
}

export default CartEntry;