import { motion } from 'motion/react';
import { 
  Users, PhoneCall, CheckSquare, TrendingUp, 
  Instagram, Mail, MessageSquare, Bell,
  BarChart3, Shield, Headphones, Zap,
  Calendar, Filter, Search, Tag
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

const featureCategories = [
  {
    title: 'Leads & Sales',
    color: 'cyan',
    features: [
      { icon: Users, name: 'Leads & Enquiries', description: 'Centralized lead database with source tracking' },
      { icon: TrendingUp, name: 'Sales Pipeline', description: 'Visual pipeline with drag-and-drop stage management' },
      { icon: CheckSquare, name: 'Customer Management', description: 'Complete customer profiles with interaction history' },
      { icon: Calendar, name: 'Follow-ups & Tasks', description: 'Automated reminders and task assignments' }
    ]
  },
  {
    title: 'Marketing',
    color: 'purple',
    features: [
      { icon: Instagram, name: 'Meta Ads Integration', description: 'Track ad performance and lead quality' },
      { icon: Instagram, name: 'Instagram DMs', description: 'Auto-capture leads from Instagram messages' },
      { icon: MessageSquare, name: 'WhatsApp Campaigns', description: 'Bulk messaging with personalization' },
      { icon: Mail, name: 'Email Marketing', description: 'Automated email sequences and newsletters' }
    ]
  },
  {
    title: 'Team & Control',
    color: 'blue',
    features: [
      { icon: BarChart3, name: 'Employee Performance', description: 'Individual KPIs and productivity metrics' },
      { icon: Shield, name: 'Roles & Permissions', description: 'Granular access control for team members' },
      { icon: Headphones, name: 'Support Tickets', description: 'Internal ticketing system for customer issues' },
      { icon: Bell, name: 'Notifications & Alerts', description: 'Real-time alerts via push, email, WhatsApp' }
    ]
  },
  {
    title: 'Reports & Analytics',
    color: 'pink',
    features: [
      { icon: BarChart3, name: 'Sales Reports', description: 'Revenue, conversion rates, and pipeline value' },
      { icon: TrendingUp, name: 'Lead Analytics', description: 'Source performance and conversion funnels' },
      { icon: Users, name: 'Team Dashboards', description: 'Individual and team performance comparison' },
      { icon: Filter, name: 'Custom Reports', description: 'Build your own reports with filters and exports' }
    ]
  }
];

export function Features() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Comprehensive Feature Set</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need,{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nothing You Don't
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modular features designed specifically for your business operations
          </p>
        </motion.div>

        <div className="space-y-12">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <div className="mb-6">
                <h3 className={`text-2xl md:text-3xl font-bold text-${category.color}-400 flex items-center gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-${category.color}-400 animate-pulse`} />
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05, duration: 0.4 }}
                    onHoverStart={() => setExpandedFeature(feature.name)}
                    onHoverEnd={() => setExpandedFeature(null)}
                  >
                    <GlassCard className="p-5 h-full cursor-pointer group">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-500/5 flex items-center justify-center mb-4 border border-${category.color}-500/30`}
                        animate={{
                          scale: expandedFeature === feature.name ? 1.1 : 1,
                          rotate: expandedFeature === feature.name ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className={`w-6 h-6 text-${category.color}-400`} />
                      </motion.div>

                      <h4 className="font-semibold mb-2 text-sm">{feature.name}</h4>
                      
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: expandedFeature === feature.name ? 'auto' : 0,
                          opacity: expandedFeature === feature.name ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-gray-400 mt-2 pt-2 border-t border-white/10">
                          {feature.description}
                        </p>
                      </motion.div>

                      {expandedFeature !== feature.name && (
                        <p className="text-xs text-gray-500">{feature.description}</p>
                      )}

                      {/* Hover indicator */}
                      <motion.div
                        className={`mt-3 h-1 rounded-full bg-gradient-to-r from-${category.color}-500 to-transparent`}
                        initial={{ width: 0 }}
                        animate={{ width: expandedFeature === feature.name ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Count */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 inline-block">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-4xl font-bold text-cyan-400">16+</div>
                <div className="text-sm text-gray-400">Core Features</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-4xl font-bold text-purple-400">4</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-4xl font-bold text-pink-400">∞</div>
                <div className="text-sm text-gray-400">Possibilities</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
