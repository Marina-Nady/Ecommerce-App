export const productDetails = (state=null,action)=>{
    // console.log(action)
    if(action.type === "ProductDetails"){
        return action.payload
    }

    return state
}