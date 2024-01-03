<script setup>
import {ref} from 'vue'
const count = ref(0)
const countPlus = (plus) => {
    count.value += plus
}
const showAble = ref(true)
</script>
<template>
    <h1>我是学习页</h1>
    <div>
        <h2>ref使用</h2>
        <div>count: {{ count }}</div>
        <button @click="countPlus(2)">增加count，每次增加2</button>
    </div>
    <div>
        <h2>条件渲染</h2>
        <button @click="showAble = !showAble">切换显示</button>
        <div v-if="showAble">able</div>
        <div v-else>disAble</div>
    </div>
</template>