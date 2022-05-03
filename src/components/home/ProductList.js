import ProductCard from "./ProductCard";

const ProductList = (props) => {

  return (
    <section className="productList">
      {props.products.map( (product) => {
        return <ProductCard details={product} />
      })}
    </section>
  );
};

export default ProductList;