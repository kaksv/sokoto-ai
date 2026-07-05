import { motion } from 'framer-motion'
import { Cpu, Globe, Database, Shield, ArrowDown, Server, Phone } from 'lucide-react'

const layers = [
  {
    title: 'User Layer',
    subtitle: 'Any Phone. Anywhere.',
    icon: Phone,
    color: 'emerald',
    items: [
      { name: 'Feature Phone (USSD)', detail: '*347*1#' },
      { name: 'Basic SMS Gateway', detail: 'No internet needed' },
    ],
  },
  {
    title: 'Communication Layer',
    subtitle: 'Africa\'s Talking Gateway',
    icon: Globe,
    color: 'blue',
    items: [
      { name: 'USSD Session Manager', detail: 'Session handling' },
      { name: 'SMS Notifications', detail: 'Price alerts & confirmations' },
      { name: 'Mobile Money API', detail: 'Payment processing' },
    ],
  },
  {
    title: 'Application Layer',
    subtitle: 'Node.js + Express Backend',
    icon: Server,
    color: 'purple',
    items: [
      { name: 'REST API Server', detail: 'Render-hosted backend' },
      { name: 'Session State Machine', detail: 'USSD flow management' },
      { name: 'Market Data Cache', detail: 'Price aggregation' },
    ],
  },
  {
    title: 'AI & Data Layer',
    subtitle: 'QwenCloud Intelligence',
    icon: Cpu,
    color: 'emerald',
    items: [
      { name: 'QwenCloud AI API', detail: 'Natural language understanding' },
      { name: 'Price Prediction Engine', detail: 'ML-based market analysis' },
      { name: 'Buyer Matching Algorithm', detail: 'Smart pairing' },
      { name: 'Multilingual Support', detail: 'Local language processing' },
    ],
  },
]

const flowSteps = [
  { icon: Phone, label: 'Farmer dials *347*1#', color: 'emerald' },
  { icon: Globe, label: 'AT gateway routes request', color: 'blue' },
  { icon: Server, label: 'Express processes session', color: 'purple' },
  { icon: Cpu, label: 'QwenCloud AI analyzes', color: 'emerald' },
  { icon: Database, label: 'Market data returned', color: 'amber' },
  { icon: Shield, label: 'Response sent via USSD', color: 'emerald' },
]

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-gray-950 to-gray-950" />
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
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Scale & Impact
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A four-layer architecture that connects farmers to AI-powered market intelligence through the simplest possible interface.
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 h-full">
                {/* Layer Number */}
                <div className="text-4xl font-black text-gray-800 mb-4">0{index + 1}</div>

                {/* Header */}
                <div className="mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-${layer.color}-500/10 flex items-center justify-center mb-3`}>
                    <layer.icon className={`w-5 h-5 text-${layer.color}-400`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{layer.title}</h3>
                  <p className="text-sm text-gray-500">{layer.subtitle}</p>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  {layer.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-gray-950 rounded-lg p-3 border border-gray-800/50"
                    >
                      <div className="text-sm font-medium text-gray-300">{item.name}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector Arrow */}
              {index < layers.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowDown className="w-5 h-5 text-gray-600 rotate-[-90deg]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Request Flow</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-950 rounded-xl p-4 text-center border border-gray-800/50 hover:border-emerald-500/20 transition-all duration-200">
                  <step.icon className={`w-6 h-6 mx-auto mb-2 text-${step.color}-400`} />
                  <div className="text-xs text-gray-400 leading-tight">{step.label}</div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2">
                    <ArrowDown className="w-4 h-4 text-gray-600 rotate-[-90deg]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {[
            'React', 'Vite', 'Tailwind CSS', 'Framer Motion',
            'Node.js', 'Express', 'QwenCloud AI',
            'Africa\'s Talking', 'Render', 'Mobile Money',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}