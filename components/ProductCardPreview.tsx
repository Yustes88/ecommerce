import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

type ProductCardPreviewProps = {
  product: Product;
};

function ProductCardPreview({ product }: ProductCardPreviewProps) {
  return (
    <Link
      className="card w-full bg-rose-50 transition-shadow hover:shadow-xl"
      href={`/products/${product.id}`}
    >
        <figure>
            <Image src={'/' + product.imageUrl} className="h-48 object-cover" alt={product.name} width={800} height={400}/>
        </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price}/>
      </div>
    </Link>
  );
}

export default ProductCardPreview;
