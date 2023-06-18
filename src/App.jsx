import CatGif from './Assets/catgif.ico'
import Loading from './Assets/download.gif'
function App() {

  return (
    <>
      <div className="topContainer">
        <h1>30 DAYS OF REACT</h1>
        <h2>Day 20 {'>>'}</h2>
        <nav style={{color: 'white'}}>
          <ul>
            <li><a href="https://www.30daysofreact.com/">Home</a></li>
            <li><a href="https://www.30daysofreact.com/about">About</a></li>
            <li><a href="https://www.30daysofreact.com/dummy-data-generator">Dummy Data</a></li>
          </ul>
        </nav>
        <img src={CatGif} alt="cat-gif" />
        <h2>Cats Paradise</h2>
        <h2>There are <span></span> cat breeds</h2>
        <div>On average a cat can weight about <span></span> kg and lives <span></span> years.</div>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "70vh" }}>
        <img src={Loading} alt="loading" />
      </div>
      <div style={{backgroundColor: "cyan", color: "black", height: "40vh"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "100px", height: "20px"}}>
        <p>Copyright &copy; 2023 30 Days Of React</p>
        <p>Join <a href="https://github.com/Asabeneh/30-Days-Of-React" style={{color: "blue", fontSize: "18px"}}>30 Days of React challenge</a></p>
        <p>Designed and Built by <a href="https://www.linkedin.com/in/thealisiddiqui/" style={{color: "blue", fontSize: "18px"}}>Ali Siddiqui</a></p>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default App
