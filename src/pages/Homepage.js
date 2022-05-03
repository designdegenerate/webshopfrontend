import ProductList from "../components/home/ProductList";

const Homepage = () => {
  return (
    <article id='homePage'>
      <section className="sidebar">
        <div>
          <h2>Categories</h2>
          <ul>
            <li>PrestaShop</li>
            <li>PrestaShop</li>
            <li>PrestaShop</li>
          </ul>
        </div>
        <div>
          <h2>Rating Item</h2>
          <ul>
            <li>five stars</li>
            <li>four stars</li>
            <li>three stars</li>
          </ul>
        </div>

      </section>
      <ProductList/>

    </article>
  )
}

export default Homepage;