'use client'

import { useState, useTransition } from "react"

type AddToCartButtonProps = {
    productId: string,
    incrementProductQuantity: (productId: string) => Promise<void>
}

function AddToCartButton({productId, incrementProductQuantity}: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return(
        <div className="flex items-center gap-2 ">
            <button className="btn btn-primary" onClick={() => {
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