<script setup>
const tools = [
  { name: 'ChatGPT', tag: 'идеи и тексты',         text: 'Подходит для генерации идей, структуры, текстов и составления промптов.' },
  { name: 'Claude',  tag: 'анализ и инструкции',   text: 'Хорошо работает с большими текстами, аналитикой и подробными инструкциями.' },
  { name: 'Replit',  tag: 'простые сайты',         text: 'Создание простых сайтов и веб-приложений прямо в браузере, без установки.' },
  { name: 'Lovable', tag: 'красивый UI',           text: 'Быстрое создание аккуратных интерфейсов — описали идею и получили готовый макет.' },
  { name: 'Cursor',  tag: 'когда проект растёт',   text: 'Удобный AI-редактор для работы с кодом, когда проект становится сложнее.' }
]
</script>

<template>
  <section id="tools">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Стек на старте</div>
        <h2>Какие инструменты использовать?</h2>
        <p>Не нужно осваивать всё сразу. Начните с одного-двух — этого хватит для первых проектов.</p>
      </div>

      <div class="grid">
        <div v-for="tool in tools" :key="tool.name" class="card">
          <div class="tool-name">
            <h3>{{ tool.name }}</h3>
            <span class="tool-tag">{{ tool.tag }}</span>
          </div>
          <p>{{ tool.text }}</p>
        </div>
      </div>

      <div class="tools-note">
        💡 <b>На первом этапе достаточно ChatGPT или Claude</b> и одного инструмента для создания
        сайта, например Replit или Lovable.
      </div>
    </div>
  </section>
</template>
