# Быстрый старт

## Установка и запуск за 3 шага

### 1. Установите зависимости

```bash
npm install
```

### 2. Запустите dev сервер

```bash
npm run dev
```

### 3. Откройте браузер

Перейдите по адресу: `http://localhost:5173`

## Доступные команды

```bash
# Разработка (dev mode с hot reload)
npm run dev

# Production сборка
npm run build

# Предпросмотр production сборки
npm run preview

# Линтинг кода
npm run lint
```

## Структура файлов

```
D:\silichi\elbrus-dombai-landing\
├── src/
│   ├── components/
│   │   ├── sections/    # Все секции лендинга
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Routes.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Booking.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/          # Переиспользуемые UI компоненты
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Textarea.tsx
│   │       └── index.ts
│   ├── types/           # TypeScript типы
│   │   └── index.ts
│   ├── utils/           # Утилиты и константы
│   │   └── constants.ts
│   ├── App.tsx          # Главный компонент
│   ├── App.css
│   ├── index.css        # Tailwind стили
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Секции лендинга

1. **Hero** - Полноэкранный баннер с призывом к действию
2. **Features** - 5 преимуществ тура
3. **Timeline** - Программа тура по дням
4. **Pricing** - Цены и даты туров
5. **Routes** - Маршруты отправления
6. **Gallery** - Фотогалерея
7. **Booking** - Форма бронирования
8. **Footer** - Контакты и соцсети

## Технологии

- React 18 + TypeScript
- Vite (сборка)
- Tailwind CSS (стили)
- Framer Motion (анимации)
- React Icons (иконки)

## Кастомизация

### Изменение цветов

Откройте `tailwind.config.js`:

```js
colors: {
  primary: {
    dark: '#1a1a2e',      // Основной фон
    darker: '#16213e',    // Темнее фон
  },
  accent: {
    orange: '#f16108',    // Акцентный цвет
    // ...
  }
}
```

### Изменение контактов

Откройте `src/utils/constants.ts`:

```ts
export const CONTACT_INFO = {
  phone: '+375 29 123 45 67',
  email: 'info@rusallka.by',
  telegram: 'https://t.me/rusallka',
  // ...
}
```

### Изменение контента

Все тексты находятся непосредственно в компонентах секций в папке `src/components/sections/`.

## Production деплой

### Сборка

```bash
npm run build
```

Результат в папке `dist/`.

### Деплой на популярные платформы

#### Vercel

```bash
npm i -g vercel
vercel
```

#### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages

1. Установите `gh-pages`:
```bash
npm i -D gh-pages
```

2. Добавьте в `package.json`:
```json
{
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

3. Деплой:
```bash
npm run deploy
```

## Поддержка

По всем вопросам: info@rusallka.by

---

© 2026 Rusallka.by
