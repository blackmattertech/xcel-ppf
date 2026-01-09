import React from 'react';
import { motion } from 'motion/react';
import { Info, GitBranch, FileText } from 'lucide-react';

type TabType = 'info' | 'flowchart' | 'quotation';

interface StickyBottomBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function StickyBottomBar({ activeTab, onTabChange }: StickyBottomBarProps) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="flex gap-3 max-w-xl mx-auto">
          <motion.button
            onClick={() => onTabChange('quotation')}
            className={`flex-1 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm ${
              activeTab === 'quotation'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                : 'bg-gradient-to-r from-green-500/50 to-emerald-500/50'
            }`}
            whileTap={{ scale: 0.95 }}
            animate={
              activeTab === 'quotation'
                ? {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 10px 25px -5px rgba(16, 185, 129, 0.3)',
                      '0 10px 40px -5px rgba(16, 185, 129, 0.6)',
                      '0 10px 25px -5px rgba(16, 185, 129, 0.3)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: activeTab === 'quotation' ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <FileText className="w-4 h-4" />
            Commercials
          </motion.button>

          <motion.button
            onClick={() => onTabChange('flowchart')}
            className={`flex-1 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm ${
              activeTab === 'flowchart'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                : 'bg-gradient-to-r from-purple-500/50 to-pink-500/50'
            }`}
            whileTap={{ scale: 0.95 }}
            animate={
              activeTab === 'flowchart'
                ? {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 10px 25px -5px rgba(168, 85, 247, 0.3)',
                      '0 10px 40px -5px rgba(168, 85, 247, 0.6)',
                      '0 10px 25px -5px rgba(168, 85, 247, 0.3)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: activeTab === 'flowchart' ? Infinity : 0,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            <GitBranch className="w-4 h-4" />
            Flow Chart
          </motion.button>

          <motion.button
            onClick={() => onTabChange('info')}
            className={`flex-1 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm ${
              activeTab === 'info'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                : 'bg-gradient-to-r from-cyan-500/50 to-blue-500/50'
            }`}
            whileTap={{ scale: 0.95 }}
            animate={
              activeTab === 'info'
                ? {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 10px 25px -5px rgba(6, 182, 212, 0.3)',
                      '0 10px 40px -5px rgba(6, 182, 212, 0.6)',
                      '0 10px 25px -5px rgba(6, 182, 212, 0.3)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: activeTab === 'info' ? Infinity : 0,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          >
            <Info className="w-4 h-4" />
            Information
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
