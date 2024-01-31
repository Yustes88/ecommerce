'use client'

import { useState, useTransition } from "react"

type AddToCartButtonProps = {
    productId: string,
    incrementProductQuantity: (productId: string) => Promise<void>,
    className?: string,
}

function AddToCartButton({productId, incrementProductQuantity, className}: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return(
        <div className="flex items-center gap-2 ">
            <button className={`btn btn-secondary bg-[#53453c] hover:bg-[#534555] focus-visible:outline-[#534555] ${className}`} onClick={() => {
                setSuccess(false)
                startTransition(async () => {
                    await incrementProductQuantity(productId);
                    setSuccess(true)
                })
            }}>Add to Cart</button>
            {isPending && <span className="loading loading-spinner loading-sm"/>}
            {!isPending && success && <span className="text-success">Added to cart</span>}
        </div>
    )
}

export default AddToCartButton;