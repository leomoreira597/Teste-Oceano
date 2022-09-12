const INITIAL_STATE = {list:[]}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'BUSCAR_A_LISTA':
            return{...state, list: action.payload.data}
        default:
            return state    
    }
}