<script setup>
import { useChecklist } from '../composables/useChecklist.js'

const { items, doneCount, total, progress, reset } = useChecklist('vc:checklist', [
  { text: 'Я понятно описал задачу' },
  { text: 'Я указал аудиторию' },
  { text: 'Я написал цель страницы' },
  { text: 'Я перечислил нужные блоки' },
  { text: 'Я указал стиль' },
  { text: 'Я проверил текст' },
  { text: 'Я проверил страницу на телефоне' },
  { text: 'Я понял, что можно улучшить во второй версии' }
])
</script>

<template>
  <section id="checklist">
    <div class="container">
      <div class="section-head" style="text-align: center; margin-left: auto; margin-right: auto;">
        <div class="kicker">Чек-лист</div>
        <h2>Чек-лист готовности</h2>
        <p>Пробегитесь по списку перед тем, как показать страницу коллегам.</p>
      </div>

      <div class="checklist">
        <label v-for="(item, i) in items" :key="i">
          <input type="checkbox" v-model="item.done" />
          <span>{{ item.text }}</span>
        </label>

        <div class="checklist-progress">
          <div class="checklist-bar">
            <div :style="{ width: progress + '%' }"></div>
          </div>
          <div class="checklist-count">{{ doneCount }} / {{ total }}</div>
        </div>

        <div class="checklist-actions">
          <button class="btn btn-ghost btn-sm" @click="reset">
            Сбросить прогресс
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
