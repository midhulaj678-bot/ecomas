
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Title from './components/title/Title'
import Logo from './components/logos/Logo'
import ImageSlider from './components/trendingproducts/ImageSlider'
import Latestnews from './components/latestarticle/Latestnews'
import Slide from './components/slide/Slide'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
      <Title />

      {/* Earring product slider */}
      <ImageSlider />

      {/* Brand logo slider */}
      
      <Logo />
      <Latestnews/>
      <Slide/>
    </div>
  )
}

export default App
