import ProductCardPreview from "@/components/ProductCardPreview";
import {prisma} from "@/lib/db/prisma";
import { Metadata } from "next";

type SearchPageProps = {
    searchParams: {query: string}
}

export function generateMetadata({
    searchParams: { query },
  }: SearchPageProps): Metadata {
    return {
      title: `Search: ${query} - Flowmazon`,
    };
  }

async function SearchPage({searchParams: {query}}: SearchPageProps) {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {name: {contains: query, mode: 'insensitive'}},
                {description: {contains: query, mode: 'insensitive'}},
            ]
        },
        orderBy: {
            id: 'desc'
        }
    })

    if(products.length === 0) {
        return <div className="text-center">No product found</div>
    }
    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
                <ProductCardPreview product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default SearchPage;