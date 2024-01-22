import ProductCardPreview from "@/components/ProductCardPreview";
import ProductsList from "@/components/ProductsList";
import { prisma } from "@/lib/db/prisma";

type ProductPageProps = {
  params: {
    id: string;
  },
  searchParams: { page: string };
};

async function CategoryPage({ params: { id }, searchParams: {page} }: ProductPageProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);
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
      <ProductsList products={products} currentPage = {currentPage} totalPages = {totalPages}/>

    </>
  );
}

export default CategoryPage;
