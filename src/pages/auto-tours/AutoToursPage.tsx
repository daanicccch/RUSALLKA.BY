import { motion } from 'framer-motion';
import { FiChevronDown, FiTruck, FiHome, FiCamera, FiUsers, FiShield, FiMapPin, FiCalendar, FiClock, FiStar } from 'react-icons/fi';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const HeroSection = () => {
  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark" />
      </div>

      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 text-6xl opacity-20">🏔️</motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute top-40 right-20 text-8xl opacity-20">🚗</motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block mb-4 px-6 py-2 glass-effect rounded-full">
            <span className="text-green-400 font-semibold">Rusallka.by</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Авто-туры в
            <br />
            <span className="bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">самые красивые места</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Абхазия • Грузия • Ликийская тропа
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToTours}>Выбрать тур</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">3 страны</div>
              <div className="text-gray-400 text-sm">направления</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">7-14 дней</div>
              <div className="text-gray-400 text-sm">продолжительность</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <FiChevronDown className="text-4xl text-white/50" />
      </motion.div>
    </section>
  );
};

const features = [
  { icon: <FiTruck className="text-4xl" />, title: 'Комфортный транспорт', description: 'Путешествие на комфортабельном микроавтобусе' },
  { icon: <FiHome className="text-4xl" />, title: 'Уютное проживание', description: 'Отели в живописных местах' },
  { icon: <FiCamera className="text-4xl" />, title: 'Яркие впечатления', description: 'Посещение самых красивых мест' },
  { icon: <FiUsers className="text-4xl" />, title: 'Опытные гиды', description: 'Профессиональные гиды-экскурсоводы' },
  { icon: <FiShield className="text-4xl" />, title: 'Полная организация', description: 'Всё включено: маршрут, проживание, экскурсии' },
];

const tours = [
  {
    id: 'abkhazia',
    name: 'Абхазия и Грузия',
    country: 'Абхазия + Грузия',
    description: 'Чистый горный воздух, уникальные хвойные леса, целебные минеральные источники, памятники культуры, горы и море.',
    duration: '10-12 дней',
    highlights: ['Озеро Рица', 'Новый Афон', 'Тбилиси', 'Казбеги'],
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=80',
    features: ['Море и горы', 'Целебные источники', 'Древние храмы'],
  },
  {
    id: 'georgia',
    name: 'Грузия',
    country: 'Грузия',
    description: 'Страна древней культуры, гостеприимства и потрясающих пейзажей. Горы Кавказа, виноградники и незабываемая кухня.',
    duration: '8-10 дней',
    highlights: ['Тбилиси', 'Мцхета', 'Казбеги', 'Батуми'],
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=80',
    features: ['Винные туры', 'Горные походы', 'Архитектура'],
  },
  {
    id: 'lycian',
    name: 'Ликийская тропа',
    country: 'Турция',
    description: 'Один из самых красивых трекинговых маршрутов в мире вдоль южного побережья Турции. Бухты, пляжи и бирюзовая вода.',
    duration: '7-9 дней',
    highlights: ['Античные руины', 'Бирюзовое море', 'Горные тропы'],
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80',
    features: ['Трекинг', 'Пляжный отдых', 'Античная история'],
  },
];

export const AutoToursPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', tour: '' });

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      <HeroSection />

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему <span className="bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">наши туры?</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <div className="bg-gradient-to-r from-green-500 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white">{f.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400">{f.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши <span className="bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">направления</span></h2>
          </motion.div>

          <div className="space-y-12">
            {tours.map((tour, index) => (
              <motion.div key={tour.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="overflow-hidden p-0" hover={false}>
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`h-64 md:h-auto min-h-[300px] bg-cover bg-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`} style={{ backgroundImage: `url(${tour.image})` }} />
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <FiMapPin className="text-green-400" />
                        <span className="text-green-400 font-medium">{tour.country}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{tour.name}</h3>
                      <p className="text-gray-400 mb-6">{tour.description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm"><FiClock className="text-green-400" />{tour.duration}</div>
                        <div className="flex items-center gap-2 text-sm"><FiCalendar className="text-green-400" />Круглый год</div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tour.features.map((f, i) => (
                          <span key={i} className="flex items-center gap-1 text-xs glass-effect px-3 py-1 rounded-full">
                            <FiStar className="text-green-400" />{f}
                          </span>
                        ))}
                      </div>
                      <Button onClick={scrollToBooking}>Узнать подробнее</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Забронировать <span className="bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">тур</span></h2>
          </motion.div>
          <Card>
            <form className="space-y-6">
              <input type="text" placeholder="Ваше имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input type="tel" placeholder="Телефон" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <select value={formData.tour} onChange={(e) => setFormData({ ...formData, tour: e.target.value })} className="w-full px-4 py-3 rounded-lg glass-effect text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="" className="bg-primary-dark">Выберите направление</option>
                <option value="abkhazia" className="bg-primary-dark">Абхазия и Грузия</option>
                <option value="georgia" className="bg-primary-dark">Грузия</option>
                <option value="lycian" className="bg-primary-dark">Ликийская тропа</option>
              </select>
              <Button type="submit" size="lg" fullWidth>Отправить заявку</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};
