import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/home/HeroBanner'
import DealsSection from '../components/home/DealsSection'
import HomeOutdoorSection from '../components/home/HomeOutdoorSection'
import ElectronicsSection from '../components/home/ElectronicsSection'
import SupplierQuoteSection from '../components/home/SupplierQuoteSection'
import RecommendedItems from '../components/home/RecommendedItems'
import ExtraServices from '../components/home/ExtraServices'
import SuppliersByRegion from '../components/home/SuppliersByRegion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4 py-4">
        <HeroBanner />
        <DealsSection />
        <HomeOutdoorSection />
        <ElectronicsSection />
        <SupplierQuoteSection />
        <RecommendedItems />
        <ExtraServices />
        <SuppliersByRegion />
      </main>
      <Footer />
    </div>
  )
}