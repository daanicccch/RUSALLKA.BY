# Структура файлов проекта

Полная карта всех файлов и папок в проекте.

## Корневая директория

```
D:\silichi\elbrus-dombai-landing\
├── 📄 .gitignore                  # Git игнорируемые файлы
├── 📄 eslint.config.js            # ESLint конфигурация
├── 📄 index.html                  # HTML точка входа
├── 📄 package.json                # NPM зависимости и скрипты
├── 📄 package-lock.json           # Lockfile для зависимостей
├── 📄 postcss.config.js           # PostCSS конфигурация
├── 📄 tailwind.config.js          # Tailwind CSS настройки
├── 📄 tsconfig.json               # TypeScript root config
├── 📄 tsconfig.app.json           # TypeScript app config
├── 📄 tsconfig.node.json          # TypeScript node config
├── 📄 vite.config.ts              # Vite конфигурация
├── 📄 README.md                   # Основная документация
├── 📄 QUICKSTART.md               # Быстрый старт
├── 📄 CUSTOMIZATION.md            # Гайд по кастомизации
├── 📄 ENHANCEMENTS.md             # Идеи улучшений
├── 📄 DEPLOYMENT.md               # Руководство по деплою
├── 📄 PROJECT_OVERVIEW.md         # Обзор проекта
├── 📄 FILES_STRUCTURE.md          # Этот файл
├── 📁 public/                     # Статические файлы
├── 📁 src/                        # Исходный код
└── 📁 node_modules/               # Установленные зависимости
```

## Папка src/

```
src/
├── 📄 main.tsx                    # React точка входа
├── 📄 App.tsx                     # Главный компонент приложения
├── 📄 App.css                     # CSS для App (пустой)
├── 📄 index.css                   # Глобальные стили + Tailwind
├── 📄 vite-env.d.ts               # Vite типы
│
├── 📁 components/                 # React компоненты
│   ├── 📁 sections/               # Секции лендинга
│   │   ├── 📄 Hero.tsx            # Главная секция (баннер)
│   │   ├── 📄 Features.tsx        # Преимущества тура
│   │   ├── 📄 Timeline.tsx        # Программа тура
│   │   ├── 📄 Pricing.tsx         # Цены и даты
│   │   ├── 📄 Routes.tsx          # Маршруты отправления
│   │   ├── 📄 Gallery.tsx         # Фотогалерея
│   │   ├── 📄 Booking.tsx         # Форма бронирования
│   │   └── 📄 Footer.tsx          # Подвал сайта
│   │
│   └── 📁 ui/                     # UI компоненты
│       ├── 📄 Button.tsx          # Кнопка
│       ├── 📄 Card.tsx            # Карточка
│       ├── 📄 Input.tsx           # Текстовое поле
│       ├── 📄 Textarea.tsx        # Многострочное поле
│       ├── 📄 ScrollToTop.tsx     # Кнопка "Наверх"
│       └── 📄 index.ts            # Экспорт UI компонентов
│
├── 📁 types/                      # TypeScript типы
│   └── 📄 index.ts                # Все интерфейсы проекта
│
└── 📁 utils/                      # Утилиты
    └── 📄 constants.ts            # Константы (контакты, инфо)
```

## Детальное описание файлов

### Конфигурационные файлы

#### `package.json`
```json
{
  "name": "elbrus-dombai-landing",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
  "dependencies": {
    "framer-motion": "^12.25.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.5",
    "tailwindcss": "^4.1.18",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
    // ... и другие
  }
}
```

#### `tailwind.config.js`
Настройки Tailwind CSS:
- Кастомные цвета (primary, accent)
- Шрифты (Inter)
- Анимации (float, slide-up)
- Keyframes

#### `vite.config.ts`
Минимальная конфигурация Vite с React плагином.

#### `tsconfig.*.json`
TypeScript конфигурация:
- Strict mode
- JSX preserve
- Module resolution
- Path mappings

### Исходный код (src/)

#### `main.tsx`
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### `App.tsx`
Главный компонент, объединяющий все секции:
```tsx
<Hero />
<Features />
<Timeline />
<Pricing />
<Routes />
<Gallery />
<Booking />
<Footer />
<ScrollToTop />
```

#### `index.css`
- Google Fonts (Inter)
- Tailwind directives
- Кастомные утилиты (.glass-effect, .gradient-text)

### Секции (components/sections/)

#### Hero.tsx (184 строки)
- Полноэкранный баннер
- Floating анимации
- CTA кнопки
- Метрики (9 дней, 330 у.е.)

#### Features.tsx (72 строки)
- 5 карточек преимуществ
- Иконки из react-icons/fi
- Stagger анимации

#### Timeline.tsx (92 строки)
- Вертикальный таймлайн
- 4 этапа путешествия
- Альтернативный layout

#### Pricing.tsx (147 строк)
- Цена и даты туров
- Список включенных услуг
- Специальное предложение

#### Routes.tsx (103 строки)
- 2 маршрута отправления
- RouteCard компонент
- Визуализация пути

#### Gallery.tsx (71 строка)
- 6 изображений (Unsplash)
- Hover эффекты
- Responsive grid

#### Booking.tsx (167 строк)
- Форма с валидацией
- useState для состояния
- Success сообщение

#### Footer.tsx (117 строк)
- 3 колонки информации
- Социальные ссылки
- Copyright

### UI компоненты (components/ui/)

#### Button.tsx (41 строка)
Props:
- `variant`: primary | secondary | outline
- `size`: sm | md | lg
- `fullWidth`: boolean
- Motion анимации

#### Card.tsx (23 строки)
Props:
- `glass`: boolean (glassmorphism)
- `hover`: boolean (hover эффект)
- Motion viewport анимации

#### Input.tsx (36 строк)
Props:
- `label`: string
- `error`: string
- forwardRef для react-hook-form

#### Textarea.tsx (36 строк)
Аналогично Input, но textarea элемент.

#### ScrollToTop.tsx (50 строк)
- Появляется при scroll > 500px
- Smooth scroll to top
- AnimatePresence для входа/выхода

### TypeScript типы (types/index.ts)

```typescript
export interface TourDate { ... }
export interface Feature { ... }
export interface TimelineItem { ... }
export interface IncludedItem { ... }
export interface RouteStop { ... }
export interface BookingFormData { ... }
export interface SocialLink { ... }
```

### Утилиты (utils/constants.ts)

```typescript
export const CONTACT_INFO = {
  phone: '+375 29 123 45 67',
  email: 'info@rusallka.by',
  telegram: 'https://t.me/rusallka',
  viber: '...',
  instagram: '...',
}

export const TOUR_INFO = {
  duration: 9,
  price: 330,
  currency: 'у.е.',
  startTime: '6:00',
}
```

## Документация

### README.md (5.5 KB)
Основная документация проекта.

### QUICKSTART.md (3.9 KB)
- Установка за 3 шага
- Команды для работы
- Структура файлов
- Кастомизация

### CUSTOMIZATION.md (9.6 KB)
- Изменение цветов
- Изменение контента
- Изменение изображений
- Примеры кода

### ENHANCEMENTS.md (6.8 KB)
- Функциональные улучшения
- Технические улучшения
- UI/UX улучшения
- Priority list

### DEPLOYMENT.md (9.8 KB)
- Деплой на Vercel
- Деплой на Netlify
- Деплой на GitHub Pages
- Настройка аналитики

### PROJECT_OVERVIEW.md (8.1 KB)
- Краткая информация
- Что реализовано
- Технические детали
- Production checklist

## Статистика проекта

| Категория | Количество |
|-----------|------------|
| Всего файлов | 33 |
| TypeScript файлов (.tsx, .ts) | 18 |
| Секций лендинга | 8 |
| UI компонентов | 5 |
| Файлов документации | 6 |
| Конфигурационных файлов | 8 |
| Строк кода (примерно) | 2000+ |

## Размер файлов

- `node_modules/`: ~200 MB (не включается в репозиторий)
- `src/`: ~50 KB
- Документация: ~43 KB
- Конфиги: ~3 KB
- **Production build** (`dist/`): ~200-300 KB (после сжатия)

## Gitignore

```gitignore
node_modules
dist
dist-ssr
*.local
.vscode/*
.idea
.DS_Store
```

## Как ориентироваться

### Хочу изменить дизайн
→ `tailwind.config.js` + `src/index.css`

### Хочу изменить контент
→ `src/components/sections/` (каждая секция)

### Хочу изменить контакты
→ `src/utils/constants.ts`

### Хочу добавить новую секцию
→ Создайте файл в `src/components/sections/`
→ Добавьте в `src/App.tsx`

### Хочу изменить UI компонент
→ `src/components/ui/`

### Хочу добавить новый тип
→ `src/types/index.ts`

---

**Совет:** Начинайте изучение с `src/App.tsx` → затем изучите каждую секцию по очереди.

---

© 2026 Rusallka.by
