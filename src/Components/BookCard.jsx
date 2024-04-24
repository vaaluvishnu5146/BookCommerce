import PropTypes from "prop-types";
import { Button } from "reactstrap";

export default function BookCard({
  data = {},
  addToCart = () => {},
  isAddedToCart = false,
}) {
  return (
    <div className="book_card col-lg-3 col-md-4">
      <div className="card_header">
        <img src={data.thumbnail} />
      </div>
      <div className="card_body px-4 py-3">
        <h5 className="mb-2">
          <b>{data.title}</b>
        </h5>
        <p className="mb-1">
          <b>{data.category}</b>
        </p>
        <p className="mb-3">
          <b>
            <i>{data.author}</i>
          </b>
        </p>
        <div className="row py-2">
          <div className="col-6">
            <h4>${data.price}</h4>
          </div>
          <div className="col-6">
            <Button
              disabled={isAddedToCart}
              color="primary"
              className="cart_button"
              onClick={() => addToCart({ ...data, quantity: 1 })}
            >
              {isAddedToCart ? "Added" : "Add"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  data: PropTypes.object,
  addToCart: PropTypes.func,
  isAddedToCart: PropTypes.bool,
};
