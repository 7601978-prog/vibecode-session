<script setup>
import { inject } from 'vue'

const showToast = inject('showToast')

const copyExample = async () => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(example)
      showToast('Промпт скопирован')
      return
    } catch (_) { /* fallback */ }
  }
  const ta = document.createElement('textarea')
  ta.value = example
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  try {
    document.execCommand('copy')
    showToast('Промпт скопирован')
  } catch (_) {
    alert('Не удалось скопировать. Скопируйте текст вручную.')
  } finally {
    document.body.removeChild(ta)
  }
}

const formula = [
  { title: 'Что нужно создать.',           desc: 'Сайт, форма, инструкция, бот.' },
  { title: 'Для кого.',                    desc: 'Кто будет это использовать.' },
  { title: 'Какая цель.',                  desc: 'Какую задачу решает результат.' },
  { title: 'Какие блоки должны быть.',     desc: 'Перечень разделов или функций.' },
  { title: 'Какой стиль нужен.',           desc: 'Деловой, дружелюбный, минималистичный.' },
  { title: 'Что должно получиться в результате.', desc: 'Формат и итог.' }
]

const example = `Создай одностраничный сайт для обучения новых сотрудников отдела продаж.

Аудитория: менеджеры, которые впервые работают с CRM.
Цель: за 15 минут познакомить их с базовыми правилами работы.

Блоки:
— Приветствие и цели обучения
— 5 шагов работы с клиентом
— Чек-лист ежедневных задач
— Контакты наставника

Стиль: дружелюбный, спокойный, корпоративный.
Результат: один HTML-файл, адаптивный для телефона.`
</script>

<template>
  <section>
    <div class="container">
      <div class="section-head">
        <div class="kicker">Главный навык</div>
        <h2>Правильно ставить задачу</h2>
        <p>Качество результата на 90% зависит от того, насколько чётко вы сформулировали запрос.</p>
      </div>

      <div class="formula">
        <ol class="formula-list">
          <li v-for="(item, i) in formula" :key="i">
            <div class="num">{{ i + 1 }}</div>
            <div><b>{{ item.title }}</b> {{ item.desc }}</div>
          </li>
        </ol>

        <div class="prompt-example">
          <div class="prompt-example-header">
            <span class="prompt-example-label">Пример хорошего промпта</span>
            <button class="prompt-copy-btn" @click="copyExample">📋 Скопировать</button>
          </div>
          <div class="prompt-example-body">{{ example }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
