<template>
  <div>
    <h1>Account</h1>
  </div>
</template>

<script>
import { getAccount } from '@/api/account'

export default {
  name: 'Account',
  mounted () {
    this.getAccount()
  },
  methods: {
    getAccount () {
      getAccount(1).then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
