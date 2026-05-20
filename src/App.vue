<script setup>
/**
 * Корневой компонент.
 * Собирает все секции страницы и предоставляет глобальный toast
 * через provide/inject — любой дочерний компонент может вызвать
 * inject('showToast')('Текст уведомления').
 */
import { provide, ref } from 'vue'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import WhatIsSection from './components/WhatIsSection.vue'
import WhatToBuildSection from './components/WhatToBuildSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import PromptFormulaSection from './components/PromptFormulaSection.vue'
import StepsSection from './components/StepsSection.vue'
import MistakesSection from './components/MistakesSection.vue'
import PracticeSection from './components/PracticeSection.vue'
import ChecklistSection from './components/ChecklistSection.vue'
import FinalSection from './components/FinalSection.vue'
import AppFooter from './components/AppFooter.vue'
import ToastNotification from './components/ToastNotification.vue'

const toast = ref(null)
// Любой компонент может позвать: const showToast = inject('showToast')
provide('showToast', (message) => toast.value?.show(message))

// Плавный скролл к секции по id — пригодится в NavBar, Hero и Final
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
provide('scrollToSection', scrollToSection)
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <WhatIsSection />
    <WhatToBuildSection />
    <ToolsSection />
    <PromptFormulaSection />
    <StepsSection />
    <MistakesSection />
    <PracticeSection />
    <ChecklistSection />
    <FinalSection />
  </main>
  <AppFooter />
  <ToastNotification ref="toast" />
</template>
