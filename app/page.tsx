import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center gap-4 text-6xl animate-bounce-slow">
            <span>🔤</span>
            <span>🔢</span>
            <span>🔷</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
              Preschool Worksheets
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Generator</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Create fun and engaging learning worksheets for your little ones! 
            Perfect for ages 3-6 🌟
          </p>
          
          <Link 
            href="/generator"
            className="btn-fun bg-gradient-to-r from-primary-400 to-secondary-400 text-xl px-10 py-4 inline-block"
          >
            🎉 Start Creating Now!
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Can You Create? 🤔
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Letters Card */}
            <div className="card-fun text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary-500">Letter Practice</h3>
              <p className="text-gray-600">
                A to Z worksheets with fun themes! Trace, color, and learn the alphabet.
              </p>
              <ul className="mt-4 text-left text-gray-700">
                <li>✨ Uppercase letters</li>
                <li>✨ Lowercase letters</li>
                <li>✨ Letter recognition</li>
              </ul>
            </div>

            {/* Numbers Card */}
            <div className="card-fun text-center">
              <div className="text-6xl mb-4">🔢</div>
              <h3 className="text-2xl font-bold mb-3 text-primary-500">Number Fun</h3>
              <p className="text-gray-600">
                Numbers 1-20 with counting activities and visual aids.
              </p>
              <ul className="mt-4 text-left text-gray-700">
                <li>✨ Number tracing</li>
                <li>✨ Counting practice</li>
                <li>✨ Number recognition</li>
              </ul>
            </div>

            {/* Shapes Card */}
            <div className="card-fun text-center">
              <div className="text-6xl mb-4">🔷</div>
              <h3 className="text-2xl font-bold mb-3 text-green-500">Shape Learning</h3>
              <p className="text-gray-600">
                Basic shapes with fun activities and coloring pages.
              </p>
              <ul className="mt-4 text-left text-gray-700">
                <li>✨ Circle, Square, Triangle</li>
                <li>✨ Shape matching</li>
                <li>✨ Pattern recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Fun Themes to Choose! 🎨
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🦁🐘🐵</div>
              <h3 className="text-2xl font-bold text-amber-600">Animals</h3>
              <p className="text-gray-600 mt-2">Learn with cute animal friends!</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🚗✈️🚂</div>
              <h3 className="text-2xl font-bold text-blue-600">Vehicles</h3>
              <p className="text-gray-600 mt-2">Zoom through learning!</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🍎🍊🍇</div>
              <h3 className="text-2xl font-bold text-green-600">Fruits</h3>
              <p className="text-gray-600 mt-2">Healthy and fun learning!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-200 to-secondary-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Amazing Worksheets? 🚀
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            It&apos;s free, fun, and takes less than a minute!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/generator"
              className="btn-fun bg-white text-secondary-500 border-4 border-secondary-400 text-xl px-10 py-4 inline-block"
            >
              🎨 Create Your First Worksheet
            </Link>
            <Link 
              href="/pricing"
              className="btn-fun bg-gradient-to-r from-primary-400 to-secondary-400 text-xl px-10 py-4 inline-block"
            >
              💳 View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="mb-2">Made with ❤️ for little learners everywhere</p>
          <p className="text-sm">© 2024 Preschool Worksheets Generator. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
