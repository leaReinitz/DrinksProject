import produce from 'immer'
import { actions } from './action';
import createReducer from "./ReducerUtil";

const initialState={
    user:{
        _id:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        searches:[]
    }
}

// export default produce((state,action)=>{
   
//     switch (action.type) {
//         case "SET_LAST_NAME":
//             state.users.lastName=action.payload
//             break;
//             case "SET_FIRST_NAME":
//                 state.users.firstName=action.payload
//                 break;
                  
//     }

// },initialState)
const user={
    // setLastName(state,action){
    //     state.user.lastName=action.payload
    // },
    // setFirstName(state,action){
    //     state.user.firstName=action.payload
    // },
    saveUser(state,action){
        state.user=action.payload
    }
}

export default produce((state, action) => createReducer(state, action, user), initialState);
