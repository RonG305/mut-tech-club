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

function App() {

  const [themeToggle, setThemeToggle] = useState(true)


  const handleThemeToggle = () => {
    setThemeToggle(!themeToggle)
  }


  return (
    <div className={`bg-gradient-to-r ${ themeToggle? 'from-slate-900 to-slate-700 text-gray-200 transition-all ease-out delay-300 ': ' from-slate-100 to-sky-200 text-gray-800 transition-all ease-out delay-300'}  font-Inter  px-5 overflow-x-hidden`}>
      <div className=' w-full md:w-[90%] lg:w-[70%] m-auto'>
        <Navbar themeToggle={themeToggle} handleThemeToggle={handleThemeToggle}/>
        <Hero />
        <About />
        <Programs themeToggle={themeToggle} />
        <OurFields themeToggle={themeToggle} />
        <Portfolio />
        <Team />
        
      </div>
      
    </div>
  );
}

export default App;
