<script setup>
import { inject } from 'vue'
const scrollToSection = inject('scrollToSection')
</script>

<template>
  <section class="final">
    <div class="container">
      <h2>Вы уже можете начать</h2>
      <p>
        Вайбкодинг — это не про умение писать код. Это про умение ясно думать,
        описывать задачу и управлять результатом. Первый вариант может быть неидеальным,
        но именно с него начинается навык создания цифровых решений.
      </p>
      <button class="btn btn-primary" @click="scrollToSection('practice')">
        Создать первый промпт →
      </button>
    </div>
  </section>
</template>
