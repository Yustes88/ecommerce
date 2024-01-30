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
    <Link href='/favourite' className="">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        <div className="indicator">
            <HeartIcon className="w-8"/>
          <span className="badge badge-sm indicator-item">{favourites?.size || 0}</span>
        </div>
      </label>
    </Link>
  );
}

export default FavouritesButton;
