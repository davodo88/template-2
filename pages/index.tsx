import react from 'react'
import Navbar from '../components/navbar';
import Contact from '../components/contact';
import Hero from '../components/hero';
import About from '../components/about';
import Service1 from '../components/service1';

export default function Home() {
  return (
    <>
    <header>
      <Contact />
      <Navbar />
    </header>
    <body>
      <Hero />
      <About />
      <Service1 />
    </body>
    
    </>
  );
}
