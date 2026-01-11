import { motion } from 'framer-motion';
import { FiMapPin, FiCoffee, FiTrendingUp, FiHome } from 'react-icons/fi';
import { Card } from '../ui/Card';
import type { TimelineItem } from '../../types';

const timelineItems: TimelineItem[] = [
  {
    day: 'День 1-2',
    title: 'Старт путешествия',
    description: 'Выезд из Минска в 6:00. Комфортная дорога к горам Кавказа с остановками в живописных местах.',
    icon: <FiMapPin className="text-3xl" />,
  },
  {
    day: 'День 3-4',
    title: 'Домбай',
    description: 'Проживание в уютном коттедже. 2 дня активного катания на одном из лучших горнолыжных курортов России.',
    icon: <FiTrendingUp className="text-3xl" />,
  },
  {
    day: 'День 5-7',
    title: 'Эльбрус',
    description: 'Переезд в стильные А-фрейм домики. Катание, термальные источники, вечеринки и невероятные виды на Эльбрус.',
    icon: <FiCoffee className="text-3xl" />,
  },
  {
    day: 'День 8-9',
    title: 'Возвращение домой',
    description: 'Прощание с горами и комфортная дорога обратно в Минск с яркими воспоминаниями.',
    icon: <FiHome className="text-3xl" />,
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Программа <span className="gradient-text">тура</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Детально спланированное путешествие с максимальным комфортом и яркими впечатлениями
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gradient-from to-accent-gradient-to hidden md:block" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="gradient-bg w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-accent-orange font-bold mb-2">{item.day}</div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-6 h-6 rounded-full gradient-bg ring-4 ring-primary-darker" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
