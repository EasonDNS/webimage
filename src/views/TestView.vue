<template>
  <div class="label-navigation">
    <div class="content">
      <template v-for="item of tabs" :key="item.name">
        <label-item class="item" :icon="item.icon" :name="item.name" :url="item.url"></label-item>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LabelItem from '@/components/LabelItemComponent.vue'
import { labels } from '../assets/doc/label.ts'
const tabs = ref(labels)
</script>
<style lang="less" scoped>
.label-navigation {
  //background-color: #fff;
  width: 100%;
  .content {
    width: 100%;
    //background-color: orange;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
      //width: 200px;
      //height: 200px;
      //background-color: orangered;
      margin: 10px;
    }
  }
}
</style>
