import { motion } from 'motion/react';
import { DollarSign, Calendar, Package, Clock, Headphones, RefreshCw, ChevronDown } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

const commercialSections = [
  {
    icon: DollarSign,
    title: 'One-Time Development Cost',
    color: 'cyan',
    items: [
      'Custom CRM development',
      'UI/UX design',
      'All integrations setup',
      'Initial data migration',
      'Training & documentation'
    ],
    note: 'Investment details shared in separate document'
  },
  {
    icon: Calendar,
    title: 'Payment Milestones',
    color: 'blue',
    items: [
      '30% - Project kickoff & requirement finalization',
      '40% - Design approval & development completion',
      '30% - Testing, deployment & go-live'
    ],
    note: 'Flexible payment schedule available'
  },
  {
    icon: Package,
    title: 'What You Need to Provide',
    color: 'purple',
    items: [
      'Business logo & branding assets',
      'WhatsApp Business API account',
      'Email service credentials (Mailjet)',
      'Telephony service details (MCUBE)',
      'Existing customer data (if any)'
    ],
    note: 'We will guide you through each requirement'
  },
  {
    icon: Clock,
    title: 'Development Timeline',
    color: 'pink',
    items: [
      'Week 1-2: Requirements & design',
      'Week 3-6: Core development',
      'Week 7: Integration & testing',
      'Week 8: Training & deployment'
    ],
    note: '8 weeks from kickoff to go-live'
  },
  {
    icon: Headphones,
    title: 'Support & Warranty',
    color: 'green',
    items: [
      '90 days free bug fixes & support',
      'Priority email & phone support',
      'Knowledge base & video tutorials',
      'Dedicated account manager',
      'Quarterly health check-ups'
    ],
    note: 'Extended support packages available'
  },
  {
    icon: RefreshCw,
    title: 'AMC & Future Enhancements',
    color: 'yellow',
    items: [
      'Optional Annual Maintenance Contract',
      'Feature updates & improvements',
      'Server maintenance & monitoring',
      'Security patches & upgrades',
      'New integration additions'
    ],
    note: 'Discuss after 90-day warranty period'
  }
];

export function Commercials() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <section id="quotation" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Investment &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Commercial Terms
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent pricing, clear milestones, and comprehensive support
          </p>
        </motion.div>

        <div className="space-y-4">
          {commercialSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="overflow-hidden">
                {/* Header - Always Visible */}
                <motion.button
                  className="w-full p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${section.color}-500/20 to-${section.color}-500/5 flex items-center justify-center border border-${section.color}-500/30`}
                      animate={{
                        rotate: expandedSection === index ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <section.icon className={`w-6 h-6 text-${section.color}-400`} />
                    </motion.div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <p className="text-sm text-gray-500">{section.note}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </motion.button>

                {/* Expanded Content */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: expandedSection === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/10">
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: expandedSection === index ? 1 : 0,
                            x: expandedSection === index ? 0 : -20
                          }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-${section.color}-400 mt-2`} />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">What's Included</h3>
              <p className="text-gray-400">Everything you need for a successful CRM implementation</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '✅', label: 'Custom Development', color: 'cyan' },
                { icon: '🎨', label: 'UI/UX Design', color: 'blue' },
                { icon: '🔌', label: 'All Integrations', color: 'purple' },
                { icon: '📚', label: 'Training & Docs', color: 'pink' },
                { icon: '🚀', label: 'Deployment', color: 'green' },
                { icon: '🛡️', label: '90-Day Warranty', color: 'yellow' },
                { icon: '📞', label: 'Priority Support', color: 'orange' },
                { icon: '📊', label: 'Analytics Setup', color: 'red' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="text-center p-4 rounded-xl bg-white/5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30">
            <span className="text-2xl">🤝</span>
            <span className="text-sm text-green-400">
              Fixed scope • No hidden costs • Clear milestones
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
