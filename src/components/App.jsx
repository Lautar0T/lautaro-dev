import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Cv from './Cv';
import About from './About';
import { HiBars2, HiChevronDoubleRight } from "react-icons/hi2";
import { useState } from 'react';
import NavMobile from './NavMobile';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div id='app' className="text-slate-200 flex-col min-w-screen">
      <header className='w-full flex justify-between lg:justify-evenly lg:grid lgwwwwwwww:grid-cols-4 px-4 h-[10dvh] z-40 items-center fixed top-0'>
        <span className={isMenuOpen ? 'brand brand-MActive' : 'brand'}>
          <p className='inicial'>L</p>
          <p className={isMenuOpen ? 'animate__animated animate__fadeInLeft' : ' animate__animated animate__fadeOutLeft'}>autaro</p>
        </span>
        <NavBar />
        <button className="md:hidden animate-pulse" onClick={handleClick}><HiBars2 className={(isMenuOpen ? 'hidden' : 'text-3xl')} /><HiChevronDoubleRight className={(!isMenuOpen ? 'hidden' : 'text-3xl')} /></button>
      </header>
      <NavMobile isOpen={isMenuOpen} handleClick={handleClick} />
      <div className={isMenuOpen ? 'App-Container App-Container-MActive' : 'App-Container'}>
        <main className='grid grid-cols-12 min-h-[80dvh] pt-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/Curriculum_Vitae" element={<Cv />} />
          </Routes>
        </main>
        <footer className='h-[10dvh] relative bottom-0 px-4 items-center  flex'>
          <p>Este es el Footer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
