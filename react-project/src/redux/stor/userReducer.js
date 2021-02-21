import produce from 'immer'
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
const user={
    saveUser(state,action){
        state.user=action.payload
    }
}

export default produce((state, action) => createReducer(state, action, user), initialState);
