import { Button } from "reactstrap";
import Accordian from "./Accordian";
import PropTypes from "prop-types";

export default function CartCard({
  data = {},
  dispatcher = () => {},
  quantityChange = () => {},
}) {
  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col-3">
            <img className="product_image" src={data.thumbnail} alt="book" />
          </div>
          <div className="col-9">
            <h4 className="mb-4">{data.title}</h4>
            <Accordian
              options={[
                {
                  title: "Details & Care",
                  description: data.description,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="row d-flex justify-content-end">
              <div className="col-4">
                <select
                  defaultValue={data.quantity}
                  className="quantity_changer"
                  onChange={(e) =>
                    dispatcher(
                      quantityChange({ id: data.id, value: e.target.value })
                    )
                  }
                >
                  <option value={0}>Select Quantity</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-4">
                <h5>${data.price}</h5>
              </div>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-4"></div>
              <div className="col-4">
                <Button type="submit" color="link">
                  DELETE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object,
  dispatcher: PropTypes.func,
  quantityChange: PropTypes.func,
};
