import Products from "./Products";
import { deleteCart } from "../actions";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.handleCart);
  const handleDec = (c)=>c.qty = c.qty-1

  const handleInc = (c)=>c.qty = c.qty+1

  const handelClose = (p)=>{
    dispatch(deleteCart(p))
  }
  useEffect(()=>{
      console.log(cart)

  },[cart])

  if (cart) {
    return cart.map((c) => (
      <div className="px-4 my-5 bg-light rounded-3" key={c.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label='Close' onClick={()=>handelClose(c)}></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={c.image} alt={c.title} height="200px" width="180px"/>
            </div>
            <div className="col-md-4">
                <h3>{c.title}</h3>
                <p className="lead fw-bold">
                    {c.qty} X ${c.price} = ${c.qty * c.price }
                </p>
                <button className="btn btn-outline-dark me-4"
                  onClick={()=>handleDec(c)}>
                  <i className="fa fa-minus"></i>
                </button>
                <button className="btn btn-outline-dark me-4"
                  onClick={()=>handleInc(c)}>
                  <i className="fa fa-plus"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return <>Loading...</>;
};

export default Cart;
