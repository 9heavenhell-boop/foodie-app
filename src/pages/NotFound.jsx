import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <span className="text-6xl">&#127829;</span>
        <h1 className="font-headline text-4xl font-extrabold text-on-surface">Page Not Found</h1>
        <p className="text-on-surface-variant">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm hover:bg-primary-fixed-dim transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          Go Home
        </Link>
      </div>
    </div>
  )
}
