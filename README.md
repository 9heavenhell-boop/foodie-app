# Foodie - Kinetic Gourmet Delivery

A modern, responsive food delivery web application built with **React**, **Vite**, and **Tailwind CSS**. Order food, track deliveries in real-time, and manage your account all in one place.

![Home Page](https://app.devin.ai/attachments/441b2e88-d0eb-475a-bcef-0f8d74f3ed35/screenshot_e9f3ef94bbda4eb5ad1efd69b5b14563.png)

## Features

- **Landing Page** - Beautiful hero section, food categories, order tracking demo, testimonials, and app download CTA
- **Dashboard** - Personal analytics with stats, spending charts, order history, favorites, and account settings
- **Menu & Ordering** - Browse 8+ food items, filter by category, add to cart, adjust quantities, and place orders
- **Membership Plans** - Three pricing tiers (Basic, Pro, Family) with exclusive benefits
- **Responsive Design** - Fully mobile-friendly with a collapsible navigation menu
- **30+ Interactive Elements** - Every button, toggle, and control is fully functional

## Screenshots

### Dashboard
![Dashboard](https://app.devin.ai/attachments/043d6d9a-4eb8-47e8-abe2-5b51ff9c4f56/screenshot_e32e3356a15344a495a7e565bcc1439c.png)

### Menu & Cart
![Menu](https://app.devin.ai/attachments/70c96672-881a-4f85-98b0-db5a11984da9/screenshot_6c3b87a46a2446bd8794ce6bbdcfada1.png)

### Membership Plans
![Membership](https://app.devin.ai/attachments/2b7ff3c7-fdaa-4e80-8ae9-28d2c7b6d391/screenshot_dcee9ea4765b48dd9688c1ed27337429.png)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI framework |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Google Material Symbols](https://fonts.google.com/icons) | Icon library |
| [Google Fonts](https://fonts.google.com/) | Typography (Plus Jakarta Sans, Be Vietnam Pro) |

## Project Structure

```
foodie-app/
├── index.html                  # Entry HTML file
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS theme & colors
├── postcss.config.js           # PostCSS plugins
├── netlify.toml                # Netlify deployment config
├── .env.example                # Environment variables template
└── src/
    ├── main.jsx                # App entry point
    ├── App.jsx                 # Root component with routing
    ├── index.css               # Global styles & Tailwind directives
    ├── components/
    │   ├── Navbar.jsx          # Sticky navigation bar
    │   ├── Hero.jsx            # Landing page hero section
    │   ├── FeaturedCategories.jsx  # Food category grid
    │   ├── TrackingSection.jsx # Real-time order tracking demo
    │   ├── WhyFoodie.jsx       # Feature highlights
    │   ├── Testimonial.jsx     # Customer reviews carousel
    │   ├── AppCTA.jsx          # App download call-to-action
    │   └── Footer.jsx          # Site footer with links
    └── pages/
        ├── Home.jsx            # Landing page
        ├── Dashboard.jsx       # User dashboard (Overview, Orders, Favorites, Settings)
        ├── Checkout.jsx        # Menu browsing & cart
        ├── Membership.jsx      # Subscription plans
        └── NotFound.jsx        # 404 page
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/9heavenhell-boop/foodie-app.git
   cd foodie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your API keys:
   ```env
   VITE_BACKEND_URL=http://localhost:3000/api
   VITE_MAP_API_KEY=your_map_api_key_here
   VITE_PAYMENT_GATEWAY_KEY=your_payment_gateway_pub_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with all marketing sections |
| `/dashboard` | Dashboard | User dashboard with 4 tabs (Overview, Orders, Favorites, Settings) |
| `/checkout` | Menu | Food menu with category filtering and shopping cart |
| `/membership` | Membership | Subscription plans (Basic, Pro, Family) |
| `/*` | Not Found | 404 error page |

## Functional Buttons & Interactions

### Navigation
- **Navbar links** - Home, Dashboard, Menu with active state highlighting
- **Order Now** (Navbar & Hero) - Navigates to Menu page
- **Membership** (Hero) - Navigates to Membership page
- **Dashboard** (Navbar) - Navigates to Dashboard
- **Mobile hamburger menu** - Toggles responsive navigation

### Menu / Checkout Page
- **Category filter buttons** - Filter items by Pizza, Burgers, Sushi, Desserts, Salads, Drinks
- **Add to cart (+)** - Adds item to shopping cart with badge counter
- **Cart button** - Opens slide-out cart sidebar
- **Quantity controls (+/-)** - Adjust item quantities in cart
- **Delete button** - Remove item from cart
- **Place Order** - Completes order, clears cart, shows success message
- **Browse Menu** - Closes empty cart sidebar

### Dashboard
- **Tab switching** - Overview, Orders, Favorites, Settings
- **View All** - Switches to Orders tab
- **Reorder buttons** - Re-orders previous orders
- **Order Food** - Quick action to Menu
- **Upgrade Plan** - Quick action to Membership
- **Account Settings** - Quick action to Settings tab
- **Save Changes** - Saves profile form
- **Notification toggles** - Toggle order updates, promotions, newsletter
- **Delete Account** - Shows confirmation alert

### Membership
- **Join Basic / Pro / Family** - Joins plan with welcome banner

### Home Page
- **Testimonial dots** - Switch between customer reviews
- **Tracking steps** - Interactive order tracking demo
- **Google Play / App Store** - Opens store links
- **Category cards** - Navigate to filtered menu

### Footer
- **Social media icons** - Interactive with click feedback
- **Navigation links** - Quick access to all pages

## Deployment

### Netlify

The project includes a `netlify.toml` with SPA routing configuration. To deploy:

1. Connect your GitHub repo to [Netlify](https://app.netlify.com/)
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Import your GitHub repo on [Vercel](https://vercel.com/)
2. Framework preset will auto-detect Vite
3. Deploy!

### Manual Deployment

```bash
npm run build
# Upload the `dist/` folder to any static hosting provider
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BACKEND_URL` | Backend API base URL | Optional |
| `VITE_MAP_API_KEY` | Maps API key for tracking | Optional |
| `VITE_PAYMENT_GATEWAY_KEY` | Payment gateway public key | Optional |

## Color Theme

The app uses a custom **Material Design 3** inspired color palette defined in `tailwind.config.js`:

- **Primary**: `#735800` (Warm Gold)
- **Primary Container**: `#fbc51f` (Bright Yellow)
- **Surface**: `#f8f6f0` (Warm White)
- **Error**: `#b02500` (Red)
- **Tertiary**: `#625b3f` (Olive)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Food images from [Unsplash](https://unsplash.com/)
- Icons from [Google Material Symbols](https://fonts.google.com/icons)
- Fonts from [Google Fonts](https://fonts.google.com/)
