import { motion } from 'motion/react';
import { Zap, Target, Layers } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function WhatIsIt() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Introducing Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Custom CRM
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Not a generic tool. A complete business management system built exclusively 
            for your operation.
          </p>
        </motion.div>

        {/* Main Explanation Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Tailored Solution</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  A Central Hub for Everything
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This CRM consolidates leads, customers, sales pipeline, marketing campaigns, 
                  team performance, and business intelligence into one powerful platform.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From the moment a lead contacts you via WhatsApp, calls, or social media—until 
                  they become a paying customer and beyond—every interaction is tracked, managed, 
                  and optimized.
                </p>
              </div>

              <div className="space-y-4">
                {/* Mock Dashboard UI */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-transparent rounded" />
                      <div className="h-4 bg-gradient-to-r from-blue-500/20 to-transparent rounded w-4/5" />
                      <div className="h-4 bg-gradient-to-r from-purple-500/20 to-transparent rounded w-3/5" />
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-cyan-400">142</span>
                        </div>
                        <div className="h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-purple-400">89%</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Key Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: 'Built Only for You',
              description: 'Custom workflows matching your exact business processes',
              color: 'cyan'
            },
            {
              icon: Layers,
              title: 'All-in-One Platform',
              description: 'Leads, sales, marketing, team management, and analytics unified',
              color: 'blue'
            },
            {
              icon: Zap,
              title: 'Automation First',
              description: 'Reduce manual work by 80% with intelligent automation',
              color: 'purple'
            }
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-${pillar.color}-500/20 to-${pillar.color}-500/5 flex items-center justify-center border border-${pillar.color}-500/30`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <pillar.icon className={`w-8 h-8 text-${pillar.color}-400`} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm">{pillar.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
