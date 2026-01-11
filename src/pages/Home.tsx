import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAnchor, FiTruck, FiSun, FiGift } from 'react-icons/fi';
import { Card } from '../components/ui/Card';

const directions = [
  {
    path: '/ski',
    icon: <FiSun className="text-4xl" />,
    title: 'Эльбрус и Домбай',
    description: 'Горнолыжные туры на два главных курорта Кавказа. 9 дней незабываемого катания.',
    image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    path: '/kayak',
    icon: <FiAnchor className="text-4xl" />,
    title: 'Сплавы на байдарках',
    description: 'Путешествия по живописным рекам Беларуси. Перезагрузка и единение с природой.',
    image: 'https://daroo.by/media/cache/original_image/images.daroo.gift/daroo.by/gallery/productpricebanner/5001675/2016/08/24/57bda730d0979.jpg',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    path: '/auto-tours',
    icon: <FiTruck className="text-4xl" />,
    title: 'Авто-туры',
    description: 'Путешествия в Абхазию, Грузию и по Ликийской тропе в Турции.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    path: '/gifts',
    icon: <FiGift className="text-4xl" />,
    title: 'Подарочные сертификаты',
    description: 'Подарите близким незабываемое приключение. Срок действия 3 месяца.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Приключения
              <br />
              <span className="gradient-text">начинаются здесь</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Сплавы • Горнолыжные туры • Авто-путешествия
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Наши <span className="gradient-text">направления</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Выберите своё идеальное приключение
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directions.map((dir, index) => (
              <motion.div
                key={dir.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={dir.path}>
                  <Card className="h-full overflow-hidden p-0 group cursor-pointer">
                    <div
                      className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${dir.image})` }}
                    >
                      <div className="h-full w-full bg-gradient-to-t from-primary-dark/90 to-transparent flex items-end p-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${dir.gradient} flex items-center justify-center text-white mr-4`}>
                          {dir.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{dir.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-400">{dir.description}</p>
                      <div className="mt-4 text-accent-orange font-medium group-hover:underline">
                        Подробнее →
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-darker">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь <span className="gradient-text">с нами</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Мы ответим на все ваши вопросы
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+375295531553"
                className="glass-effect px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-colors"
              >
                +375 (29) 553-15-53
              </a>
              <a
                href="https://t.me/rusallka"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg px-8 py-4 rounded-xl text-lg font-medium shadow-lg shadow-accent-orange/30 hover:shadow-accent-orange/50 transition-shadow"
              >
                Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
