export function throttle(func, wait) {
  let waiting = false;
  let lastArgs = null;
  let lastThis = null;

  function startCooling() {
    setTimeout(() => {
      if (lastArgs) {
        func.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
        startCooling();
      } else {
        waiting = false;
      }
    }, wait);
  }

  return function (...args) {
    if (!waiting) {
      func.apply(this, args);
      waiting = true;
      startCooling();
    } else {
      lastArgs = args;
      lastThis = this;
    }
  };
}
