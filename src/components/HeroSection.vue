<script setup>
import { inject } from 'vue'
const scrollToSection = inject('scrollToSection')
</script>

<template>
  <header class="hero">
    <div class="container hero-center">
      <div class="hero-eyebrow">✨ Для сотрудников без технического опыта</div>
      <h1>Вайбкодинг для сотрудников без опыта</h1>
      <p class="hero-lead">
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
  </header>
</template>
