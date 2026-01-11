import { motion } from 'framer-motion';
import { FiCalendar, FiHome, FiZap, FiSun, FiUsers } from 'react-icons/fi';
import { Card } from '../ui/Card';
import type { Feature } from '../../types';

const features: Feature[] = [
  {
    icon: <FiCalendar className="text-4xl" />,
    title: '9 дней',
    description: 'Незабываемое путешествие по самым живописным местам Кавказа',
  },
  {
    icon: <FiHome className="text-4xl" />,
    title: 'А-фрейм домики',
    description: 'Комфортное проживание в стильных и уютных домиках с потрясающими видами',
  },
  {
    icon: <FiZap className="text-4xl" />,
    title: 'Термальные источники',
    description: 'Расслабление в естественных горячих источниках после катания',
  },
  {
    icon: <FiSun className="text-4xl" />,
    title: 'Русская баня',
    description: 'Традиционная баня для полного восстановления сил',
  },
  {
    icon: <FiUsers className="text-4xl" />,
    title: 'Профессиональные инструкторы',
    description: 'Опытные инструкторы помогут освоить трассы любого уровня сложности',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Почему стоит <span className="gradient-text">выбрать нас?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Мы создали идеальное путешествие, где каждая деталь продумана для вашего комфорта и удовольствия
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="gradient-bg w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
