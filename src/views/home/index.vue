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

function mouseenter(ev: MouseEvent, values: BackValues) {
  console.log(values);
  clearInterval(values.num)
}
function mouseleave(ev: MouseEvent) {
  console.log(ev);
}
</script>

<template>
  <div ref="sss" @click="handleClick"></div>
  <VerticalMarquee :text="[{ text: 'sss', color: 'red', active: true }, { text: 'aaaa', active: false }]"
    :mouseenter="mouseenter" :mouseleave="mouseleave" />
</template>