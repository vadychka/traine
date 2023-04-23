import * as actions from './actionsTypes'

let id = 0

export default function reducer (store = [], action) {
    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...store,
                {
                    id: ++id,
                    description: action.payload.description,
                    resolved:false
                }
            ]
            
        case actions.BUG_REMOVE:
            return store.filter(bug => bug.id !== action.payload.id)
        default:
            return store
    }
}