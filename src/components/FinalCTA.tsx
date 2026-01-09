import { motion } from 'motion/react';
import { Phone, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function FinalCTA() {
  const handleCall = () => {
    window.location.href = 'tel:+919899997235';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917483618278', '_blank');
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8 md:p-12 text-center">
            {/* Icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(6, 182, 212, 0.5)',
                  '0 0 60px rgba(6, 182, 212, 0.8)',
                  '0 0 30px rgba(6, 182, 212, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              This CRM is{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Not Generic
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              It is designed exclusively around your business
            </motion.p>

            <motion.p
              className="text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Every feature, every workflow, every integration has been thoughtfully 
              crafted to solve your specific challenges and accelerate your growth.
            </motion.p>

            {/* Key Points */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                { icon: '🎯', title: 'Built for You', text: 'Custom workflows for your operations' },
                { icon: '⚡', title: 'Save 20+ hrs/week', text: 'Automation eliminates manual work' },
                { icon: '📈', title: 'Increase Revenue', text: '2x better conversion rates' }
              ].map((point, i) => (
                <motion.div
                  key={point.title}
                  className="p-6 rounded-xl bg-white/5"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-3">{point.icon}</div>
                  <div className="font-semibold mb-2">{point.title}</div>
                  <div className="text-sm text-gray-400">{point.text}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={handleCall}
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-6 h-6" />
                Call Now
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                className="px-10 py-5 bg-green-500/10 backdrop-blur-sm border-2 border-green-500/30 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-green-500/20 hover:border-green-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                WhatsApp Now
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>No hidden costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>8-10 Weeks timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Dedicated support</span>
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-500 italic text-sm">
            "Transform your business operations from chaotic to systematic in just 8-10 weeks"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
