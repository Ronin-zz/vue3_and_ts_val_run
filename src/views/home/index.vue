<script lang="ts" setup>
import VerticalMarquee from '../../components/vertical-marquee/index.vue';

const data: Array<TextInter> = [
  { text: '发撒打发手动阀手动阀', color: 'red', active: true, begin: -100, end: 0 },
  { text: 'aaaa', active: false, begin: -100, end: 0 },
  { text: '第三', active: true, begin: -100, end: 0 }
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