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
          <a href="#" className="btn btn-outline-dark">
           Buy Now
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
