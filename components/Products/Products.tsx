"use client";

import React, {
  useEffect,
  useState,
  useCallback,
} from "react";
import Link from "next/link";
import "./Products.css";

/* =========================
   PROPS
========================= */

interface ProductProps {
  categorySlug?: string;
  productSlug?: string;
  itemSlug?: string;
}

/* =========================
   TYPES
========================= */

interface Item {
  name: string;
  slug?: string;
  image?: string;
  gallery?: string[];
  shortDesc?: string;
  description?: string;
}

interface ProductType {
  name: string;
  slug?: string;
  image?: string;
  gallery?: string[];
  shortDesc?: string;
  description?: string;
  items?: Item[];
}

interface Category {
  category?: string;
  name?: string;
  slug?: string;
  categoryImage?: string;
  categoryDesc?: string;
  products?: ProductType[];
  subcategories?: Category[];
}

/* =========================
   LOADER
========================= */

const LoadingSpinner: React.FC = () => (
  <div
    className="loading-spinner"
    role="status"
    aria-label="Loading products..."
  >
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

/* =========================
   COMPONENT
========================= */

const Products: React.FC<ProductProps> = ({
  categorySlug,
  productSlug,
  itemSlug,
}) => {
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState("");

  /* =========================
     HELPERS
  ========================= */

  const slugify = useCallback((text: string = ""): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }, []);

  const findCategory = useCallback(
    (categories: Category[], slug: string): Category | null => {
      for (const cat of categories) {
        const catSlug =
          cat.slug ||
          slugify(cat.category || cat.name || "");

        if (catSlug === slug) return cat;

        if (cat.subcategories?.length) {
          const found = findCategory(
            cat.subcategories,
            slug
          );

          if (found) return found;
        }
      }

      return null;
    },
    [slugify]
  );

  const findProductRecursively = useCallback(
    (
      categories: Category[],
      slug: string
    ): ProductType | null => {
      for (const cat of categories) {
        if (cat.products) {
          const found = cat.products.find(
            (p) =>
              (p.slug || slugify(p.name)) === slug
          );

          if (found) return found;
        }

        if (cat.subcategories) {
          const found = findProductRecursively(
            cat.subcategories,
            slug
          );

          if (found) return found;
        }
      }

      return null;
    },
    [slugify]
  );

  const flattenProducts = (
    cat: Category
  ): ProductType[] => {
    let items = [...(cat.products || [])];

    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        items = [
          ...items,
          ...flattenProducts(sub),
        ];
      }
    }

    return items;
  };

  /* =========================
     FETCH DATA
  ========================= */

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "/data/products.json"
        );

        if (!res.ok) {
          throw new Error(
            `HTTP Error ${res.status}`
          );
        }

        const json: Category[] =
          await res.json();

        setData(json);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  /* =========================
     IMAGE HANDLER
  ========================= */

  useEffect(() => {
    if (!data || !categorySlug) return;

    const category = findCategory(
      data,
      categorySlug
    );

    if (!category) return;

    const product = productSlug
      ? findProductRecursively(
          [category],
          productSlug
        )
      : null;

    if (product && itemSlug && product.items) {
      const item = product.items.find(
        (it) =>
          (it.slug || slugify(it.name)) ===
          itemSlug
      );

      if (item?.image) {
        setMainImage(item.image);
        return;
      }
    }

    if (product?.image) {
      setMainImage(product.image);
      return;
    }

    if (category.categoryImage) {
      setMainImage(category.categoryImage);
      return;
    }

    setMainImage("");
  }, [
    data,
    categorySlug,
    productSlug,
    itemSlug,
    findCategory,
    findProductRecursively,
    slugify,
  ]);

  /* =========================
     STATES
  ========================= */

  if (loading) return <LoadingSpinner />;

  if (error) return <p>{error}</p>;

  if (!data) return <p>No data found.</p>;

  if (!categorySlug) {
    return <p>Category not found.</p>;
  }
  console.log("categorySlug:", categorySlug);
console.log("data:", data);

  const category = findCategory(
    data,
    categorySlug
  );

  if (!category) {
    return <p>Category not found.</p>;
  }

  const product = productSlug
    ? findProductRecursively(
        [category],
        productSlug
      )
    : null;

  let currentItem: Item | null = null;

  if (product && itemSlug && product.items) {
    currentItem =
      product.items.find(
        (it) =>
          (it.slug || slugify(it.name)) ===
          itemSlug
      ) || null;
  }

  const allProducts =
    flattenProducts(category);

  const categorySlugValue =
    category.slug ||
    slugify(
      category.category ||
        category.name ||
        ""
    );

  return (
    <div className="product-page">
      {/* Paste the JSX section I gave previously here */}
       {/* Breadcrumb */}
    <nav className="breadcrumb">
      <Link href="/">Home</Link>

      <span> / </span>

      <Link href={`/products/${categorySlugValue}`}>
        {category.category || category.name}
      </Link>

      {product && (
        <>
          <span> / </span>

          <Link
            href={`/products/${categorySlugValue}/${
              product.slug || slugify(product.name)
            }`}
          >
            {product.name}
          </Link>
        </>
      )}

      {currentItem && (
        <>
          <span> / </span>
          <span>{currentItem.name}</span>
        </>
      )}
    </nav>

    {/* Category Header */}
    <div className="category-container">

      <div className="category-desc-wrapper">
        <h2>{category.category || category.name}</h2>

        {category.categoryDesc && (
          <p>{category.categoryDesc}</p>
        )}
      </div>

      <div className="category-image-wrapper">
        {category.categoryImage && (
          <img
            src={category.categoryImage}
            alt={category.category || category.name}
          />
        )}
      </div>

    </div>

    {/* ITEM DETAILS */}
    {currentItem ? (
      <div className="product-detail">

        <div className="product-description">
          <h3>{currentItem.name}</h3>

          <p>{currentItem.description}</p>
        </div>

        <div className="product-image-container">

          {mainImage && (
            <img
              src={mainImage}
              alt={currentItem.name}
              className="product-image"
            />
          )}

          {currentItem.gallery?.length ? (
            <div className="product-gallery">

              {currentItem.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${currentItem.name}-${index}`}
                  className={`gallery-thumb ${
                    mainImage === img ? "active" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}

            </div>
          ) : null}

        </div>

      </div>
    ) : product ? (
      product.items?.length ? (
        /* PRODUCT ITEMS */
        <div className="items-grid">

          <h3>{product.name}</h3>

          {product.description && (
            <p>{product.description}</p>
          )}

          <div className="product-grid">

            {product.items.map((item, index) => {
              const itemSlugValue =
                item.slug || slugify(item.name);

              const productSlugValue =
                product.slug || slugify(product.name);

              return (
                <Link
                  key={index}
                  href={`/products/${categorySlugValue}/${productSlugValue}/${itemSlugValue}`}
                  className="product-card"
                >
                  <div
                    className="product-thumb"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  <h4>{item.name}</h4>

                  <p>{item.shortDesc}</p>
                </Link>
              );
            })}

          </div>

        </div>
      ) : (
        /* PRODUCT DETAIL */
        <div className="product-detail">

          <div className="product-description">

            <h3>{product.name}</h3>

            <p>{product.description}</p>

          </div>

          <div className="product-image-container">

            {mainImage && (
              <img
                src={mainImage}
                alt={product.name}
                className="product-image"
              />
            )}

            {product.gallery?.length ? (
              <div className="product-gallery">

                {product.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name}-${index}`}
                    className={`gallery-thumb ${
                      mainImage === img ? "active" : ""
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}

              </div>
            ) : null}

          </div>

        </div>
      )
    ) : (
      /* CATEGORY PRODUCTS */
      <div className="product-grid">

        {allProducts.map((p, index) => (
          <Link
            key={index}
            href={`/products/${categorySlugValue}/${
              p.slug || slugify(p.name)
            }`}
            className="product-card"
          >
            <div
              className="product-thumb"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            />

            <h4>{p.name}</h4>

            <p>{p.shortDesc}</p>

          </Link>
        ))}

      </div>
    )}

    {/* CONTACT SECTION */}
    <section className="contact-us-section">

      <div className="container contact-box">

        <h2>📞 Contact Us</h2>

        <p>
          Need premium quality products, bulk orders,
          or export details? Our team is here to help.
        </p>

        <div className="contact-details">

          <p>
            ✉️{" "}
            <a href="mailto:info@boe9.com">
              info@boe9.com
            </a>
          </p>

          <p>
            ✉️{" "}
            <a href="mailto:exports@boe9.com">
              exports@boe9.com
            </a>
          </p>

          <p>
            <strong>📞 Phone:</strong>{" "}
            +91 9272131561
          </p>

          <p>
            <strong>🌍 Location:</strong>{" "}
            Nashik, Maharashtra, India
          </p>

        </div>

        <Link
          href="/ContactUs"
          className="contact-btn"
        >
          Send Inquiry →
        </Link>

      </div>

    </section>

    </div>
  );
};

export default Products;