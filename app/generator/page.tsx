'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type WorksheetType = 'letters' | 'numbers' | 'shapes';
type Theme = 'animals' | 'vehicles' | 'fruits';

interface GeneratorState {
  type: WorksheetType | null;
  theme: Theme | null;
}

const worksheetTypes = [
  { 
    id: 'letters' as const, 
    label: 'Letters A-Z', 
    icon: '🔤', 
    description: 'Practice the alphabet with tracing and coloring',
    color: 'from-blue-400 to-blue-600'
  },
  { 
    id: 'numbers' as const, 
    label: 'Numbers 1-20', 
    icon: '🔢', 
    description: 'Learn to count and write numbers',
    color: 'from-green-400 to-green-600'
  },
  { 
    id: 'shapes' as const, 
    label: 'Shapes', 
    icon: '🔷', 
    description: 'Recognize and draw basic shapes',
    color: 'from-purple-400 to-purple-600'
  },
];

const themes = [
  { id: 'animals' as const, label: 'Animals', icon: '🦁', examples: '🦁 🐘 🐵 🦒 🐻' },
  { id: 'vehicles' as const, label: 'Vehicles', icon: '🚗', examples: '🚗 ✈️ 🚂 🚲 🚀' },
  { id: 'fruits' as const, label: 'Fruits', icon: '🍎', examples: '🍎 🍊 🍇 🍌 🍓' },
];

export default function GeneratorPage() {
  const router = useRouter();
  const [state, setState] = useState<GeneratorState>({
    type: null,
    theme: null,
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!state.type || !state.theme) return;
    
    setIsGenerating(true);
    
    // Navigate to result page with query params
    const params = new URLSearchParams({
      type: state.type,
      theme: state.theme,
    });
    
    router.push(`/result?${params.toString()}`);
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎨 Create Your Worksheet
          </h1>
          <p className="text-xl text-gray-600">
            Choose a type and theme, then let the magic happen!
          </p>
        </div>

        {/* Step 1: Choose Type */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-secondary-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              1
            </span>
            <h2 className="text-2xl font-bold">Choose Worksheet Type</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {worksheetTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setState(prev => ({ ...prev, type: type.id }))}
                className={`card-fun text-center cursor-pointer transform transition-all duration-300 ${
                  state.type === type.id 
                    ? 'ring-4 ring-secondary-400 scale-105' 
                    : 'hover:scale-102'
                }`}
              >
                <div className="text-5xl mb-3">{type.icon}</div>
                <h3 className="text-xl font-bold mb-2">{type.label}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
                {state.type === type.id && (
                  <div className="mt-3 text-secondary-500 font-bold">✓ Selected</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Choose Theme */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              2
            </span>
            <h2 className="text-2xl font-bold">Choose a Fun Theme</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setState(prev => ({ ...prev, theme: theme.id }))}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg cursor-pointer transform transition-all duration-300 ${
                  state.theme === theme.id 
                    ? 'ring-4 ring-primary-400 scale-105' 
                    : 'hover:scale-102'
                }`}
              >
                <div className="text-5xl mb-3">{theme.icon}</div>
                <h3 className="text-xl font-bold mb-2">{theme.label}</h3>
                <div className="text-2xl">{theme.examples}</div>
                {state.theme === theme.id && (
                  <div className="mt-3 text-primary-500 font-bold">✓ Selected</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={handleGenerate}
            disabled={!state.type || !state.theme || isGenerating}
            className={`btn-fun text-xl px-12 py-5 ${
              state.type && state.theme
                ? 'bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-500 hover:to-secondary-500'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isGenerating ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </span>
            ) : (
              <span>🎉 Generate Worksheet!</span>
            )}
          </button>
          
          {(!state.type || !state.theme) && (
            <p className="mt-4 text-gray-500">
              Please select both a type and theme to continue
            </p>
          )}
        </div>

        {/* Preview Card */}
        {state.type && state.theme && (
          <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-primary-300">
            <h3 className="text-xl font-bold mb-4 text-center">📋 Your Selection</h3>
            <div className="flex justify-center gap-8 text-lg">
              <div>
                <span className="text-gray-600">Type:</span>{' '}
                <span className="font-bold text-secondary-500">
                  {worksheetTypes.find(t => t.id === state.type)?.label}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Theme:</span>{' '}
                <span className="font-bold text-primary-500">
                  {themes.find(t => t.id === state.theme)?.label}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
