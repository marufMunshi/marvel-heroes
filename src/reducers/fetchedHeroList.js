// Reducer for Hero data fetched from marvel 
const fetchedHeroDefaultState = [];
export default (state = fetchedHeroDefaultState, action) => {
    switch (action.type) {
        case 'ADD_HERO':
            let idExist = state.some((item) => item.id == action.data.id);
                if(idExist) {
                    return [
                        ...state
                    ];
                } else {
                    return [
                        ...state,
                        action.data
                    ];
                }
        default:
            return state;
    }
}