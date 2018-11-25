const initialState = {
    boards: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_WISHBOARD':
        {
            return {
                ...state,
                boards:[...state.boards, {
                    name : action.value, 
                    wishes : []
                }]
            }
        }
        default: return state
    }
}