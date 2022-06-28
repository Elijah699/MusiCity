import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
