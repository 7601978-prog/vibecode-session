<script setup>
import { ref, inject } from 'vue'

const initialTemplate = `Я хочу создать:

Для кого:

Цель страницы:

Какие блоки нужны:

Какой стиль:

Что должно быть в результате:`

const template = ref(initialTemplate)
const showToast = inject('showToast')

const copyTemplate = async () => {
  const text = template.value
  // Современный API + запасной вариант для старых браузеров
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      showToast('Шаблон скопирован')
      return
    } catch (_) { /* падает — пробуем fallback */ }
  }
  // Fallback: временный textarea + execCommand
  const ta = document.createElement('textarea')
  ta.value = text
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  try {
    document.execCommand('copy')
    showToast('Шаблон скопирован')
  } catch (_) {
    alert('Не удалось скопировать. Скопируйте текст вручную.')
  } finally {
    document.body.removeChild(ta)
  }
}

const resetTemplate = () => { template.value = initialTemplate }
</script>

<template>
  <section id="practice">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Ваш ход</div>
        <h2>Практика</h2>
        <p>
          Создайте свою первую страницу на одну из тем: инструкция для нового сотрудника,
          страница проекта, форма сбора идей, инструкция по процессу, страница обучения для команды.
        </p>
      </div>

      <div class="practice-grid">
        <div>
          <h3 style="margin-bottom: 10px;">Шаблон промпта</h3>
          <p>
            Скопируйте шаблон, заполните его своими словами и отправьте в ChatGPT или Claude.
            Это самый простой способ получить первый рабочий вариант.
          </p>
          <p style="font-size: 14px; color: var(--muted);">
            Совет: чем подробнее опишете аудиторию и блоки — тем точнее будет результат.
          </p>
        </div>

        <div class="template-box">
          <textarea v-model="template" spellcheck="false"></textarea>
          <div class="template-actions">
            <button class="btn btn-primary" @click="copyTemplate">
              📋 Скопировать шаблон промпта
            </button>
            <button class="btn btn-ghost" @click="resetTemplate">Сбросить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
