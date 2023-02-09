import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Cv from './Cv';
import About from './About';
import { HiBars2, HiChevronDoubleRight } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import NavMobile from './NavMobile';
import Loader from './Loader';
import Footer from './Footer';
import Page404 from './Page404';

// delay the class change to see the animation


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div id='app' className="text-slate-200 flex-col min-w-screen">
      <header className='w-full flex justify-between  lg:grid lg:grid-cols-4 px-4 h-[10dvh] z-40 items-center fixed top-0'>
        <span className={isMenuOpen ? 'brand brand-MActive' : 'brand'}>
          <p className='inicial'>L</p>
          <p className={'endBrand'}>autaro</p>
        </span>
        <NavBar />
        <button className="lg:hidden animate-pulse" onClick={handleClick}><HiBars2 className={(isMenuOpen ? 'hidden' : 'text-3xl')} /><HiChevronDoubleRight className={(!isMenuOpen ? 'hidden' : 'text-3xl')} /></button>
      </header>
      <NavMobile isOpen={isMenuOpen} handleClick={handleClick} />
      <div className={isMenuOpen ? 'App-Container App-Container-MActive' : 'App-Container'}>
        <main className='grid min-h-[80dvh] pt-4 place-items-center'>
          <Routes>
            <Route path="*" element={<Page404/>} />
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/Curriculum_Vitae" element={<Cv />} />
          </Routes>
        </main>
        <footer className='h-[10dvh] relative bottom-0 px-4 items-center  flex'>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}
export default App;
