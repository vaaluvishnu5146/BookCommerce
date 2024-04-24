import { useEffect } from "react";
import BookCard from "../Components/BookCard";
import { saveAllProducts } from "../Redux/Reducers/Products";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../Redux/Reducers/Cart";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatcher = useDispatch();
  const { productItems = [] } = useSelector((store) => store.Products);
  const { items = [] } = useSelector((store) => store.Cart);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(saveAllProducts(result.products));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function isAddedToCart(id = 0) {
    const matchingElement = items?.find((item) => item.id === id);
    console.log(matchingElement);
    if (!matchingElement?.id) {
      return false;
    }
    return true;
  }

  function addToCart(data) {
    if (data.id) {
      dispatcher(addItemToCart(data));
    }
  }

  return (
    <div className="container">
      <h1>Fiction</h1>
      <p>Filter</p>
      <p>
        <Link to="/cart">Cart</Link>
      </p>
      <div className="row">
        {productItems.map((item, index) => (
          <BookCard
            key={`${item.title}-${item.id}-${index}`}
            data={item}
            addToCart={addToCart}
            isAddedToCart={isAddedToCart(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
