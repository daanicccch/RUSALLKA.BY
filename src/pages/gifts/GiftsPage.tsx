import { motion } from 'framer-motion';
import { FiChevronDown, FiAnchor, FiTruck, FiSun, FiGift, FiShoppingCart, FiMail, FiCalendar, FiSmile } from 'react-icons/fi';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const HeroSection = () => {
  const scrollToCertificates = () => {
    document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-dark via-purple-900/20 to-primary-darker">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhODU1ZjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 text-6xl opacity-30">🎁</motion.div>
      <motion.div animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute top-40 right-20 text-8xl opacity-30">✨</motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} className="absolute bottom-40 left-1/4 text-5xl opacity-30">🎉</motion.div>
      <motion.div animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-60 right-1/4 text-6xl opacity-30">💝</motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block mb-4 px-6 py-2 glass-effect rounded-full">
            <span className="text-purple-400 font-semibold">Rusallka.by</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Подарите
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-yellow-500 bg-clip-text text-transparent">приключение</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Подарочные сертификаты на незабываемые путешествия
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToCertificates}>Выбрать сертификат</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-yellow-500 bg-clip-text text-transparent">3 месяца</div>
              <div className="text-gray-400 text-sm">срок действия</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-yellow-500 bg-clip-text text-transparent">4 вида</div>
              <div className="text-gray-400 text-sm">приключений</div>
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

const certificates = [
  { id: 'kayak', icon: <FiAnchor className="text-4xl" />, title: 'Сплав на байдарках', description: 'Приключение на воде по живописным рекам Беларуси', activities: ['Сплавы выходного дня', 'Многодневные походы'], color: 'from-cyan-500 to-blue-500' },
  { id: 'ski', icon: <FiSun className="text-4xl" />, title: 'Горнолыжный тур', description: 'Эльбрус и Домбай - два курорта Кавказа', activities: ['9 дней приключений', 'Термальные источники'], color: 'from-orange-500 to-red-500' },
  { id: 'auto', icon: <FiTruck className="text-4xl" />, title: 'Авто-тур', description: 'Путешествия в Абхазию, Грузию или по Ликийской тропе', activities: ['Абхазия и Грузия', 'Ликийская тропа'], color: 'from-green-500 to-emerald-500' },
  { id: 'universal', icon: <FiGift className="text-4xl" />, title: 'Универсальный', description: 'Получатель сам выберет приключение', activities: ['Любое направление', 'Полная свобода выбора'], color: 'from-purple-500 to-pink-500' },
];

const steps = [
  { icon: <FiShoppingCart className="text-3xl" />, title: 'Выберите и закажите', description: 'Выберите тип сертификата и оформите заказ' },
  { icon: <FiMail className="text-3xl" />, title: 'Получите сертификат', description: 'Красиво оформленный сертификат на email или с доставкой' },
  { icon: <FiCalendar className="text-3xl" />, title: 'Запись на приключение', description: 'Получатель выбирает удобную дату' },
  { icon: <FiSmile className="text-3xl" />, title: 'Незабываемые эмоции', description: 'Яркие впечатления на всю жизнь!' },
];

export const GiftsPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', certificateType: '' });

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      <HeroSection />

      {/* Certificates */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите <span className="bg-gradient-to-r from-purple-400 to-yellow-500 bg-clip-text text-transparent">сертификат</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white flex-shrink-0`}>{cert.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-400">{cert.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {cert.activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />{activity}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToOrder} fullWidth>Заказать сертификат</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это <span className="bg-gradient-to-r from-purple-400 to-yellow-500 bg-clip-text text-transparent">работает</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
                  <div className="bg-gradient-to-r from-purple-500 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white mt-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать <span className="bg-gradient-to-r from-purple-400 to-yellow-500 bg-clip-text text-transparent">сертификат</span></h2>
          </motion.div>
          <Card>
            <form className="space-y-6">
              <input type="text" placeholder="Ваше имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="tel" placeholder="Телефон" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <select value={formData.certificateType} onChange={(e) => setFormData({ ...formData, certificateType: e.target.value })} className="w-full px-4 py-3 rounded-lg glass-effect text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="" className="bg-primary-dark">Выберите тип сертификата</option>
                <option value="kayak" className="bg-primary-dark">Сплав на байдарках</option>
                <option value="ski" className="bg-primary-dark">Горнолыжный тур</option>
                <option value="auto" className="bg-primary-dark">Авто-тур</option>
                <option value="universal" className="bg-primary-dark">Универсальный</option>
              </select>
              <Button type="submit" size="lg" fullWidth>Заказать сертификат</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};
