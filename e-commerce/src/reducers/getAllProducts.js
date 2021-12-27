export const productsReducer= (state=null,action)=>{
    // console.log(action)
    if(action.type === "ProductsList"){
        return action.payload
    }

    return state
}