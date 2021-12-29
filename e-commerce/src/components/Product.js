import { NavLink } from "react-router-dom"

const Product = (props) => {
  return (
    <>
    <div className="col-md-3 mb-4">
      <div className="card  h-100 text-center p-4">
        <img src={props.details.image} className="card-img-top" alt={props.details.title} height='250px'/>
        <div className="card-body">
          <h5 className="card-title mb-0">{props.details.title.substring(0,12)}...</h5>
          <p className="card-text lead fw-bold">
                ${props.details.price}
            </p>
          <NavLink to={`/products/${props.details.id}`} className="btn btn-outline-dark">
           Buy Now
          </NavLink>
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
