import ProductsCart from "./ProductsCart";

const Products = () => {
  return (
    <div className="py-10">
      <h1 className="text-lg md:text-2xl mb-6 italic font-bold text-sky-700">
        Our top Products
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <ProductsCart></ProductsCart>
        <ProductsCart></ProductsCart>
        <ProductsCart></ProductsCart>
        <ProductsCart></ProductsCart>
        <ProductsCart></ProductsCart>
        <ProductsCart></ProductsCart>
      </div>
    </div>
  );
};

export default Products;
