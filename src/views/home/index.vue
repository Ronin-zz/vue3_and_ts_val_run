<script lang="ts" setup>
import VerticalMarquee from '../../components/vertical-marquee/index.vue';

const data: Array<TextInter> = [
  { text: '我是普通的子元素', color: 'red', active: true, begin: -100, end: 0, type: 'text' },
  { text: '<h1>我是标签传递的子元素</h1>', active: false, color: 'green', begin: -100, end: 0, type: 'html' },
  { text: '<h2>我是h2</h2>', active: true, begin: -100, end: 0, type: 'html' }
]

function mouseenter(ev: MouseEvent) {
}
function mouseleave(ev: MouseEvent) {
}
</script>

<template>
  <VerticalMarquee :text="data" :mouseenter="mouseenter" :mouseleave="mouseleave" :margin-top="100"
    :animate="`all ease-in 2s`" />
</template>