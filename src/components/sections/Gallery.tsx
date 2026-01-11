import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=1200&q=80',
    title: 'Эльбрус',
  },
  {
    url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=1200&q=80',
    title: 'Домбай',
  },
  {
    url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    title: 'Горнолыжные трассы',
  },
  {
    url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80',
    title: 'Термальные источники',
  },
  {
    url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80',
    title: 'Горные пейзажи',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    title: 'Кавказские вершины',
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            Галерея <span className="gradient-text">впечатлений</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Нажмите на фото для увеличения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(index)}
              className="relative overflow-hidden rounded-2xl group cursor-pointer h-80"
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <h3 className="text-2xl font-bold text-white">{image.title}</h3>
              </div>
              <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-accent-orange/50 transition-all duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            >
              <FiX className="text-3xl" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[90vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
              {images[selectedImage].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
