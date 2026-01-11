import { motion } from 'framer-motion';
import { FiChevronDown, FiShield, FiUsers, FiMapPin, FiSun, FiHeart, FiDroplet, FiStar, FiClock, FiCheck, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

// Hero Section
const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://daroo.by/media/cache/original_image/images.daroo.gift/daroo.by/gallery/productpricebanner/5001675/2016/08/24/57bda730d0979.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark" />
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        🚣
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 text-8xl opacity-20"
      >
        🌊
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 glass-effect rounded-full"
          >
            <span className="text-cyan-400 font-semibold">Rusallka.by</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Сплавы на байдарках
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">по рекам Беларуси</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Перезагрузка, необычные эмоции, единение с природой
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" onClick={scrollToBooking}>
              Записаться на сплав
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10+ лет</div>
              <div className="text-gray-400 text-sm">опыта</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-400 text-sm">безопасность</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">1000+</div>
              <div className="text-gray-400 text-sm">туристов</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FiChevronDown className="text-4xl text-white/50" />
      </motion.div>
    </section>
  );
};

// Features
const features = [
  { icon: <FiShield className="text-4xl" />, title: 'Безопасность', description: 'Устойчивые байдарки, спасательные жилеты и профессиональный инструктаж' },
  { icon: <FiUsers className="text-4xl" />, title: 'Опытные инструкторы', description: 'Команда с более чем 10-летним стажем' },
  { icon: <FiMapPin className="text-4xl" />, title: 'Живописные маршруты', description: 'Сплавы по самым красивым рекам Беларуси' },
  { icon: <FiSun className="text-4xl" />, title: 'Активный отдых', description: 'Идеальный способ отключиться от городской суеты' },
  { icon: <FiHeart className="text-4xl" />, title: 'Положительные эмоции', description: 'Незабываемые впечатления и новые знакомства' },
];

// Rivers
const rivers = [
  { name: 'Река Неман', difficulty: 'Лёгкая', duration: '1-2 дня', highlights: ['Старинные замки', 'Живописные леса'], image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?auto=format&fit=crop&w=800&q=80' },
  { name: 'Река Вилия', difficulty: 'Средняя', duration: '2-3 дня', highlights: ['Пороги и перекаты', 'Скалистые берега'], image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80' },
  { name: 'Река Западная Двина', difficulty: 'Лёгкая', duration: '2-4 дня', highlights: ['Широкие плёсы', 'Исторические города'], image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=800&q=80' },
  { name: 'Река Припять', difficulty: 'Лёгкая', duration: '2-5 дней', highlights: ['Уникальная природа', 'Птичьи заповедники'], image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80' },
];

const included = ['Байдарка и вёсла', 'Спасательный жилет', 'Герметичный мешок', 'Инструктаж', 'Сопровождение', 'Палатка (многодневные)', 'Костровое оборудование', 'Трансфер'];
const notIncluded = ['Питание', 'Личные вещи', 'Страховка'];

export const KayakPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });

  return (
    <div className="pt-16">
      <HeroSection />

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">нас?</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white">{f.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400">{f.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rivers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">маршруты</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rivers.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full overflow-hidden p-0">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }}>
                    <div className="h-full w-full bg-gradient-to-t from-primary-dark/90 to-transparent flex items-end p-6">
                      <h3 className="text-2xl font-bold">{r.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm"><FiDroplet className="text-cyan-400" />{r.difficulty}</div>
                      <div className="flex items-center gap-2 text-sm"><FiClock className="text-cyan-400" />{r.duration}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {r.highlights.map((h, j) => (
                        <span key={j} className="flex items-center gap-1 text-xs glass-effect px-3 py-1 rounded-full">
                          <FiStar className="text-cyan-400" />{h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">включено</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Включено</h3>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-6 h-6 rounded-full flex items-center justify-center"><FiCheck className="text-white text-sm" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold mb-6 text-gray-400">Не включено</h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="bg-gray-600 w-6 h-6 rounded-full flex items-center justify-center"><FiX className="text-white text-sm" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Записаться на <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">сплав</span></h2>
          </motion.div>
          <Card>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                placeholder="Комментарий (необязательно)"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button type="submit" size="lg" fullWidth>Отправить заявку</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};
