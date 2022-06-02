
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/BottomNav';

import { Container } from "@material-ui/core";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";

import Search from "./pages/Search";


function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     
     <div className="app">
     
      <Container>
        <Routes>
          <Route path="/" element={<Trending/>} exact />
          <Route path="/movies" element={<Movies/>} />
          {/* <Route path="/" component={Series} /> */}
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Container>
      
    </div>
    
    <SimpleBottomNavigation />
    </BrowserRouter>
    </>
 
  );
}

export default App;
