import Image from "next/image";
import Link from "next/link";

import PriceTag from "./PriceTag";

import { Product } from "@prisma/client";

type ProductCardPreviewProps = {
  product: Product;
};

function ProductCardPreview({ product }: ProductCardPreviewProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      className="card relative w-full bg-[#e3d08e78] transition-shadow hover:shadow-xl"
      href={`/product/${product.id}`}
    >
      <figure>
        <Image
          src={product.imageUrl}
          className="h-48 object-cover"
          alt={product.name}
          width={800}
          height={400}
        />
      </figure>
      <div className="card-body flex flex-col justify-around items-start">
        <h2 className="card-title font-bold capitalize">{product.name}</h2>
        <PriceTag price={product.price} />
      </div>
      {isNew && (
        <div className="badge badge-secondary absolute right-1 top-1">NEW</div>
      )}
    </Link>
  );
}

export default ProductCardPreview;
