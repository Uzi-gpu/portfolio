import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

const toastVariants = {
  hidden: {
    x: 80,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 18
    }
  },
  exit: {
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.25
    }
  }
}

const iconVariants = {
  success: { color: "text-emerald-400", icon: CheckCircle },
  error: { color: "text-red-400", icon: AlertCircle },
  info: { color: "text-blue-400", icon: Info },
  warning: { color: "text-amber-400", icon: AlertCircle }
}

function Toast({ message, type = 'info', onClose }) {
  const config = iconVariants[type] || iconVariants.info
  const Icon = config.icon

  return (
    <motion.div
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="glass-card p-4 min-w-[280px] max-w-sm flex items-center gap-3 border-l-3"
      style={{
        borderLeftColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#3b82f6'
      }}
    >
      <div className={`${config.color} flex-shrink-0`}>
        <Icon size={18} />
      </div>
      <div className="flex-1">
        <p className="text-white font-medium text-sm">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-slate-500 hover:text-white transition-colors p-1"
      >
        <X size={14} />
      </button>
    </motion.div>
  )
}

// Export a function to add toasts globally
let toastCallback = null

export const registerToast = (callback) => {
  toastCallback = callback
}

export const showToast = (message, type = 'info') => {
  if (toastCallback) {
    toastCallback(message, type)
  }
}

export default Toast
