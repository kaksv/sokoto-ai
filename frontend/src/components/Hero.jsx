import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Smartphone, Shield, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Farmers Reached', value: '10,000+', icon: TrendingUp },
  { label: 'Price Improvement', value: '40%', icon: Shield },
  { label: 'Active Users', value: '5,000+', icon: Smartphone },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-950 to-gray-950" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">
                QwenCloud Global AI Hackathon 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              AI-Powered Market Access for{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Ugandan Farmers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              SokoAgent AI eliminates middleman exploitation by connecting smallholder farmers 
              directly to fair markets through a simple USSD interface — no smartphone required. 
              Just dial, get AI-powered price insights, and sell at fair value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#ussd-guide"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold rounded-xl border border-white/10 transition-all duration-200"
              >
                View Architecture
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/5"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[520px] bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                
                {/* Screen Content */}
                <div className="absolute inset-4 top-8 bg-gray-950 rounded-2xl overflow-hidden">
                  {/* USSD Screen */}
                  <div className="p-4 space-y-3">
                    <div className="text-center">
                      <div className="text-emerald-400 text-xs font-medium mb-1">Connected</div>
                      <div className="text-white text-sm font-semibold">*347*1#</div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-3 space-y-2">
                      <div className="text-emerald-400 text-xs font-medium">SokoAgent AI</div>
                      <div className="text-white text-sm leading-relaxed">
                        Welcome! Select option:
                      </div>
                      <div className="space-y-1.5 text-sm">
                        <div className="text-gray-300">1. Check Market Prices</div>
                        <div className="text-gray-300">2. Find Buyers</div>
                        <div className="text-gray-300">3. Price Alerts</div>
                        <div className="text-gray-300">4. Help</div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-800">
                        <div className="text-gray-500 text-xs">Your response:</div>
                        <div className="text-emerald-400 text-sm font-medium mt-1">1</div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-3">
                      <div className="text-emerald-400 text-xs font-medium mb-2">Market Prices</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Maize (per kg)</span>
                          <span className="text-emerald-400 font-medium">UGX 2,500</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Beans (per kg)</span>
                          <span className="text-emerald-400 font-medium">UGX 4,200</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Coffee (per kg)</span>
                          <span className="text-emerald-400 font-medium">UGX 8,500</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-gray-600 text-xs">
                      Dial *347*1# to start
                    </div>
                  </div>
                </div>

                {/* Home Button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-emerald-500/5 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}