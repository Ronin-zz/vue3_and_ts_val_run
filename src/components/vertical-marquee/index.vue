<script lang="ts" setup>
import { defineProps, onMounted, reactive, ref } from 'vue';

interface TextInter {
  text: string;
  color?: string,
  active: boolean
}


const text = defineProps<{
  text: Array<TextInter>;
  mouseenter: (ev: MouseEvent, values: BackValues) => void;
  mouseleave: (ev: MouseEvent, values: BackValues) => void;
}>()

let outerHeight = ref(0);

const children = ref<Array<HTMLDivElement>>()!;


let clonePropsData = reactive(text.text);

let defaultIndex = text.text.findIndex(index => index.active);

function changeActiveValue(): number {

  return setInterval(() => {
    clonePropsData = clonePropsData.map((item) => {
      item.active = false
      return item;
    })

    defaultIndex++;

    if (defaultIndex >= clonePropsData.length) {
      defaultIndex = 0;
    }

    clonePropsData[defaultIndex].active = true;

  }, 2000)
}



clonePropsData.forEach(item => {
  item.active = false;
})
let timer = setTimeout(() => {
  clonePropsData[defaultIndex].active = true
}, 1000);


let timerInter: number;

onMounted(() => {
  setTimeout(() => {
    outerHeight.value = children.value![0].offsetHeight;
    timerInter = changeActiveValue()
  }, 1000)
})
</script>

<template>
  <div class="outer" :style="{ height: outerHeight + 30 + 'px' }">
    <div ref="children" class="children" :class="{ active: item.active }"
      @mouseenter="mouseenter($event, { num: timer })" @mouseleave="mouseleave($event, { num: timerInter })"
      :style="{ color: item.color, opacity: item.active ? 1 : 0 }" v-for="(item, index) in clonePropsData" :key="index">
      {{ item.text }}
    </div>
  </div>
</template>

<style lang="less">
.outer {
  overflow: hidden;
  position: relative;
  margin-top: 30px;

  .children {

    position: absolute;
    transition: all 2s ease-in;
    transform: translateY(-200px);

    &.active {
      transform: translateY(20px);
    }
  }
}
</style>