import { Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-lg">
                Soko<span className="text-emerald-400">Agent</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-powered market access for Ugandan smallholder farmers. 
              Eliminating middleman exploitation through technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#hero" className="block text-sm text-gray-500 hover:text-emerald-400 transition-colors">Home</a>
              <a href="#ussd-guide" className="block text-sm text-gray-500 hover:text-emerald-400 transition-colors">How It Works</a>
              <a href="#architecture" className="block text-sm text-gray-500 hover:text-emerald-400 transition-colors">Architecture</a>
            </div>
          </div>

          {/* Built for */}
          <div>
            <h4 className="text-white font-semibold mb-4">Built For</h4>
            <div className="space-y-2">
              <span className="block text-sm text-gray-500">QwenCloud Global AI Hackathon 2026</span>
              <span className="block text-sm text-gray-500">Ugandan Smallholder Farmers</span>
              <span className="block text-sm text-gray-500">Sustainable Agriculture</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Ugandan farmers
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kaksv/sokoto-ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm">
              <ExternalLink className="w-4 h-4" />
              GitHub
            </a>
            <span className="text-gray-600 text-sm">© 2026 SokoAgent AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}