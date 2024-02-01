"use client";

import { useState, useTransition } from "react";
import toast from "react-hot-toast";

type AddToCartButtonProps = {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
  className?: string;
};

function AddToCartButton({
  productId,
  incrementProductQuantity,
  className,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="mt-4 flex items-center gap-2">
      <button
        className={`btn btn-secondary bg-[#53453c] text-white hover:bg-[#534555] focus-visible:outline-[#534555] ${className}`}
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
            if(success) {
                toast.success("The product is added to the cart!");
            }
          });
        }}
      >
        Add to Cart
      </button>
      {isPending && <span className="loading loading-spinner loading-sm" />}
    </div>
  );
}

export default AddToCartButton;
