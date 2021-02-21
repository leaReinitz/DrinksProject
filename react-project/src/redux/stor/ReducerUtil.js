function convert(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g,v=>v[1].toUpperCase()) 
}

export default function creatReducer(state,action,handlers) {
    const key=convert(action.type)
    const handler=handlers[key]
    if(handler){
        handler(state,action);
    }
}