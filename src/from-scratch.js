const resolvedWrapper = (val) => {
  const promise = new Promise((resolve, reject) => {
      resolve(val)
  })
  return promise
};
const rejectedWrapper = (str) => {
  const promise = new Promise((resolve, reject) => {
    reject(new Error(`${str}`))
  })
  return promise
};
const handleResolvedPromise = (promise) => {
  // ???????????????????????????????????????????????????
  return promise.then(val => {console.log(val)
    return val
  })
};
const handleResolvedOrRejectedPromise = (promise) => {
  // ????????????????
  return promise.then(val => {console.log(val)
    return val
  })
  .catch(val => {console.error(`Your error message was: ${val.message}`)
    return null
  })
};
const pauseForMs = (num) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, num);
  })
  return promise
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
