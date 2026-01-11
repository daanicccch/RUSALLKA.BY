# Руководство по деплою

Это руководство поможет развернуть лендинг на различных платформах.

## Перед деплоем

### Checklist

- [ ] Замените placeholder изображения на реальные
- [ ] Обновите контактную информацию в `src/utils/constants.ts`
- [ ] Проверьте даты туров в `src/components/sections/Pricing.tsx`
- [ ] Настройте Backend API для формы бронирования
- [ ] Добавьте Google Analytics / Яндекс.Метрику
- [ ] Проверьте SEO мета-теги в `index.html`

### Тестирование

```bash
# Запустите dev сервер
npm run dev

# Проверьте:
# - Все секции отображаются
# - Анимации работают плавно
# - Форма валидируется
# - Адаптивность на разных экранах
# - Ссылки работают

# Сборка для production
npm run build

# Проверьте production сборку
npm run preview
```

## Деплой на Vercel (Рекомендуется)

### Вариант 1: Через GitHub

1. Загрузите проект на GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Elbrus-Dombai landing"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/elbrus-dombai-landing.git
git push -u origin main
```

2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите "Import Project"
4. Выберите ваш GitHub репозиторий
5. Vercel автоматически определит Vite
6. Нажмите "Deploy"

### Вариант 2: Через Vercel CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Деплой
vercel

# Production деплой
vercel --prod
```

### Настройка домена на Vercel

1. В настройках проекта → Domains
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям Vercel

**Результат:** Автоматический HTTPS, CDN, мгновенные обновления при push в GitHub.

---

## Деплой на Netlify

### Вариант 1: Drag & Drop

1. Соберите проект:
```bash
npm run build
```

2. Зайдите на [netlify.com](https://netlify.com)
3. Перетащите папку `dist` на сайт

### Вариант 2: Через Netlify CLI

```bash
# Установите Netlify CLI
npm i -g netlify-cli

# Войдите
netlify login

# Инициализация
netlify init

# Деплой
netlify deploy --prod
```

### Вариант 3: Через GitHub

1. Загрузите на GitHub (см. выше)
2. Подключите репозиторий в Netlify
3. Настройки:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

### netlify.toml (опционально)

Создайте файл `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Деплой на GitHub Pages

### Установка

```bash
npm install -D gh-pages
```

### Настройка vite.config.ts

Обновите `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/elbrus-dombai-landing/', // Название репозитория
})
```

### package.json

Добавьте скрипт:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Деплой

```bash
npm run deploy
```

Сайт будет доступен на: `https://YOUR_USERNAME.github.io/elbrus-dombai-landing/`

---

## Деплой на собственный VPS/сервер

### Nginx конфигурация

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/elbrus-dombai/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### HTTPS (Let's Encrypt)

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Деплой через SSH

```bash
# Соберите проект локально
npm run build

# Загрузите на сервер
scp -r dist/* user@yourserver.com:/var/www/elbrus-dombai/dist/

# Или используйте rsync
rsync -avz dist/ user@yourserver.com:/var/www/elbrus-dombai/dist/
```

### CI/CD с GitHub Actions

Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to VPS
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        source: "dist/*"
        target: "/var/www/elbrus-dombai/"
```

---

## Деплой на Cloudflare Pages

### Через Dashboard

1. Зайдите на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Подключите GitHub репозиторий
3. Настройки:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy

### Через Wrangler CLI

```bash
npm i -g wrangler
wrangler pages deploy dist
```

---

## Настройка аналитики

### Google Analytics 4

Добавьте в `index.html` перед `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Яндекс.Метрика

```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

---

## Оптимизация после деплоя

### 1. Проверьте производительность

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 2. Оптимизируйте изображения

```bash
# Используйте ImageOptim, TinyPNG или:
npm i -g sharp-cli
sharp -i input.jpg -o output.webp --webp
```

### 3. Настройте CDN

Vercel и Netlify предоставляют CDN из коробки.

Для других платформ используйте Cloudflare.

### 4. Мониторинг

- [UptimeRobot](https://uptimerobot.com/) - мониторинг доступности
- [Sentry](https://sentry.io/) - отслеживание ошибок
- [Google Search Console](https://search.google.com/search-console) - SEO

---

## Быстрая команда для деплоя

Создайте `deploy.sh`:

```bash
#!/bin/bash

echo "Building project..."
npm run build

echo "Deploying to production..."
# Выберите один из вариантов:

# Vercel:
# vercel --prod

# Netlify:
# netlify deploy --prod

# GitHub Pages:
# npm run deploy

echo "Deployment complete!"
```

Сделайте исполняемым:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Troubleshooting

### Проблема: Белый экран после деплоя

**Решение:** Проверьте `base` в `vite.config.ts`

```ts
export default defineConfig({
  base: '/', // Для большинства платформ
  // или
  base: '/repo-name/', // Для GitHub Pages
})
```

### Проблема: 404 при переходе по ссылкам

**Решение:** Настройте fallback на `index.html` на вашем сервере.

### Проблема: Медленная загрузка

**Решение:**
1. Оптимизируйте изображения
2. Включите Gzip/Brotli
3. Используйте CDN
4. Добавьте caching headers

---

## Поддержка

По вопросам деплоя: info@rusallka.by

---

**Рекомендуемые платформы:**

1. **Vercel** - Лучший выбор для React (бесплатный HTTPS, CDN, автодеплой)
2. **Netlify** - Отличная альтернатива
3. **Cloudflare Pages** - Быстрый CDN

Выбирайте в зависимости от ваших потребностей.
