import './App.css';
import Navbar from './components/Navbar';
import BodySection from './components/BodySection';
import about from './components/about';
import services from './components/services';
import contact from './components/contact';

const location = window.location.pathname;

let Component;

function App() {

  switch(location){
      case "/":
        Component = contact;
        break;
    
    case "/services":
      Component = services;
      break;

    case "/about":
      Component = about;
      break;

      default:
        break;
  }

  return (
    <>
      <Navbar/>
    <div className="App">
      <Component/>
      <BodySection/>
    </div>
    
    </>
  );
}

export default App;
