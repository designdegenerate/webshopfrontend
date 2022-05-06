import RatingsFilterLi from "../ratingsFilterLi";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const isFiltered = props.filter.find((cat) => cat.checked === true);

  //Creates an array of filters where checked=true.
  let filteredFilters;

  const filterTheFilters = () => {
    if(!isFiltered) return filteredFilters = [{id: true}];

    filteredFilters = props.filter.filter( filter => filter.checked === true);
  };

  const minRating = () => {
    const ratingObj = props.ratings.find( rating => rating.checked);

    return ratingObj.stars;

  }

  filterTheFilters();

  // Look trough the ratings filter
  // get the highest number
  // Show products where rating is at least that number

  return (
    <section className="productList">
      {
      props.products
      .filter( (product) => {

        if (
          filteredFilters.find(filter => filter.id == product.categoryId)
        ) return product

      })
      .filter( (product) => {

        return parseFloat(product.rating) > minRating();


      })
      .map((product) => {
        return <ProductCard key={product.id} details={product} />;
      })}
    </section>
  );
};

export default ProductList;
