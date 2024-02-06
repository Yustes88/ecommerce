"use client";

import Image from "next/image";
import Link from "next/link";

import AddToCartButton from "@/app/product/[id]/AddToCartButton";
import AddToFavouritesButton from "@/app/product/[id]/AddToLikedFavouritesButton";
import { incrementProductQuantity } from "@/app/product/[id]/actions";

import { FavouriteItemWithProduct } from "@/lib/db/favourites";
import formatPrice from "@/lib/db/format";

type CartEntryProps = {
  cartItem: FavouriteItemWithProduct;
};

function FavouriteEntry({ cartItem: { product } }: CartEntryProps) {

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
      <div className="flex items-center justify-end gap-4">
        <AddToFavouritesButton productId={product.id} liked={true} />
        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
      <div className="divider" />
    </div>
  );
}

export default FavouriteEntry;
