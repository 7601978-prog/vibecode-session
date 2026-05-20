<script setup>
/**
 * Переиспользуемая плашка-callout. Три варианта:
 *   <CalloutBox type="tip">текст</CalloutBox>      → 💡 жёлтая
 *   <CalloutBox type="info">текст</CalloutBox>     → 📌 синяя
 *   <CalloutBox type="warn">текст</CalloutBox>     → ⚠️ красная
 * Заголовок опциональный через title.
 */
defineProps({
  type: { type: String, default: 'tip' },   // tip | info | warn
  title: { type: String, default: '' }
})

const icons = {
  tip: '💡',
  info: '📌',
  warn: '⚠️'
}
</script>

<template>
  <div class="callout" :class="'callout--' + type">
    <div class="callout-icon">{{ icons[type] || '💡' }}</div>
    <div class="callout-body">
      <div v-if="title" class="callout-title">{{ title }}</div>
      <div class="callout-content">
        <slot />
      </div>
    </div>
  </div>
</template>
