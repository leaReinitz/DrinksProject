function convert(actionType) {
    let x=actionType.toLowerCase().replace(/_(\w)/g,v=>v[1].toUpperCase())
    
    return  x
}

export default function creatReducer(state,action,handlers) {
    const key=convert(action.type)
    const handler=handlers[key]
    if(handler){
        handler(state,action);
    }
}