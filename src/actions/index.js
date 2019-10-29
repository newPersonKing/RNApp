import { DeviceEventEmitter } from 'react-native';

import store from '../store';

import {
  getHomeBanner,
  getHomeList
} from '../http/index'

import {
  getHomeBannerAction,
  getHomeListAction,
  getHomeListFailureAction,
  getHomeListMoreAction,
  saveLoginMessageAction
} from './action-creator'

export function fetchHomeBanner() {

  getHomeBanner().then(res => store.dispatch(getHomeBannerAction(res.data)))

}

/* 获取首页文章列表 */
export function fetchHomeList() {
  getHomeList().then(res => {
    store.dispatch(getHomeListAction(res.data))
  }).catch(e => {
    store.dispatch(getHomeListFailureAction())
  })
}

/* 首页加载更多 */
export function fetchHomeListMore(page) {
  getHomeList(page)
    .then(res => store.dispatch(getHomeListMoreAction(res.data)))
    .catch(e => store.dispatch(getHomeListFailureAction()));
}

export function saveLoginMessage(data){
  console.log("user==="+data)
   store.dispatch(saveLoginMessageAction(data))
}

