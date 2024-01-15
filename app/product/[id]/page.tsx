import prisma from "@/lib/db/prisma";
import { notFound } from "next/navigation";

type ProductPageProps = {
    params: {
        id: string,
    }
}

async function ProductPage({params: {id}}: ProductPageProps) {
    const product = await prisma.product.findUnique({where: {id}})
    
    if(!product) notFound()
    
    return(
        <div>{product?.name}</div>
    )
}

export default ProductPage