import { motion } from 'motion/react';
import { Info, GitBranch, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 70; // keep a small offset for readability
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="flex gap-3 max-w-xl mx-auto">
          <motion.button
            onClick={() => scrollToSection('info')}
            className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm"
            whileTap={{ scale: 0.95 }}
          >
            <Info className="w-4 h-4" />
            Information
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('flowchart')}
            className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm"
            whileTap={{ scale: 0.95 }}
          >
            <GitBranch className="w-4 h-4" />
            Flow Chart
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('quotation')}
            className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm"
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-4 h-4" />
            Quotation
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
