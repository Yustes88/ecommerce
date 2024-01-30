"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { FavouritesCart } from "@/lib/db/favourites";
import formatPrice from "@/lib/db/format";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type FavouritesButtonProps = {
  favourites: FavouritesCart | null;
};

function FavouritesButton({favourites}: FavouritesButtonProps) {
  function closeDropDown() {
    const elem = document.activeElement as HTMLElement
    if(elem) {
      elem.blur()
    }
  } 

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        <div className="indicator">
            <HeartIcon className="w-8"/>
          <span className="badge badge-sm indicator-item">{favourites?.size || 0}</span>
        </div>
      </label>
      <div tabIndex={0} className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30">
        <div className="card-body">
          <span className="text-info">
            Favourites: {formatPrice(favourites?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link href='/cart' className="btn btn-primary btn-block"
            onClick={closeDropDown}>View favourites</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouritesButton;
