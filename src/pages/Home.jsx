import Hero from '../components/Hero'
import FeaturedCategories from '../components/FeaturedCategories'
import TrackingSection from '../components/TrackingSection'
import WhyFoodie from '../components/WhyFoodie'
import Testimonial from '../components/Testimonial'
import AppCTA from '../components/AppCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <TrackingSection />
      <WhyFoodie />
      <Testimonial />
      <AppCTA />
    </>
  )
}
