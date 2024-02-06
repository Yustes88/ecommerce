"use client";

import { useState, useTransition } from "react";

import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlinedHeart } from "@heroicons/react/24/outline";

import {
  deleteFavourites,
  updateFavourites,
  updateProductsLikedStatus,
} from "./actions";

import toast from "react-hot-toast";

type AddToFavouritesButtonProps = {
  productId: string;
  className?: string;
  liked?: boolean;
};

function AddToFavouritesButton({
  productId,
  className,
  liked,
}: AddToFavouritesButtonProps) {
  const [isLiked, setIsLiked] = useState(liked || false);
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const Icon = isLiked ? HeartIcon : OutlinedHeart;

  return (
    <div className="mt-2 flex items-end justify-end">
      <button
        className="transition hover:opacity-75"
        onClick={() => {
          if (isLiked) {
            setIsLiked(false);
            startTransition(async () => {
              await deleteFavourites(productId);
              toast.error("The item is removed from favourite list");
            });
          } else {
            setIsLiked(true);
            setSuccess(false);
            startTransition(async () => {
              await updateFavourites(productId);
              setSuccess(true);
              toast.success("The item is added to the favourite list");
            });
          }
          updateProductsLikedStatus(productId, isLiked);
        }}
      >
        <Icon color={isLiked ? "red" : "red"} className="w-10" />
      </button>
      {isPending && <span className="loading loading-spinner loading-sm" />}
    </div>
  );
}

export default AddToFavouritesButton;
