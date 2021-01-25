<template>
  <div>
    <h1>Dashboard</h1>
    <div>
      count: {{ count }}
    </div>
    <div>
      doubleCount: {{ doubleCount }}
    </div>

    <DashboardBtnGroup />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DashboardBtnGroup from '@/components/DashboardBtnGroup'

export default {
  name: 'Dashboard',
  components: {
    DashboardBtnGroup
  },
  computed: {
    ...mapState({
      count: state => state.demo.count
    }),
    ...mapGetters({
      doubleCount: 'demo/doubleCount'
    })
  }
}
</script>
