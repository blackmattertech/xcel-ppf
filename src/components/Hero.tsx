import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function Hero() {
  const handleApprove = () => {
    alert('Thank you for your interest! The proposal approval process will be initiated.');
  };

  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(6, 182, 212, 0.3)',
                '0 0 40px rgba(6, 182, 212, 0.5)',
                '0 0 20px rgba(6, 182, 212, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Premium CRM Solution</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A CRM Built Specifically for Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Business
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            No more lost WhatsApp leads, missed follow-ups, or blind sales decisions.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.button
              onClick={handleApprove}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold flex items-center gap-2 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Approve Proposal</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={handleCall}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.button>

            <motion.button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full font-semibold flex items-center gap-2 hover:bg-green-500/20 hover:border-green-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Cards Preview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { label: 'Lead Capture', value: '100%', color: 'cyan' },
            { label: 'Sales Pipeline', value: 'Real-time', color: 'blue' },
            { label: 'Team Performance', value: 'Live', color: 'purple' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <GlassCard className="p-6 text-center">
                <div className={`text-3xl font-bold mb-2 text-${item.color}-400`}>
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
