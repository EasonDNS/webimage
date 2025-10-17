<script setup lang="ts">
import { computed, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'

const props = withDefaults(
  defineProps<{
    name: string
    url: string
    icon?: string
  }>(),
  {
    name: 'Nas',
    url: 'http://nas.easondns.top',
  },
)
// itemRadius 用来控制这个item Radius
const itemRadius = ref('5px')
// 背景图片
const itemData = computed(() => {
  return {
    name: props.name,
    url: props.url,
    icon: props.icon,
  }
})

const isEdit = ref(false)
const imgRgba = ref('rgba(0,0,0,0.8)')
const handleEdit = () => {
  console.log('edit')
}
</script>

<template>
  <div class="label-item" :style="{ borderRadius: `${itemRadius}` }">
    <div class="top">
      <div
        class="image"
        ref="imageRef"
        :style="{
          backgroundImage: `url(${itemData.icon ?? '/default.png'})`,
          borderRadius: `${itemRadius}`,
        }"
      >
        <el-icon
          :style="{
            background: `${imgRgba}`,
          }"
          v-if="isEdit"
          class="el-icon"
          :size="80"
          @click="handleEdit"
          ><Edit
        /></el-icon>
      </div>
    </div>

    <div class="bottom">
      <span>
        {{ itemData.name }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.label-item {
  font-family:
    Inter, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
  font-size: 20px;
  width: 200px;
  height: 200px;
  background-color: #8b1111;
  cursor: pointer;

  border-radius: 5px;
  overflow: hidden;

  .top {
    width: 100%;
    height: 150px;
    //background-color: rosybrown;
    margin: 0 auto;
    .image {
      width: 100%;
      height: 100%;

      background-position: center;
      background-size: cover;

      .el-icon {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 3px orange dashed;
        padding: 30px;
        //background-color: orange;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .el-icon:after {
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 50px;
    background-color: olive;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
  }
}
</style>
