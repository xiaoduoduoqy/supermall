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
