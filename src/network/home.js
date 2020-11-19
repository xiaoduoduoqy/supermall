/**
 * 封装所有home组件需要的相关数据方法
 */
import {request} from "./request";

/*获取Multidata相关数据*/
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

/*获取首页流行,新款，精选的的相关数据*/
export function getGoodsHomedata(type, page) {
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}
