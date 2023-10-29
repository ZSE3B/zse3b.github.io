import './App.css';
import TurkishWeatherBlock from './TurkishWeatherBlock';
// import Weather from './api/Weather';
// import Search from './search';


function App() {

  //to do sposobu nr.2 ( Search )
  // const handleOnSearchChange = (searchData) => {
  //   console.log("kajdkjlakldjaskljdakljsdjklasdjklakljdjksld");
  // }
  

  return (
    <div className="App">
        {/* <Weather /> */}
        {/* <Search onSearchChange={handleOnSearchChange}/> */}
        <TurkishWeatherBlock />
    </div>
  );
}

export default App;