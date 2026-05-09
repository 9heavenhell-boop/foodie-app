import { useState } from 'react'

const steps = [
  { label: 'Order Placed', icon: 'receipt_long', time: '12:30 PM' },
  { label: 'Preparing', icon: 'skillet', time: '12:35 PM' },
  { label: 'On the Way', icon: 'delivery_dining', time: '12:50 PM' },
  { label: 'Delivered', icon: 'where_to_vote', time: '1:05 PM' },
]

export default function TrackingSection() {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-on-surface">
              Real-Time Order Tracking
            </h2>
            <p className="text-on-surface-variant text-lg">
              Track your order every step of the way. From the kitchen to your door, know exactly where your food is.
            </p>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <button
                  key={step.label}
                  onClick={() => setActiveStep(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left ${
                    i <= activeStep
                      ? 'bg-primary-container/30 border border-primary-container'
                      : 'bg-surface-container border border-transparent hover:border-outline-variant'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    i <= activeStep ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold text-sm ${i <= activeStep ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                      {step.label}
                    </p>
                    <p className="text-xs text-on-surface-variant">{step.time}</p>
                  </div>
                  {i <= activeStep && (
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-surface rounded-3xl shadow-xl overflow-hidden border border-outline-variant">
              <div className="bg-primary-container/20 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">map</span>
                  <span className="font-semibold text-sm">Live Tracking</span>
                </div>
                <span className="text-xs text-on-surface-variant">Order #FD-2847</span>
              </div>
              <div className="relative h-64 bg-surface-container flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary-container flex items-center justify-center animate-pulse-slow">
                    <span className="material-symbols-outlined text-on-primary-container text-3xl">
                      {steps[activeStep].icon}
                    </span>
                  </div>
                  <p className="font-headline font-bold text-lg">{steps[activeStep].label}</p>
                  <p className="text-sm text-on-surface-variant">
                    {activeStep === 0 && 'Your order has been confirmed'}
                    {activeStep === 1 && 'Chef is preparing your meal'}
                    {activeStep === 2 && 'Driver is heading to you'}
                    {activeStep === 3 && 'Enjoy your meal!'}
                  </p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between bg-surface">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Alex D.</p>
                    <p className="text-xs text-on-surface-variant">Your driver</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-on-primary-container text-[18px]">call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
