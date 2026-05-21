<script setup>
import { inject } from 'vue'
import { useChecklist } from '../composables/useChecklist.js'
import CalloutBox from './CalloutBox.vue'

const scrollToSection = inject('scrollToSection')
const { items, doneCount, total, progress } = useChecklist('vc:preparation', [
  { text: 'Завёл аккаунт в ChatGPT или Claude (на любом из двух — этого хватит)' },
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
          Минимальный набор для первого опыта. Платить ничего не нужно —
          у ChatGPT и Claude есть бесплатные планы, которых хватит для старта.
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

      <CalloutBox type="tip" title="Не нужно платить с первого раза">
        Бесплатных лимитов ChatGPT и Claude хватает на десятки запросов в день —
        достаточно, чтобы собрать первую страницу или инструкцию. Платный план
        пригодится позже, когда вы захотите делать больше и быстрее.
      </CalloutBox>
    </div>
  </section>
</template>
