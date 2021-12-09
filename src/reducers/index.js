import { combineReducers } from 'redux';
import app from './app'

const appReducer =  combineReducers({
    app: app
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        // eslint-disable-next-line no-param-reassign
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer
