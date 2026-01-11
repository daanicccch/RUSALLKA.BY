# Руководство по кастомизации

Это руководство покажет, как настроить лендинг под ваши нужды.

## Изменение цветовой схемы

### Файл: `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      primary: {
        dark: '#1a1a2e',      // Основной тёмный фон
        darker: '#16213e',    // Ещё более тёмный фон
      },
      accent: {
        orange: '#f16108',    // Основной акцентный цвет
        gradient: {
          from: '#ff6b6b',    // Начало градиента
          to: '#ffa500',      // Конец градиента
        }
      }
    }
  }
}
```

### Примеры других цветовых схем

#### Голубая схема (зимняя)
```js
accent: {
  blue: '#0ea5e9',
  gradient: {
    from: '#3b82f6',
    to: '#06b6d4',
  }
}
```

#### Зелёная схема (природа)
```js
accent: {
  green: '#10b981',
  gradient: {
    from: '#34d399',
    to: '#059669',
  }
}
```

#### Фиолетовая схема (премиум)
```js
accent: {
  purple: '#8b5cf6',
  gradient: {
    from: '#a78bfa',
    to: '#7c3aed',
  }
}
```

## Изменение контактной информации

### Файл: `src/utils/constants.ts`

```ts
export const CONTACT_INFO = {
  phone: '+375 29 123 45 67',              // Ваш телефон
  email: 'info@rusallka.by',               // Ваш email
  telegram: 'https://t.me/rusallka',       // Ваш Telegram
  viber: 'viber://chat?number=%2B375291234567', // Viber
  instagram: 'https://instagram.com/rusallka.by', // Instagram
} as const;

export const TOUR_INFO = {
  duration: 9,        // Длительность тура (дней)
  price: 330,         // Цена
  currency: 'у.е.',   // Валюта
  startTime: '6:00',  // Время отправления
} as const;
```

## Изменение дат туров

### Файл: `src/components/sections/Pricing.tsx`

Найдите массив `tourDates`:

```ts
const tourDates: TourDate[] = [
  { start: '17.01', end: '25.01' },
  { start: '31.01', end: '08.02' },
  { start: '22.02', end: '02.03' },
  { start: '14.03', end: '22.03' },
  { start: '28.03', end: '05.04' },
  { start: '11.04', end: '19.04' },
];
```

Измените даты на нужные вам.

## Изменение программы тура

### Файл: `src/components/sections/Timeline.tsx`

Найдите массив `timelineItems`:

```ts
const timelineItems: TimelineItem[] = [
  {
    day: 'День 1-2',
    title: 'Старт путешествия',
    description: 'Ваше описание...',
    icon: <FiMapPin className="text-3xl" />,
  },
  // Добавьте или измените этапы
];
```

## Изменение преимуществ

### Файл: `src/components/sections/Features.tsx`

```ts
const features: Feature[] = [
  {
    icon: <FiCalendar className="text-4xl" />,
    title: 'Ваш заголовок',
    description: 'Ваше описание',
  },
  // Добавьте больше преимуществ
];
```

### Доступные иконки (React Icons)

Импортируйте из `react-icons/fi`:

- `FiCalendar` - календарь
- `FiHome` - дом
- `FiZap` - молния
- `FiSun` - солнце
- `FiUsers` - люди
- `FiHeart` - сердце
- `FiStar` - звезда
- `FiAward` - награда
- `FiMapPin` - геометка
- `FiCoffee` - кофе
- `FiMountain` - гора

Полный список: https://react-icons.github.io/react-icons/icons/fi/

## Изменение изображений

### Hero секция

**Файл:** `src/components/sections/Hero.tsx`

Найдите:
```tsx
backgroundImage: 'url(https://images.unsplash.com/photo-...)'
```

Замените URL на свою картинку.

### Галерея

**Файл:** `src/components/sections/Gallery.tsx`

```ts
const images = [
  {
    url: 'https://ваш-сайт.com/image1.jpg',
    title: 'Название',
  },
  // Добавьте больше изображений
];
```

## Изменение текстов

### Hero заголовок

**Файл:** `src/components/sections/Hero.tsx`

```tsx
<h1 className="...">
  Покоряем два главных
  <br />
  <span className="gradient-text">курорта Кавказа</span>
</h1>
```

### Hero подзаголовок

```tsx
<p className="...">
  Эльбрус и Домбай - незабываемое приключение в сердце гор
</p>
```

## Изменение маршрутов

### Файл: `src/components/sections/Routes.tsx`

```ts
const route1: RouteStop[] = [
  { name: 'Минск', isMain: true },
  { name: 'Бобруйск' },
  // Добавьте свои города
  { name: 'Домбай', isMain: true },
  { name: 'Эльбрус', isMain: true },
];
```

`isMain: true` - для ключевых точек (подсвечиваются).

## Изменение включенных услуг

### Файл: `src/components/sections/Pricing.tsx`

```ts
const included = [
  'Проживание в коттедже (Домбай)',
  'Проживание в А-фрейм домиках (Эльбрус)',
  // Добавьте свои пункты
];
```

## Изменение анимаций

### Скорость анимаций

**Файл:** любой компонент с Framer Motion

```tsx
transition={{ duration: 0.6 }} // Медленнее: 1.0, быстрее: 0.3
```

### Отключение анимаций

Удалите или закомментируйте `motion.*` компоненты:

```tsx
// Было:
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Контент
</motion.div>

// Стало:
<div>
  Контент
</div>
```

## Изменение шрифтов

### Файл: `src/index.css`

Замените в импорте Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
```

### Файл: `tailwind.config.js`

```js
fontFamily: {
  sans: ['Montserrat', 'system-ui', 'sans-serif'],
},
```

### Популярные шрифты

- **Montserrat** - современный, геометричный
- **Roboto** - классический, читабельный
- **Poppins** - дружелюбный, округлый
- **Raleway** - элегантный, тонкий
- **Open Sans** - нейтральный, универсальный

## Изменение формы бронирования

### Добавление полей

**Файл:** `src/components/sections/Booking.tsx`

1. Добавьте поле в тип:

```ts
// src/types/index.ts
export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  comment: string;
  tourDate: string; // Новое поле
  agreed: boolean;
}
```

2. Добавьте в состояние:

```ts
const [formData, setFormData] = useState<BookingFormData>({
  // ...
  tourDate: '',
});
```

3. Добавьте Input в форму:

```tsx
<Input
  type="text"
  placeholder="Выберите дату тура"
  value={formData.tourDate}
  onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
/>
```

## Изменение мета-тегов (SEO)

### Файл: `index.html`

```html
<title>Ваш заголовок</title>
<meta name="description" content="Ваше описание для поисковиков" />
<meta name="keywords" content="ваши, ключевые, слова" />
```

## Добавление новой секции

1. Создайте файл: `src/components/sections/NewSection.tsx`

```tsx
import { motion } from 'framer-motion';

export const NewSection = () => {
  return (
    <section className="py-20 px-4 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-8"
        >
          Ваш заголовок
        </motion.h2>
        {/* Ваш контент */}
      </div>
    </section>
  );
};
```

2. Добавьте в `src/App.tsx`:

```tsx
import { NewSection } from './components/sections/NewSection';

function App() {
  return (
    <div className="min-h-screen">
      {/* ... */}
      <NewSection />
      {/* ... */}
    </div>
  );
}
```

## Советы по кастомизации

1. **Сохраняйте консистентность** - используйте одинаковые отступы, шрифты, цвета
2. **Тестируйте на разных устройствах** - проверьте мобильную версию
3. **Оптимизируйте изображения** - используйте WebP, сжимайте файлы
4. **Сохраняйте бэкапы** - делайте git commit перед большими изменениями
5. **Следуйте структуре** - не смешивайте стили и логику

## Полезные ресурсы

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) - бесплатные фото
- [Color Hunt](https://colorhunt.co/) - цветовые палитры

---

Нужна помощь? info@rusallka.by
