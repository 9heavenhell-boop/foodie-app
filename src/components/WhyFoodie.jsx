const features = [
  {
    icon: 'speed',
    title: 'Lightning Fast',
    desc: 'Average delivery time under 30 minutes. We optimize routes in real-time.',
  },
  {
    icon: 'verified',
    title: 'Quality Guaranteed',
    desc: 'Every restaurant is vetted. Every meal meets our quality standards.',
  },
  {
    icon: 'savings',
    title: 'Best Prices',
    desc: 'No hidden fees. Transparent pricing with member-exclusive discounts.',
  },
  {
    icon: 'support_agent',
    title: '24/7 Support',
    desc: 'Our support team is always available to help with any issues.',
  },
]

export default function WhyFoodie() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-on-surface">
            Why Choose Foodie?
          </h2>
          <p className="mt-3 text-on-surface-variant text-lg">
            We go above and beyond for every delivery
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-surface-container hover:bg-primary-container/20 border border-transparent hover:border-primary-container transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/30 group-hover:bg-primary-container flex items-center justify-center mb-4 transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-[28px]">
                  {f.icon}
                </span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-2">{f.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
