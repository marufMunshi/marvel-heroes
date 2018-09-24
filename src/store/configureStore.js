import { createStore, combineReducers } from 'redux';
import heroListReducer from '../reducers/popularHeroList';
import fetchedHeroListReducer from '../reducers/fetchedHeroList';
import fetchedHeroComicsListReducer from '../reducers/fetchedHeroComicsList';

export const store = createStore(
    combineReducers({
        popularHeroList: heroListReducer,
        fetchedHeroList: fetchedHeroListReducer,
        fetchedHeroComics: fetchedHeroComicsListReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
