import Footer from './components/Footer/Footer';
import HeroArea from './components/HeroArea/HeroArea';
import Layout from './components/Layout/Layout';
import MainSection from './components/MainSection/MainSection';
import Nav from './components/Nav/Nav';
function App() {
  return (
   <>
    <Nav/>
      <Layout>
        <HeroArea/>
        <MainSection/>
      </Layout>
    <Footer/>
   </>
  )
}

export default App;
