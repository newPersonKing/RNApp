import { combineReducers } from 'redux'

import user from './user'
import home from './home'
import login from './Login'

export default combineReducers(
    {
        user,
        home,
        login
    }
)

