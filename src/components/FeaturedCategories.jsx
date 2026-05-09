import { Link } from 'react-router-dom'

const categories = [
  { name: 'Pizza', icon: 'local_pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop', count: '120+ options' },
  { name: 'Burgers', icon: 'lunch_dining', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop', count: '85+ options' },
  { name: 'Sushi', icon: 'ramen_dining', img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop', count: '60+ options' },
  { name: 'Desserts', icon: 'cake', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop', count: '95+ options' },
  { name: 'Salads', icon: 'eco', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop', count: '45+ options' },
  { name: 'Drinks', icon: 'local_cafe', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop', count: '70+ options' },
]

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-on-surface">
            Explore by Category
          </h2>
          <p className="mt-3 text-on-surface-variant text-lg">
            Choose from a wide variety of cuisines
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/checkout?category=${cat.name.toLowerCase()}`}
              className="group relative rounded-2xl overflow-hidden bg-surface-container hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-headline font-bold text-white text-sm">{cat.name}</p>
                <p className="text-white/70 text-xs">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
