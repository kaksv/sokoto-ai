import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, ChevronRight, Phone, MessageSquare, TrendingUp, Users, CheckCircle2, ArrowLeft } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Dial the USSD Code',
    description: 'Open your phone dialer and enter *347*1#. This works on any phone — no smartphone or internet required.',
    icon: Phone,
    screen: {
      header: '*347*1#',
      body: 'Connecting to SokoAgent AI...',
      footer: 'Please wait...',
    },
  },
  {
    id: 2,
    title: 'Select Your Language',
    description: 'Choose your preferred language — English, Luganda, or Runyankore. SokoAgent speaks your language.',
    icon: MessageSquare,
    screen: {
      header: 'SokoAgent AI',
      body: 'Select Language:\n1. English\n2. Luganda\n3. Runyankore',
      footer: 'Reply with 1, 2, or 3',
    },
  },
  {
    id: 3,
    title: 'Check Market Prices',
    description: 'Select "Market Prices" to get real-time, AI-analyzed prices for your crops. No more guessing or being underpaid.',
    icon: TrendingUp,
    screen: {
      header: 'Market Prices',
      body: 'Select crop:\n1. Maize - UGX 2,500/kg\n2. Beans - UGX 4,200/kg\n3. Coffee - UGX 8,500/kg\n4. Matooke - UGX 1,800/kg',
      footer: 'Reply with crop number',
    },
  },
  {
    id: 4,
    title: 'Connect with Buyers',
    description: 'Get matched with verified buyers offering fair prices. SokoAgent negotiates on your behalf using AI.',
    icon: Users,
    screen: {
      header: 'Find Buyers',
      body: 'Nearby buyers for Maize:\n1. Kampala Millers - UGX 2,500/kg\n2. Jinja Agro - UGX 2,450/kg\n3. Mbale Co-op - UGX 2,550/kg',
      footer: 'Reply to connect',
    },
  },
  {
    id: 5,
    title: 'Complete the Sale',
    description: 'Confirm the deal and receive payment directly to your mobile money account. No middleman, no deductions.',
    icon: CheckCircle2,
    screen: {
      header: 'Sale Confirmed!',
      body: '✅ Deal Complete!\n\nBuyer: Kampala Millers\nQty: 100 kg Maize\nTotal: UGX 250,000\n\nPayment sent to your Mobile Money.',
      footer: 'Thank you for using SokoAgent!',
    },
  },
]

export default function USSDGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToStep = (index) => {
    setDirection(index > currentStep ? 1 : -1)
    setCurrentStep(index)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  const step = steps[currentStep]

  return (
    <section id="ussd-guide" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            No Smartphone?{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              No Problem.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            SokoAgent works on any phone through USSD. Follow these simple steps to access fair markets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Screen Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[520px] bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                
                {/* Screen Content */}
                <div className="absolute inset-4 top-8 bg-gray-950 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: direction > 0 ? 20 : -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: direction > 0 ? -20 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 h-full flex flex-col"
                    >
                      {/* Screen Header */}
                      <div className="text-center mb-4">
                        <div className="text-emerald-400 text-xs font-medium mb-1">SokoAgent AI</div>
                        <div className="text-white text-sm font-mono">{step.screen.header}</div>
                      </div>

                      {/* Screen Body */}
                      <div className="flex-1 bg-gray-900 rounded-lg p-4">
                        <pre className="text-sm text-gray-300 font-sans whitespace-pre-line leading-relaxed">
                          {step.screen.body}
                        </pre>
                      </div>

                      {/* Screen Footer */}
                      <div className="mt-3 text-center">
                        <div className="text-gray-500 text-xs">{step.screen.footer}</div>
                        <div className="mt-2 flex justify-center gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i === 0 ? 'bg-emerald-400' : 'bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home Button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-emerald-500/5 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Steps Content */}
          <div>
            {/* Step Indicators */}
            <div className="flex gap-2 mb-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'w-8 bg-emerald-400'
                      : 'w-4 bg-gray-700 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl border border-white/10 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  Next Step
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  View Architecture
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}