import './App.css';
import Nav from './header/header';
import Netflix from './netflixfront/front';
import Netflix1 from './netflixfront1/front';
import Footer from './footer/footer';
import Korean from './korean/korean-tv';
import Popular from './popular/popular-tv';
import Children from './child-tv/child';
import Excited from './new/new-tv';
import Bottom from './bottom/bottom-1';
import Series from './series-tv/series';



    


function App() {
  return (
    <>
    
    <Nav/>
    <Netflix/>
    <Netflix1/>
    <Popular/>
    <Excited/>
    <Series/>
    <Korean/>
    <Children/>
    <Bottom/>
    <Footer/>
  </>  
  );
}

export default App;
