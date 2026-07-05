import Navbar from './components/Navbar'
import Hero from './components/Hero'
import USSDGuide from './components/USSDGuide'
import Architecture from './components/Architecture'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <USSDGuide />
        <Architecture />
      </main>
      <Footer />
    </div>
  )
}