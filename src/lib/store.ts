import { create } from 'zustand';

interface ProcessingStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
}

interface DocumentState {
  currentStep: number;
  steps: ProcessingStep[];
  setCurrentStep: (step: number) => void;
  updateStepStatus: (stepId: number, status: ProcessingStep['status']) => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  currentStep: 0,
  steps: [
    {
      id: 1,
      title: 'Document Upload',
      description: 'Upload your medical documents',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Text Extraction',
      description: 'Extracting text from documents',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Code Analysis',
      description: 'Analyzing text for medical codes',
      status: 'pending',
    },
    {
      id: 4,
      title: 'Review',
      description: 'Review and confirm generated codes',
      status: 'pending',
    },
  ],
  setCurrentStep: (step) => set({ currentStep: step }),
  updateStepStatus: (stepId, status) =>
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === stepId ? { ...step, status } : step
      ),
    })),
}));