import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane, FaViber } from 'react-icons/fa';
import type { SocialLink } from '../../types';

const socialLinks: SocialLink[] = [
  {
    name: 'Telegram',
    icon: <FaTelegramPlane className="text-2xl" />,
    url: 'https://t.me/rusallka',
  },
  {
    name: 'Viber',
    icon: <FaViber className="text-2xl" />,
    url: 'viber://chat?number=%2B375291234567',
  },
  {
    name: 'Instagram',
    icon: <FiInstagram className="text-2xl" />,
    url: 'https://instagram.com/rusallka.by',
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary-darker py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold gradient-text mb-4">Rusallka.by</div>
            <p className="text-gray-400 mb-6">
              Незабываемые путешествия в горы Кавказа. Эльбрус и Домбай ждут вас!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-accent-orange/30 transition-shadow"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+375291234567"
                className="flex items-center gap-3 text-gray-400 hover:text-accent-orange transition-colors"
              >
                <div className="glass-effect w-10 h-10 rounded-lg flex items-center justify-center">
                  <FiPhone />
                </div>
                <span>+375 29 123 45 67</span>
              </a>
              <a
                href="mailto:info@rusallka.by"
                className="flex items-center gap-3 text-gray-400 hover:text-accent-orange transition-colors"
              >
                <div className="glass-effect w-10 h-10 rounded-lg flex items-center justify-center">
                  <FiMail />
                </div>
                <span>info@rusallka.by</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {[
                { name: 'О туре', href: '#features' },
                { name: 'Программа', href: '#timeline' },
                { name: 'Цены', href: '#pricing' },
                { name: 'Бронирование', href: '#booking' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-orange transition-colors hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8 text-center text-gray-400"
        >
          <p>© 2026 Rusallka.by. Все права защищены.</p>
          <p className="mt-2 text-sm">Горнолыжные туры на Эльбрус и Домбай</p>
        </motion.div>
      </div>
    </footer>
  );
};
