<script lang="ts" setup>
import { defineProps, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import router from '../../router';


const text = withDefaults(defineProps<{
  text: Array<TextInter>;
  mouseenter: (ev: MouseEvent) => void;
  mouseleave: (ev: MouseEvent) => void;
  marginTop?: number;
  delay?: number,
  animate: string
}>(), {
  delay: 500,
  marginTop: 30,
})

let timerInter: number = 0,
  timerOut1: number = 0,
  timerOut2: number = 0;


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
    outerHeight.value = children.value![defaultIndex].offsetHeight;
    clonePropsData[defaultIndex].active = true;
  }, 3000)
}

function init(): void {
  clonePropsData.forEach(item => {
    item.active = false;
  })
  timerOut1 = setTimeout(() => {
    clonePropsData[defaultIndex].active = true
  }, 1000);
}

onBeforeUnmount(() => {
  clearInterval(timerInter);
  clearTimeout(timerOut1);
  clearTimeout(timerOut2);
})

onMounted(() => {
  timerOut2 = setTimeout(() => {
    outerHeight.value = children.value![0].offsetHeight;
    timerInter = changeActiveValue()
  }, text.delay)
  init();
})

function partMouseleave(ev: MouseEvent) {
  clearInterval(timerInter)
  timerInter = changeActiveValue()
  text.mouseleave(ev)
}

function handleJump() {
  router.push('/home');
}

function partMouseEnter(ev: MouseEvent) {
  clearInterval(timerInter);
  text.mouseleave(ev)
}
</script>

<template>
  <div class="outer" :style="{ height: outerHeight + marginTop + 'px' }">
    <div ref="children" class="children" @mouseenter="partMouseEnter" @mouseleave="partMouseleave" :style="{
      color: item.color,
      opacity: item.active ? 1 : 0,
      marginTop: marginTop + 'px',
      transform: item.active ? `translateY(${item.end}px)` : `translateY(${item.begin}px)`,
      transition: animate
    }" v-for="(item, index) in clonePropsData" :key="index">
      <div v-if="item.type === 'html'" v-html="item.text"></div>
      <div v-else>{{ item.text }}</div>
    </div>
  </div>

  <button @click="handleJump">跳转</button>
</template>

<style lang="less">
.outer {
  overflow: hidden;
  position: relative;

  .children {
    position: absolute;
    // transition: all ease-in;
    // transform: translateY(-200px);

    // &.active {
    //   transform: translateY(100px);
    // }
  }
}
</style>