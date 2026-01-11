import { motion } from 'framer-motion';
import { FiCheck, FiCalendar } from 'react-icons/fi';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import type { TourDate } from '../../types';

const tourDates: TourDate[] = [
  { start: '17.01', end: '25.01' },
  { start: '31.01', end: '08.02' },
  { start: '22.02', end: '02.03' },
  { start: '14.03', end: '22.03' },
  { start: '28.03', end: '05.04' },
  { start: '11.04', end: '19.04' },
];

const included = [
  'Проживание в коттедже (Домбай)',
  'Проживание в А-фрейм домиках (Эльбрус)',
  'Завтраки и ужины',
  'Русская баня',
  'Термальные источники',
  'Вечеринки и развлечения',
  'Экскурсии по окрестностям',
  'Шашлык у костра',
  'Трансфер на курорты',
];

export const Pricing = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-darker to-primary-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Стоимость и <span className="gradient-text">даты туров</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выберите удобную дату и забронируйте своё незабываемое приключение
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center" hover={false}>
              <div className="gradient-bg w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                💎
              </div>
              <h3 className="text-3xl font-bold mb-4">Премиум тур</h3>
              <div className="mb-8">
                <div className="text-6xl font-bold gradient-text mb-2">330 у.е.</div>
                <div className="text-gray-400">за весь тур (9 дней)</div>
              </div>

              <div className="space-y-4 text-left mb-8">
                <h4 className="text-xl font-bold text-center mb-4">Что включено:</h4>
                {included.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="gradient-bg rounded-full p-1 flex-shrink-0 mt-1">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" fullWidth onClick={scrollToBooking}>
                Забронировать место
              </Button>
            </Card>
          </motion.div>

          {/* Dates Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiCalendar className="text-accent-orange" />
              Доступные даты туров
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {tourDates.map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">
                        {date.start} - {date.end}
                      </div>
                      <div className="text-sm text-gray-400">2026 год</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-r from-accent-gradient-from/20 to-accent-gradient-to/20 border-accent-orange/30">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎁</div>
                  <h4 className="text-xl font-bold mb-2">Раннее бронирование</h4>
                  <p className="text-gray-300">
                    Бронируйте заранее и получите лучшие места в А-фрейм домиках!
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
