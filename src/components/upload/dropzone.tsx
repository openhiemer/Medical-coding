import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { AlertCircle, Upload } from 'lucide-react';
import { useDocumentStore } from '@/lib/store';
import { supabase } from '@/lib/supabase';

export function Dropzone() {
  const { setCurrentStep, updateStepStatus } = useDocumentStore();
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setError(null);
      updateStepStatus(1, 'processing');
      
      if (!supabase) {
        throw new Error('Supabase client is not initialized');
      }

      for (const file of acceptedFiles) {
        if (file.size > 10 * 1024 * 1024) {
          throw new Error('File size exceeds 10MB limit');
        }

        const { error: uploadError } = await supabase.storage
          .from('medical-documents')
          .upload(`${Date.now()}-${file.name}`, file);

        if (uploadError) {
          throw uploadError;
        }
      }

      updateStepStatus(1, 'completed');
      setCurrentStep(2);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during upload');
      updateStepStatus(1, 'error');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        {...getRootProps()}
        className={`mt-8 rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
          isDragActive ? 'border-gray-900 bg-gray-50' : error ? 'border-red-300' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className={`mx-auto h-12 w-12 ${error ? 'text-red-400' : 'text-gray-400'}`} />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">
          Upload medical documents
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Drag and drop your files here, or click to select files
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Supported formats: PDF, DOC, DOCX (up to 10MB)
        </p>
        {error && (
          <div className="mt-4 flex items-center justify-center text-sm text-red-500">
            <AlertCircle className="mr-2 h-4 w-4" />
            {error}
          </div>
        )}
      </div>
    </motion.div>
  );
}