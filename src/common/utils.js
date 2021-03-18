/**
 * 函数防抖
 * @param func
 * @param delay
 * @returns {function(...[*]=): void}
 */
export function debounce(func, delay = 500) {
  let timeout = null;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

/**
 * 某函数在指定时间间隔内执行，如：每1秒执行一次 且第一就执行
 * @param fn
 * @param delay
 * @returns {function(...[*]=): (boolean|undefined)}
 */
export function throttle1(fn, delay = 1000) {
  let timer = null;
  let firstTime = true;
  return function (...args) {
    if (firstTime) {
      // 第一次加载
      fn.apply(this, args);
      return firstTime = false;
    }
    if (timer) {
      // 定时器正在执行中，跳过
      return;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 首次不执行，需等待delay时间后才能执行第一次
 * @param fn
 * @param delay
 * @returns {function(): void}
 */
export function throttle2(fn, delay = 1000) {
  let prevTime = Date.now();
  return function () {
    let curTime = Date.now();
    if (curTime - prevTime > delay) {
      fn.apply(this, arguments);
      prevTime = curTime;
    }
  };
}

/**
 * 时间格式方法
 *
 * @param {any} timeStamp  时间戳，秒级/毫秒级
 * @param {any} type 格式化时间类型，默认  Y-M-D H:I:S
 * @returns {string} formatTime 格式化后的时间 例如： 2017-05-05 12:09:22
 */
export function formatDate(timeStamp, type = 'Y-M-D H:I:S', auto = false) {
  let time = (timeStamp + '').length === 10 ? new Date(parseInt(timeStamp) * 1000) : new Date(parseInt(timeStamp));
  let _year = time.getFullYear();
  let _month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
  let _date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  let _hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  let _minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  let _secconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  let formatTime = '';
  let distinctTime = new Date().getTime() - time.getTime();

  if (auto) {
    if (distinctTime <= (1 * 60 * 1000)) {
      // console.log('一分钟以内，以秒数计算');
      let _s = Math.floor((distinctTime / 1000) % 60);
      formatTime = _s + '秒前';
    } else if (distinctTime <= (1 * 3600 * 1000)) {
      // console.log('一小时以内,以分钟计算');
      let _m = Math.floor((distinctTime / (60 * 1000)) % 60);
      formatTime = _m + '分钟前';
    } else if (distinctTime <= (24 * 3600 * 1000)) {
      // console.log('一天以内，以小时计算');
      let _h = Math.floor((distinctTime / (60 * 60 * 1000)) % 24);
      formatTime = _h + '小时前';
    } else if (distinctTime <= (30 * 24 * 3600 * 1000)) {
      let _d = Math.floor((distinctTime / (24 * 60 * 60 * 1000)) % 30);
      formatTime = _d + '天前';
      // console.log('30天以内,以天数计算');
    } else {
      // 30天以外只显示年月日
      formatTime = _year + '-' + _month + '-' + _date;
    }
  } else {

    switch (type) {
      case 'Y-M-D H:I:S':
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes + ':' + _secconds;
        break;
      case 'Y-M-D H:I:S zh':
        formatTime = _year + '年' + _month + '月' + _date + '日  ' + _hours + ':' + _minutes + ':' + _secconds;
        break;
      case 'Y-M-D H:I':
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes;
        break;
      case 'Y-M-D H':
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours;
        break;
      case 'Y-M-D':
        formatTime = _year + '-' + _month + '-' + _date;
        break;
      case 'Y-M-D zh':
        formatTime = _year + '年' + _month + '月' + _date + '日';
        break;
      case 'Y-M':
        formatTime = _year + '-' + _month;
        break;
      case 'Y':
        formatTime = _year;
        break;
      case 'M':
        formatTime = _month;
        break;
      case 'D':
        formatTime = _date;
        break;
      case 'H':
        formatTime = _hours;
        break;
      case 'I':
        formatTime = _minutes;
        break;
      case 'S':
        formatTime = _secconds;
        break;
      default:
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes + ':' + _secconds;
        break;
    }
  }
  // 返回格式化的日期字符串
  return formatTime;
}
