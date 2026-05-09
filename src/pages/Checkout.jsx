import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const menuItems = [
  { id: 1, name: 'Margherita Pizza', category: 'pizza', price: 12.99, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop', desc: 'Classic tomato, mozzarella, and basil', rating: 4.8, time: '25 min' },
  { id: 2, name: 'Classic Burger', category: 'burgers', price: 10.99, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop', desc: 'Angus beef, lettuce, tomato, cheese', rating: 4.7, time: '20 min' },
  { id: 3, name: 'Salmon Sushi Roll', category: 'sushi', price: 14.99, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop', desc: 'Fresh salmon, avocado, cucumber', rating: 4.9, time: '30 min' },
  { id: 4, name: 'Chocolate Cake', category: 'desserts', price: 8.99, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=200&fit=crop', desc: 'Rich dark chocolate layered cake', rating: 4.8, time: '15 min' },
  { id: 5, name: 'Caesar Salad', category: 'salads', price: 9.99, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop', desc: 'Romaine, croutons, parmesan', rating: 4.5, time: '10 min' },
  { id: 6, name: 'Iced Coffee', category: 'drinks', price: 5.99, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop', desc: 'Cold brew with vanilla cream', rating: 4.6, time: '5 min' },
  { id: 7, name: 'Pepperoni Pizza', category: 'pizza', price: 14.99, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop', desc: 'Loaded pepperoni, cheese, and herbs', rating: 4.7, time: '25 min' },
  { id: 8, name: 'Veggie Wrap', category: 'salads', price: 8.49, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop', desc: 'Grilled veggies, hummus, spinach', rating: 4.4, time: '15 min' },
]

const categories = ['all', 'pizza', 'burgers', 'sushi', 'desserts', 'salads', 'drinks']

export default function Checkout() {
  const [searchParams] = useSearchParams()
  const initialCat = searchParams.get('category') || 'all'
  const [selectedCat, setSelectedCat] = useState(initialCat)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const filtered = selectedCat === 'all' ? menuItems : menuItems.filter(i => i.category === selectedCat)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id)
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(c => c.id !== id))
  }

  function updateQty(id, delta) {
    setCart(prev => prev.map(c => {
      if (c.id !== id) return c
      const newQty = c.qty + delta
      return newQty <= 0 ? null : { ...c, qty: newQty }
    }).filter(Boolean))
  }

  function placeOrder() {
    if (cart.length === 0) return
    setOrderPlaced(true)
    setCart([])
    setTimeout(() => setOrderPlaced(false), 4000)
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-headline text-3xl font-extrabold text-on-surface">Menu</h1>
            <p className="text-on-surface-variant mt-1">Choose your favorites and order</p>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm hover:bg-primary-fixed-dim transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-error text-on-error text-xs flex items-center justify-center font-bold">
                {cart.reduce((s, c) => s + c.qty, 0)}
              </span>
            )}
          </button>
        </div>

        {orderPlaced && (
          <div className="mb-6 p-4 rounded-xl bg-primary-container/30 border border-primary-container flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">check_circle</span>
            <p className="font-semibold text-on-surface">Order placed successfully! Track it on the <Link to="/dashboard" className="text-primary underline">Dashboard</Link>.</p>
          </div>
        )}

        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCat === cat
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(item => (
            <div key={item.id} className="group rounded-2xl overflow-hidden bg-surface-container border border-transparent hover:border-primary-container/50 hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-xs font-medium">
                  <span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {item.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline font-bold text-on-surface">{item.name}</h3>
                <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="font-headline font-extrabold text-lg text-primary">${item.price.toFixed(2)}</span>
                    <span className="text-xs text-on-surface-variant ml-2">{item.time}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center hover:bg-primary-fixed-dim transition-colors"
                  >
                    <span className="material-symbols-outlined text-on-primary-container text-[18px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showCart && (
          <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setShowCart(false)}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative w-full max-w-md bg-surface h-full shadow-xl overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="sticky top-0 bg-surface border-b border-outline-variant p-4 flex items-center justify-between">
                <h2 className="font-headline font-bold text-lg">Your Cart</h2>
                <button onClick={() => setShowCart(false)} className="p-1 rounded-lg hover:bg-surface-container-high">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="p-8 text-center">
                  <span className="material-symbols-outlined text-[48px] text-outline-variant">shopping_cart</span>
                  <p className="mt-4 text-on-surface-variant">Your cart is empty</p>
                  <button onClick={() => setShowCart(false)} className="mt-4 px-6 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-semibold">
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container">
                      <img src={item.img} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{item.name}</p>
                        <p className="text-sm text-primary font-bold">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-sm">-</button>
                        <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-sm">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-1 text-error hover:bg-error-container/20 rounded-lg">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  ))}

                  <div className="border-t border-outline-variant pt-4 mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Subtotal</span>
                      <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Delivery Fee</span>
                      <span className="font-semibold text-primary">Free</span>
                    </div>
                    <div className="flex justify-between text-base font-bold pt-2 border-t border-outline-variant">
                      <span>Total</span>
                      <span className="text-primary">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={placeOrder}
                    className="w-full py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:bg-primary-fixed-dim transition-colors mt-4"
                  >
                    Place Order - ${cartTotal.toFixed(2)}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
