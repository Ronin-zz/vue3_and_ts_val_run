<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import VerticalMarquee from '../../components/vertical-marquee/index.vue';

const sss = ref<HTMLDivElement>();
onMounted(() => {
  sss.value?.click()
});

function handleClick() {
  console.log('per');
}

function mouseenter(ev: MouseEvent) {
}
function mouseleave(ev: MouseEvent) {
}
</script>

<template>
  <div ref="sss" @click="handleClick"></div>
  <VerticalMarquee
    :text="[{ text: 'sss', color: 'red', active: true, begin: -100, end: 0 }, { text: 'aaaa', active: false, begin: -100, end: 0 }]"
    :mouseenter="mouseenter" :mouseleave="mouseleave" :margin-top="100" :animate="`all ease-in 2s`" />
</template>