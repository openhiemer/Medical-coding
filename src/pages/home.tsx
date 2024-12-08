import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Brain, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms for accurate medical coding',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process documents in seconds, not hours',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Secure, encrypted, and compliant with healthcare regulations',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: 49,
    features: ['100 documents/month', 'Basic support', 'Standard processing'],
  },
  {
    name: 'Professional',
    price: 99,
    features: ['500 documents/month', 'Priority support', 'Advanced analytics'],
  },
  {
    name: 'Enterprise',
    price: 199,
    features: ['Unlimited documents', '24/7 support', 'Custom integration'],
  },
];

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Automate Your Medical Coding
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            >
              Transform your medical coding workflow with AI-powered automation.
              Save time, reduce errors, and increase efficiency.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link to="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-sm text-gray-600">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <span className="ml-3 text-sm text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full">Get Started</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}