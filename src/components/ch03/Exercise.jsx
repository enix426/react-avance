import React, { useState, useEffect, useMemo } from "react";

// Hook personnalisé pour la recherche de produits
const useProductSearch = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Mémorisation du filtrage des produits
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return { filteredProducts, loading };
};

// Composant pour afficher la liste des produits
const ProductList = React.memo(({ products }) => {
  console.log("Rendering ProductList");
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
});

// Composant principal avec recherche
export const ProductSearchApp = () => {
  const [query, setQuery] = useState("");
  const { filteredProducts, loading } = useProductSearch(query);
  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un produit"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default ProductSearchApp;
