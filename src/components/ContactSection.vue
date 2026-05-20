<script setup>
/**
 * Блок «Застряли — напишите куратору». Контакты подставлены как placeholder.
 *
 * !!! TODO перед публикацией: заменить ссылки и подпись на реальные контакты
 *     ответственного сотрудника / куратора обучения.
 */
const contacts = {
  whatsapp: 'https://wa.me/77000000000?text=Здравствуйте!%20Вопрос%20по%20вайбкодингу',
  telegram: 'https://t.me/your_username',
  email:    'mailto:hello@example.com',
  curator:  'Имя куратора'
}
</script>

<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-box">
        <h2>Застряли? Напишите — поможем</h2>
        <p>
          Если что-то не получается, не сидите часами в одиночку.
          Куратор {{ contacts.curator }} обычно отвечает в течение рабочего дня.
        </p>

        <div class="contact-buttons">
          <a class="btn btn-primary" :href="contacts.whatsapp" target="_blank" rel="noopener">
            💬 WhatsApp
          </a>
          <a class="btn btn-ghost" :href="contacts.telegram" target="_blank" rel="noopener">
            ✈ Telegram
          </a>
          <a class="btn btn-ghost" :href="contacts.email">
            ✉ Email
          </a>
        </div>

        <p class="contact-note">
          💡 Совет: в сообщении сразу опишите, на каком шаге застряли и приложите
          скриншот. Так ответ придёт быстрее.
        </p>
      </div>
    </div>
  </section>
</template>
