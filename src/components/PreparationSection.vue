<script setup>
import { inject } from 'vue'
import { useChecklist } from '../composables/useChecklist.js'
import CalloutBox from './CalloutBox.vue'

const scrollToSection = inject('scrollToSection')
const { items, doneCount, total, progress } = useChecklist('vc:preparation', [
  { text: 'Оформил самую недорогую подписку на Claude (Claude Pro — $20/месяц)' },
  { text: 'Открыл современный браузер: Chrome, Edge, Safari или Firefox' },
  { text: 'Освободил 3–4 часа спокойного времени — без созвонов' },
  { text: 'Придумал идею: что хочу создать (тема, аудитория, цель)' },
  { text: 'Подготовил рабочее место: ноутбук на зарядке, отключил уведомления' }
])
</script>

<template>
  <section id="preparation">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Подготовка</div>
        <h2>Что нужно подготовить</h2>
        <p>
          Минимальный набор для первого опыта. Для старта достаточно
          самой недорогой подписки на Claude — она открывает полный доступ к инструменту.
        </p>
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
          <button class="btn btn-primary btn-sm" @click="scrollToSection('what')">
            Готов к курсу →
          </button>
        </div>
      </div>

      <CalloutBox type="tip" title="Самая недорогая подписка — Claude Pro">
        Claude Pro стоит $20 в месяц и даёт полный доступ к модели без ограничений по
        количеству запросов. Этого хватит, чтобы спокойно работать весь день и собрать
        первые проекты без пауз.
      </CalloutBox>
    </div>
  </section>
</template>
