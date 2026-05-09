import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/50 text-on-primary-container text-sm font-medium">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
              Free delivery on your first order
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface leading-tight">
              Kinetic
              <span className="text-primary"> Gourmet</span>
              <br />
              Delivery
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg">
              Fresh, fast, and flavorful. Order from the best local restaurants and get your food delivered in minutes, not hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/checkout"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-base hover:bg-primary-fixed-dim transition-all hover:shadow-lg hover:shadow-primary-container/30"
              >
                <span className="material-symbols-outlined">restaurant</span>
                Order Now
              </Link>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-base hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined">card_membership</span>
                Membership
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="font-headline text-2xl font-extrabold text-primary">30min</p>
                <p className="text-xs text-on-surface-variant">Avg. Delivery</p>
              </div>
              <div className="w-px h-10 bg-outline-variant" />
              <div className="text-center">
                <p className="font-headline text-2xl font-extrabold text-primary">500+</p>
                <p className="text-xs text-on-surface-variant">Restaurants</p>
              </div>
              <div className="w-px h-10 bg-outline-variant" />
              <div className="text-center">
                <p className="font-headline text-2xl font-extrabold text-primary">4.9</p>
                <p className="text-xs text-on-surface-variant">User Rating</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-primary-container/20 rounded-[3rem] rotate-6" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=500&fit=crop"
                alt="Delicious gourmet food"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container">delivery_dining</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">On its way!</p>
                  <p className="text-xs text-on-surface-variant">Arriving in 15 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
