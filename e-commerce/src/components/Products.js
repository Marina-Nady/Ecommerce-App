import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../actions/index'
import Product from "./Product";

const Products = () => {
    // const [data,setData] = useState([]);
    // const [filter,setFilter] = useState(data);
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.allProducts)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const Loading = ()=>{
      return (
        <>
          Loading....
        </>
      )
    }

    const ShowProducts = ()=>{
      return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Women's Clothing</button>
          <button className="btn btn-outline-dark me-2">Jellwery</button>
          <button className="btn btn-outline-dark me-2">Electronic</button>
        </div>
        {products.map((product)=>(
            <Product details={product} key={product.id}/>
          ))}
        </>
      )
    }
      return (
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
              <hr/>
            </div>
          </div>   
          <div className="row justify-content-center">
            {products ? <ShowProducts/> : <Loading/>}
          </div>
        </div>
      );
  };
  
  export default Products;
  