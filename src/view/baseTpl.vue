<template>
  <div :class="namespace + '-container'">
    <slot></slot>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'namespace',
      ])
    }
  }
</script>

<style lang="scss">

</style>
