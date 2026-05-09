import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Food Enthusiast',
    text: 'Foodie has completely changed how I order food. The tracking is incredible and the food always arrives fresh and hot!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'James K.',
    role: 'Regular Customer',
    text: 'The membership is totally worth it. I save so much every month and the exclusive deals are amazing.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Priya R.',
    role: 'Foodie Member',
    text: 'Best food delivery app in the city. The restaurant selection is top-notch and the support team is always helpful.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-on-surface">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-on-surface-variant text-lg">
            Join thousands of happy food lovers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-surface rounded-3xl p-8 lg:p-12 shadow-lg border border-outline-variant">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`material-symbols-outlined text-[24px] ${
                    i < testimonials[active].rating ? 'text-primary-container' : 'text-outline-variant'
                  }`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="text-lg lg:text-xl text-on-surface leading-relaxed mb-8">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-on-surface">{testimonials[active].name}</p>
                <p className="text-sm text-on-surface-variant">{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? 'bg-primary w-8' : 'bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
