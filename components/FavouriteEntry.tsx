"use client";

import AddToCartButton from "@/app/product/[id]/AddToCartButton";
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
  cartItem: { product },
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
      <AddToCartButton productId={product.id} incrementProductQuantity={incrementProductQuantity}/>
      <AddToFavouritesButton productId={product.id} liked={true}/>
      <div className="divider" />
    </div>
  );
}

export default FavouriteEntry;