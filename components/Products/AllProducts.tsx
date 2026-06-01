"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./AllProducts.css";

interface Product {
  name: string;
  slug: string;
  image?: string;
  gallery?: string[];
  shortDesc?: string;
  description?: string;
  categorySlug: string;
  subcategorySlug: string | null;
}

interface ProductData {
  name: string;
  slug: string;
  image?: string;
  gallery?: string[];
  shortDesc?: string;
  description?: string;
}

interface Category {
  category?: string;
  name?: string;
  slug?: string;
  products?: ProductData[];
  subcategories?: Category[];
}

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const slugify = (str: string): string =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[&()]/g, "")
      .replace(/[^\w-]+/g, "");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/products.json");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Category[] = await response.json();

        const productsList: Product[] = [];

        const extractProducts = (
          category: Category,
          parentCategorySlug?: string
        ) => {
          const categorySlug =
            parentCategorySlug ||
            category.slug ||
            slugify(category.category || category.name || "");

          category.products?.forEach((product) => {
            productsList.push({
              ...product,
              categorySlug,
              subcategorySlug: null,
            });
          });

          category.subcategories?.forEach((sub) => {
            const subSlug =
              sub.slug || slugify(sub.name || sub.category || "");

            sub.products?.forEach((product) => {
              productsList.push({
                ...product,
                categorySlug,
                subcategorySlug: subSlug,
              });
            });

            if (sub.subcategories?.length) {
              extractProducts(sub, categorySlug);
            }
          });
        };

        data.forEach((category) => extractProducts(category));

        setAllProducts(productsList);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="all-products-page container">
        <h1>Loading Products...</h1>
      </div>
    );
  }

  return (
    <div className="all-products-page container">
      <h1>All Products</h1>

      <div className="product-grid">
        {allProducts.map((product, index) => (
          <ProductCard
            key={`${product.slug}-${index}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(
    product.image || ""
  );

  const handleMouseEnter = () => {
    if (!product.gallery?.length) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      setCurrentImage(product.gallery![currentIndex]);
      currentIndex =
        (currentIndex + 1) % product.gallery!.length;
    }, 1000);

    (window as any).__productInterval = interval;
  };

  const handleMouseLeave = () => {
    clearInterval((window as any).__productInterval);
    setCurrentImage(product.image || "");
  };

  const productLink = `/products/${product.categorySlug}${
    product.subcategorySlug
      ? `/${product.subcategorySlug}`
      : ""
  }/${product.slug}`;

  return (
    <Link
      href={productLink}
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentImage && (
        <div
          className="product-thumb"
          style={{
            backgroundImage: `url(${currentImage})`,
          }}
        />
      )}

      <div className="product-info">
        <h3>{product.name}</h3>

        {product.shortDesc && (
          <p>{product.shortDesc}</p>
        )}
      </div>
    </Link>
  );
}