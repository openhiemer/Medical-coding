import { Button } from '@/components/ui/button';
import { FileText, Home, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-bold text-gray-900">MedCode AI</span>
          </Link>
          <nav className="ml-8 hidden space-x-4 lg:flex">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-600 transition-colors hover:text-gray-900"
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center space-x-1 text-gray-600 transition-colors hover:text-gray-900"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign in</Button>
          <Button
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </motion.header>
  );
}