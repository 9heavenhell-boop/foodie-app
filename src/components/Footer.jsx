import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
    { label: 'Press', to: '/press' },
  ],
  Support: [
    { label: 'Help Center', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Live Chat', to: '/chat' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Licenses', to: '/licenses' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">&#127829;</span>
              <span className="font-headline font-extrabold text-xl text-inverse-primary">Foodie</span>
            </Link>
            <p className="text-sm text-inverse-on-surface/60 mb-6">
              Fresh, fast, and flavorful. Your favorite meals, delivered.
            </p>
            <div className="flex gap-3">
              {['public', 'group', 'chat'].map(icon => (
                <button
                  key={icon}
                  onClick={() => alert(`${icon} social link clicked!`)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-inverse-primary hover:text-on-primary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-headline font-bold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-inverse-on-surface/60 hover:text-inverse-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-inverse-on-surface/40">
            &copy; {new Date().getFullYear()} Foodie. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/checkout" className="text-xs text-inverse-on-surface/40 hover:text-inverse-primary transition-colors">
              Order Now
            </Link>
            <Link to="/membership" className="text-xs text-inverse-on-surface/40 hover:text-inverse-primary transition-colors">
              Membership
            </Link>
            <Link to="/dashboard" className="text-xs text-inverse-on-surface/40 hover:text-inverse-primary transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
