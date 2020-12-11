/**
 * 封装所有detail组件需要的相关数据方法
 */
import {request} from "./request";

export function getDetailData(id) {
  return request({
    url: '/detail',
    params: {
      id: id,
    }
  })
}
