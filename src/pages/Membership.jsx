import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic',
    price: 4.99,
    period: 'month',
    features: ['Free delivery on orders $15+', '5% off all orders', 'Priority support', 'Birthday surprise'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 9.99,
    period: 'month',
    features: ['Free delivery on all orders', '15% off all orders', 'Priority support', 'Birthday surprise', 'Exclusive deals', 'Early access to new restaurants'],
    popular: true,
  },
  {
    name: 'Family',
    price: 14.99,
    period: 'month',
    features: ['Everything in Pro', 'Up to 5 family members', '20% off all orders', 'Family meal bundles', 'Dedicated account manager', 'Annual foodie event invite'],
    popular: false,
  },
]

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [joined, setJoined] = useState(false)

  function handleJoin(planName) {
    setSelectedPlan(planName)
    setJoined(true)
    setTimeout(() => setJoined(false), 4000)
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/50 text-on-primary-container text-sm font-medium mb-4">
            <span className="material-symbols-outlined text-[16px]">loyalty</span>
            Membership Plans
          </div>
          <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-on-surface-variant text-lg max-w-xl mx-auto">
            Unlock exclusive benefits and save on every order with a Foodie membership.
          </p>
        </div>

        {joined && (
          <div className="max-w-lg mx-auto mb-8 p-4 rounded-xl bg-primary-container/30 border border-primary-container flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">celebration</span>
            <p className="font-semibold text-on-surface">
              Welcome to Foodie {selectedPlan}! Check your <Link to="/dashboard" className="text-primary underline">Dashboard</Link> for details.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-primary text-on-primary shadow-2xl shadow-primary/20 scale-105 border-2 border-primary-container'
                  : 'bg-surface-container border border-outline-variant hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-headline text-xl font-bold">{plan.name}</h3>
                <div className="mt-3">
                  <span className="font-headline text-4xl font-extrabold">${plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`material-symbols-outlined text-[18px] shrink-0 ${plan.popular ? 'text-primary-container' : 'text-primary'}`}>check_circle</span>
                    <span className={plan.popular ? 'text-on-primary/90' : ''}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleJoin(plan.name)}
                className={`w-full py-3 rounded-full font-bold text-sm transition-colors ${
                  plan.popular
                    ? 'bg-white/90 text-primary hover:bg-white'
                    : 'bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim'
                }`}
              >
                Join {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
