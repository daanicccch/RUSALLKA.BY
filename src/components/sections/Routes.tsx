import { motion } from 'framer-motion';
import { FiNavigation } from 'react-icons/fi';
import { Card } from '../ui/Card';
import type { RouteStop } from '../../types';

const route1: RouteStop[] = [
  { name: 'Минск', isMain: true },
  { name: 'Бобруйск' },
  { name: 'Гомель' },
  { name: 'Брянск' },
  { name: 'Орел' },
  { name: 'Воронеж' },
  { name: 'Ростов' },
  { name: 'Домбай', isMain: true },
  { name: 'Эльбрус', isMain: true },
];

const route2: RouteStop[] = [
  { name: 'Орша', isMain: true },
  { name: 'Смоленск' },
  { name: 'Брянск' },
  { name: 'Орел' },
  { name: 'Ростов' },
  { name: 'Домбай', isMain: true },
  { name: 'Эльбрус', isMain: true },
];

interface RouteCardProps {
  title: string;
  route: RouteStop[];
  index: number;
}

const RouteCard = ({ title, route, index }: RouteCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center text-white">
            <FiNavigation className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {route.map((stop, idx) => (
            <div key={idx} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`px-4 py-2 rounded-lg ${
                  stop.isMain
                    ? 'gradient-bg text-white font-bold'
                    : 'glass-effect text-gray-300'
                }`}
              >
                {stop.name}
              </motion.div>
              {idx < route.length - 1 && (
                <div className="mx-2 text-accent-orange">→</div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export const Routes = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Наши <span className="gradient-text">маршруты</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выбирайте удобный маршрут отправления и отправляйтесь в путешествие мечты
          </p>
        </motion.div>

        <div className="space-y-8">
          <RouteCard title="Маршрут 1" route={route1} index={0} />
          <RouteCard title="Маршрут 2" route={route2} index={1} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-accent-gradient-from/20 to-accent-gradient-to/20 border-accent-orange/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="text-4xl">🚌</div>
              <div>
                <h4 className="text-xl font-bold mb-1">Комфортабельный автобус</h4>
                <p className="text-gray-300">
                  Современный транспорт с удобными сидениями, Wi-Fi и кондиционером
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
