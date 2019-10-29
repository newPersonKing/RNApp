import actionTypes from '../actions/actionTypes';

const initialStore = {
    userName:"郭勇",
    passWord:"110110"
}

const login = (state = initialStore,action)=>{
    
    switch(action.type){

          case actionTypes.SAVE_LOGIN_MESSAGE:
            return {
                ...state,
                userName:action.data.userName,
                passWord:action.data.passWord
            }

    }

    return{
        ...state
    }

}

export default login;