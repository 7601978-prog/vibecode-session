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
import PreparationSection from './components/PreparationSection.vue'
import WhatIsSection from './components/WhatIsSection.vue'
import WhatToBuildSection from './components/WhatToBuildSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import GitSection from './components/GitSection.vue'
import PromptFormulaSection from './components/PromptFormulaSection.vue'
import StepsSection from './components/StepsSection.vue'
import MistakesSection from './components/MistakesSection.vue'
import PracticeSection from './components/PracticeSection.vue'
import ChecklistSection from './components/ChecklistSection.vue'
import FaqSection from './components/FaqSection.vue'
import ResourcesSection from './components/ResourcesSection.vue'
import FinalSection from './components/FinalSection.vue'
import AppFooter from './components/AppFooter.vue'
import ToastNotification from './components/ToastNotification.vue'

const toast = ref(null)
provide('showToast', (message) => toast.value?.show(message))

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
    <PreparationSection />
    <WhatIsSection />
    <WhatToBuildSection />
    <ToolsSection />
    <GitSection />
    <PromptFormulaSection />
    <StepsSection />
    <MistakesSection />
    <PracticeSection />
    <ChecklistSection />
    <FaqSection />
    <ResourcesSection />
    <FinalSection />
  </main>
  <AppFooter />
  <ToastNotification ref="toast" />
</template>
