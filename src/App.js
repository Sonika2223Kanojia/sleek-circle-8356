// import logo from './logo.svg';
import './App.css';

// import { H } from './Pages/Home';
import Navbar from './Components/Navbar';
import MainRoute from './Pages/MainRoute';
import Footer from './Components/Footer';
import {Grid, Text, Box,GridItem, } from "@chakra-ui/react"


function App() {
  return (
    <div className="App">
      <Navbar/>
<MainRoute/>
<Footer/>
    </div>
  );
}

export default App;
