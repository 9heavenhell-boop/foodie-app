import { useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Total Orders', value: '156', icon: 'receipt_long', change: '+12%', color: 'bg-primary-container text-on-primary-container' },
  { label: 'Total Spent', value: '$2,340', icon: 'payments', change: '+8%', color: 'bg-tertiary-container text-on-tertiary-container' },
  { label: 'Avg. Delivery', value: '24 min', icon: 'schedule', change: '-3 min', color: 'bg-secondary-container text-on-secondary-container' },
  { label: 'Points Earned', value: '4,820', icon: 'stars', change: '+320', color: 'bg-error-container text-on-error-container' },
]

const recentOrders = [
  { id: 'FD-3201', items: ['Margherita Pizza', 'Iced Coffee'], total: 18.98, status: 'Delivered', time: '2 hours ago', statusColor: 'bg-primary-container/30 text-primary' },
  { id: 'FD-3198', items: ['Classic Burger', 'Caesar Salad'], total: 20.98, status: 'On the Way', time: '35 min ago', statusColor: 'bg-tertiary-container text-on-tertiary-container' },
  { id: 'FD-3195', items: ['Salmon Sushi Roll x2'], total: 29.98, status: 'Preparing', time: '15 min ago', statusColor: 'bg-primary-container text-on-primary-container' },
  { id: 'FD-3190', items: ['Chocolate Cake', 'Veggie Wrap'], total: 17.48, status: 'Delivered', time: 'Yesterday', statusColor: 'bg-primary-container/30 text-primary' },
  { id: 'FD-3185', items: ['Pepperoni Pizza', 'Iced Coffee x2'], total: 26.97, status: 'Delivered', time: '2 days ago', statusColor: 'bg-primary-container/30 text-primary' },
]

const favoriteRestaurants = [
  { name: "Mario's Pizza", cuisine: 'Italian', rating: 4.8, orders: 23, img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop' },
  { name: 'Sushi Master', cuisine: 'Japanese', rating: 4.9, orders: 18, img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop' },
  { name: 'Burger Joint', cuisine: 'American', rating: 4.7, orders: 15, img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=200&h=200&fit=crop' },
]

const weeklyData = [
  { day: 'Mon', orders: 3, spent: 42 },
  { day: 'Tue', orders: 1, spent: 15 },
  { day: 'Wed', orders: 4, spent: 58 },
  { day: 'Thu', orders: 2, spent: 28 },
  { day: 'Fri', orders: 5, spent: 72 },
  { day: 'Sat', orders: 6, spent: 95 },
  { day: 'Sun', orders: 3, spent: 45 },
]

const maxSpent = Math.max(...weeklyData.map(d => d.spent))

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showReorder, setShowReorder] = useState(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'orders', label: 'Orders', icon: 'receipt_long' },
    { id: 'favorites', label: 'Favorites', icon: 'favorite' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ]

  function handleReorder(orderId) {
    setShowReorder(orderId)
    setTimeout(() => setShowReorder(null), 3000)
  }

  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-headline text-3xl font-extrabold text-on-surface">Dashboard</h1>
            <p className="text-on-surface-variant mt-1">Welcome back! Here&apos;s your food journey.</p>
          </div>
          <Link
            to="/checkout"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm hover:bg-primary-fixed-dim transition-colors self-start"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Order
          </Link>
        </div>

        {showReorder && (
          <div className="mb-6 p-4 rounded-xl bg-primary-container/30 border border-primary-container flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">check_circle</span>
            <p className="font-semibold text-sm text-on-surface">Order {showReorder} has been reordered! Check your cart.</p>
          </div>
        )}

        <div className="flex gap-1 p-1 rounded-xl bg-surface-container mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-surface shadow-sm text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="p-5 rounded-2xl bg-surface border border-outline-variant/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary-container/30 px-2 py-0.5 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <p className="font-headline text-2xl font-extrabold text-on-surface">{stat.value}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-surface rounded-2xl border border-outline-variant/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-headline font-bold text-lg">Weekly Spending</h2>
                  <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">This Week</span>
                </div>
                <div className="flex items-end gap-3 h-48">
                  {weeklyData.map(d => (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-medium text-on-surface">${d.spent}</span>
                      <div className="w-full relative">
                        <div
                          className="w-full rounded-lg bg-primary-container hover:bg-primary-fixed-dim transition-colors cursor-pointer"
                          style={{ height: `${(d.spent / maxSpent) * 140}px` }}
                          title={`${d.day}: ${d.orders} orders, $${d.spent}`}
                        />
                      </div>
                      <span className="text-xs text-on-surface-variant">{d.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-2xl border border-outline-variant/50 p-6">
                <h2 className="font-headline font-bold text-lg mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/checkout" className="flex items-center gap-3 p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary-container text-[18px]">restaurant</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Order Food</p>
                      <p className="text-xs text-on-surface-variant">Browse the menu</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto text-[18px]">chevron_right</span>
                  </Link>
                  <Link to="/membership" className="flex items-center gap-3 p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">card_membership</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Upgrade Plan</p>
                      <p className="text-xs text-on-surface-variant">Get more benefits</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto text-[18px]">chevron_right</span>
                  </Link>
                  <button
                    onClick={() => handleReorder('FD-3201')}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container text-[18px]">replay</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Reorder Last</p>
                      <p className="text-xs text-on-surface-variant">Pizza & Coffee</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto text-[18px]">chevron_right</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-error-container/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-error text-[18px]">manage_accounts</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Account Settings</p>
                      <p className="text-xs text-on-surface-variant">Manage your profile</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-outline-variant/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline font-bold text-lg">Recent Orders</h2>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {recentOrders.slice(0, 3).map(order => (
                  <div key={order.id} className="flex items-center gap-4 p-3 rounded-xl bg-surface-container/50 hover:bg-surface-container transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">fastfood</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{order.items.join(', ')}</p>
                      <p className="text-xs text-on-surface-variant">{order.id} &middot; {order.time}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                    <span className="font-semibold text-sm">${order.total.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-surface rounded-2xl border border-outline-variant/50 p-6">
            <h2 className="font-headline font-bold text-lg mb-6">All Orders</h2>
            <div className="space-y-3">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container/50 hover:bg-surface-container transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">fastfood</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{order.items.join(', ')}</p>
                    <p className="text-xs text-on-surface-variant">{order.id} &middot; {order.time}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${order.statusColor}`}>
                    {order.status}
                  </span>
                  <span className="font-semibold text-sm whitespace-nowrap">${order.total.toFixed(2)}</span>
                  <button
                    onClick={() => handleReorder(order.id)}
                    className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold hover:bg-primary-fixed-dim transition-colors whitespace-nowrap"
                  >
                    Reorder
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <h2 className="font-headline font-bold text-lg">Favorite Restaurants</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {favoriteRestaurants.map(r => (
                <div key={r.name} className="bg-surface rounded-2xl border border-outline-variant/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-32 overflow-hidden">
                    <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline font-bold">{r.name}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        {r.rating}
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1">{r.cuisine} &middot; {r.orders} orders</p>
                    <Link
                      to="/checkout"
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold hover:bg-primary-fixed-dim transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">restaurant</span>
                      Order Again
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && <SettingsTab />}
      </div>
    </div>
  )
}

function SettingsTab() {
  const [profile, setProfile] = useState({
    name: 'Alex',
    email: 'alex@foodie.com',
    phone: '+1 234 567 890',
    address: '123 Main St, New York, NY 10001',
  })
  const [saved, setSaved] = useState(false)
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
  })

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {saved && (
        <div className="p-4 rounded-xl bg-primary-container/30 border border-primary-container flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">check_circle</span>
          <p className="font-semibold text-sm text-on-surface">Settings saved successfully!</p>
        </div>
      )}

      <div className="bg-surface rounded-2xl border border-outline-variant/50 p-6">
        <h2 className="font-headline font-bold text-lg mb-6">Profile Settings</h2>
        <div className="space-y-4">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
              <label className="block text-xs font-medium text-on-surface-variant mb-1.5 capitalize">{key}</label>
              <input
                type="text"
                value={value}
                onChange={e => setProfile(p => ({ ...p, [key]: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary"
              />
            </div>
          ))}
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm hover:bg-primary-fixed-dim transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-outline-variant/50 p-6">
        <h2 className="font-headline font-bold text-lg mb-6">Notifications</h2>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm text-on-surface capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-xs text-on-surface-variant">
                  {key === 'orderUpdates' && 'Get notified about order status changes'}
                  {key === 'promotions' && 'Receive exclusive deals and offers'}
                  {key === 'newsletter' && 'Weekly food tips and restaurant updates'}
                </p>
              </div>
              <button
                onClick={() => setNotifications(n => ({ ...n, [key]: !value }))}
                className={`relative w-11 h-6 rounded-full transition-colors ${value ? 'bg-primary' : 'bg-outline-variant'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${value ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-error/20 p-6">
        <h2 className="font-headline font-bold text-lg text-error mb-2">Danger Zone</h2>
        <p className="text-sm text-on-surface-variant mb-4">Once deleted, your account cannot be recovered.</p>
        <button
          onClick={() => alert('Account deletion would require confirmation in production.')}
          className="px-6 py-2.5 rounded-full border border-error text-error font-semibold text-sm hover:bg-error hover:text-on-error transition-colors"
        >
          Delete Account
        </button>
      </div>
    </div>
  )
}
