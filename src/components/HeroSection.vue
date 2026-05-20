<script setup>
import { inject } from 'vue'
const scrollToSection = inject('scrollToSection')
</script>

<template>
  <header class="hero">
    <div class="container hero-grid">
      <div>
        <div class="hero-eyebrow">✨ Для сотрудников без технического опыта</div>
        <h1>Вайбкодинг для сотрудников без опыта</h1>
        <p style="font-size: 18px; max-width: 540px;">
          Научитесь создавать простые цифровые решения с помощью ИИ,
          даже если вы никогда не писали код.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToSection('steps')">
            Начать обучение →
          </button>
          <button class="btn btn-ghost" @click="scrollToSection('what')">
            Что такое вайбкодинг?
          </button>
        </div>
        <div class="hero-quote">
          💡 Главный навык — не программирование, а умение понятно объяснить задачу.
        </div>
      </div>

      <!-- Декоративная карточка чата с ИИ -->
      <div class="hero-card" aria-hidden="true">
        <div class="chrome"><span></span><span></span><span></span></div>
        <div class="msg user">Создай страницу для обучения сотрудников</div>
        <div class="msg ai">Готово! Добавил 7 шагов, чек-лист и блок с практикой.</div>
        <div class="msg ai">
          <span class="typing"><i></i><i></i><i></i></span>
        </div>
      </div>
    </div>
  </header>
</template>
