import axios from "axios"

//get all 

export const  getProducts = async () =>{
    let response = null;
    try {
        response = await axios.get('https://fakestoreapi.com/products')
            
    } catch (err) {
        console.log(err)
    }
  
     return{
        type:"ProductsList",
        payload:response.data
    }
  }