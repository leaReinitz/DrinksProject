// export function setLastName(lastName) {
//     return { type: "SET_LAST_NAME", payload: lastName }
// }
// export function setFirstName(firstName) {
//     return { type: "SET_FIRST_NAME", payload: firstName }
// }
// export function setName(name) {
//     return { type: "SET_NAME", payload: name }
// }
// export function setaddress(address) {
//     return { type: "SET_ADDRESS", payload: address }
// }

function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actions = new Proxy(
    {},
    {
        get: function (target, prop) {
            if (target[prop] === undefined)
                return function (args) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    }
                }
            else return target[prop];
        }
    }
)