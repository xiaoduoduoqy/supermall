import axios from 'axios'

export function request(config) {
  //1.创建一个axios实例：
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  //请求拦截器:发送的时候
  instance.interceptors.request.use(config => {
    // console.log(config);
    //1.相关的config不符合相关信息，我们可以加相关信息
    //2.比如在每次发送网络请求加入请求动画
    //3.比如在某些请求需要相关信息，如果没有给出相关提示
    return config;//拦截过后还要返回相关的config
  }, error => {
    // console.log(error);
  })
  //响应拦截器
  instance.interceptors.response.use(res => {
    // console.log(res);
    //1.在加入相应成功关闭相关动画
    //2.处理相关结果
    return res;//拦截过后还要返回相关的res
  }, error => {
    // console.log(error);
  })
  //发送网络请求(回调的函数将相关数据返回)
  //其实他封装的就是一个promise所以我么不需要再封装一个promise
  return instance(config);
}
