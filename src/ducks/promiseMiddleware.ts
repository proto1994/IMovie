/**
 * 实现action 增加 promise， 每个action中会增加resolve，和 reject 的回调
 * take的时候可以取出来，然后使用，对应的reducer里也可以使用，dispatch完之后获取数据
 *
 * @format
 */

function createPromiseMiddleware() {
  return () => next => action => {
    return new Promise((resolve, reject) => {
      next({
        ...action,
        resolve,
        reject,
      })
    })
  }
}

export default createPromiseMiddleware()
