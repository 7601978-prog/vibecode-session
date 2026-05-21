<script setup>
const tools = [
  {
    name: 'ChatGPT',
    tag: 'идеи и тексты',
    logo: 'https://www.google.com/s2/favicons?domain=chat.openai.com&sz=64',
    text: 'Подходит для генерации идей, структуры, текстов и составления промптов.'
  },
  {
    name: 'Claude',
    tag: 'анализ и инструкции',
    logo: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=64',
    text: 'Хорошо работает с большими текстами, аналитикой и подробными инструкциями.'
  },
  {
    name: 'Replit',
    tag: 'простые сайты',
    logo: 'https://www.google.com/s2/favicons?domain=repl.it&sz=64',
    text: 'Создание простых сайтов и веб-приложений прямо в браузере, без установки.'
  },
  {
    name: 'Lovable',
    tag: 'красивый UI',
    logo: 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=64',
    text: 'Быстрое создание аккуратных интерфейсов — описали идею и получили готовый макет.'
  },
  {
    name: 'Cursor',
    tag: 'когда проект растёт',
    logo: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=64',
    text: 'Удобный AI-редактор для работы с кодом, когда проект становится сложнее.'
  },
  {
    name: 'NotebookLM',
    tag: 'работа с документами',
    logo: 'https://www.google.com/s2/favicons?domain=notebooklm.google.com&sz=64',
    text: 'Загружаете документы — ИИ отвечает на вопросы, делает выжимки и объясняет содержимое.'
  }
]
</script>

<template>
  <section id="tools">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Инструменты</div>
        <h2>Какие инструменты использовать?</h2>
        <p>Не нужно осваивать всё сразу. Начните с одного-двух — этого хватит для первых проектов.</p>
      </div>

      <div class="grid">
        <div v-for="tool in tools" :key="tool.name" class="card">
          <img class="tool-logo" :src="tool.logo" :alt="tool.name + ' logo'" />
          <div class="tool-name">
            <h3>{{ tool.name }}</h3>
            <span class="tool-tag">{{ tool.tag }}</span>
          </div>
          <p>{{ tool.text }}</p>
        </div>
      </div>

      <div class="tools-note">
        💡 На первом этапе достаточно <b>одного ИИ-инструмента</b> для создания сайта.
        Мы сегодня начнём с Claude.
      </div>
    </div>
  </section>
</template>
