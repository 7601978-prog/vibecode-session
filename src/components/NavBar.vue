<script setup>
import { ref, inject } from 'vue'

const isOpen = ref(false)
const scrollToSection = inject('scrollToSection')

const links = [
  { id: 'preparation', label: 'Подготовка' },
  { id: 'what',        label: 'Что это' },
  { id: 'tools',       label: 'Инструменты' },
  { id: 'git',         label: 'GitHub' },
  { id: 'steps',       label: 'Инструкция' },
  { id: 'practice',    label: 'Практика' },
  { id: 'checklist',   label: 'Чек-лист' },
  { id: 'faq',         label: 'FAQ' },
  { id: 'resources',   label: 'Ресурсы' }
]

const handleClick = (id) => {
  scrollToSection(id)
  isOpen.value = false
}
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <div class="logo">
        <div class="logo-dot"></div>
        Вайбкодинг
      </div>
      <button
        class="nav-burger"
        aria-label="Меню"
        @click="isOpen = !isOpen"
      >
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" :class="{ open: isOpen }">
        <a
          v-for="link in links"
          :key="link.id"
          @click="handleClick(link.id)"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
