import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { useDocumentStore } from '@/lib/store';

export function ProgressSteps() {
  const { steps, currentStep } = useDocumentStore();

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-gray-300"
              >
                {step.status === 'completed' ? (
                  <Check className="h-6 w-6 text-green-600" />
                ) : step.status === 'processing' ? (
                  <Loader2 className="h-6 w-6 text-gray-600 animate-spin" />
                ) : (
                  <span className="text-sm font-medium text-gray-600">{step.id}</span>
                )}
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="mt-2 text-center"
              >
                <div className="text-sm font-medium text-gray-900">{step.title}</div>
                <div className="text-xs text-gray-500">{step.description}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}