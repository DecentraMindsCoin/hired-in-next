import { useState, useEffect } from "react";

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [filterBy, setFilterBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function handleRemoveFromCart(product) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
  }

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  function handleSortBy(event) {
    setSortBy(event.target.value);
  }

  function handleFilterBy(event) {
    setFilterBy(event.target.value);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const filteredProducts = products
    .filter((product) =>
      filterBy ? product.category === filterBy : true
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => sortBy === "title" ? a.title.localeCompare(b.title) : sortBy === "price" ? a.price - b.price : 0);


  return (
<div className="App">
  <section>
    <h2>Products</h2>
    <div>
      <label htmlFor="sort-select">Sort By:</label>
      <select id="sort-select" onChange={handleSortBy}>
        <option value="title">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
    <div>
      <label htmlFor="filter-select">Filter By:</label>
      <select id="filter-select" onChange={handleFilterBy}>
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
    <div>
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  <section>
    <h2>Shopping Cart</h2>
    <p>Total: {cartTotal}</p>
    <ul>
      {cart.map((product) => (
        <li key={product.id}>
          {product.title} - {product.price} -{" "}
          <button onClick={() => handleRemoveFromCart(product)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  </section>
  <section>
    <h2>Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => handleRemoveFromCart(product)}>
                Remove from Cart
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">Total: ${cartTotal}</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>

  );
}

export default ShoppingCart;

// Challenge Description
// You have been hired to develop a simple user interface for a shopping cart application. The application should display a list of products, allow users to add products to their cart, and show the contents of the cart.

// The product list should be fetched from an API endpoint and displayed in a table. Each row in the table should display the product name, price, and an "Add to Cart" button. When the user clicks the "Add to Cart" button, the product should be added to their cart.

// The cart should be displayed in a separate section of the user interface. It should show the list of products in the cart, along with the total price. Each product in the cart should be displayed with its name, price, and a "Remove from Cart" button. When the user clicks the "Remove from Cart" button, the product should be removed from their cart.

// Requirements
// The user interface should be developed using React.
// The product list should be fetched from the following API endpoint: https://fakestoreapi.com/products.
// The user interface should have two sections: the product list and the cart.
// The product list should display the product name, price, and an "Add to Cart" button for each product.
// Clicking the "Add to Cart" button should add the product to the cart.
// The cart should display the list of products in the cart, along with the total price.
// Each product in the cart should be displayed with its name, price, and a "Remove from Cart" button.
// Clicking the "Remove from Cart" button should remove the product from the cart.
// The user interface should be responsive and look good on both desktop and mobile devices.