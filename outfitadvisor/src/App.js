import './App.css';
// import Weather from './api/Weather';
import Search from './search';


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log("kajdkjlakldjaskljdakljsdjklasdjklakljdjksld");
  }
  

  return (
    <div className="App">
        {/* <Weather /> */}
        <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;