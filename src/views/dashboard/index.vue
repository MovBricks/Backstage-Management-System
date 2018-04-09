<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{loginUser.id}}</div>
    <div class="dashboard-text"><div v-for='(role, key) in loginUser' :key='role + key'>{{key}}:{{role}}</div></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'dashboard',
    computed: {
      ...mapGetters('common', [
        'loginUser'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
