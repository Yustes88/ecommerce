import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";

type ProductCardPreviewProps = {
  product: Product;
};

function ProductCardPreview({ product }: ProductCardPreviewProps) {
  return (
    <Link
      className="card w-full bg-rose-50 transition-shadow hover:shadow-xl"
      href={`/products/${product.id}`}
    >
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price}/>
      </div>
    </Link>
  );
}

export default ProductCardPreview;
