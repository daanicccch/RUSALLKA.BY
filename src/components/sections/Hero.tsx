import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { Button } from '../ui/Button';

export const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark" />
      </div>

      {/* Floating Mountains Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        🏔️
      </motion.div>
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 text-8xl opacity-20"
      >
        ⛷️
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-1/4 text-5xl opacity-20"
      >
        ❄️
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 glass-effect rounded-full"
          >
            <span className="text-accent-orange font-semibold">Rusallka.by</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Покоряем два главных
            <br />
            <span className="gradient-text">курорта Кавказа</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Эльбрус и Домбай - незабываемое приключение в сердце гор
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" onClick={scrollToBooking}>
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Узнать больше
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">9 дней</div>
              <div className="text-gray-400 text-sm">незабываемого путешествия</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">330 у.е.</div>
              <div className="text-gray-400 text-sm">полная стоимость тура</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">2 курорта</div>
              <div className="text-gray-400 text-sm">Эльбрус и Домбай</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FiChevronDown className="text-4xl text-white/50" />
      </motion.div>
    </section>
  );
};
