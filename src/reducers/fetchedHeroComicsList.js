const fetchedHeroComicsListDefaultState = [];
export default (state = fetchedHeroComicsListDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COMIC':
            let idExist = state.some((item) => item.id == action.id);
            if(idExist) {
                return state.map((item) => {
                    if( item.id == action.id ) {
                        return {
                            id: item.id,
                            data: item.data.concat(...action.data)
                        };
                    } else {
                        return item
                    }
                })
            } else {
                return [
                    ...state,
                    {
                        id: action.id,
                        data: [...action.data]
                    }
                ];
            }
            // return null;
        default:
            return state;
    }
}

