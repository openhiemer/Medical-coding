import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useState } from 'react';

export function UploadSection() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <div
      className={`mt-8 rounded-lg border-2 border-dashed p-8 text-center ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">Upload medical documents</h3>
      <p className="mt-1 text-sm text-gray-500">Drag and drop your files here, or click to select files</p>
      <div className="mt-4">
        <Button size="sm">
          Select Files
          <input type="file" className="hidden" accept=".pdf,.doc,.docx" multiple />
        </Button>
      </div>
      <p className="mt-2 text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
    </div>
  );
}