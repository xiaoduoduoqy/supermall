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



## :pencil: 相关首页组件实现细节总结
####首页头部FeatureView
1. 独立组件封装FeatureView
   1. div>a>img

####切换的TabControl
1. pro>title
2. div>根据title v-for 遍历 div>spen{{title}}
3. css样式
4. 选中哪一个tab，哪一个tab文字颜色改变，下面broder-bottom
   1. index选中相关数据的角标

####首页商品数据请求
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
      1. pege:动态的获取对应page
   4. 获取到数据：res
      1. this.goods[type].list.push(...res.data.list)
      2. this.goods[type].page = res.data.page;
      3. goods：{
               pop：page/list[30]
               new:pege/list[30]
               sell:page/list[30]
            }

####对商品数据进行展示
1. 封装GoodsList.vue组件
   1. props:goodslist-->list[30]
      1. 通过TabControl组件里面的点击事件btnClick
      2. 返回一个方法给父组件Home.vue:this.$emit('tabClick', index);
      3. 在组件TabControl里定义：@tabClick="backtabClick"
      3. 在Home.vue里面定义一个data里面currentType属性
      4. 在Home.vue里面的methods里面的实现backtabClick(index),修改currentType
      5. 在Home.vue里面的计算属性computed的showGoodsData()
      6. return this.goods[this.currentType].list将数据传入GoodsList.vue组件
   2. 通过v-for -->GoodsListItem[30]
   3. GoodsListItem（组件）-->goodItem（数据）

2. 封装GoodsListItem.vue组件
   1. props：goodItem
   2. goodItem：取出img/orgPrice/cfav/title,使用标签进行展示

####对滚东进行重构:Better-Scroll
1. Better-Scroll的基本使用
   1. const bscroll=new BScroll(el,{ })
   2. 注意:wapper-->content-->很多内容
   3. 监听滚动
      1. probeType:0/1/2(手指滚动)/3(只要是滚动)
      2. bscroll.on('scroll', (position) => {})
   4. 上拉加载
      1. pullUpLoad:false/ture
      2. bscroll.on('pullingUp', () => {});
   5. click:false
      1. button可以监听
      2. div不可以
2. 在Vue项目的使用Better-Scroll
   1. 对Better-Scroll封装为Scroll.vue
   2. Home.vue和Scroll.vue之间进行通讯
      1. Home.vue将probeType设置为3
      2. Scroll.vue需要通过$emit实时的将事件发送到Home.vue

####回到顶部BackTop
1. 对BackTop.vue组件的封装
2. 如何监听组件的点击事件
   1. 直接监听back-top的点击，但是可以直接监听？
      1. 不可以，必须添加.native修饰符
   2. 回到顶部：
      1. scroll对象,scroll.scrollTo(x, y, time);
      2. this.$refs.aaa.scrollTo(0, 0, 300);
   3. BackTop显示和隐藏
      1. isactive:false
      2. 监听滚动位置：
         1. position.y < -2000 -->isactive:ture
         2. position.y > -2000 -->isactive:false

####解决首页中的Better-Scroll可滚动区域的问题
1. Better-Scroll在决定有多少区域可以滚动时,是根据scrollerHeight属性决定
   1. scrollerHeight属性是根据放Better-Scroll的content在子组件的高度
   2. 但是我们的首页中，刚开始在计算scrollerHeight属性时,是没有将图片计算在内的
   3. 所以计算出来的高度是错误的
   4. 后来图片加载完成，导相关的高度变化，但是scrollerHeight属性没有进行更新
   5. 所以滚动出现了相关问题
2. 如何解决这个问题
   1. 监听每一张图片是否加载完成，只要有一张图片加载完成了，就执行this.scroll.refresh();
   2. 如何监听图片加载完成？
      1. 原生元素的js监听图片:img.onload=function(){}
      2. Vue中监听的refresh()
   3. 如何将GoodsListItme.vue中的事件传入到Home.vue中
      1. 一种采用this.$parent.$parent.refresh()
      2. 直接采用事件总线
         1. bus-->总线
         2. Vue.prototype.$bus=new Vue();
         3. this.$bus.$emit('事件名称',参数)
         4. this.$bus.$on('事件名称',回调函数(参数))
   4. 对于refresh非常频繁的问题，进行防抖操作
      1. 防抖debounce/节流throttle


