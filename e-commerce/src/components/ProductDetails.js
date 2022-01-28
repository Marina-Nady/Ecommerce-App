import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {getProductDetails} from '../actions/index'
import {addCart,deleteCart} from '../actions/index'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function ProductDetails(){
    const dispatch = useDispatch()
    const details = useSelector((state)=>state.details)
    const {id} = useParams()
    const [btn,setBtn] = useState('Add to Cart')

    useEffect(()=>{
        dispatch(getProductDetails(id))
    },[dispatch])

    const addProduct = (product) => {
        if(btn === 'Add to Cart'){
            dispatch(addCart(product))
            setBtn('Remove from Cart')
        }else{
            // dispatch(deleteCart(product))
            setBtn('Add to Cart')
        }
       
    } 

    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img src={details.image} alt={details.title} height="400px" width='400px'/>
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{details.category}</h4>
                <h1 className="display-5">{details.title}</h1>
                <p className="lead fw-bolder">
                    Rating {details.rating && details.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {details.price}
                </h3>
                <p className="lead">{details.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(details)}>
                    {btn}
                </button>
                <NavLink className="btn btn-dark ms-2 px-3 py-2" to='/cart'>Go to Cart</NavLink>

            </div>
            </>
        )
    }
    return(
        <>
        <div className="container py-5">
            <div className="row py-4">
                { details && details.id == id ? <ShowProduct/> : <Loading/>}
            </div>
        </div>
        </>
    )

}

export default ProductDetails