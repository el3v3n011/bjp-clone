import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Home from './components/Home';

function App(){
  return(
    <>
 

    <div className=" absolute w-screen">

      <Topbar/>
      <Navbar/>
    </div>

      <Home/>
  
    
    </>
  )
}
export default App;