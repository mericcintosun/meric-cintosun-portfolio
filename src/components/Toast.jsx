"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Toast({ message, isVisible, onClose, type = "info" }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const bgColor =
    type === "info"
      ? "bg-purple-600/95"
      : type === "warning"
        ? "bg-amber-600/95"
        : "bg-blue-600/95";

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 300,
              duration: 0.4
            }
          }}
          exit={{ 
            opacity: 0, 
            y: -100, 
            scale: 0.5,
            transition: {
              duration: 0.3,
              ease: "easeIn"
            }
          }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[99999] pointer-events-auto"
          style={{ 
            isolation: "isolate",
            willChange: "transform, opacity"
          }}
        >
          <motion.div
            className={`${bgColor} backdrop-blur-xl text-white px-6 py-4 rounded-xl shadow-2xl border border-white/30 flex items-center gap-3 min-w-[280px] max-w-md`}
            whileHover={{ scale: 1.02 }}
            style={{ 
              isolation: "isolate",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ 
                rotate: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  delay: 0.1
                }
              }}
              style={{ 
                isolation: "isolate"
              }}
            >
              {type === "info" && (
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {type === "warning" && (
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              )}
            </motion.div>
            <motion.span 
              className="font-medium text-sm sm:text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.3
                }
              }}
            >
              {message}
            </motion.span>
            <motion.button
              onClick={onClose}
              className="ml-auto hover:bg-white/10 rounded-full p-1.5 transition-colors flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ 
                opacity: 1, 
                rotate: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              }}
              style={{ 
                isolation: "isolate"
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
