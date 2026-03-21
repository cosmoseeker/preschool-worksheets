'use client';

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type WorksheetType = 'letters' | 'numbers' | 'shapes';
type Theme = 'animals' | 'vehicles' | 'fruits';

// Theme icons mapping
const themeIcons: Record<Theme, string[]> = {
  animals: ['🦁', '🐘', '🐵', '🦒', '🐻', '🐰', '🦊', '🐼', '🐨', '🐯'],
  vehicles: ['🚗', '✈️', '🚂', '🚲', '🚀', '🚁', '🛥️', '🚌', '🏍️', '🚜'],
  fruits: ['🍎', '🍊', '🍇', '🍌', '🍓', '🍑', '🍒', '🥝', '🍋', '🍐'],
};

// Generate letters data
function generateLettersData(theme: Theme) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return letters.map((letter, index) => ({
    letter,
    icon: themeIcons[theme][index % themeIcons[theme].length],
  }));
}

// Generate numbers data
function generateNumbersData(theme: Theme) {
  return Array.from({ length: 20 }, (_, i) => ({
    number: i + 1,
    icon: themeIcons[theme][i % themeIcons[theme].length],
    count: i + 1,
  }));
}

// Generate shapes data
function generateShapesData(theme: Theme) {
  const shapes = [
    { name: 'Circle', icon: '⭕', color: '#FF6B6B' },
    { name: 'Square', icon: '⬛', color: '#4ECDC4' },
    { name: 'Triangle', icon: '🔺', color: '#FFE66D' },
    { name: 'Rectangle', icon: '🟦', color: '#95E1D3' },
    { name: 'Star', icon: '⭐', color: '#F38181' },
    { name: 'Heart', icon: '❤️', color: '#AA96DA' },
  ];
  
  return shapes.map((shape, index) => ({
    ...shape,
    themeIcon: themeIcons[theme][index % themeIcons[theme].length],
  }));
}

// Letter Worksheet SVG Component
function LetterWorksheetSVG({ letter, icon }: { letter: string; icon: string }) {
  return (
    <svg viewBox="0 0 200 250" className="w-full h-auto border-2 border-gray-200 rounded-lg bg-white">
      {/* Header */}
      <rect x="0" y="0" width="200" height="40" fill="#DBEAFE" />
      <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E40AF">
        Practice Letter
      </text>
      
      {/* Big Letter */}
      <text x="100" y="110" textAnchor="middle" fontSize="72" fontWeight="bold" fill="#3B82F6">
        {letter}
      </text>
      
      {/* Tracing lines */}
      <g opacity="0.3">
        <line x1="30" y1="140" x2="170" y2="140" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="30" y1="170" x2="170" y2="170" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="30" y1="200" x2="170" y2="200" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
      </g>
      
      {/* Theme icon */}
      <text x="170" y="95" fontSize="32">{icon}</text>
      
      {/* Small letters for tracing */}
      <text x="100" y="165" textAnchor="middle" fontSize="32" fill="#E5E7EB">{letter}</text>
      <text x="100" y="195" textAnchor="middle" fontSize="32" fill="#E5E7EB">{letter}</text>
      
      {/* Footer instruction */}
      <text x="100" y="235" textAnchor="middle" fontSize="10" fill="#6B7280">
        Trace and color the letter!
      </text>
    </svg>
  );
}

// Number Worksheet SVG Component
function NumberWorksheetSVG({ number, icon, count }: { number: number; icon: string; count: number }) {
  // Generate count icons
  const icons = Array(count).fill(icon);
  const displayIcons = icons.slice(0, Math.min(count, 10)); // Max 10 icons display
  
  return (
    <svg viewBox="0 0 200 250" className="w-full h-auto border-2 border-gray-200 rounded-lg bg-white">
      {/* Header */}
      <rect x="0" y="0" width="200" height="40" fill="#D1FAE5" />
      <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065F46">
        Count: {count}
      </text>
      
      {/* Big Number */}
      <text x="100" y="105" textAnchor="middle" fontSize="64" fontWeight="bold" fill="#10B981">
        {number}
      </text>
      
      {/* Counting icons */}
      <g>
        {displayIcons.map((ic, idx) => (
          <text 
            key={idx}
            x={30 + (idx % 5) * 35} 
            y={150 + Math.floor(idx / 5) * 30}
            fontSize="24"
          >
            {ic}
          </text>
        ))}
      </g>
      
      {/* Tracing lines */}
      <g opacity="0.3">
        <line x1="30" y1="200" x2="170" y2="200" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="30" y1="225" x2="170" y2="225" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
      </g>
      
      {/* Trace number */}
      <text x="100" y="220" textAnchor="middle" fontSize="24" fill="#E5E7EB">{number}</text>
      
      {/* Footer instruction */}
      <text x="100" y="245" textAnchor="middle" fontSize="10" fill="#6B7280">
        Count and trace!
      </text>
    </svg>
  );
}

// Shape Worksheet SVG Component
function ShapeWorksheetSVG({ name, icon, color, themeIcon }: { 
  name: string; 
  icon: string; 
  color: string; 
  themeIcon: string;
}) {
  // Map shape names to actual SVG shapes
  const renderShape = () => {
    switch (name) {
      case 'Circle':
        return <circle cx="100" cy="100" r="40" fill={color} opacity="0.3" stroke={color} strokeWidth="3" />;
      case 'Square':
        return <rect x="60" y="60" width="80" height="80" fill={color} opacity="0.3" stroke={color} strokeWidth="3" />;
      case 'Triangle':
        return <polygon points="100,55 145,135 55,135" fill={color} opacity="0.3" stroke={color} strokeWidth="3" />;
      case 'Rectangle':
        return <rect x="50" y="70" width="100" height="60" fill={color} opacity="0.3" stroke={color} strokeWidth="3" />;
      case 'Star':
        return (
          <polygon 
            points="100,50 115,85 155,85 125,110 135,150 100,130 65,150 75,110 45,85 85,85" 
            fill={color} 
            opacity="0.3" 
            stroke={color} 
            strokeWidth="3" 
          />
        );
      case 'Heart':
        return (
          <path 
            d="M100,150 C100,150 50,120 50,85 C50,60 75,50 100,75 C125,50 150,60 150,85 C150,120 100,150 100,150 Z" 
            fill={color} 
            opacity="0.3" 
            stroke={color} 
            strokeWidth="3" 
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <svg viewBox="0 0 200 250" className="w-full h-auto border-2 border-gray-200 rounded-lg bg-white">
      {/* Header */}
      <rect x="0" y="0" width="200" height="40" fill="#F3E8FF" />
      <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#6B21A8">
        {name}
      </text>
      
      {/* Shape */}
      {renderShape()}
      
      {/* Theme icon */}
      <text x="155" y="85" fontSize="28">{themeIcon}</text>
      
      {/* Shape name to trace */}
      <text x="100" y="175" textAnchor="middle" fontSize="20" fontWeight="bold" fill={color}>
        {name}
      </text>
      
      {/* Tracing lines */}
      <g opacity="0.3">
        <line x1="30" y1="195" x2="170" y2="195" stroke={color} strokeWidth="2" strokeDasharray="5,5" />
        <line x1="30" y1="220" x2="170" y2="220" stroke={color} strokeWidth="2" strokeDasharray="5,5" />
      </g>
      
      {/* Trace shape name */}
      <text x="100" y="215" textAnchor="middle" fontSize="16" fill="#E5E7EB">{name}</text>
      
      {/* Footer instruction */}
      <text x="100" y="242" textAnchor="middle" fontSize="10" fill="#6B7280">
        Color and trace the shape!
      </text>
    </svg>
  );
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const worksheetRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [data, setData] = useState<{
    type: WorksheetType;
    theme: Theme;
    items: any[];
  } | null>(null);

  useEffect(() => {
    const type = searchParams.get('type') as WorksheetType;
    const theme = searchParams.get('theme') as Theme;
    
    if (!type || !theme) return;
    
    let items: any[] = [];
    
    switch (type) {
      case 'letters':
        items = generateLettersData(theme);
        break;
      case 'numbers':
        items = generateNumbersData(theme);
        break;
      case 'shapes':
        items = generateShapesData(theme);
        break;
    }
    
    setData({ type, theme, items });
  }, [searchParams]);

  const downloadPDF = async () => {
    if (!worksheetRef.current || !data) return;
    
    setIsDownloading(true);
    
    try {
      // Dynamic import for client-side only
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      
      const canvas = await html2canvas(worksheetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate dimensions to fit the page
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      // Center the image
      const x = (pdfWidth - imgWidth * ratio) / 2;
      const y = 10;
      
      pdf.addImage(imgData, 'PNG', x, y, imgWidth * ratio, imgHeight * ratio);
      
      // Generate filename
      const typeNames = {
        letters: 'Alphabet',
        numbers: 'Numbers',
        shapes: 'Shapes',
      };
      
      const filename = `Preschool_${typeNames[data.type]}_${data.theme}.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (!data) {
    return (
      <main className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <p className="text-xl">Loading your worksheet...</p>
        </div>
      </main>
    );
  }

  const getTypeTitle = () => {
    switch (data.type) {
      case 'letters': return 'Alphabet Practice';
      case 'numbers': return 'Number Fun';
      case 'shapes': return 'Shape Learning';
    }
  };

  const getThemeTitle = () => {
    return data.theme.charAt(0).toUpperCase() + data.theme.slice(1) + ' Theme';
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎉 Your Worksheet is Ready!
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {getTypeTitle()} • {getThemeTitle()}
          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={downloadPDF}
              disabled={isDownloading}
              className={`btn-fun ${
                isDownloading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600'
              }`}
            >
              {isDownloading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating PDF...
                </span>
              ) : (
                <span>📄 Download PDF</span>
              )}
            </button>
            
            <Link 
              href="/generator"
              className="btn-fun bg-gradient-to-r from-secondary-400 to-blue-500 hover:from-secondary-500 hover:to-blue-600"
            >
              🔄 Create Another
            </Link>
            
            <Link 
              href="/"
              className="btn-fun bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400"
            >
              🏠 Home
            </Link>
          </div>
        </div>

        {/* Worksheet Display */}
        <div 
          ref={worksheetRef}
          className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-primary-200"
        >
          {/* Worksheet Header */}
          <div className="text-center mb-8 pb-4 border-b-2 border-dashed border-gray-200">
            <div className="text-4xl mb-2">
              {themeIcons[data.theme].slice(0, 5).join(' ')}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {getTypeTitle()}
            </h2>
            <p className="text-gray-600">{getThemeTitle()}</p>
            <p className="text-sm text-gray-400 mt-2">
              Name: ____________________ • Date: __________
            </p>
          </div>

          {/* Worksheet Grid */}
          <div className={`grid gap-6 ${
            data.type === 'letters' 
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
              : data.type === 'numbers'
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              : 'grid-cols-2 sm:grid-cols-3'
          }`}>
            {data.type === 'letters' && data.items.map((item, index) => (
              <div key={index} className="worksheet-item">
                <LetterWorksheetSVG letter={item.letter} icon={item.icon} />
              </div>
            ))}
            
            {data.type === 'numbers' && data.items.map((item, index) => (
              <div key={index} className="worksheet-item">
                <NumberWorksheetSVG 
                  number={item.number} 
                  icon={item.icon} 
                  count={item.count} 
                />
              </div>
            ))}
            
            {data.type === 'shapes' && data.items.map((item, index) => (
              <div key={index} className="worksheet-item">
                <ShapeWorksheetSVG 
                  name={item.name}
                  icon={item.icon}
                  color={item.color}
                  themeIcon={item.themeIcon}
                />
              </div>
            ))}
          </div>

          {/* Worksheet Footer */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              Great job! Keep practicing! 🌟
            </p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">💡 Tips for Parents & Teachers</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Print on regular paper for tracing practice</li>
            <li>✅ Use crayons, markers, or colored pencils for coloring</li>
            <li>✅ Laminate for reusable practice with dry-erase markers</li>
            <li>✅ Make it fun! Turn learning into a game</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
