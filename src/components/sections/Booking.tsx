import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

import type { BookingFormData } from '../../types';

export const Booking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    comment: '',
    agreed: false,
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    }

    if (!formData.agreed) {
      newErrors.agreed = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: '',
        agreed: false,
      });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Забронировать <span className="gradient-text">тур</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Заполните форму, и мы свяжемся с вами для подтверждения бронирования
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">Заявка отправлена!</h3>
                <p className="text-gray-400">
                  Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      <FiUser />
                    </div>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                      className="pl-12"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      <FiMail />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                      className="pl-12"
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400 pointer-events-none">
                    <FiPhone />
                  </div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    error={errors.phone}
                    className="pl-12"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400 pointer-events-none">
                    <FiMessageSquare />
                  </div>
                  <Textarea
                    placeholder="Комментарий или пожелания (необязательно)"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    rows={4}
                    className="pl-12"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-gray-600 bg-white/10 checked:bg-accent-orange focus:ring-2 focus:ring-accent-orange cursor-pointer"
                  />
                  <label htmlFor="agreed" className="text-sm text-gray-400 cursor-pointer">
                    Я согласен на обработку персональных данных и с{' '}
                    <a href="#" className="text-accent-orange hover:underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                {errors.agreed && (
                  <p className="text-sm text-red-400">Необходимо согласие на обработку данных</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
