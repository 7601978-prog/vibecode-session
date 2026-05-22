<script setup>
const steps = [
  {
    title: 'Перейдите на github.com',
    desc: 'Откройте сайт и нажмите «Sign up» в правом верхнем углу.',
    tip: 'GitHub — это облачное хранилище для кода. Здесь вы сохраняете проект, делитесь им и возвращаетесь к предыдущим версиям.'
  },
  {
    title: 'Заполните данные',
    desc: 'Введите email, придумайте имя пользователя (username) и пароль. Пройдите быструю верификацию.',
    tip: 'Username будет виден в ссылках на ваши проекты — выбирайте что-то простое: имя или имя-фамилия латиницей.'
  },
  {
    title: 'Создайте первый репозиторий',
    desc: 'На главной странице нажмите зелёную кнопку «New» или «Create repository». Дайте проекту название, выберите «Public» и поставьте галочку «Add a README file».',
    tip: 'Репозиторий — это папка вашего проекта на GitHub. Один проект = один репозиторий.'
  },
  {
    title: 'Загрузите файлы',
    desc: 'Внутри репозитория нажмите «Add file» → «Upload files». Перетащите файлы проекта (HTML, CSS и т.д.) и нажмите «Commit changes».',
    tip: 'Commit — это сохранение версии. Всегда пишите короткий комментарий: что именно изменили.'
  },
  {
    title: 'Поделитесь ссылкой',
    desc: 'Ваш проект теперь доступен по адресу: github.com/ваш-username/название-репозитория. Скопируйте ссылку и отправьте коллегам.',
    tip: 'Чтобы сделать сайт живым (открывался в браузере), зайдите в Settings → Pages и включите GitHub Pages.'
  }
]
</script>

<template>
  <section id="git">
    <div class="container">
      <div class="section-head">
        <div class="kicker">GitHub</div>
        <h2>Как создать аккаунт на GitHub</h2>
        <p>
          GitHub — место, где хранится ваш код. Здесь можно сохранять проект,
          делиться ссылкой с коллегами и возвращаться к предыдущим версиям.
          Регистрация бесплатная и занимает 3 минуты.
        </p>
      </div>

      <div class="git-steps">
        <div v-for="(step, i) in steps" :key="i" class="git-step">
          <div class="git-num">{{ i + 1 }}</div>
          <div class="git-body">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
            <div v-if="step.tip" class="git-tip">
              💡 {{ step.tip }}
            </div>
          </div>
        </div>
      </div>

      <div class="git-cta">
        <a href="https://github.com/signup" target="_blank" rel="noopener" class="btn btn-primary">
          Создать аккаунт на GitHub →
        </a>
      </div>
    </div>
  </section>
</template>
