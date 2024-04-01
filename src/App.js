import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs/Programs';
import Portfolio from './components/Portfolio/Portfolio';
import OurFields from './components/Fields/OurFields';
import { useState } from 'react';
import Team from './components/Team/Team';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

function App() {

  const [themeToggle, setThemeToggle] = useState(true)


  const handleThemeToggle = () => {
    setThemeToggle(!themeToggle)
  }


  return (
    <div className={`App scroll-smooth bg-gradient-to-r ${ themeToggle? 'from-green-950 to-slate-700 text-gray-200 transition-all ease-out delay-300 ': ' from-slate-100 to-slate-200 text-gray-800 transition-all ease-out delay-300'}  font-Inter  overflow-x-hidden`}>
        <BrowserRouter>

        <Navbar themeToggle={themeToggle} handleThemeToggle={handleThemeToggle}/>
      <div className=' w-full md:w-[90%] lg:w-[70%] m-auto px-4'>
      
      
           

                <Hero />
                <About />
                <Programs themeToggle={themeToggle} />
                <OurFields />
                <Portfolio />
                <Team />
                
                {/* <Route path='/about' element={<About />} />
                <Route path='/programs' element={<Programs themeToggle={themeToggle} />} />
                <Route path='/ourfields' element={<OurFields themeToggle={themeToggle} />} />
                <Route path='/portfolio' element={ <Portfolio />}/>
                <Route path='/team' element={ <Team />}/>
                <Route path='/media' element={<Media />} /> */}
               
               
            
            
  
       
        
      </div>

      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;



{/* <About />
                <Programs themeToggle={themeToggle} />
                <OurFields themeToggle={themeToggle} />
                <Portfolio />
                <Team /> */}
