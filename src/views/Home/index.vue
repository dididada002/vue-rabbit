<<<<<<< Updated upstream
<template>
    <div style="height: 1200px;">我是home页</div>
=======
<!-- <template>
    <div>我是home页</div>
</template> -->

<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
>>>>>>> Stashed changes
</template>