import produce from 'immer'
import creatReducer from "./ReducerUtil";

const initialState={
   
    company:[
        {name:"atra",address:"yeruslaim"}
    ]
}

// export default produce((state,action)=>{
   
//     switch (action.type) {
//         case "SET_NAME":
//             state.users.lastName=action.payload
//             break;
//             case "SET_ADDRESS":
//                 state.users.firstName=action.payload
//                 break;
                  
//     }

// },initialState)
const company={
    setName(state,action){
        state.users.lastName=action.payload
    },
    setAddress(state,action){
       state.users.firstName=action.payload
    }
}
// 6511857
export default produce((state,action)=>creatReducer(state,action,company),initialState)