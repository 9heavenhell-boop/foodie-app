import { Link } from 'react-router-dom'

export default function AppCTA() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-primary to-primary-dim overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white" />
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white" />
          </div>
          <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-on-primary">
                Get the Foodie App
              </h2>
              <p className="text-on-primary/80 text-lg">
                Download our app for the best experience. Exclusive app-only deals, faster checkout, and personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open('https://play.google.com/store', '_blank')}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/20 hover:bg-black/30 text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[28px]">android</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Get it on</p>
                    <p className="font-semibold text-sm">Google Play</p>
                  </div>
                </button>
                <button
                  onClick={() => window.open('https://apps.apple.com', '_blank')}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/20 hover:bg-black/30 text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[28px]">phone_iphone</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Download on</p>
                    <p className="font-semibold text-sm">App Store</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] rounded-[2.5rem] bg-black/20 border-4 border-white/20 overflow-hidden flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <span className="text-6xl">&#127829;</span>
                    <p className="font-headline font-bold text-xl text-on-primary">Foodie</p>
                    <p className="text-sm text-on-primary/70">Scan to download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
            Become a Foodie Member
          </h3>
          <p className="text-on-surface-variant mb-6 max-w-lg mx-auto">
            Unlock free delivery, exclusive discounts, and priority support with our membership plan.
          </p>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-base hover:bg-primary-fixed-dim transition-all hover:shadow-lg"
          >
            <span className="material-symbols-outlined">loyalty</span>
            Join Membership - $9.99/mo
          </Link>
        </div>
      </div>
    </section>
  )
}
