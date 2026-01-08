import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlassCard } from './GlassCard';

const flowSteps = [
  {
    step: 1,
    title: 'Lead Generation',
    description: 'Customer reaches out via WhatsApp, Ads, Call, or Form',
    color: 'cyan',
    icon: '📱'
  },
  {
    step: 2,
    title: 'Auto Entry',
    description: 'Lead automatically enters CRM with all details captured',
    color: 'blue',
    icon: '⚡'
  },
  {
    step: 3,
    title: 'Smart Assignment',
    description: 'System assigns lead to best available sales executive',
    color: 'purple',
    icon: '🎯'
  },
  {
    step: 4,
    title: 'Follow-up System',
    description: 'Automated reminders and task scheduling for nurturing',
    color: 'pink',
    icon: '🔔'
  },
  {
    step: 5,
    title: 'Conversion',
    description: 'Lead converted to customer, invoice generated',
    color: 'green',
    icon: '✅'
  },
  {
    step: 6,
    title: 'Analytics',
    description: 'Data flows into reports, dashboards, and insights',
    color: 'yellow',
    icon: '📊'
  }
];

export function Flowchart() {
  return (
    <section id="flowchart" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Actually Works
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From first contact to conversion—every step automated and tracked
          </p>
        </motion.div>

        {/* Desktop Flow - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 opacity-30 -translate-y-1/2" />
            
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  {/* Step Node */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className="p-6 text-center mb-4">
                      <motion.div
                        className="text-4xl mb-3"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <div className={`w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center font-bold text-white mb-3`}>
                        {step.step}
                      </div>
                      <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </GlassCard>
                  </motion.div>

                  {/* Arrow (except last one) */}
                  {index < flowSteps.length - 1 && (
                    <motion.div
                      className="absolute"
                      style={{ 
                        left: `${((index + 1) / 6) * 100}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <ArrowRight className={`w-8 h-8 text-${step.color}-400`} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow - Vertical */}
        <div className="lg:hidden space-y-6">
          {flowSteps.map((step, index) => (
            <div key={step.step}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center font-bold text-white text-sm`}>
                          {step.step}
                        </div>
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Arrow Down */}
              {index < flowSteps.length - 1 && (
                <motion.div
                  className="flex justify-center my-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <div className={`w-8 h-8 rounded-full bg-${step.color}-500/20 flex items-center justify-center`}>
                    <ArrowRight className={`w-5 h-5 text-${step.color}-400 rotate-90`} />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Completion Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GlassCard className="p-8 inline-block">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.4)',
                    '0 0 40px rgba(34, 197, 94, 0.8)',
                    '0 0 20px rgba(34, 197, 94, 0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle2 className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-left">
                <div className="text-2xl font-bold mb-1">Fully Automated Process</div>
                <div className="text-gray-400">Zero manual intervention required</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Timeline Stats */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: '<2 sec', label: 'Lead Capture Time', color: 'cyan' },
            { value: '100%', label: 'Data Accuracy', color: 'purple' },
            { value: '0', label: 'Manual Steps', color: 'green' }
          ].map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center">
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
