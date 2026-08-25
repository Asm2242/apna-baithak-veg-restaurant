import Header from "./components/Header";
import Hero from "./components/Hero";
import OffersBanner from "./components/OffersBanner";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import FoodDetailPanel from "./components/FoodDetailPanel";
import FloatingButtons from "./components/FloatingButtons";
import BottomNav from "./components/BottomNav";
import LogoSplash from "./components/LogoSplash";

export default function Home() {
  return (
    <>
      <LogoSplash />
      <Header />
      <Hero />
      <OffersBanner />
      <Categories />
      <BestSellers />
      <MenuSection />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <CartDrawer />
      <FoodDetailPanel />
      <FloatingButtons />
      <BottomNav />
    </>
  );
}
