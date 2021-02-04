import { combineReducers } from 'redux';

import recipes from '@/reducers/favorite';

const rootReducer = combineReducers({ recipes });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
