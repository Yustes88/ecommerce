import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

type ProductCardPreviewProps = {
  product: Product;
};

function ProductCardPreview({ product }: ProductCardPreviewProps) {
    const isNew = Date.now() - new Date(product.createdAt).getTime() < (1000 * 60 * 60 * 24 *7)
  return (
    <Link
      className="card relative w-full bg-[#ffd53b0d] transition-shadow hover:shadow-xl"
      href={`/product/${product.id}`}
    >
        <figure>
            <Image src={product.imageUrl} className="h-48 object-cover" alt={product.name} width={800} height={400}/>
        </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
            {product.name}
            </h2>
        <PriceTag price={product.price}/>
      </div>
      {isNew && <div className="badge absolute top-1 right-1 badge-secondary">NEW</div>}
    </Link>
  );
}

export default ProductCardPreview;
