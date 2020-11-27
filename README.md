# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## :book: 相关首页组件总结
FeatureView
1. 独立组件封装FeatureView
   1. div>a>img

TabControl
1. pro>title
2. div>根据title v-for 遍历 div>spen{{title}}
3. css样式
4. 选中哪一个tab，哪一个tab文字颜色改变，下面broder-bottom
   1. index选中相关数据的角标

首页商品数据请求
1. 设计数据结构：
   1. goods：{
      pop：page/list
      new:pege/list
      sell:page/list
   }
2. 发送数据请求：
   1. 在network文件中的home.js封装getHomeGoods
   2. 在Home.vue中，又在methods中getHomeGoods(type)
   3. 调用this.getGoodsHomedata('pop')/this.getGoodsHomedata('new');/this.getGoodsHomedata('sell');
      1. pege:动态的获取
