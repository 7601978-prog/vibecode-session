<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { text: 'Я понятно описал задачу',                  done: false },
  { text: 'Я указал аудиторию',                       done: false },
  { text: 'Я написал цель страницы',                  done: false },
  { text: 'Я перечислил нужные блоки',                done: false },
  { text: 'Я указал стиль',                           done: false },
  { text: 'Я проверил текст',                         done: false },
  { text: 'Я проверил страницу на телефоне',          done: false },
  { text: 'Я понял, что можно улучшить во второй версии', done: false }
])

const doneCount = computed(() => items.value.filter(i => i.done).length)
const progress  = computed(() => (doneCount.value / items.value.length) * 100)
</script>

<template>
  <section id="checklist">
    <div class="container">
      <div class="section-head" style="text-align: center; margin-left: auto; margin-right: auto;">
        <div class="kicker">Перед запуском</div>
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
          <div class="checklist-count">
            {{ doneCount }} / {{ items.length }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
