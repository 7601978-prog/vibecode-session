<template>
  <section id="guides">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Материалы</div>
        <h2>Гайды для работы с Claude</h2>
        <p>
          Скачайте гайд, прикрепите его к чату в Claude и попросите помочь —
          Claude прочитает инструкцию и будет вести вас по шагам.
        </p>
      </div>

      <!-- Как использовать -->
      <div class="guides-how">
        <div class="guides-how-step" v-for="(step, i) in howSteps" :key="i">
          <div class="guides-how-num">{{ i + 1 }}</div>
          <div class="guides-how-text">{{ step }}</div>
        </div>
      </div>

      <!-- Карточки гайдов -->
      <div class="guides-grid">
        <div class="guide-card" v-for="guide in guides" :key="guide.file">
          <div class="guide-card-top">
            <div class="guide-icon">{{ guide.icon }}</div>
            <div class="guide-meta">
              <div class="guide-tag">{{ guide.tag }}</div>
              <div class="guide-time">⏱ {{ guide.time }}</div>
            </div>
          </div>
          <h3>{{ guide.title }}</h3>
          <p>{{ guide.desc }}</p>
          <ul class="guide-list">
            <li v-for="item in guide.items" :key="item">{{ item }}</li>
          </ul>
          <a
            class="btn btn-primary guide-download-btn"
            :href="guide.file"
            :download="guide.filename"
          >
            ⬇ Скачать гайд
          </a>
        </div>
      </div>

      <!-- Подсказка как скормить Claude -->
      <div class="guides-tip">
        <div class="guides-tip-icon">💡</div>
        <div>
          <div class="guides-tip-title">Как передать гайд в Claude</div>
          <p>
            Откройте Claude → нажмите на скрепку <b>📎</b> рядом с полем ввода →
            выберите скачанный файл → напишите: <b>«Следуй этому гайду и помоги мне по шагам»</b>.
            Claude прочитает файл и станет вашим персональным инструктором.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const howSteps = [
  'Скачайте нужный гайд кнопкой ниже — это обычный текстовый файл',
  'Откройте claude.ai в браузере или Claude Desktop',
  'Прикрепите файл через 📎 и напишите свою задачу',
  'Claude прочитает инструкцию и поведёт вас по шагам'
]

const guides = [
  {
    icon: '🛠',
    tag: 'Гайд 1 · Подготовка',
    time: '15–25 минут',
    title: 'Готовим компьютер к работе',
    desc: 'Установите Claude Desktop и заведите аккаунт GitHub — всё, что нужно перед созданием первого сайта.',
    items: [
      'Создаём аккаунт Anthropic и оформляем подписку Pro',
      'Скачиваем и устанавливаем Claude Desktop',
      'Заводим аккаунт на GitHub',
      'Открываем вкладку Code и проверяем, что всё работает'
    ],
    file: '/guides/gaid-1-podgotovka.md',
    filename: 'Гайд-1-Подготовка.md'
  },
  {
    icon: '🚀',
    tag: 'Гайд 2 · Реализация',
    time: '30–40 минут',
    title: 'Делаем сайт и публикуем в интернете',
    desc: 'Создаём первый сайт в Claude Desktop и выкладываем его на GitHub Pages — с реальным адресом в интернете.',
    items: [
      'Просим Claude создать сайт-визитку с нуля',
      'Смотрим результат в Preview-панели и правим',
      'Загружаем файлы на GitHub одной командой',
      'Включаем GitHub Pages — сайт доступен всему миру'
    ],
    file: '/guides/gaid-2-realizaciya.md',
    filename: 'Гайд-2-Реализация.md'
  }
]
</script>
