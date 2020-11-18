/**
 * 封装所有home组件需要的相关数据方法
 */
import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
