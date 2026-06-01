import Products from "@/components/Products/Products";

type ProductPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const resolvedParams = await params;

  const categorySlug = resolvedParams.slug?.[0];
  const productSlug = resolvedParams.slug?.[1];
  const itemSlug = resolvedParams.slug?.[2];

  return (
    <Products
      categorySlug={categorySlug}
      productSlug={productSlug}
      itemSlug={itemSlug}
    />
  );
}