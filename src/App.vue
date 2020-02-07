<template>
  <div id="app">
    <im-header title="职场准入条件调查" sub-title="符合复工要求员工信息排查，请如实填写" />
    <div class="im-body">
        <div class="im-list" v-for="(item, index) in list" :key="index">
          <div class="im-list-txt">
            <span v-if="item.required" :class="['im-tag', item.required && 'is-required']">*</span>
            <span>{{(index + 1) + '.' + item.title }}</span>
          </div>
          <div class="im-list-content" v-for="(list, idx) in item" :key="idx">
            <div class="im-list-item" v-if="item.type === 'radio'">
              <poppy-radio-group v-model="model[item.formId]" :options="list" />
              <poppy-validator :ref="item.formId" v-model="isValid[index]" :model="model[item.formId]" :rules="rules4" :immediate="immediate"></poppy-validator>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ImHeader from './components/im-header';
import {QA_Data} from './utils/qa-data';

function transfromModel(list) {
  const item = {};
  for(var i = 0; i < list.length; i++) {
    let cell = list[i];
    item[cell['formId']] = ''
  }
  return item;
}

export default {
  name: 'app',
  data() {
    return {
      list: QA_Data,
      model: transfromModel(QA_Data),
      isValid: new Array(QA_Data.length).fill(undefined)
    }
  },
  components: {
    ImHeader
  },
  mounted() {
    console.log(JSON.stringify(this.model, null, '\t'))
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  padding: 10px

.im
  &-body
    padding: 15px 0
  &-list
    padding: 15px
    &-txt
      position: relative
  &-tag
    position: absolute
    left: -10px
    color: red
</style>
