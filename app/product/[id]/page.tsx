import prisma from "@/lib/db/prisma";

type ProductPageProps = {
    params: {
        id: string,
    }
}

async function ProductPage({params: {id}}: ProductPageProps) {
    const product = await prisma.product.findUnique({where: {id}})
    
    return(
        <div>{product?.name}</div>
    )
}

export default ProductPage