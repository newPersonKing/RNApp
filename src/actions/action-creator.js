import actionTypes from './actionTypes';

export function getHomeBannerAction(homeBanner) {
    return {
        type: actionTypes.FETCH_HOME_BANNER,
        homeBanner,
    };
}

export function getHomeListAction(homeList) {
    return {
        type: actionTypes.FETCH_HOME_LIST,
        homeList,
    };
}

export function getHomeListFailureAction() {
    return {
        type: actionTypes.FETCH_HOME_LIST_FAILURE,
    };
}

export function getHomeListMoreAction(homeList) {
    return {
        type: actionTypes.FETCH_HOME_LIST_MORE,
        homeList,
    };
}

export function saveLoginMessageAction(data){
   return{
       type:actionTypes.SAVE_LOGIN_MESSAGE,
       data
   }
}
