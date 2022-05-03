const ProductList = () => {
  return (
    <section className="productList">

      <div className="productCard">
        <img height="300" width="300" alt="" src=""></img>
        <div className="productCardContent">
          <h2>Dictum Morbi</h2>
          <div>
            <p>$26.00</p>
            <p> * * * *</p>
          </div>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus
            eget urna mollis ornare vel eu leo.
          </p>
          <div>
            <p>AddToCart</p>
            <p>Favorite</p>
            <p>Zoom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;