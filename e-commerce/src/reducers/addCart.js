// export const addCart= (state=[],action)=>{
//     const product = action.payload
//     if(action.type === "AddCart"){
//         const exist = state.find((x)=>x.product.id === product.id)
//         if(exist){
//             return state.map((x)=>
//                 x.product.id === product.id ? {...x, qty: x.qty + 1} : x
//             )
//         }
//         else{
//             const product = action.payload;
//             return [
//                 ...state,
//                 {
//                     product,
//                     qty: 1,
//                 }
//             ]
//         }
//     }
//     return state
// }


const addItem = []

const addItems = (state = addItem , action) => {
    switch(action.type){
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
            break;

            default: return state;
            break;
    }

}

export default addItems;