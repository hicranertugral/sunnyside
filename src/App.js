import "./App.scss";
import "./Utility.scss";
import Navbar from "./components/Navbar.js";
// import HeroContent from "./components/HeroContent.js";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <Navbar />
        <div className="content">
          <h2>WE ARE CREATIVES</h2>
          <h1>↓</h1>
        </div>
      </header>
    </div>

    // <div className="App">
    // <header className="hero">
    //   <div className="navbar">
    //     <h3 className="logo">sunnyside</h3>

    //     <nav>
    //       <ul>
    //         <li>
    //           <a href="/#">About</a>
    //         </li>
    //         <li>
    //           <a href="/#">Services</a>
    //         </li>
    //         <li>
    //           <a href="/#">Projects</a>
    //         </li>
    //         <li>
    //           <a href="/#">Contact</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     </div>
    //   <div className="content">
    //     <h2>WE ARE CREATIVES</h2>
    //     <h1>↓</h1>
    //   </div>
    // </header>
    // </div>
  );
}

export default App;
