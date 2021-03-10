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

//导出商品信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.OldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowprice;
  }
}

//导出店铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cFans;
    this.score = shopInfo.score;
    this.cGoodsCount = shopInfo.cGoods;
  }
}
