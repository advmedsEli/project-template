const test = {
  bind (el, binding) {
    console.log('test:bind')
  },
  update (el, binding) {
    console.log('test:update')
  },
  unbind (el, binding) {
    console.log('test:unbind')
  }
}

test.install = Vue => Vue.directive('test', test)

export default test
