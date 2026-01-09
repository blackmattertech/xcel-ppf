import { motion } from 'motion/react';
import { CheckCircle, XCircle, Clock, Eye, ArrowDown, ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface FlowStepProps {
  title: string;
  items?: string[];
  bgColor: string;
  borderColor: string;
  delay: number;
}

function FlowStep({ title, items = [], bgColor, borderColor, delay }: FlowStepProps) {
  // Map to neon gradient classes
  const neonGradients: Record<string, string> = {
    'bg-blue-500/20': 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-cyan-500/10',
    'bg-gray-500/20': 'bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/10',
    'bg-yellow-500/20': 'bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-yellow-500/10',
    'bg-purple-500/20': 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/10',
    'bg-green-500/20': 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/10',
    'bg-green-600/20': 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-cyan-500/10',
  };

  const neonBorders: Record<string, string> = {
    'border-blue-500': 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]',
    'border-gray-500': 'border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    'border-yellow-500': 'border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]',
    'border-purple-500': 'border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    'border-green-500': 'border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]',
    'border-green-600': 'border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]',
  };

  return (
    <motion.div
      className="w-full mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <GlassCard className={`p-6 md:p-8 lg:p-10 ${neonGradients[bgColor] || bgColor} border-2 ${neonBorders[borderColor] || borderColor} transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]`}>
        <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">{title}</h4>
        {items.length > 0 && (
          <ul className="space-y-3 md:space-y-4">
            {items.map((item, i) => (
              <li key={i} className="text-sm md:text-base lg:text-lg text-gray-300 text-center">• {item}</li>
            ))}
          </ul>
        )}
      </GlassCard>
    </motion.div>
  );
}

interface DecisionStepProps {
  label: string;
  delay: number;
  branches?: Array<{ label: string; action: string; color: string }>;
}

function DecisionStep({ label, delay, branches = [] }: DecisionStepProps) {
  return (
    <motion.div
      className="w-full mb-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-yellow-500/30 via-orange-500/20 to-yellow-500/30 border-2 border-yellow-400 transform rotate-45 flex items-center justify-center mb-5 md:mb-6 shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-pulse">
          <div className="transform -rotate-45 text-center px-3">
            <div className="font-bold text-sm md:text-base lg:text-lg bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">{label}</div>
          </div>
        </div>
        {branches.length > 0 && (
          <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-3">
            {branches.map((branch, i) => (
              <div key={i} className={`text-sm md:text-base lg:text-lg text-center p-4 md:p-5 lg:p-6 rounded-lg bg-gradient-to-r ${branch.color.includes('blue') ? 'from-cyan-500/10 to-blue-500/10 border-cyan-400/30' : branch.color.includes('green') ? 'from-green-500/10 to-emerald-500/10 border-green-400/30' : branch.color.includes('yellow') ? 'from-yellow-500/10 to-orange-500/10 border-yellow-400/30' : 'from-red-500/10 to-pink-500/10 border-red-400/30'} border shadow-[0_0_10px_rgba(168,85,247,0.2)]`}>
                <div className="font-semibold text-base md:text-lg lg:text-xl mb-2">{branch.label}</div>
                <div className="text-gray-400 text-sm md:text-base lg:text-lg mt-1">→ {branch.action}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface OutcomeStepProps {
  label: string;
  icon?: 'check' | 'x' | 'clock' | 'eye';
  color: string;
  delay: number;
  nextAction?: string;
}

function OutcomeStep({ label, icon, color, delay, nextAction }: OutcomeStepProps) {
  const neonStyles = {
    green: {
      bg: 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/10',
      border: 'border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]',
      text: 'text-green-400',
    },
    red: {
      bg: 'bg-gradient-to-br from-red-500/20 via-pink-500/20 to-red-500/10',
      border: 'border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]',
      text: 'text-red-400',
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-orange-500/10',
      border: 'border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.3)]',
      text: 'text-orange-400',
    },
    blue: {
      bg: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-cyan-500/10',
      border: 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]',
      text: 'text-cyan-400',
    },
  };

  const style = neonStyles[color as keyof typeof neonStyles] || neonStyles.green;
  const IconComponent = icon === 'check' ? CheckCircle : icon === 'x' ? XCircle : icon === 'clock' ? Clock : icon === 'eye' ? Eye : null;

  return (
    <motion.div
      className="w-full mb-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <GlassCard className={`p-4 md:p-5 lg:p-6 border-2 ${style.bg} ${style.border} transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
        <div className={`text-sm md:text-base lg:text-lg font-semibold text-center flex items-center justify-center gap-2 mb-2 ${style.text}`}>
          {IconComponent && <IconComponent className="w-5 h-5 md:w-6 md:h-6" />}
          {label}
        </div>
        {nextAction && (
          <div className="text-xs md:text-sm lg:text-base text-gray-400 text-center mt-2">
            → {nextAction}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
}

function ArrowConnector({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex justify-center my-3 md:my-4"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))' }} />
        <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-purple-400 absolute top-0 left-0 opacity-50" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }} />
      </motion.div>
    </motion.div>
  );
}

export function DetailedFlowchart() {
  return (
    <div className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Lead Generation */}
        <FlowStep
          title="LEAD GENERATION"
          items={['Meta / Google Ads', 'Manual Import', 'Sales Forms', 'Website Form', 'WhatsApp', 'IVR / Call']}
          bgColor="bg-blue-500/20"
          borderColor="border-blue-500"
          delay={0}
        />

        <ArrowConnector delay={0.15} />

        {/* System Actions */}
        <FlowStep
          title="SYSTEM ACTIONS"
          items={['Auto-Capture Lead Data', 'De-duplication Check']}
          bgColor="bg-gray-500/20"
          borderColor="border-gray-500"
          delay={0.2}
        />

        <ArrowConnector delay={0.25} />

        {/* Decision: Duplicate */}
        <DecisionStep 
          label="Duplicate?" 
          delay={0.3}
          branches={[
            { label: 'Yes - Duplicate Found', action: 'Merge with Existing Lead', color: 'text-blue-400 border-blue-400' },
            { label: 'No - New Lead', action: 'Continue to Create Lead ID', color: 'text-green-400 border-green-400' }
          ]}
        />

        <ArrowConnector delay={0.4} />

        {/* Create Lead ID */}
        <FlowStep
          title="Create Lead ID"
          items={['Auto-Assign Sales Rep', 'Generate Unique Lead ID']}
          bgColor="bg-gray-500/20"
          borderColor="border-gray-500"
          delay={0.5}
        />

        <ArrowConnector delay={0.6} />

        {/* New Lead Created */}
        <FlowStep
          title="New Lead Created"
          items={['Auto WhatsApp/SMS Ack', 'Notify Sales Rep', 'Start SLA Timer']}
          bgColor="bg-yellow-500/20"
          borderColor="border-yellow-500"
          delay={0.7}
        />

        <ArrowConnector delay={0.8} />

        {/* Sales Rep Calls Lead */}
        <FlowStep
          title="Sales Rep Calls Lead"
          items={['First Contact Attempt', 'Update Call Status']}
          bgColor="bg-purple-500/20"
          borderColor="border-purple-500"
          delay={0.9}
        />

        <ArrowConnector delay={1.0} />

        {/* Call Outcomes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2 w-full">
          <OutcomeStep 
            label="✔ Connected" 
            icon="check" 
            color="green" 
            delay={1.1}
            nextAction="Proceed to Qualify"
          />
          <OutcomeStep 
            label="X Not Reachable" 
            icon="x" 
            color="red" 
            delay={1.15}
            nextAction="Schedule Follow-up"
          />
          <OutcomeStep 
            label="X Wrong Number" 
            icon="x" 
            color="red" 
            delay={1.2}
            nextAction="Discard Lead"
          />
          <OutcomeStep 
            label="🕒 Call Later" 
            icon="clock" 
            color="orange" 
            delay={1.25}
            nextAction="Schedule Follow-up"
          />
        </div>

        <ArrowConnector delay={1.3} />

        {/* Qualify Lead */}
        <FlowStep
          title="Qualify Lead"
          items={['🔥 Hot - Fast Track', '🌡️ Warm - Nurture Flow', '❄️ Cold - Nurture Flow', 'Unqualified - Discard']}
          bgColor="bg-green-500/20"
          borderColor="border-green-500"
          delay={1.4}
        />

        <ArrowConnector delay={1.5} />

        {/* Generate Quote */}
        <FlowStep
          title="Generate Quote"
          items={['Create Quote with GST', 'Send via WhatsApp/Email', 'Track Quote Status']}
          bgColor="bg-blue-500/20"
          borderColor="border-blue-500"
          delay={1.6}
        />

        <ArrowConnector delay={1.7} />

        {/* Quote Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2 w-full max-w-4xl mx-auto">
          <OutcomeStep 
            label="👁️ Viewed" 
            icon="eye" 
            color="blue" 
            delay={1.8}
            nextAction="Follow-up"
          />
          <OutcomeStep 
            label="Accepted" 
            icon="check" 
            color="green" 
            delay={1.85}
            nextAction="Move to Decision"
          />
          <OutcomeStep 
            label="Expired" 
            icon="x" 
            color="red" 
            delay={1.9}
            nextAction="Follow-up"
          />
        </div>

        <ArrowConnector delay={2.0} />

        {/* Decision Point */}
        <DecisionStep 
          label="Decision Point" 
          delay={2.1}
          branches={[
            { label: 'Interested 🟢', action: 'Continue Negotiation', color: 'text-green-400 border-green-400' },
            { label: 'Negotiation 🟡', action: 'Schedule Follow-up', color: 'text-yellow-400 border-yellow-400' },
            { label: 'Lost 🔴', action: 'Capture Reason & Archive', color: 'text-red-400 border-red-400' }
          ]}
        />

        <ArrowConnector delay={2.2} />

        {/* Deal Won */}
        <FlowStep
          title="✔ Deal Won"
          items={['Convert Lead to Customer', 'Generate Job Card / Order', 'Assign Ops / Delivery Team']}
          bgColor="bg-green-600/20"
          borderColor="border-green-600"
          delay={2.3}
        />

        <ArrowConnector delay={2.4} />

        {/* Payment Status */}
        <FlowStep
          title="Payment Status"
          items={['Payment Pending - Remind', 'Advance Received - Track Balance', '✔ Fully Paid - Complete']}
          bgColor="bg-green-500/20"
          borderColor="border-green-500"
          delay={2.5}
        />

        <ArrowConnector delay={2.6} />

        {/* Post-Sale Actions */}
        <FlowStep
          title="Post-Sale Actions"
          items={['Request Feedback', 'Send Google Review Link', 'Upsell / Cross-sell Reminder']}
          bgColor="bg-blue-500/20"
          borderColor="border-blue-500"
          delay={2.7}
        />
      </div>
    </div>
  );
}
