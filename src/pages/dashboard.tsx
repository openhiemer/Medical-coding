import { motion } from 'framer-motion';
import { ProgressSteps } from '@/components/ui/progress-steps';
import { Dropzone } from '@/components/upload/dropzone';
import { Brain, Clock, FileText } from 'lucide-react';

const stats = [
  {
    name: 'Documents Processed',
    value: '1,234',
    icon: FileText,
  },
  {
    name: 'Average Processing Time',
    value: '< 30s',
    icon: Clock,
  },
  {
    name: 'AI Accuracy Rate',
    value: '98.5%',
    icon: Brain,
  },
];

export function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Medical Code Processing</h1>
        <p className="mt-2 text-gray-600">
          Upload your medical documents and let AI handle the coding
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12"
      >
        <ProgressSteps />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <stat.icon className="h-6 w-6 text-gray-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dropzone />
    </div>
  );
}