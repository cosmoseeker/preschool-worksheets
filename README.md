# 🎨 Preschool Worksheets Generator

An AI-powered web application that generates fun and engaging educational worksheets for preschool children (ages 3-6).

## ✨ Features

- **Letter Practice (A-Z)**: Alphabet tracing and recognition worksheets
- **Number Practice (1-20)**: Counting and number tracing activities
- **Shape Learning**: Basic shape recognition and drawing practice
- **Fun Themes**: 
  - 🦁 Animals
  - 🚗 Vehicles
  - 🍎 Fruits
- **PDF Download**: Save and print worksheets instantly

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd preschool-worksheets
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **PDF Generation**: html2canvas + jsPDF

## 📁 Project Structure

```
preschool-worksheets/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── generator/
│   │   └── page.tsx        # Worksheet generator page
│   └── result/
│       └── page.tsx        # Generated worksheet display
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Usage

1. **Home Page**: Learn about the app and its features
2. **Generator Page**: 
   - Select worksheet type (Letters, Numbers, or Shapes)
   - Choose a fun theme (Animals, Vehicles, or Fruits)
   - Click "Generate Worksheet"
3. **Result Page**: 
   - View your generated worksheet
   - Download as PDF
   - Print and use!

## 🖼️ Worksheet Types

### Letters (A-Z)
- Uppercase letter display
- Tracing lines for practice
- Theme-based icons for engagement

### Numbers (1-20)
- Number display
- Counting icons (visual representation)
- Tracing practice

### Shapes
- 6 basic shapes: Circle, Square, Triangle, Rectangle, Star, Heart
- Visual shape representation
- Name tracing practice

## 🎨 Themes

Each theme provides unique icons to make learning fun:

- **Animals**: 🦁 🐘 🐵 🦒 🐻 🐰 🦊 🐼 🐨 🐯
- **Vehicles**: 🚗 ✈️ 🚂 🚲 🚀 🚁 🛥️ 🚌 🏍️ 🚜
- **Fruits**: 🍎 🍊 🍇 🍌 🍓 🍑 🍒 🥝 🍋 🍐

## 📝 Tips for Parents & Teachers

- Print on regular paper for tracing practice
- Use crayons, markers, or colored pencils for coloring
- Laminate for reusable practice with dry-erase markers
- Make it fun! Turn learning into a game

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

Made with ❤️ for little learners everywhere
