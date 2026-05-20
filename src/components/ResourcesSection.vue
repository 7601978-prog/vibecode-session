<script setup>
import CalloutBox from './CalloutBox.vue'

/**
 * Только то, что реально полезно новичку и точно есть на момент написания.
 * Не превращаем в свалку из 88 ссылок — лучше короче и проверено.
 */
const groups = [
  {
    title: 'ИИ-помощники',
    icon: '🤖',
    items: [
      { name: 'ChatGPT',     url: 'https://chat.openai.com',  text: 'Универсальный ассистент: идеи, тексты, промпты, простой код.' },
      { name: 'Claude',      url: 'https://claude.ai',         text: 'Хорош для длинных текстов, инструкций и подробных ответов.' },
      { name: 'Gemini',      url: 'https://gemini.google.com', text: 'Альтернатива от Google — попробуйте, если другие не подошли.' }
    ]
  },
  {
    title: 'Где сразу собрать сайт',
    icon: '🌐',
    items: [
      { name: 'Replit',   url: 'https://replit.com', text: 'Создание простых сайтов прямо в браузере, без установки.' },
      { name: 'Lovable',  url: 'https://lovable.dev', text: 'Описали идею — получили красивый интерфейс.' },
      { name: 'Vercel',   url: 'https://vercel.com', text: 'Бесплатно выложить готовый сайт в интернет за пару кликов.' }
    ]
  },
  {
    title: 'Бесплатное для дизайна',
    icon: '🎨',
    items: [
      { name: 'Google Fonts', url: 'https://fonts.google.com',  text: 'Сотни бесплатных шрифтов для сайтов и презентаций.' },
      { name: 'Unsplash',     url: 'https://unsplash.com',      text: 'Качественные бесплатные фотографии без водяных знаков.' },
      { name: 'Lucide Icons', url: 'https://lucide.dev',        text: 'Аккуратные иконки в едином стиле, бесплатные.' },
      { name: 'Coolors',      url: 'https://coolors.co',        text: 'Генератор цветовых палитр — для тех, кто не дизайнер.' }
    ]
  },
  {
    title: 'Вдохновение',
    icon: '✨',
    items: [
      { name: 'Awwwards',  url: 'https://www.awwwards.com',  text: 'Лучшие сайты мира — для референсов и подсматривания идей.' },
      { name: 'Dribbble',  url: 'https://dribbble.com',      text: 'Тысячи примеров интерфейсов и иллюстраций.' },
      { name: 'Mobbin',    url: 'https://mobbin.com',        text: 'Скриншоты экранов из реальных приложений — как делают другие.' }
    ]
  }
]
</script>

<template>
  <section id="resources">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Куда идти дальше</div>
        <h2>Полезные ресурсы</h2>
        <p>
          Минимум, который реально нужен новичку. Не пытайтесь освоить всё сразу —
          выберите 2–3 сервиса и работайте с ними, пока не станет привычно.
        </p>
      </div>

      <div class="resources">
        <div v-for="group in groups" :key="group.title" class="resources-group">
          <h3 class="resources-group-title">
            <span class="resources-group-icon">{{ group.icon }}</span>
            {{ group.title }}
          </h3>
          <div class="resources-list">
            <a
              v-for="item in group.items"
              :key="item.name"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="resource-link"
            >
              <div class="resource-name">
                {{ item.name }}
                <span class="resource-ext" aria-hidden="true">↗</span>
              </div>
              <div class="resource-text">{{ item.text }}</div>
            </a>
          </div>
        </div>
      </div>

      <CalloutBox type="warn" title="Осторожно с корпоративными данными">
        Не загружайте в публичные ИИ-сервисы персональные данные клиентов,
        пароли и финансовую информацию. Для рабочих задач сначала уточните
        у IT-отдела, какие сервисы разрешены в вашей компании.
      </CalloutBox>
    </div>
  </section>
</template>
