import Vue from 'vue'

const customFunctions = {}

customFunctions.install = function (Vue) {
  Vue.prototype.$confirmModal = function () {
    console.log('$confirmModal')
  }
}

Vue.use(customFunctions)

export default customFunctions
