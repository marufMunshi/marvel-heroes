import { popularHeroList } from '../fixtures/records';
import sortHeroList from '../selectors/sortHeroList';

const list = sortHeroList(popularHeroList);
// Get Popular Hero List
export const getList = () => ({
    type: 'GET_INITIAL_LIST',
    list
});