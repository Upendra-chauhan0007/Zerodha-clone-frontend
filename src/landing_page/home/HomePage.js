import React from 'react';
import Hero from './Hero';
 import Ecosystem from './Ecosystem';
 import Unbeatable from './Unbeatable';
 import Education from './Education';
 import OpenAccount from '../OpenAccount';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
function HomePage() {
    return ( 
        <>    
           <Hero/>
           <Ecosystem/>
           <Unbeatable/>
           <Education/>
           <OpenAccount/>
        </>
    );
}

export default HomePage;