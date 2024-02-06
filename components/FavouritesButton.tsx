"use client";

import Link from "next/link";

import { HeartIcon } from "@heroicons/react/24/solid";

import { FavouritesCart } from "@/lib/db/favourites";

type FavouritesButtonProps = {
  favourites: FavouritesCart | null;
};

function FavouritesButton({ favourites }: FavouritesButtonProps) {
  return (
    <Link href="/favourite" className="">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        <div className="indicator">
          <HeartIcon className="w-8 text-red-700" />
          <span className="badge indicator-item badge-sm">
            {favourites?.size || 0}
          </span>
        </div>
      </label>
    </Link>
  );
}

export default FavouritesButton;
