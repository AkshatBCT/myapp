import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TexthtmlForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About us"/>
      <div className="container">
        {/* <TexthtmlForm heading="Enter your text to analyze below"/> */}
        <About/>
      </div>
      
    </>
  );
}

export default App;
