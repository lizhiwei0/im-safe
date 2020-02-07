<!--  -->
<template>
  <div class="im-header">
      <h2 class="im-title">{{title}}</h2>
      <div class="im-subtitle">{{subTitle}}</div>
    </div>
</template>
<script>
export default {
  props: {
      title: {
          type: String,
          default: '问卷调查'
      },
      subTitle: {
          type: String,
          default: ''
      }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.im
  &-header
    padding: 20px
  &-title
    font-size: 24px
    line-height: 1
    text-align: center
    padding: 20px
  &-subtitle
    font-size: 14px
</style>
