import ProductCardPreview from "@/components/ProductCardPreview";
import { prisma } from "@/lib/db/prisma";

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function CategoryPage({ params: { id } }: ProductPageProps) {
    console.log(id)
  const products = await prisma.product.findMany({
    where: {
      category: id
    },
    orderBy: {
      id: "desc",
    },
  });

  if (products.length === 0) {
    return <div className="text-center">No product found</div>;
  }

  return (
    <>
      <div>{id}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCardPreview product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
