import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductList";
// import ProductDetails from "./ProductDetails";
function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
if (filterValue === "sofa") {
  const filterproducts = products.filter(
    (item) => item.category === "sofa"
  );

  setProductsData(filterproducts);
}

  

  if (filterValue === "mobile") {
    const filterproducts = products.filter(
      (item) => item.category === "mobile"
    );

    setProductsData(filterproducts);
  }


if (filterValue === "watch") {
  const filterproducts = products.filter(
    (item) => item.category === "watch"
  );

  setProductsData(filterproducts);
}
if (filterValue === "wireless") {
  const filterproducts = products.filter(
    (item) => item.category === "wireless"
  );

  setProductsData(filterproducts);
}

if (filterValue === "chair") {
  const filterproducts = products.filter(
    (item) => item.category === "chair"
  );

  setProductsData(filterproducts);
}
}

const handleSearch =e=> {
  const searchTerm = e.target.value

  const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

  setProductsData(searchedProducts)

}


  return (
    <Helmet title="shop">
      <CommonSection title="Products" />
      <section className="section">
        <Container className="shop__site">
          <Col lg="3" md="6">
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="6" className="text-end">
            <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="search__box">
              <input type="text" placeholder="Search......" onChange={handleSearch}/>
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>

          <Row></Row>
        </Container>
      </section>

      <section className="pt-0">
        <Row>
          {productsData.length === 0 ? (
            <h1 className="text-center fs-4">No Products are found!</h1>
          ) : (
            <ProductsList data={productsData} />
          )}
        </Row>
      </section>
      {/* <ProductDetails /> */}
    </Helmet>
  );
}

export default Shop;
