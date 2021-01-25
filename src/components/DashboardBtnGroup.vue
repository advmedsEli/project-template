<template>
  <div style="margin-top: 48px;">
    <button @click="addCount">
      count +
    </button>
    <button @click="lessCount">
      count -
    </button>
  </div>
</template>

<script>
export default {
  name: 'DashboardBtnGroup',
  methods: {
    addCount () {
      this.$store.dispatch('demo/increment')
    },
    lessCount () {
      this.$store.dispatch('demo/decrease')
    }
  }
}
</script>
