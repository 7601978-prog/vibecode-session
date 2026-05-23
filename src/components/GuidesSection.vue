<template>
  <section id="guides">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Материалы</div>
        <h2>Гайды для работы с Claude</h2>
        <p>Два файла — два шага. Скачайте и следуйте вместе с Claude.</p>
      </div>

      <!-- Карточки гайдов — главное -->
      <div class="guides-grid">
        <div class="guide-card" v-for="guide in guides" :key="guide.file">
          <div class="guide-step-badge">Шаг {{ guide.step }}</div>
          <div class="guide-icon-big">{{ guide.icon }}</div>
          <h3>{{ guide.title }}</h3>
          <p>{{ guide.desc }}</p>
          <a class="guide-download-btn" :href="guide.file" :download="guide.filename">
            ⬇ Скачать · {{ guide.time }}
          </a>
        </div>
      </div>

      <!-- Как использовать — максимально просто -->
      <div class="guides-use-title">Как использовать гайд?</div>
      <div class="guides-how">
        <div class="guides-how-step" v-for="(step, i) in howSteps" :key="i">
          <div class="guides-how-emoji">{{ step.emoji }}</div>
          <div class="guides-how-text">{{ step.text }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const guides = [
  {
    step: 1,
    icon: '🛠️',
    title: 'Готовим компьютер',
    desc: 'Ставим Claude Desktop и заводим GitHub — один раз, больше не нужно.',
    time: '15–25 мин',
    file: '/guides/gaid-1-podgotovka.md',
    filename: 'Гайд-1-Подготовка.md'
  },
  {
    step: 2,
    icon: '🚀',
    title: 'Делаем и публикуем сайт',
    desc: 'Просим Claude создать сайт и выкладываем его в интернет на реальный адрес.',
    time: '30–40 мин',
    file: '/guides/gaid-2-realizaciya.md',
    filename: 'Гайд-2-Реализация.md'
  }
]

const howSteps = [
  { emoji: '⬇️', text: 'Скачайте гайд кнопкой выше' },
  { emoji: '🌐', text: 'Откройте claude.ai в браузере' },
  { emoji: '📎', text: 'Нажмите скрепку и прикрепите файл' },
  { emoji: '💬', text: 'Напишите: «Следуй этому гайду»' },
]
</script>
