import { actions } from "../stor/action";

export const add$ToUserName=({dispatch,getState})=>next=>action=>{
    debugger
if(action.type=='ADD$_TO_USER_NAME'){
    var newUserName="$"+action.payload;
    dispatch(actions.setFirstName(newUserName))
}
return next(action)
}