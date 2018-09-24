// Popular List Reducer
const popularListReducerDefaultState = [];
export default (state = popularListReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_INITIAL_LIST':
            return [
                ...state,
                ...action.list
            ];
        default:
            return state;
    }
}