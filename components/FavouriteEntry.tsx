"use client";

import AddToFavouritesButton from "@/app/product/[id]/AddToLikedFavouritesButton";
import { incrementProductQuantity } from "@/app/product/[id]/actions";
import { CartItemWithProduct } from "@/lib/db/cart";
import { FavouriteItemWithProduct } from "@/lib/db/favourites";
import formatPrice from "@/lib/db/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

type CartEntryProps = {
  cartItem: FavouriteItemWithProduct;
};

function FavouriteEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();


  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-none"
        />
        <div>
          <Link href={`/product/${product.id}`} className="font-bold">
            {product.name}
          </Link>
          <div>Price: {formatPrice(product.price)}</div>
        </div>
      </div>
      <div className="divider" />
      <AddToFavouritesButton productId={product.id} incrementProductQuantity={incrementProductQuantity} liked={true}/>
    </div>
  );
}

export default FavouriteEntry;