"use client";

import {prisma} from "@/lib/db/prisma";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlinedHeart } from "@heroicons/react/24/outline";
import { useState, useTransition } from "react";
import { deleteFavourites, updateFavourites } from "./actions";

type AddToFavouritesButtonProps = {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
  className?: string;
  liked?: boolean;
};

function AddToFavouritesButton({
  productId,
  incrementProductQuantity,
  className,
  liked
}: AddToFavouritesButtonProps) {
  const [isLiked, setIsLiked] = useState(liked);
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [remove, setRemove] = useState(false);

  const Icon = isLiked ? HeartIcon : OutlinedHeart;

  return (
    <div className="flex justify-end items-end mt-2">
      <button
        className="transition hover:opacity-75"
        onClick={() => {
          if (isLiked) {
            setIsLiked(false);
            setRemove(false)
            startTransition(async () => {
              await deleteFavourites(productId);
              setRemove(true)
              setSuccess(false);
            });
          } else {
            setIsLiked(true);
            setSuccess(false);
            startTransition(async () => {
              await updateFavourites(productId);
              setSuccess(true);
            });
          }

        }}
      >
        <Icon color={isLiked ? "red" : "red"} className="w-10" />
      </button>
      {isPending && <span className="loading loading-spinner loading-sm" />}
      {!isPending && success && (
        <span className="text-success">Done</span>
      )}
    </div>
  );
}

export default AddToFavouritesButton;
