<script setup>
/**
 * Простой Toast. Родитель получает ref на компонент и вызывает .show(message).
 * Используется через provide/inject — см. App.vue.
 */
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')
let timer = null

const show = (text = 'Готово') => {
  message.value = text
  visible.value = true
  clearTimeout(timer)
  timer = setTimeout(() => { visible.value = false }, 2200)
}

defineExpose({ show })
</script>

<template>
  <div class="toast" :class="{ show: visible }">
    {{ message }}
  </div>
</template>
