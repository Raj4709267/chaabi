const initState={
     currentText:"Text 1"

}

function AppReducer(state=initState,action){
    const {type,payload}=action
    switch(type){
        case "CHANGE":{
            return {...state,currentText:payload}
        }

        default: return state
    }

}
export {AppReducer}