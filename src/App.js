import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';

function App() {
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-slate-700  font-Inter text-white px-5  ">
      <div className=' md:w-[70%] m-auto'>
        <Navbar />
        <Hero />
        <About />
        <Programs />
      </div>
      
    </div>
  );
}

export default App;
